import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  BLOCS,
  PARTIES,
  LEGACY_PARTY_ALIASES,
  getPartyById,
  resolvePartyId
} from '../src/data/parties.js';
import { TOPICS, getTopicById } from '../src/data/topics.js';
import { PROGRAMS, getPartyProgram, getProposal } from '../src/data/programs.js';
import { QUESTIONS } from '../src/data/questionnaire.js';
import {
  SPAIN_FISCAL_STATUS,
  TOPIC_OFFICIAL_CONTEXT,
  getTopicOfficialContext
} from '../src/data/macroContext.js';
import {
  PRIORITY_WEIGHTS,
  calculateCitizenAffinity,
  createRandomizedQuiz,
  getQuizProgressStats,
  buildPolicySimilarityReport,
  filterParties,
  buildTopicComparison,
  getQuestionStepStates,
  getNextQuestionStep,
  getPrevQuestionStep
} from '../src/engine/affinityEngine.js';

const EXPECTED_ORDER = [
  { id: 'frente_amplio', shortName: 'Frente Amplio', bloc: 'Izquierda', foundedYear: 2026 },
  { id: 'podemos', shortName: 'Podemos', bloc: 'Izquierda', foundedYear: 2014 },
  { id: 'psoe', shortName: 'PSOE', bloc: 'Centro-izquierda', foundedYear: 1879 },
  { id: 'd21', shortName: 'D21 · Cs', bloc: 'Centro', foundedYear: 2026 },
  { id: 'upyd', shortName: 'UPyD', bloc: 'Centro', foundedYear: 2007 },
  { id: 'pp', shortName: 'PP', bloc: 'Centro-derecha', foundedYear: 1976 },
  { id: 'ucd', shortName: 'UCD', bloc: 'Centro-derecha', foundedYear: 1977 },
  { id: 'vox', shortName: 'VOX', bloc: 'Derecha', foundedYear: 2013 },
  { id: 'salf', shortName: 'SALF', bloc: 'Derecha', foundedYear: 2024 },
  { id: 'nn', shortName: 'NN', bloc: 'Derecha', foundedYear: 2024 },
  { id: 'fe_jons', shortName: 'FE de las JONS', bloc: 'Derecha', foundedYear: 1933 },
  { id: 'pacma', shortName: 'PACMA', bloc: 'Otros', foundedYear: 2003 },
  { id: 'iustitia', shortName: 'Iustitia Europa', bloc: 'Otros', foundedYear: 2023 },
  { id: 'fo', shortName: 'FO', bloc: 'Otros', foundedYear: 2018 }
];

test('parties roster includes all 14 candidatures in the exact order and 6 blocs', () => {
  assert.equal(BLOCS.length, 6);
  assert.equal(PARTIES.length, 14);

  PARTIES.forEach((party, idx) => {
    const expected = EXPECTED_ORDER[idx];
    assert.equal(party.id, expected.id);
    assert.equal(party.shortName, expected.shortName);
    assert.equal(party.bloc, expected.bloc);
    assert.equal(party.foundedYear, expected.foundedYear);
    assert.ok(BLOCS.includes(party.bloc));
    assert.equal(getPartyById(party.id)?.fullName, party.fullName);
    assert.ok(party.summary.length > 40);
  });
});

test('programs dataset covers all 14 candidatures across all 12 separated topics (168 entries)', () => {
  assert.equal(TOPICS.length, 12);
  assert.ok(getTopicById('empleo'));
  assert.ok(getTopicById('pensiones'));
  assert.ok(getTopicById('inmigracion'));
  assert.ok(getTopicById('seguridad'));
  assert.equal(getTopicById('empleo_pensiones'), undefined);
  assert.equal(getTopicById('inmigracion_seguridad'), undefined);

  let entryCount = 0;
  for (const party of PARTIES) {
    const partyProgram = getPartyProgram(party.id);
    assert.ok(partyProgram, `Missing program object for ${party.id}`);

    for (const topic of TOPICS) {
      assert.ok(getTopicById(topic.id));
      const proposal = getProposal(party.id, topic.id);
      assert.ok(proposal, `Missing proposal for ${party.id} / ${topic.id}`);
      assert.ok(proposal.headline.trim().length > 10);
      assert.ok(proposal.summary.trim().length > 20);
      assert.ok(Array.isArray(proposal.measures));
      assert.ok(
        proposal.measures.length >= 3,
        `Expected >= 3 measures for ${party.id} / ${topic.id}`
      );
      assert.ok(proposal.sourceRef.trim().length > 5);
      entryCount += 1;
    }
  }

  assert.equal(entryCount, 168);
  assert.equal(Object.keys(PROGRAMS).length, 14);
});

