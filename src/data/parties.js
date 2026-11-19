/**
 * Ideological blocs and the 18 political formations covered in the
 * Elecciones Generales Espana 2026 (29N) reference dataset.
 */

export const BLOCS = [
  'Izquierda',
  'Centro-izquierda',
  'Centro',
  'Centro-derecha',
  'Derecha',
  'Otros'
];

export const PARTIES = [
  {
    id: 'frente_amplio',
    shortName: 'Frente Amplio',
    bloc: 'Izquierda',
    fullName: 'Frente Amplio (Sumar · IU · Más Madrid · Comuns)',
    ideology: 'Izquierda progresista, ecosocialista y federal',
    foundedYear: 2026,
    foundedLabel: 'coalición 2026',
    leader: 'Ada Colau',
    accentColor: '#b91c4c',
    status: 'En activo (coalición estatal 29N-2026 en 46 circunscripciones + alianzas territoriales)',
    summary:
      'Coalición electoral de 2026 que agrupa a Movimiento Sumar, Izquierda Unida, Más Madrid, Comuns y fuerzas aliadas. Propone 1,5 millones de viviendas públicas con el 1% del PIB anual, tope del alquiler al 25% de la renta, jornada de 32 horas, prestación universal de 200 €/mes por menor, tipo mínimo del 20% en Sociedades y una República Federal y Plurinacional.',
    documentTitle: 'Un programa como una casa — Programa Electoral Frente Amplio 29N-2026',
    officialWebsite: 'https://frenteamplio.info',
    programUrl: 'https://frenteamplio.info/pdf/ProgramaFrenteAmplio.pdf',
    localPdfPath: './pdfs/sumar-frente-amplio-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (151 páginas · 1,1 MB · Programa Electoral Frente Amplio 29N-2026)'
  },
  {
    id: 'sumar',
    shortName: 'Sumar',
    bloc: 'Izquierda',
    fullName: 'Movimiento Sumar (integrado en Frente Amplio)',
    ideology: 'Izquierda progresista plural',
    foundedYear: 2022,
    foundedLabel: 'desde 2022',
    leader: 'Dirección colegiada / Integrado en Frente Amplio (Ada Colau)',
    accentColor: '#a21caf',
    status: 'En activo (concurre al 29N-2026 integrado en la coalición Frente Amplio)',
    summary:
      'Partido progresista plurinacional cofundador de la coalición Frente Amplio para el 29N-2026. Centra su aportación programática en la reducción inmediata de jornada a 37,5 horas rumbo a las 32 horas, la democracia económica en las empresas, la prestación universal por crianza de 200 €/mes y el parque público de 1,5 millones de viviendas.',
    documentTitle: 'Un programa como una casa (Programa Electoral Frente Amplio 29N-2026)',
    officialWebsite: 'https://movimientosumar.es',
    programUrl: 'https://frenteamplio.info/pdf/ProgramaFrenteAmplio.pdf',
    localPdfPath: './pdfs/sumar-frente-amplio-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (151 páginas · 1,1 MB · Programa compartido de Frente Amplio 2026)'
  },
  {
    id: 'podemos',
    shortName: 'Podemos',
    bloc: 'Izquierda',
    fullName: 'Podemos',
    ideology: 'Izquierda transformadora y republicana',
    foundedYear: 2014,
    foundedLabel: 'desde 2014',
    leader: 'Irene Montero / Ione Belarra',
    accentColor: '#5b247a',
    status: 'En activo (candidatura propia en 41 circunscripciones y confluencias territoriales en 29N-2026)',
    summary:
      'Partido de izquierda transformadora que concurre al 29N-2026 con un programa de 442 medidas: rebaja legal del 40% en los alquileres, jornada laboral de 30 horas semanales, SMI de 1.800 euros, banca pública estatal, tercera República y salida de la OTAN.',
    documentTitle: 'Así de básico: paz, casa y trabajo — Programa Electoral Podemos 29N-2026 (442 medidas)',
    officialWebsite: 'https://podemos.info',
    programUrl: 'https://podemos.info/programa/',
    localPdfPath: null,
    localPdfMeta: 'Programa oficial 29N-2026 (141 páginas · 442 medidas) publicado en el portal oficial podemos.info/programa/.'
  },
  {
    id: 'iu',
    shortName: 'IU',
    bloc: 'Izquierda',
    fullName: 'Izquierda Unida (integrada en Frente Amplio)',
    ideology: 'Izquierda comunista, federal y ecosocialista',
    foundedYear: 1986,
    foundedLabel: 'desde 1986',
    leader: 'Antonio Maíllo (encabeza 29 listas en Frente Amplio 2026)',
    accentColor: '#a61c1c',
    status: 'En activo (integrada en la coalición Frente Amplio 29N-2026)',
    summary:
      'Movimiento político y social federal, republicano y ecosocialista integrado en Frente Amplio para el 29N-2026. Impulsa dentro de la coalición la banca y energía públicas, la reforma fiscal sobre grandes fortunas y herencias, las 32 horas semanales, los 1,5 millones de viviendas públicas y el rechazo al gasto militar de la OTAN.',
    documentTitle: 'Un programa como una casa (Programa Electoral Frente Amplio / IU 29N-2026)',
    officialWebsite: 'https://izquierdaunida.org',
    programUrl: 'https://frenteamplio.info/pdf/ProgramaFrenteAmplio.pdf',
    localPdfPath: './pdfs/sumar-frente-amplio-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (151 páginas · 1,1 MB · Programa compartido de Frente Amplio 2026)'
  },
  {
    id: 'pce',
    shortName: 'PCE',
    bloc: 'Izquierda',
    fullName: 'Partido Comunista de España',
    ideology: 'Comunismo marxista',
    foundedYear: 1921,
    foundedLabel: 'desde 1921',
    leader: 'Enrique Santiago (candidato en Frente Amplio 2026)',
    accentColor: '#8b0000',
    status: 'En activo (partido orgánico integrado en IU y en la coalición Frente Amplio 29N-2026)',
    summary:
      'Partido marxista integrado orgánicamente en Izquierda Unida y concurrente en 2026 dentro de Frente Amplio. Su corpus estratégico propio defiende la planificación democrática de la economía, la nacionalización de sectores estratégicos, la República federal y solidaria y el antiimperialismo.',
    documentTitle: 'Programa Estratégico del Partido Comunista de España (febrero 2024)',
    officialWebsite: 'https://pce.es',
    programUrl: 'https://pce.es/media/documents/def._PROGRAMA_ESTRATEGICO_PCE.pdf',
    localPdfPath: './pdfs/pce-programa-estrategico.pdf',
    localPdfMeta: 'PDF local disponible (28 páginas · documento estratégico de febrero 2024; en el 29N-2026 concurre en Frente Amplio)'
  },
  {
    id: 'psoe',
    shortName: 'PSOE',
    bloc: 'Centro-izquierda',
    fullName: 'Partido Socialista Obrero Español',
    ideology: 'Socialdemocracia',
    foundedYear: 1879,
    foundedLabel: 'desde 1879',
    leader: 'Pedro Sánchez',
    accentColor: '#c8102e',
    status: 'En activo (candidatura estatal en las 52 circunscripciones y Senado de Progreso, 29N-2026)',
    summary:
      'Partido socialdemócrata y europeísta que defiende el blindaje constitucional de la vivienda, las pensiones y el aborto, la entidad pública CASA 47 (100.000 viviendas), préstamos TUCASA de 50.000 € sin intereses, jornada de 37,5 horas hacia las 35, Plan Sonríe dental y migración ordenada.',
    documentTitle: 'Programa Electoral PSOE 29N-2026: La fuerza de seguir avanzando',
    officialWebsite: 'https://www.psoe.es',
    programUrl: 'https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26.pdf',
    localPdfPath: './pdfs/psoe-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (114 páginas · 11,4 MB · Programa Electoral 29N-2026)'
  },
  {
    id: 'cs',
    shortName: 'Cs',
    bloc: 'Centro',
    fullName: 'Ciudadanos (en coalición Democracia para el Siglo 21)',
    ideology: 'Centro liberal',
    foundedYear: 2006,
    foundedLabel: 'desde 2006',
    leader: 'Carlos Pérez-Nievas (coalición Democracia para el Siglo 21)',
    accentColor: '#d95f02',
    status: 'En activo (concurre en coalición Democracia para el Siglo 21 en Madrid y Barcelona, 29N-2026)',
    summary:
      'Partido liberal y constitucionalista que regresa a las generales de 2026 en coalición con Democracia 21 y UCIN bajo el programa común «La España que merecemos»: limpieza clientelar, listas abiertas, CGPJ elegido por jueces, cero impuestos en primera vivienda a menores de 35 años y apoyo a pymes.',
    documentTitle: 'La España que merecemos (Programa coalición Democracia para el Siglo 21 · 29N)',
    officialWebsite: 'https://www.ciudadanos-cs.org',
    programUrl: 'https://mi.democracia21.es/docs/programa/programa-democracia21.pdf',
    localPdfPath: './pdfs/d21-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (108 páginas · 3,6 MB · Programa coalición Democracia para el Siglo 21 · 2026)'
  },
  {
    id: 'upyd',
    shortName: 'UPyD',
    bloc: 'Centro',
    fullName: 'Unión Progreso y Democracia',
    ideology: 'Centrismo no nacionalista',
    foundedYear: 2007,
    foundedLabel: 'desde 2007',
    leader: 'Cristiano Brown / Referencia programática histórica',
    accentColor: '#c2185b',
    status: 'Referencia programática histórica (actividad institucional extinguida en 2020)',
    summary:
      'Partido transversal creado para regenerar la democracia española, reformar la ley electoral hacia la proporcionalidad pura con listas abiertas, devolver al Estado central las competencias de Educación y Sanidad y suprimir duplicidades provinciales.',
    documentTitle: 'Corpus Programático de Unión Progreso y Democracia (Reforma del Estado y LOREG)',
    officialWebsite: 'https://es.wikipedia.org/wiki/Uni%C3%B3n_Progreso_y_Democracia',
    programUrl: 'https://es.wikipedia.org/wiki/Uni%C3%B3n_Progreso_y_Democracia',
    localPdfPath: null,
    localPdfMeta: 'Partido histórico sin candidatura ni PDF electoral oficial publicado en 2026.'
  },
  {
    id: 'pp',
    shortName: 'PP',
    bloc: 'Centro-derecha',
    fullName: 'Partido Popular',
    ideology: 'Centro-derecha liberal-conservadora',
    foundedYear: 1976,
    foundedLabel: 'desde 1976',
    leader: 'Alberto Núñez Feijóo',
    accentColor: '#00569e',
    status: 'En activo (candidatura estatal en las 52 circunscripciones, 29N-2026)',
    summary:
      'Partido de centro-derecha liberal-conservador. Su programa 29N-2026 propone deflactar el IRPF, eximir de IRPF el primer año a jóvenes de 18 a 35 años, IVA 0% en alimentos básicos, exención de IVA a autónomos <85.000 €, construir un millón de viviendas, desalojo judicial en 48 horas y prórroga nuclear.',
    documentTitle: 'La Reconstrucción Nacional: Programa Electoral Partido Popular 29N-2026',
    officialWebsite: 'https://www.pp.es',
    programUrl: 'https://www.pp.es/wp-content/uploads/2026/11/LA-RECONSTRUCCION-NACIONAL.pdf',
    localPdfPath: './pdfs/pp-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (82 páginas · 11,7 MB · Programa Electoral 29N-2026)'
  },
  {
    id: 'ucd',
    shortName: 'UCD',
    bloc: 'Centro-derecha',
    fullName: 'Unión de Centro Democrático',
    ideology: 'Centrismo liberal-democristiano',
    foundedYear: 1977,
    foundedLabel: 'desde 1977',
    leader: 'Adolfo Suárez (Referencia histórica 1977-1983)',
    accentColor: '#1b6d3e',
    status: 'Referencia histórica de la Transición (disuelta en 1983)',
    summary:
      'Coalición fundacional de la democracia constitucional española que articuló el consenso constitucional de 1978, la economía social de mercado, los Pactos de la Moncloa, la reforma fiscal moderna, el Estado autonómico y la homologación europea.',
    documentTitle: 'Programa Electoral UCD (1977-1979) y Pactos Constitucionales de la Transición',
    officialWebsite: 'https://es.wikipedia.org/wiki/Uni%C3%B3n_de_Centro_Democr%C3%A1tico_(Espa%C3%B1a)',
    programUrl: 'https://es.wikipedia.org/wiki/Uni%C3%B3n_de_Centro_Democr%C3%A1tico_(Espa%C3%B1a)',
    localPdfPath: null,
    localPdfMeta: 'Partido histórico disuelto en 1983; sin PDF oficial de elecciones de 2026.'
  },
  {
    id: 'vox',
    shortName: 'VOX',
    bloc: 'Derecha',
    fullName: 'Vox',
    ideology: 'Derecha nacional-conservadora',
    foundedYear: 2013,
    foundedLabel: 'desde 2013',
    leader: 'Santiago Abascal',
    accentColor: '#4a8f17',
    status: 'En activo (candidatura estatal en las 52 circunscripciones, 29N-2026)',
    summary:
      'Partido nacional-conservador que concurre al 29N-2026 con 115 medidas en 13 bloques: prioridad nacional, plan de remigración, militarización de fronteras en Ceuta y Melilla, regla de derogar tres normas por cada nueva, IVA 0% en primera vivienda nueva, cuota cero <SMI, prórroga nuclear y fin del Pacto Verde.',
    documentTitle: 'Programa Electoral VOX 29N-2026: Es sentido común (115 medidas)',
    officialWebsite: 'https://www.voxespana.es',
    programUrl: 'https://www.voxespana.es/wp-content/uploads/2026/11/Programa-completo-A5-1.pdf',
    localPdfPath: './pdfs/vox-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (66 páginas · 13,9 MB · Programa Electoral 29N-2026)'
  },
  {
    id: 'salf',
    shortName: 'SALF',
    bloc: 'Derecha',
    fullName: 'Se Acabó La Fiesta',
    ideology: 'Derecha populista y anticorrupción',
    foundedYear: 2024,
    foundedLabel: 'desde 2024',
    leader: 'Luis Alvise Pérez',
    accentColor: '#4a3525',
    status: 'En activo (candidatura en 46 circunscripciones al Congreso, 29N-2026)',
    summary:
      'Partido articulado en torno a un contrato electoral de 119 medidas y bloqueo íntegro de sueldo hasta junio de 2030: 0% IRPF hasta 35.000 €, cuota cero total y para siempre a autónomos, rebaja del 35% en primera vivienda y eliminación del IBI, blindaje constitucional de pensiones actuales con el IPC y cuenta individual del 2% (<45 años), supresión del Tribunal Constitucional y del Senado, expulsión de irregulares en 48h y topes sanitarios de 30 días especialista y 60 días cirugía.',
    documentTitle: 'Contrato Electoral SALF 29N-2026 (119 medidas en 10 bloques)',
    officialWebsite: 'https://seacabolafiesta.com',
    programUrl: 'https://www.seacabolafiesta.com/SALF_Contrato_Electoral_29N.pdf',
    localPdfPath: './pdfs/salf-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (40 páginas · 18,2 MB · Contrato Electoral 29N-2026)'
  },
  {
    id: 'nn',
    shortName: 'NN',
    bloc: 'Derecha',
    fullName: 'Núcleo Nacional',
    ideology: 'Ultranacionalismo identitario de derecha',
    foundedYear: 2024,
    foundedLabel: 'desde 2024',
    leader: 'Dirección colegiada (Asociación / Noviembre Nacional)',
    accentColor: '#262626',
    status: 'Organización extraparlamentaria (bajo medidas judiciales de cese cautelar en noviembre de 2026)',
    summary:
      'Movimiento ultranacionalista identitario surgido en 2024 con tesis etnonacionalistas, rechazo frontal a la inmigración, antiliberalismo económico de tercera posición y oposición al marco constitucional y supranacional actual.',
    documentTitle: 'Manifiesto Ideológico y Puntos Programáticos de Núcleo Nacional',
    officialWebsite: 'https://es.wikipedia.org/wiki/N%C3%BAcleo_Nacional',
    programUrl: 'https://es.wikipedia.org/wiki/N%C3%BAcleo_Nacional',
    localPdfPath: null,
    localPdfMeta: 'No dispone de programa electoral oficial en PDF publicado para el 29N-2026.'
  },
  {
    id: 'fe_jons',
    shortName: 'FE de las JONS',
    bloc: 'Derecha',
    fullName: 'Falange Española de las JONS',
    ideology: 'Nacionalsindicalismo',
    foundedYear: 1933,
    foundedLabel: 'desde 1933',
    leader: 'Norberto Pico',
    accentColor: '#7f1d1d',
    status: 'En activo (partido minoritario extraparlamentario en 29N-2026)',
    summary:
      'Partido nacionalsindicalista con programa 29N-2026 en 23 secciones: Instituto Nacional de la Vivienda con tope de alquiler al 25% e hipotecas ICO al 0% condonables por hijo, prohibición del despido improcedente y de las ETT y la jornada partida, Plan Nacional de Remigración en 3 fases, salida de Schengen e impuesto del 50% a remesas, abolición de la Monarquía y las CCAA y salida del euro, la OTAN y la UE.',
    documentTitle: 'Programa Electoral FE de las JONS — Elecciones Generales 29N-2026',
    officialWebsite: 'https://falange.es',
    programUrl:
      'https://falange.es/wp-content/uploads/2026/11/FEDELASJONS_ProgramaElectoral_29NGenerales2026.pdf',
    localPdfPath: './pdfs/fe-jons-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (60 páginas · 18,3 MB · Programa Electoral 29N-2026)'
  },
  {
    id: 'pacma',
    shortName: 'PACMA',
    bloc: 'Otros',
    fullName: 'Partido Animalista Con el Medio Ambiente',
    ideology: 'Animalismo y ecologismo',
    foundedYear: 2003,
    foundedLabel: 'desde 2003',
    leader: 'Javier Luna',
    accentColor: '#15803d',
    status: 'En activo (candidatura en 30 circunscripciones al Congreso, 29N-2026)',
    summary:
      'Partido animalista, ecologista y social que concurre al 29N-2026 proponiendo abolir la tauromaquia y la caza, prohibir las macrogranjas, bajar el IVA veterinario al 4%, blindar las pensiones públicas en la Constitución, fomentar la dieta vegetal y ampliar la vivienda social.',
    documentTitle: 'Programa Electoral PACMA Elecciones Generales 29N-2026',
    officialWebsite: 'https://pacma.es',
    programUrl: 'https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf',
    localPdfPath: './pdfs/pacma-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (82 páginas · 1,1 MB · Programa Electoral 29N-2026)'
  },
  {
    id: 'd21',
    shortName: 'D21',
    bloc: 'Otros',
    fullName: 'Democracia 21',
    ideology: 'Liberal y regeneracionista',
    foundedYear: 2026,
    foundedLabel: 'desde 2026',
    leader: 'Miriam González Durántez',
    accentColor: '#0f4c81',
    status: 'En activo (coalición Democracia para el Siglo 21 con Cs y UCIN en Madrid y Barcelona, 29N-2026)',
    summary:
      'Partido liberal y regeneracionista que encabeza la coalición Democracia para el Siglo 21 en 2026. Propone recortar el 90% de asesores, blindar la IGAE con IA, cesar al Gobierno tras prórrogas presupuestarias, Asamblea Ciudadana por las Pensiones, cero impuestos en vivienda <35 años y 10.000 M€ europeos para vivienda.',
    documentTitle: 'La España que merecemos: Programa Democracia para el Siglo 21 (29N-2026)',
    officialWebsite: 'https://democracia21.es',
    programUrl: 'https://mi.democracia21.es/docs/programa/programa-democracia21.pdf',
    localPdfPath: './pdfs/d21-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (108 páginas · 3,6 MB · Programa 29N-2026)'
  },
  {
    id: 'iustitia',
    shortName: 'Iustitia Europa',
    bloc: 'Otros',
    fullName: 'Iustitia Europa',
    ideology: 'Regeneracionismo anticorrupción',
    foundedYear: 2023,
    foundedLabel: 'desde 2023',
    leader: 'Luis María Pardo',
    accentColor: '#1e3a5f',
    status: 'En activo (candidatura 29N-2026)',
    summary:
      'Movimiento cívico y jurídico constituido como «antipartido». Su Contrato Electoral propone sistema electoral mayoritario de distritos uninominales, elección directa del Ejecutivo, límite de 2 mandatos, blindaje de la acción popular (art. 125 CE), máximo de 7 ministerios, cuota cero de autónomos 4 años, referéndum interno en la Guardia Civil sobre su desmilitarización, terapias naturales en el SNS con IVA 0% y referéndums vinculantes sobre la permanencia en la UE y la OTAN.',
    documentTitle: 'Contrato Electoral Iustitia Europa: Reinicio moral y reforma constitucional',
    officialWebsite: 'https://iustitiaeuropa.es',
    programUrl:
      'https://iustitiaeuropa.es/img/bloques/documentos/descarga-aqui-tu-contrato-00030.pdf',
    localPdfPath: './pdfs/iustitia-europa.pdf',
    localPdfMeta: 'PDF oficial local disponible (28 páginas · 4,7 MB · Contrato Electoral oficial)'
  },
  {
    id: 'fo',
    shortName: 'FO',
    bloc: 'Otros',
    fullName: 'Frente Obrero',
    ideology: 'Obrerismo soberanista',
    foundedYear: 2018,
    foundedLabel: 'desde 2018',
    leader: 'Roberto Vaquero',
    accentColor: '#881313',
    status: 'En activo (candidatura estatal en las 52 circunscripciones, 29N-2026)',
    summary:
      'Partido obrerista y soberanista presente en las 52 circunscripciones. Propone reindustrialización estatal, nacionalización energética y defensa de la nuclear, prioridad de vivienda pública para españoles autóctonos, simetría autonómica e igualdad fiscal con centralización de Sanidad, Educación y Emergencias hacia una República socialista, control estricto de inmigración y salida de la UE y la OTAN.',
    documentTitle: 'Programa Político Frente Obrero 2026: Un programa para recuperar España',
    officialWebsite: 'https://frenteobrero.es',
    programUrl: 'https://frenteobrero.es/documentos/programa-frente-obrero.pdf',
    localPdfPath: './pdfs/frente-obrero-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (64 páginas · 1,1 MB · Programa Político 2026)'
  }
];

/**
 * Look up a party record by its identifier.
 * @param {string} id
 * @returns {object|undefined}
 */
export function getPartyById(id) {
  return PARTIES.find((party) => party.id === id);
}
