/**
 * The 12 core thematic axes used across party profiles, side-by-side comparison,
 * and the citizen concrete-policy questionnaire.
 */

export const TOPICS = [
  {
    id: 'economia',
    title: 'Economía, Fiscalidad y Deuda Pública',
    shortTitle: 'Economía y Deuda',
    description:
      'Estructura del IRPF, impuestos al patrimonio, banca y grandes empresas, gestión de la deuda pública, déficit, reglas fiscales y papel del Estado.'
  },
  {
    id: 'vivienda',
    title: 'Vivienda, Alquileres y Suelo',
    shortTitle: 'Vivienda',
    description:
      'Regulación o liberalización de los precios del alquiler, parque público residencial, ayudas fiscales a jóvenes y desalojo de ocupaciones.'
  },
  {
    id: 'empleo',
    title: 'Empleo, Salarios y Autónomos',
    shortTitle: 'Empleo y Salarios',
    description:
      'Duración de la jornada laboral, Salario Mínimo Interprofesional, cuotas de autónomos, modalidades contractuales e indemnización por despido.'
  },
  {
    id: 'pensiones',
    title: 'Sistema de Pensiones y Jubilación',
    shortTitle: 'Pensiones',
    description:
      'Revalorización conforme al IPC, edad de jubilación, pensiones mínimas, sostenibilidad financiera de la Seguridad Social y ahorro complementario.'
  },
  {
    id: 'regeneracion_justicia',
    title: 'Regeneración Democrática, Justicia y Anticorrupción',
    shortTitle: 'Regeneración y Justicia',
    description:
      'Elección del CGPJ y Fiscalía, reforma electoral y listas abiertas, aforamientos, financiación de partidos, auditoría del gasto y acción popular.'
  },
  {
    id: 'sanidad',
    title: 'Sanidad y Servicios Públicos',
    shortTitle: 'Sanidad',
    description:
      'Gestión pública directa frente a conciertos privados, tiempos máximos de espera, salud mental, atención primaria y coordinación territorial.'
  },
  {
    id: 'educacion',
    title: 'Educación, Universidad y Lenguas',
    shortTitle: 'Educación',
    description:
      'Red pública frente a concertada y cheque escolar, prueba de acceso universitaria, gratuidad de etapas y lengua vehicular de enseñanza.'
  },
  {
    id: 'inmigracion',
    title: 'Inmigración, Asilo y Control de Flujos',
    shortTitle: 'Inmigración',
    description:
      'Vías legales de entrada y arraigo, regularizaciones extraordinarias, expulsiones administrativas, CIEs e integración laboral.'
  },
  {
    id: 'seguridad',
    title: 'Seguridad Ciudadana, Fronteras y Orden Penal',
    shortTitle: 'Seguridad',
    description:
      'Delincuencia multirreincidente, reforma del Código Penal y sistema penitenciario, legítima defensa, vigilancia fronteriza y fuerzas de seguridad.'
  },
  {
    id: 'modelo_estado',
    title: 'Modelo de Estado y Organización Territorial',
    shortTitle: 'Modelo de Estado',
    description:
      'Estado autonómico, federalismo plurinacional o devolución de competencias al Estado central, diputaciones y forma de Jefatura del Estado.'
  },
  {
    id: 'energia_campo',
    title: 'Energía, Medio Ambiente y Sector Primario',
    shortTitle: 'Energía y Campo',
    description:
      'Centrales nucleares frente a cierre programado, renovables, Pacto Verde Europeo, agricultura, ganadería intensiva y protección animal.'
  },
  {
    id: 'exterior_ue',
    title: 'Política Exterior, Soberanía, Defensa y Unión Europea',
    shortTitle: 'Exterior y UE',
    description:
      'Integración europea y primacía del derecho comunitario, pertenencia a la OTAN, gasto en defensa y política comercial y vecinal.'
  }
];

/**
 * Look up a topic definition by its identifier.
 * @param {string} id
 * @returns {object|undefined}
 */
export function getTopicById(id) {
  return TOPICS.find((topic) => topic.id === id);
}