test('questionnaire covers all 12 topics with 15 concrete options and full 14-party weight maps', () => {
  assert.equal(QUESTIONS.length, 15);

  const coveredTopics = new Set(QUESTIONS.map((q) => q.topicId));
  for (const topic of TOPICS) {
    assert.ok(coveredTopics.has(topic.id), `Topic ${topic.id} is not covered in questionnaire`);
  }

  const canonicalIds = new Set(PARTIES.map((p) => p.id));

  for (const question of QUESTIONS) {
    assert.ok(question.options.length >= 4 && question.options.length <= 6);
    for (const option of question.options) {
      assert.ok(option.title.trim().length > 5);
      assert.ok(option.description.trim().length > 15);
      assert.equal(
        Object.keys(option.partyWeights).length,
        14,
        `Expected exact 14-party weight map on ${question.id}/${option.id}`
      );
      for (const repId of option.representativeParties || []) {
        assert.ok(
          canonicalIds.has(repId),
          `Unknown representativeParties id '${repId}' on ${question.id}/${option.id}`
        );
      }
      for (const party of PARTIES) {
        const w = option.partyWeights[party.id];
        assert.equal(
          typeof w,
          'number',
          `Missing numeric weight for ${party.id} on ${question.id}/${option.id}`
        );
        assert.ok(w >= 0 && w <= 1, `Weight out of [0,1] for ${party.id} on ${option.id}`);
      }
    }
  }
});

test('calculateCitizenAffinity handles empty or skipped responses cleanly', () => {
  const emptyResult = calculateCitizenAffinity({}, {}, QUESTIONS, PARTIES);
  assert.equal(emptyResult.answeredCount, 0);
  assert.equal(emptyResult.totalWeight, 0);
  assert.equal(emptyResult.rankedParties.length, 14);
  assert.equal(emptyResult.rankedParties[0].scorePercentage, 0);

  const skippedResult = calculateCitizenAffinity(
    { 'q-vivienda-acceso': 'opt-viv-jovenes-seguridad' },
    { 'q-vivienda-acceso': 'skip' },
    QUESTIONS,
    PARTIES
  );
  assert.equal(skippedResult.answeredCount, 0);
  assert.equal(skippedResult.totalWeight, 0);
});

test('calculateCitizenAffinity ranks matching parties highest when choosing their concrete proposals', () => {
  // Select signature concrete measures of Coalición Democracia para el Siglo 21 (D21 · Cs)
  const d21Answers = {
    'q-economia-fiscalidad': 'opt-fisc-auditoria-eficiencia',
    'q-economia-modelo': 'opt-mod-libre-mercado-pyme',
    'q-vivienda-acceso': 'opt-viv-jovenes-seguridad',
    'q-regeneracion-corrupcion': 'opt-reg-auditoria-igae',
    'q-regeneracion-justicia-voto': 'opt-jud-jueces-listas-abiertas',
    'q-exterior-ue': 'opt-ext-europeismo-otan-2pct'
  };
  const d21Summary = calculateCitizenAffinity(d21Answers, {}, QUESTIONS, PARTIES);
  assert.equal(d21Summary.answeredCount, 6);
  assert.equal(d21Summary.rankedParties[0].partyId, 'd21');
  assert.equal(d21Summary.rankedParties[0].scorePercentage, 100);
  assert.equal(d21Summary.rankedParties[0].exactMatchesCount, 6);

  // Select signature concrete measures of Frente Obrero (FO)
  const foAnswers = {
    'q-economia-modelo': 'opt-mod-proteccionismo-industrial',
    'q-vivienda-acceso': 'opt-viv-veto-extranjeros-desalojo',
    'q-empleo-jornada': 'opt-emp-nacional-obrero',
    'q-educacion-modelo': 'opt-edu-estatal-unica-tecnica',
    'q-inmigracion-fronteras': 'opt-inm-expulsion-armada',
    'q-energia-campo': 'opt-ene-derogar-agenda2030',
    'q-exterior-ue': 'opt-ext-salida-ue-otan-soberanista'
  };
  const foSummary = calculateCitizenAffinity(foAnswers, {}, QUESTIONS, PARTIES);
  assert.equal(foSummary.rankedParties[0].partyId, 'fo');
  assert.ok(foSummary.rankedParties[0].scorePercentage >= 95);

  // Select signature concrete measures of Podemos
  const podemosAnswers = {
    'q-economia-fiscalidad': 'opt-fisc-gran-reforma',
    'q-economia-modelo': 'opt-mod-nacionalizacion-plan',
    'q-vivienda-acceso': 'opt-viv-intervencion-total',
    'q-empleo-jornada': 'opt-emp-32-horas',
    'q-sanidad-gestion': 'opt-san-100-publica-cartera',
    'q-educacion-modelo': 'opt-edu-publica-laica-unica',
    'q-inmigracion-fronteras': 'opt-inm-regularizacion-cie',
    'q-modelo-estado': 'opt-est-republica-federal-plurinacional',
    'q-exterior-ue': 'opt-ext-no-otan-pacifista'
  };
  const podemosSummary = calculateCitizenAffinity(podemosAnswers, {}, QUESTIONS, PARTIES);
  assert.equal(podemosSummary.rankedParties[0].partyId, 'podemos');
  assert.equal(podemosSummary.rankedParties[0].scorePercentage, 100);
  assert.equal(podemosSummary.rankedParties[0].exactMatchesCount, 9);
});

