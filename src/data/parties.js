/**
 * Ideological blocs and the 17 political formations covered in the
 * Elecciones Generales Espana 2026 reference dataset.
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
    id: 'sumar',
    shortName: 'Sumar',
    bloc: 'Izquierda',
    fullName: 'Sumar',
    ideology: 'Izquierda progresista plural',
    foundedYear: 2022,
    foundedLabel: 'desde 2022',
    leader: 'Yolanda Díaz / Confluencia progresista',
    accentColor: '#b91c4c',
    status: 'En activo (espacio progresista plurinacional, integrado en confluencia Frente Amplio 2026)',
    summary:
      'Plataforma progresista plural centrada en la reducción legal de la jornada laboral, el refuerzo de la fiscalidad a las grandes fortunas, la ampliación del parque público de alquiler social y la descarbonización de la economía.',
    documentTitle: 'Un programa como una casa (Programa Electoral Frente Amplio / Sumar 2026)',
    officialWebsite: 'https://movimientosumar.es',
    programUrl: 'https://frenteamplio.info/pdf/ProgramaFrenteAmplio.pdf',
    localPdfPath: './pdfs/sumar-frente-amplio-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (151 páginas · 1,1 MB · Confluencia Frente Amplio 2026)'
  },
  {
    id: 'podemos',
    shortName: 'Podemos',
    bloc: 'Izquierda',
    fullName: 'Podemos',
    ideology: 'Izquierda populista',
    foundedYear: 2014,
    foundedLabel: 'desde 2014',
    leader: 'Ione Belarra / Irene Montero',
    accentColor: '#5b247a',
    status: 'En activo (candidatura propia en Elecciones Generales 2026)',
    summary:
      'Formación de izquierda transformadora que propone la intervención pública directa en vivienda, energía y banca, el tope legal de los alquileres y márgenes comerciales, la semana de 32 horas y el rechazo al incremento del gasto militar.',
    documentTitle: 'Programa Electoral Podemos: Intervención pública y transformación social',
    officialWebsite: 'https://podemos.info',
    programUrl: 'https://podemos.info/programa/',
    localPdfPath: null,
    localPdfMeta: 'PDF 29N-2026 pendiente de publicación en fuente abierta o protegido por el servidor oficial.'
  },
  {
    id: 'iu',
    shortName: 'IU',
    bloc: 'Izquierda',
    fullName: 'Izquierda Unida',
    ideology: 'Izquierda comunista y ecosocialista',
    foundedYear: 1986,
    foundedLabel: 'desde 1986',
    leader: 'Antonio Maíllo',
    accentColor: '#a61c1c',
    status: 'En activo (integrada en la confluencia electoral Frente Amplio 2026)',
    summary:
      'Movimiento político y social federal, republicano y ecosocialista. Defiende la creación de 1,5 millones de viviendas públicas, reforma fiscal progresiva sobre capital y patrimonios, jornada de 32 horas, blindaje de lo público y salida de la OTAN.',
    documentTitle: 'Programa Electoral Frente Amplio / Izquierda Unida 2026',
    officialWebsite: 'https://izquierdaunida.org',
    programUrl: 'https://frenteamplio.info/pdf/ProgramaFrenteAmplio.pdf',
    localPdfPath: './pdfs/sumar-frente-amplio-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (151 páginas · 1,1 MB · Programa compartido de confluencia 2026)'
  },
  {
    id: 'pce',
    shortName: 'PCE',
    bloc: 'Izquierda',
    fullName: 'Partido Comunista de España',
    ideology: 'Comunismo marxista',
    foundedYear: 1921,
    foundedLabel: 'desde 1921',
    leader: 'Enrique Santiago',
    accentColor: '#8b0000',
    status: 'En activo (partido orgánico integrado en Izquierda Unida)',
    summary:
      'Formación marxista centrada en la planificación democrática de la economía, la nacionalización de sectores estratégicos, la construcción de una República federal y solidaria, la derogación íntegra de las reformas laborales regresivas y el antiimperialismo.',
    documentTitle: 'Programa Estratégico del Partido Comunista de España (PCE)',
    officialWebsite: 'https://pce.es',
    programUrl: 'https://pce.es/media/documents/def._PROGRAMA_ESTRATEGICO_PCE.pdf',
    localPdfPath: './pdfs/pce-programa-estrategico.pdf',
    localPdfMeta: 'PDF oficial local disponible (28 páginas · 0,8 MB · Programa Estratégico PCE)'
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
    status: 'En activo (candidatura estatal 2026)',
    summary:
      'Partido socialdemócrata y europeísta que defiende la consolidación del Estado del bienestar mediante fiscalidad progresiva, la vinculación legal del SMI al 60% del salario medio, la regulación de zonas tensionadas en vivienda y la cohesión territorial.',
    documentTitle: 'Programa Electoral PSOE 29N-2026: La fuerza de seguir avanzando',
    officialWebsite: 'https://www.psoe.es',
    programUrl: 'https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26.pdf',
    localPdfPath: null,
    localPdfMeta:
      'El servidor del PSOE aplica protección automática anti-bot al enlace directo del PDF; puede abrirlo en su navegador mediante el enlace oficial.'
  },
  {
    id: 'cs',
    shortName: 'Cs',
    bloc: 'Centro',
    fullName: 'Ciudadanos',
    ideology: 'Centro liberal',
    foundedYear: 2006,
    foundedLabel: 'desde 2006',
    leader: 'Carlos Pérez-Nievas',
    accentColor: '#d95f02',
    status: 'En activo (coalición Democracia para el Siglo 21 en 2026)',
    summary:
      'Formación liberal y constitucionalista orientada a las reformas institucionales, listas electorales desbloqueadas, despolitización judicial, reducción de trabas administrativas a pymes y exención fiscal en la primera vivienda para jóvenes.',
    documentTitle: 'La España que merecemos (Programa coalición Democracia para el Siglo 21)',
    officialWebsite: 'https://www.ciudadanos-cs.org',
    programUrl: 'https://mi.democracia21.es/docs/programa/programa-democracia21.pdf',
    localPdfPath: './pdfs/d21-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (108 páginas · 3,6 MB · Programa coalición Democracia para el Siglo 21)'
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
    localPdfMeta: 'Formación histórica sin candidatura ni PDF electoral oficial publicado en 2026.'
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
    status: 'En activo (candidatura estatal 2026)',
    summary:
      'Formación de centro-derecha liberal-conservadora. Propone rebajas fiscales en IRPF, IVA energético y sucesiones, la derogación de la Ley de Vivienda en favor de mayor oferta y desalojo exprés de okupas, prórroga nuclear y refuerzo institucional.',
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
    localPdfMeta: 'Formación histórica disuelta en 1983; sin PDF oficial de elecciones de 2026.'
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
    status: 'En activo (candidatura estatal 2026)',
    summary:
      'Partido nacional-conservador y soberanista que propone la recentralización de competencias autonómicas, deportaciones y cierre estricto de fronteras, rebajas fiscales con tipo dual, derogación del Pacto Verde Europeo y defensa nuclear.',
    documentTitle: 'Programa Electoral VOX 29N-2026: Es sentido común',
    officialWebsite: 'https://www.voxespana.es',
    programUrl: 'https://www.voxespana.es/wp-content/uploads/2026/11/Programa-completo-A5-1.pdf',
    localPdfPath: null,
    localPdfMeta:
      'El servidor de VOX bloquea descargas automatizadas (HTTP 403); puede consultarlo directamente en su navegador mediante el enlace oficial.'
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
    status: 'En activo (candidatura estatal 2026)',
    summary:
      'Formación populista articulada en torno a un contrato electoral de 119 medidas: exención de IRPF hasta 35.000 euros, supresión de la cuota de autónomos, macrocárcel de máxima seguridad, expulsión rápida de inmigrantes irregulares y penas imprescriptibles contra la corrupción.',
    documentTitle: 'Contrato Electoral SALF 29N-2026 (119 medidas en 10 bloques)',
    officialWebsite: 'https://seacabolafiesta.com',
    programUrl: 'https://www.seacabolafiesta.com/SALF_Contrato_Electoral_29N.pdf',
    localPdfPath: null,
    localPdfMeta:
      'El servidor de SALF bloquea descargas automatizadas (HTTP 403); puede abrir el contrato electoral directamente mediante el enlace oficial.'
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
    status: 'En activo (partido minoritario extraparlamentario)',
    summary:
      'Formación nacionalsindicalista heredera de los principios doctrinales de 1934: Estado unitario sin autonomías, representación orgánica sindical frente al sistema de partidos, nacionalización de la banca y crédito, reforma agraria comunal y defensa de la Hispanidad.',
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
    status: 'En activo (candidatura estatal 2026)',
    summary:
      'Formación animalista, ecologista y de justicia social que exige la abolición de la tauromaquia y la caza, el fin de las macrogranjas, endurecimiento penal del maltrato animal, transición ecológica urgente y ampliación del alquiler social.',
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
    status: 'En activo (coalición Democracia para el Siglo 21 en Madrid y Barcelona, 2026)',
    summary:
      'Partido liberal y regeneracionista orientado a superar la polarización de bloques mediante auditorías de eficacia del gasto público, mandato blindado para la IGAE, cese automático si no hay presupuestos, despolitización judicial y alivio fiscal a pymes y menores de 35 años.',
    documentTitle: 'La España que merecemos: Programa Democracia 21 (2026)',
    officialWebsite: 'https://democracia21.es',
    programUrl: 'https://mi.democracia21.es/docs/programa/programa-democracia21.pdf',
    localPdfPath: './pdfs/d21-2026.pdf',
    localPdfMeta: 'PDF oficial local disponible (108 páginas · 3,6 MB · Programa 2026)'
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
    status: 'En activo (candidatura estatal 2026)',
    summary:
      'Movimiento cívico y jurídico nacido de la acusación popular contra la corrupción. Propone blindar constitucionalmente la acción popular, suprimir subvenciones a partidos, eliminar aforamientos, elegir directamente al Presidente y someter tratados internacionales a soberanía nacional.',
    documentTitle: 'Contrato Electoral Iustitia Europa: Reinicio moral y regeneración institucional',
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
    status: 'En activo (candidatura estatal en las 52 circunscripciones, 2026)',
    summary:
      'Formación obrerista y soberanista que combina intervención económica estatal (reindustrialización, nacionalización energética y defensa laboral) con un Estado republicano unitario, control estricto de fronteras, salida de la UE y la OTAN y rechazo a las leyes identitarias.',
    documentTitle: 'Programa Político Frente Obrero 2026: Defendamos España',
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
