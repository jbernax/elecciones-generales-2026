/**
 * The 10 core thematic axes used across party profiles, side-by-side comparison,
 * and the citizen concrete-policy questionnaire.
 */

export const TOPICS = [
  {
    id: 'economia',
    title: 'Economía, Fiscalidad y Modelo Productivo',
    shortTitle: 'Economía y Fiscalidad',
    description:
      'Estructura del IRPF, impuestos al patrimonio, banca y grandes empresas, gasto público, pymes y papel del Estado en la economía.'
  },
  {
    id: 'vivienda',
    title: 'Vivienda, Alquileres y Suelo',
    shortTitle: 'Vivienda',
    description:
      'Regulación o liberalización de los precios del alquiler, parque público residencial, ayudas fiscales a jóvenes y desalojo de ocupaciones.'
  },
  {
    id: 'empleo_pensiones',
    title: 'Empleo, Salarios, Autónomos y Pensiones',
    shortTitle: 'Empleo y Pensiones',
    description:
      'Duración de la jornada laboral, Salario Mínimo Interprofesional, cuotas de autónomos, indemnización por despido y sistema de pensiones.'
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
    id: 'inmigracion_seguridad',
    title: 'Inmigración, Fronteras y Seguridad Ciudadana',
    shortTitle: 'Inmigración y Seguridad',
    description:
      'Control fronterizo, regularizaciones o expulsiones, multirreincidencia penal, dotación de fuerzas de seguridad y sistema penitenciario.'
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