test('priority multipliers accurately shift weighted affinity scores', () => {
  const answers = {
    'q-energia-campo': 'opt-ene-animalista-macrogranjas', // PACMA = 1.0, PP = 0.0
    'q-vivienda-acceso': 'opt-viv-suelo-desalojo' // PP = 1.0, PACMA = 0.05
  };

  const highEcology = calculateCitizenAffinity(
    answers,
    { 'q-energia-campo': 'high', 'q-vivienda-acceso': 'low' },
    QUESTIONS,
    PARTIES
  );
  assert.equal(highEcology.totalWeight, PRIORITY_WEIGHTS.high + PRIORITY_WEIGHTS.low);
  const pacmaScore = highEcology.rankedParties.find((r) => r.partyId === 'pacma').scorePercentage;
  const ppScore = highEcology.rankedParties.find((r) => r.partyId === 'pp').scorePercentage;
  assert.ok(pacmaScore > ppScore);

  const highHousing = calculateCitizenAffinity(
    answers,
    { 'q-energia-campo': 'low', 'q-vivienda-acceso': 'high' },
    QUESTIONS,
    PARTIES
  );
  const pacmaScore2 = highHousing.rankedParties.find((r) => r.partyId === 'pacma').scorePercentage;
  const ppScore2 = highHousing.rankedParties.find((r) => r.partyId === 'pp').scorePercentage;
  assert.ok(ppScore2 > pacmaScore2);
});

test('filterParties and buildTopicComparison filter by bloc and search accents cleanly', () => {
  const derechaParties = filterParties(PARTIES, PROGRAMS, { bloc: 'Derecha' });
  assert.deepEqual(
    derechaParties.map((p) => p.id),
    ['vox', 'salf', 'nn', 'fe_jons']
  );

  const centroParties = filterParties(PARTIES, PROGRAMS, { bloc: 'Centro' });
  assert.deepEqual(
    centroParties.map((p) => p.id),
    ['d21', 'upyd']
  );

  const otrosParties = filterParties(PARTIES, PROGRAMS, { bloc: 'Otros' });
  assert.deepEqual(
    otrosParties.map((p) => p.id),
    ['pacma', 'iustitia', 'fo']
  );

  // Accent-insensitive search across programmatic measures (IGAE unique to unified D21 · Cs coalition)
  const igaeMatches = filterParties(PARTIES, PROGRAMS, { query: 'IGAE' });
  assert.deepEqual(
    igaeMatches.map((p) => p.id),
    ['d21']
  );

  const faMatches = filterParties(PARTIES, PROGRAMS, { query: 'tres horas diarias' });
  assert.ok(faMatches.some((p) => p.id === 'frente_amplio'));

  const macrocarcelMatches = filterParties(PARTIES, PROGRAMS, { query: 'macrocarcel' });
  assert.ok(macrocarcelMatches.some((p) => p.id === 'salf'));

  const comparison = buildTopicComparison('regeneracion_justicia', ['d21', 'iustitia', 'salf'], PARTIES, PROGRAMS);
  assert.equal(comparison.length, 3);
  assert.deepEqual(
    comparison.map((c) => c.party.id),
    ['d21', 'salf', 'iustitia']
  );
  assert.ok(comparison[2].proposal.headline.includes('Acción Popular'));
});

test('local PDF assets referenced by parties exist, are valid PDFs, and stay under 50 MB', () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = path.resolve(__dirname, '..');
  const maxBytes = 50 * 1024 * 1024;

  const partiesWithPdf = PARTIES.filter((p) => Boolean(p.localPdfPath));
  assert.equal(partiesWithPdf.length, 10);
  assert.ok(
    partiesWithPdf.every((p) => p.localPdfPath !== './pdfs/pce-programa-estrategico.pdf'),
    'UI dataset must surface only the shared 29N-2026 Frente Amplio PDF'
  );

  for (const party of partiesWithPdf) {
    assert.match(party.localPdfPath, /^\.\/pdfs\/[a-z0-9._-]+\.pdf$/i);
    const absPath = path.resolve(repoRoot, party.localPdfPath);
    assert.ok(fs.existsSync(absPath), `Missing local PDF for ${party.id}: ${absPath}`);

    const stat = fs.statSync(absPath);
    assert.ok(stat.size > 1024, `PDF too small for ${party.id}`);
    assert.ok(stat.size < maxBytes, `PDF exceeds 50 MB GitHub warning limit for ${party.id}`);

    const fd = fs.openSync(absPath, 'r');
    const buf = Buffer.alloc(5);
    fs.readSync(fd, buf, 0, 5, 0);
    fs.closeSync(fd);
    assert.equal(buf.toString('utf8'), '%PDF-', `Invalid PDF magic header for ${party.id}`);
  }
});

