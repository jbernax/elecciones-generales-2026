import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { BLOCS, PARTIES, getPartyById } from '../src/data/parties.js';
import { TOPICS, getTopicById } from '../src/data/topics.js';
import { PROGRAMS, getPartyProgram, getProposal } from '../src/data/programs.js';
import { QUESTIONS } from '../src/data/questionnaire.js';
import {
  PRIORITY_WEIGHTS,
  calculateCitizenAffinity,
  filterParties,
  buildTopicComparison
} from '../src/engine/affinityEngine.js';

const EXPECTED_ORDER = [
  { id: 'sumar', shortName: 'Sumar', bloc: 'Izquierda', foundedYear: 2022 },
  { id: 'podemos', shortName: 'Podemos', bloc: 'Izquierda', foundedYear: 2014 },
  { id: 'iu', shortName: 'IU', bloc: 'Izquierda', foundedYear: 1986 },
  { id: 'pce', shortName: 'PCE', bloc: 'Izquierda', foundedYear: 1921 },
  { id: 'psoe', shortName: 'PSOE', bloc: 'Centro-izquierda', foundedYear: 1879 },
  { id: 'cs', shortName: 'Cs', bloc: 'Centro', foundedYear: 2006 },
  { id: 'upyd', shortName: 'UPyD', bloc: 'Centro', foundedYear: 2007 },
  { id: 'pp', shortName: 'PP', bloc: 'Centro-derecha', foundedYear: 1976 },
  { id: 'ucd', shortName: 'UCD', bloc: 'Centro-derecha', foundedYear: 1977 },
  { id: 'vox', shortName: 'VOX', bloc: 'Derecha', foundedYear: 2013 },
  { id: 'salf', shortName: 'SALF', bloc: 'Derecha', foundedYear: 2024 },
  { id: 'nn', shortName: 'NN', bloc: 'Derecha', foundedYear: 2024 },
  { id: 'fe_jons', shortName: 'FE de las JONS', bloc: 'Derecha', foundedYear: 1933 },
  { id: 'pacma', shortName: 'PACMA', bloc: 'Otros', foundedYear: 2003 },
  { id: 'd21', shortName: 'D21', bloc: 'Otros', foundedYear: 2026 },
  { id: 'iustitia', shortName: 'Iustitia Europa', bloc: 'Otros', foundedYear: 2023 },
  { id: 'fo', shortName: 'FO', bloc: 'Otros', foundedYear: 2018 }
];

test('parties roster includes all 17 formations in the exact order and 6 blocs', () => {
  assert.equal(BLOCS.length, 6);
  assert.equal(PARTIES.length, 17);

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

test('programs dataset covers all 17 parties across all 10 topics (170 entries)', () => {
  assert.equal(TOPICS.length, 10);

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

  assert.equal(entryCount, 170);
  assert.equal(Object.keys(PROGRAMS).length, 17);
});

test('questionnaire covers all 10 topics with concrete options and full 17-party weight maps', () => {
  assert.equal(QUESTIONS.length, 12);

  const coveredTopics = new Set(QUESTIONS.map((q) => q.topicId));
  for (const topic of TOPICS) {
    assert.ok(coveredTopics.has(topic.id), `Topic ${topic.id} is not covered in questionnaire`);
  }

  for (const question of QUESTIONS) {
    assert.ok(question.options.length >= 4 && question.options.length <= 6);
    for (const option of question.options) {
      assert.ok(option.title.trim().length > 5);
      assert.ok(option.description.trim().length > 15);
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
  assert.equal(emptyResult.rankedParties.length, 17);
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
  // Select signature concrete measures of Democracia 21 (D21)
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

  // Select signature concrete measures of Izquierda Unida (IU)
  const iuAnswers = {
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
  const iuSummary = calculateCitizenAffinity(iuAnswers, {}, QUESTIONS, PARTIES);
  assert.ok(['iu', 'pce', 'podemos'].includes(iuSummary.rankedParties[0].partyId));
  assert.equal(iuSummary.rankedParties.find((r) => r.partyId === 'iu').scorePercentage, 100);
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

  // Accent-insensitive search across programmatic measures
  const igaeMatches = filterParties(PARTIES, PROGRAMS, { query: 'IGAE' });
  assert.equal(igaeMatches.length, 1);
  assert.equal(igaeMatches[0].id, 'd21');

  const macrocarcelMatches = filterParties(PARTIES, PROGRAMS, { query: 'macrocarcel' });
  assert.ok(macrocarcelMatches.some((p) => p.id === 'salf'));

  const comparison = buildTopicComparison('regeneracion_justicia', ['d21', 'iustitia', 'salf'], PARTIES, PROGRAMS);
  assert.equal(comparison.length, 3);
  assert.deepEqual(
    comparison.map((c) => c.party.id),
    ['salf', 'd21', 'iustitia']
  );
  assert.ok(comparison[2].proposal.headline.includes('Acción Popular'));
});

test('local PDF assets referenced by parties exist, are valid PDFs, and stay under 50 MB', () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = path.resolve(__dirname, '..');
  const maxBytes = 50 * 1024 * 1024;

  const partiesWithPdf = PARTIES.filter((p) => Boolean(p.localPdfPath));
  assert.ok(partiesWithPdf.length >= 10);

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