test('separated empleo, pensiones, inmigracion, and seguridad topics track independent scores', () => {
  const answers = {
    'q-empleo-jornada': 'opt-emp-375-dialogo',
    'q-pensiones-sistema': 'opt-pen-natalidad-65-nacional',
    'q-inmigracion-fronteras': 'opt-inm-arraigo-cooperacion',
    'q-seguridad-orden': 'opt-seg-multirreincidencia-equiparacion'
  };

  const summary = calculateCitizenAffinity(answers, {}, QUESTIONS, PARTIES);
  assert.equal(summary.answeredCount, 4);

  const psoeResult = summary.rankedParties.find((r) => r.partyId === 'psoe');
  assert.equal(psoeResult.topicScores.empleo, 100);
  assert.equal(psoeResult.topicScores.pensiones, 5);
  assert.equal(psoeResult.topicScores.inmigracion, 100);
  assert.equal(psoeResult.topicScores.seguridad, 35);

  const pensionComparison = buildTopicComparison('pensiones', ['psoe', 'pp', 'vox'], PARTIES, PROGRAMS);
  assert.equal(pensionComparison.length, 3);
  assert.ok(pensionComparison.every((item) => item.proposal && item.proposal.measures.length >= 3));

  const securityComparison = buildTopicComparison('seguridad', ['psoe', 'pp', 'salf'], PARTIES, PROGRAMS);
  assert.equal(securityComparison.length, 3);
  assert.ok(securityComparison.every((item) => item.proposal && item.proposal.measures.length >= 3));
});

test('macroeconomic financial status reference and party debt-management proposals are complete', () => {
  assert.equal(SPAIN_FISCAL_STATUS.metrics.length, 4);
  assert.ok(SPAIN_FISCAL_STATUS.sourcesNote.includes('Banco de España'));
  assert.ok(SPAIN_FISCAL_STATUS.sourcesNote.includes('AIReF'));

  assert.equal(Object.keys(TOPIC_OFFICIAL_CONTEXT).length, TOPICS.length);
  for (const topic of TOPICS) {
    const context = getTopicOfficialContext(topic.id);
    assert.ok(context, `Missing official context for topic ${topic.id}`);
    assert.equal(context.topicId, topic.id);
    assert.ok(context.title.trim().length > 10, `Missing title for ${topic.id}`);
    assert.ok(context.subtitle.trim().length > 20, `Missing subtitle for ${topic.id}`);
    assert.ok(context.updatedLabel.trim().length > 5, `Missing updatedLabel for ${topic.id}`);
    assert.ok(context.sourcesNote.startsWith('Fuentes:'), `Expected Fuentes note for ${topic.id}`);
    assert.equal(context.metrics.length, 4, `Expected 4 metrics for ${topic.id}`);
    for (const metric of context.metrics) {
      assert.ok(metric.id.trim().length > 1);
      assert.ok(metric.label.trim().length > 2);
      assert.ok(metric.value.trim().length > 2);
      assert.ok(metric.detail.trim().length > 15);
    }
  }
  assert.equal(getTopicOfficialContext('nonexistent-topic').topicId, 'economia');

  for (const party of PARTIES) {
    const econ = getProposal(party.id, 'economia');
    assert.ok(econ, `Missing economia entry for ${party.id}`);
    const combinedText = `${econ.summary} ${econ.measures.join(' ')}`.toLowerCase();
    assert.ok(
      /deuda|déficit|endeudamiento|gasto público|estabilidad/.test(combinedText),
      `Expected explicit debt/deficit management reference in ${party.id} economia entry`
    );
  }
});

test('Frente Amplio and 2026 program dataset accurately reflect verified 29N-2026 proposals', () => {
  const fa = getPartyById('frente_amplio');
  assert.ok(fa);
  assert.ok(fa.leader.includes('Ada Colau'));
  assert.ok(fa.leader.includes('Antonio Maíllo'));
  assert.ok(fa.leader.includes('Enrique Santiago'));
  assert.equal(fa.localPdfPath, './pdfs/sumar-frente-amplio-2026.pdf');

  const faHousing = getProposal('frente_amplio', 'vivienda');
  assert.ok(faHousing.measures.join(' ').includes('25%'));
  assert.ok(faHousing.measures.join(' ').includes('1,5 millones'));

  const faPensions = getProposal('frente_amplio', 'pensiones');
  assert.ok(faPensions.measures.join(' ').includes('200 euros'));

  // Ensure stale 2023 Sumar proposal was removed from Frente Amplio
  const faEcon = getProposal('frente_amplio', 'economia');
  assert.ok(!faEcon.measures.join(' ').includes('herencia universal de 20.000'));

  // Choosing Frente Amplio 2026 concrete measures yields 100% affinity
  const faAnswers = {
    'q-economia-deuda': 'opt-deu-flexibilizar-reglas-verdes',
    'q-vivienda-acceso': 'opt-viv-intervencion-total',
    'q-pensiones-sistema': 'opt-pen-65-pge-minimas',
    'q-regeneracion-corrupcion': 'opt-reg-puertas-giratorias-medios',
    'q-sanidad-gestion': 'opt-san-100-publica-cartera',
    'q-inmigracion-fronteras': 'opt-inm-regularizacion-cie',
    'q-modelo-estado': 'opt-est-republica-federal-plurinacional',
    'q-energia-campo': 'opt-ene-cierre-nuclear-pacto-verde',
    'q-exterior-ue': 'opt-ext-europa-social-sin-rearme'
  };
  const faSummary = calculateCitizenAffinity(faAnswers, {}, QUESTIONS, PARTIES);
  const faRank = faSummary.rankedParties.find((r) => r.partyId === 'frente_amplio');
  assert.equal(faRank.scorePercentage, 100);
  assert.equal(faRank.exactMatchesCount, 9);
});

test('PDF audit regressions are fixed across programs and questionnaire weights', () => {
  // 1. SALF: 60 días cirugía (not 90), IBI & 35% without foreign-fund ban, 2% <45 account & sobre naranja
  const salfSanidad = getProposal('salf', 'sanidad');
  const salfSanidadText = `${salfSanidad.headline} ${salfSanidad.summary} ${salfSanidad.measures.join(' ')}`;
  assert.ok(salfSanidadText.includes('60 días'));
  assert.ok(!salfSanidadText.includes('90 días'));

  const salfVivienda = getProposal('salf', 'vivienda');
  const salfViviendaText = `${salfVivienda.headline} ${salfVivienda.summary} ${salfVivienda.measures.join(' ')}`;
  assert.ok(salfViviendaText.includes('IBI'));
  assert.ok(salfViviendaText.includes('35%'));
  assert.ok(!/prohib.*fondos extranjeros/i.test(salfViviendaText));

  const salfPensiones = getProposal('salf', 'pensiones');
  const salfPensionesText = `${salfPensiones.summary} ${salfPensiones.measures.join(' ')}`;
  assert.ok(salfPensionesText.includes('2%'));
  assert.ok(salfPensionesText.toLowerCase().includes('sobre naranja'));

  // 2. Iustitia Europa: terapias naturales + 0%, Guardia Civil desmilitarización, distritos uninominales, UE & OTAN referendums
  const iustSanidad = getProposal('iustitia', 'sanidad');
  const iustSanidadText = `${iustSanidad.summary} ${iustSanidad.measures.join(' ')}`.toLowerCase();
  assert.ok(iustSanidadText.includes('terapias naturales'));
  assert.ok(iustSanidadText.includes('0%'));

  const iustSeg = getProposal('iustitia', 'seguridad');
  const iustSegText = `${iustSeg.summary} ${iustSeg.measures.join(' ')}`;
  assert.ok(iustSegText.includes('Guardia Civil'));
  assert.ok(iustSegText.toLowerCase().includes('desmilitarización'));

  const iustReg = getProposal('iustitia', 'regeneracion_justicia');
  assert.ok(`${iustReg.summary} ${iustReg.measures.join(' ')}`.toLowerCase().includes('distritos uninominales'));

  const iustExt = getProposal('iustitia', 'exterior_ue');
  const iustExtText = `${iustExt.headline} ${iustExt.summary} ${iustExt.measures.join(' ')}`;
  assert.ok(/UE|Unión Europea/.test(iustExtText));
  assert.ok(iustExtText.includes('OTAN'));

  const q8 = QUESTIONS.find((q) => q.id === 'q-regeneracion-justicia-voto');
  const propOpt = q8.options.find((o) => o.id === 'opt-jud-proporcionalidad-pura');
  assert.ok(propOpt.partyWeights.iustitia <= 0.2);

  // 3. Frente Obrero & PSOE: simétricas (not abolishing 17 parliaments), ETTs & RD 17/1977 (no working-hours cut), PSOE 2035 nuclear closure
  const foEstado = getProposal('fo', 'modelo_estado');
  const foEstadoText = `${foEstado.summary} ${foEstado.measures.join(' ')}`.toLowerCase();
  assert.ok(foEstadoText.includes('simétricas'));
  assert.ok(!foEstadoText.includes('abolición total de parlamentos'));

  const foEmpleo = getProposal('fo', 'empleo');
  const foEmpleoText = `${foEmpleo.summary} ${foEmpleo.measures.join(' ')}`;
  assert.ok(foEmpleoText.includes('ETTs'));
  assert.ok(foEmpleoText.includes('17/1977'));
  assert.ok(!/reduc.*jornada/i.test(foEmpleoText));

  const psoeEnergia = getProposal('psoe', 'energia_campo');
  const psoeEnergiaText = `${psoeEnergia.summary} ${psoeEnergia.measures.join(' ')}`;
  assert.ok(psoeEnergiaText.includes('2035'));
  assert.ok(!/Consejo de Seguridad Nuclear|\bCSN\b/i.test(psoeEnergiaText));

  // 4. VOX: no unsubstantiated Patrimonio/Sucesiones, cheque escolar, autorización parental, OTAN or Iberosfera
  const voxEcon = getProposal('vox', 'economia');
  const voxEconText = `${voxEcon.summary} ${voxEcon.measures.join(' ')}`;
  assert.ok(!/Patrimonio|Sucesiones/i.test(voxEconText));

  const voxEdu = getProposal('vox', 'educacion');
  const voxEduText = `${voxEdu.summary} ${voxEdu.measures.join(' ')}`.toLowerCase();
  assert.ok(!voxEduText.includes('cheque escolar'));
  assert.ok(!voxEduText.includes('autorización parental'));

  const voxExt = getProposal('vox', 'exterior_ue');
  const voxExtText = `${voxExt.summary} ${voxExt.measures.join(' ')}`;
  assert.ok(!/\bOTAN\b|Iberosfera/i.test(voxExtText));
});

test('single-screen stepper helpers track answered, skipped, and boundary transitions cleanly', () => {
  const answers = {
    [QUESTIONS[0].id]: QUESTIONS[0].options[0].id,
    [QUESTIONS[2].id]: QUESTIONS[2].options[0].id
  };
  const priorities = {
    [QUESTIONS[1].id]: 'skip',
    [QUESTIONS[2].id]: 'skip'
  };

  const steps = getQuestionStepStates(QUESTIONS, answers, priorities, 1);
  assert.equal(steps.length, QUESTIONS.length);
  assert.equal(steps[0].status, 'answered');
  assert.equal(steps[0].isCurrent, false);
  assert.equal(steps[1].status, 'skipped');
  assert.equal(steps[1].isCurrent, true);
  assert.equal(steps[2].status, 'skipped');
  assert.equal(steps[3].status, 'pending');

  assert.deepEqual(getNextQuestionStep(0, QUESTIONS.length), {
    quizCurrentIndex: 1,
    quizViewMode: 'question'
  });
  assert.deepEqual(getNextQuestionStep(QUESTIONS.length - 1, QUESTIONS.length), {
    quizCurrentIndex: QUESTIONS.length - 1,
    quizViewMode: 'results'
  });
  assert.deepEqual(getPrevQuestionStep(0), {
    quizCurrentIndex: 0,
    quizViewMode: 'question'
  });
  assert.deepEqual(getPrevQuestionStep(5), {
    quizCurrentIndex: 4,
    quizViewMode: 'question'
  });
});

function createSeededRng(seed = 42) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

test('createRandomizedQuiz shuffles questions and options immutably without altering affinity scoring', () => {
  const originalQuestionIds = QUESTIONS.map((q) => q.id);
  const originalOptionIdsByQ = Object.fromEntries(
    QUESTIONS.map((q) => [q.id, q.options.map((o) => o.id)])
  );

  const randomized = createRandomizedQuiz(QUESTIONS, { rng: createSeededRng(2026) });
  assert.equal(randomized.length, QUESTIONS.length);

  // Canonical QUESTIONS and nested options arrays stay untouched
  assert.deepEqual(
    QUESTIONS.map((q) => q.id),
    originalQuestionIds
  );
  for (const q of QUESTIONS) {
    assert.deepEqual(
      q.options.map((o) => o.id),
      originalOptionIdsByQ[q.id]
    );
  }

  // Same full set of questions and options, reordered deterministically
  assert.notDeepEqual(
    randomized.map((q) => q.id),
    originalQuestionIds
  );
  assert.deepEqual(
    [...randomized.map((q) => q.id)].sort(),
    [...originalQuestionIds].sort()
  );

  let anyOptionOrderChanged = false;
  for (const rq of randomized) {
    const origOptIds = originalOptionIdsByQ[rq.id];
    const randOptIds = rq.options.map((o) => o.id);
    assert.deepEqual([...randOptIds].sort(), [...origOptIds].sort());
    if (randOptIds.some((id, idx) => id !== origOptIds[idx])) {
      anyOptionOrderChanged = true;
    }
  }
  assert.ok(anyOptionOrderChanged, 'Expected option orders to be shuffled');

  // shuffleOptions: false preserves each question's option order while shuffling questions
  const questionsOnlyShuffled = createRandomizedQuiz(QUESTIONS, {
    shuffleOptions: false,
    rng: createSeededRng(99)
  });
  assert.notDeepEqual(
    questionsOnlyShuffled.map((q) => q.id),
    originalQuestionIds
  );
  for (const rq of questionsOnlyShuffled) {
    assert.deepEqual(
      rq.options.map((o) => o.id),
      originalOptionIdsByQ[rq.id]
    );
  }

  // Scoring invariance: canonical order vs randomized order produce identical party rankings
  const sampleAnswers = {
    'q-economia-fiscalidad': 'opt-fisc-auditoria-eficiencia',
    'q-vivienda-acceso': 'opt-viv-zonas-tensionadas-ico',
    'q-sanidad-gestion': 'opt-san-100-publica-cartera',
    'q-seguridad-orden': 'opt-seg-multirreincidencia-equiparacion',
    'q-exterior-ue': 'opt-ext-europeismo-otan-2pct'
  };
  const samplePriorities = {
    'q-vivienda-acceso': 'high',
    'q-seguridad-orden': 'low'
  };

  const canonicalSummary = calculateCitizenAffinity(sampleAnswers, samplePriorities, QUESTIONS, PARTIES);
  const randomizedSummary = calculateCitizenAffinity(sampleAnswers, samplePriorities, randomized, PARTIES);
  const pickInvariantScores = (summary) =>
    summary.rankedParties.map(({ partyId, scorePercentage, exactMatchesCount, topicScores }) => ({
      partyId,
      scorePercentage,
      exactMatchesCount,
      topicScores
    }));
  assert.deepEqual(pickInvariantScores(randomizedSummary), pickInvariantScores(canonicalSummary));
});

test('getQuizProgressStats accurately tracks answered, skipped, pending, and completion percentage', () => {
  const emptyStats = getQuizProgressStats(QUESTIONS, {}, {});
  assert.deepEqual(emptyStats, {
    total: 15,
    answered: 0,
    skipped: 0,
    pending: 15,
    resolved: 0,
    completionPercent: 0
  });

  const answers = {
    [QUESTIONS[0].id]: QUESTIONS[0].options[0].id,
    [QUESTIONS[1].id]: QUESTIONS[1].options[0].id,
    [QUESTIONS[2].id]: QUESTIONS[2].options[0].id
  };
  // Question 2 was answered, then marked 'skip'
  const priorities = {
    [QUESTIONS[2].id]: 'skip',
    [QUESTIONS[3].id]: 'skip'
  };

  const partialStats = getQuizProgressStats(QUESTIONS, answers, priorities);
  assert.deepEqual(partialStats, {
    total: 15,
    answered: 2,
    skipped: 2,
    pending: 11,
    resolved: 4,
    completionPercent: 27
  });
});

test('buildPolicySimilarityReport handles empty summaries and builds accurate per-topic and per-party insights', () => {
  const emptySummary = calculateCitizenAffinity({}, {}, QUESTIONS, PARTIES);
  const emptyReport = buildPolicySimilarityReport(emptySummary, TOPICS, PARTIES);
  assert.deepEqual(emptyReport, {
    byTopic: [],
    byParty: [],
    summaryMetrics: {
      answeredTopicsCount: 0,
      distinctLeadingPartiesCount: 0,
      highPriorityTopics: []
    }
  });

  // Mixed answers: conflicting multi-question 'economia' (<70% max), progressive sanidad/energia,
  // strict seguridad/vivienda, plus high-priority on sanidad and economia
  const mixedAnswers = {
    'q-economia-fiscalidad': 'opt-fisc-gran-reforma', // left-wing
    'q-economia-modelo': 'opt-mod-libre-mercado-pyme', // liberal/right
    'q-vivienda-acceso': 'opt-viv-suelo-desalojo', // PP/VOX
    'q-sanidad-gestion': 'opt-san-100-publica-cartera', // Frente Amplio/Sumar/IU/Podemos/PACMA
    'q-seguridad-orden': 'opt-seg-macrocarcel-armada-defensa' // VOX/SALF/FE/NN/FO
  };
  const mixedPriorities = {
    'q-sanidad-gestion': 'high'
  };

  const summary = calculateCitizenAffinity(mixedAnswers, mixedPriorities, QUESTIONS, PARTIES);
  const report = buildPolicySimilarityReport(summary, TOPICS, PARTIES);

  assert.equal(report.summaryMetrics.answeredTopicsCount, 4);
  assert.ok(report.summaryMetrics.distinctLeadingPartiesCount >= 2);
  assert.equal(report.summaryMetrics.highPriorityTopics.length, 1);
  assert.equal(report.summaryMetrics.highPriorityTopics[0].topicId, 'sanidad');

  // High-priority topic ('sanidad') sorts first ahead of canonical topic order
  assert.equal(report.byTopic[0].topicId, 'sanidad');
  assert.equal(report.byTopic[0].highestPriority, 'high');
  assert.ok(
    report.byTopic[0].topMatches.some((m) => m.partyId === 'frente_amplio'),
    'Expected Frente Amplio among top Sanidad matches'
  );

  // Conflicting multi-question 'economia' topic still reports topMatches despite lower max score
  const econRow = report.byTopic.find((t) => t.topicId === 'economia');
  assert.ok(econRow);
  assert.equal(econRow.questionCount, 2);
  assert.ok(econRow.topScore < 75, `Expected conflicting economia topScore < 75, got ${econRow.topScore}`);
  assert.ok(econRow.topMatches.length > 0, 'Expected non-empty topMatches for mixed economia');

  // Vivienda should include PP or VOX; Seguridad should include VOX or SALF
  const vivRow = report.byTopic.find((t) => t.topicId === 'vivienda');
  assert.ok(vivRow.topMatches.some((m) => m.partyId === 'pp' || m.partyId === 'vox'));
  const segRow = report.byTopic.find((t) => t.topicId === 'seguridad');
  assert.ok(segRow.topMatches.some((m) => m.partyId === 'vox' || m.partyId === 'salf'));

  // additionalTiedCount tracks extra qualifying matches beyond maxPartiesPerTopic
  const tightCapReport = buildPolicySimilarityReport(summary, TOPICS, PARTIES, {
    maxPartiesPerTopic: 2
  });
  const tightSanidad = tightCapReport.byTopic.find((t) => t.topicId === 'sanidad');
  assert.equal(tightSanidad.topMatches.length, 2);
  assert.ok(tightSanidad.additionalTiedCount >= 1);

  // byParty splits strongTopics (>= 75) and weakTopics (< 50)
  assert.equal(report.byParty.length, 3);
  for (const partyProfile of report.byParty) {
    assert.ok(partyProfile.strongTopics.every((t) => t.score >= 50));
    assert.ok(partyProfile.weakTopics.every((t) => t.score < 50));
  }

  // blocFilter restricts both byParty and byTopic[].topMatches to that bloc
  const leftReport = buildPolicySimilarityReport(summary, TOPICS, PARTIES, {
    blocFilter: 'Izquierda'
  });
  assert.ok(leftReport.byParty.every((p) => p.bloc === 'Izquierda'));
  for (const topicItem of leftReport.byTopic) {
    assert.ok(topicItem.topMatches.every((m) => m.bloc === 'Izquierda'));
  }
});

test('compressed coalitions expose structured coalition metadata, legacy alias resolution, and searchable member names', () => {
  const fa = getPartyById('frente_amplio');
  assert.ok(fa?.coalition);
  assert.equal(fa.coalition.label, 'Candidatura conjunta 29N');
  assert.ok(fa.coalition.shortTag.includes('Sumar'));
  assert.ok(fa.coalition.shortTag.includes('IU'));
  assert.ok(fa.coalition.shortTag.includes('PCE'));
  assert.equal(fa.coalition.members.length, 5);

  const d21 = getPartyById('d21');
  assert.ok(d21?.coalition);
  assert.equal(d21.bloc, 'Centro');
  assert.equal(d21.shortName, 'D21 · Cs');
  assert.ok(d21.coalition.shortTag.includes('Ciudadanos (Cs)'));
  assert.ok(d21.coalition.shortTag.includes('UCIN'));
  assert.equal(d21.coalition.members.length, 3);

  for (const party of PARTIES) {
    if (party.id !== 'frente_amplio' && party.id !== 'd21') {
      assert.equal(party.coalition, undefined);
    }
  }

  // Strict lookup returns undefined for absorbed IDs, while resolvePartyId maps legacy hashes
  assert.equal(getPartyById('sumar'), undefined);
  assert.equal(getPartyById('iu'), undefined);
  assert.equal(getPartyById('pce'), undefined);
  assert.equal(getPartyById('cs'), undefined);

  assert.equal(LEGACY_PARTY_ALIASES.pce, 'frente_amplio');
  assert.equal(resolvePartyId('sumar'), 'frente_amplio');
  assert.equal(resolvePartyId('iu'), 'frente_amplio');
  assert.equal(resolvePartyId('pce'), 'frente_amplio');
  assert.equal(resolvePartyId('cs'), 'd21');
  assert.equal(resolvePartyId('psoe'), 'psoe');

  // Search by constituent party names and acronyms returns parent coalitions
  for (const query of ['PCE', 'IU', 'Izquierda Unida', 'Sumar', 'Más Madrid', 'Comuns']) {
    const matches = filterParties(PARTIES, PROGRAMS, { query });
    assert.ok(
      matches.some((p) => p.id === 'frente_amplio'),
      `Expected Frente Amplio to match query "${query}"`
    );
  }

  for (const query of ['Ciudadanos', 'Cs', 'UCIN', 'Democracia 21']) {
    const matches = filterParties(PARTIES, PROGRAMS, { query });
    assert.ok(
      matches.some((p) => p.id === 'd21'),
      `Expected D21 · Cs to match query "${query}"`
    );
  }
});

test('buildPolicySimilarityReport propagates coalition tags onto coalition matches and null onto standalone parties', () => {
  const answers = {
    'q-sanidad-gestion': 'opt-san-100-publica-cartera',
    'q-regeneracion-corrupcion': 'opt-reg-auditoria-igae'
  };
  const summary = calculateCitizenAffinity(answers, {}, QUESTIONS, PARTIES);
  const report = buildPolicySimilarityReport(summary, TOPICS, PARTIES);

  const faPartyRow = report.byParty.find((p) => p.partyId === 'frente_amplio');
  assert.ok(faPartyRow?.coalitionShortTag);
  assert.equal(faPartyRow.coalitionCompactLabel, 'Sumar · IU · PCE +2');

  const d21PartyRow = report.byParty.find((p) => p.partyId === 'd21');
  if (d21PartyRow) {
    assert.ok(d21PartyRow.coalitionShortTag.includes('Ciudadanos (Cs)'));
    assert.equal(d21PartyRow.coalitionCompactLabel, 'D21 · Cs · UCIN');
  }

  const sanidadTopic = report.byTopic.find((t) => t.topicId === 'sanidad');
  const faMatch = sanidadTopic.topMatches.find((m) => m.partyId === 'frente_amplio');
  const podemosMatch = sanidadTopic.topMatches.find((m) => m.partyId === 'podemos');
  assert.ok(faMatch?.coalitionShortTag);
  assert.equal(podemosMatch?.coalitionShortTag, null);
  assert.equal(podemosMatch?.coalitionCompactLabel, null);

  const regTopic = report.byTopic.find((t) => t.topicId === 'regeneracion_justicia');
  const d21Match = regTopic.topMatches.find((m) => m.partyId === 'd21');
  assert.ok(d21Match?.coalitionShortTag);
  assert.equal(d21Match.coalitionCompactLabel, 'D21 · Cs · UCIN');
});
