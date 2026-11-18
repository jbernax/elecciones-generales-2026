/**
 * Verified macroeconomic and public-finance reference indicators for Spain (2026)
 * used to frame party proposals on taxation, spending, and debt management.
 */

export const SPAIN_FISCAL_STATUS = {
  title: 'Las cuentas públicas de España (Referencia 2026)',
  subtitle:
    'El margen fiscal de partida para medir la viabilidad de las promesas de gasto, bajadas de impuestos y reducción de deuda.',
  updatedLabel: 'Datos y previsiones a noviembre de 2026 (Banco de España y AIReF)',
  metrics: [
    {
      id: 'debt',
      label: 'Deuda pública',
      value: '100,3% del PIB (1,767 billones €)',
      detail:
        'Dato de septiembre de 2026 (Banco de España). La AIReF estima un cierre de año en el 99,9% y una senda moderada hacia el 95,4% en 2031.'
    },
    {
      id: 'deficit',
      label: 'Déficit público',
      value: '2,8% del PIB (prev. cierre 2026)',
      detail:
        'Estimación de la AIReF, que advierte de desvíos respecto a la senda de gasto neto primario pactada con la Unión Europea.'
    },
    {
      id: 'interest',
      label: 'Carga de intereses',
      value: 'Presión creciente en refinanciaciones',
      detail:
        'Los vencimientos renovados a tipos actuales y los bonos indexados a la inflación elevan progresivamente el gasto financiero anual.'
    },
    {
      id: 'rules',
      label: 'Reglas fiscales UE',
      value: 'Límite déficit < 3% y senda de gasto neto',
      detail:
        'El marco fiscal europeo obliga a planes plurianuales de ajuste del gasto primario para reconducir la deuda a la baja.'
    }
  ],
  sourcesNote:
    'Fuentes: Banco de España (avance mensual de deuda AAPP, septiembre 2026) y AIReF (previsiones fiscales y análisis de sostenibilidad, 2026).'
};

/**
 * Official baseline indicators and institutional sources keyed by all 12 topic IDs,
 * shown on demand inside each topic comparator stage.
 */
export const TOPIC_OFFICIAL_CONTEXT = {
  economia: {
    topicId: 'economia',
    ...SPAIN_FISCAL_STATUS
  },
  vivienda: {
    topicId: 'vivienda',
    title: 'Situación oficial de la vivienda y el alquiler en España',
    subtitle:
      'Indicadores estructurales sobre parque público, esfuerzo financiero de los hogares, déficit de obra nueva y evolución de rentas.',
    updatedLabel: 'Banco de España, INE y MIVAU (2025-2026)',
    metrics: [
      {
        id: 'social-stock',
        label: 'Parque de vivienda social',
        value: '2,5% del parque principal vs. 9,3% media UE',
        detail:
          'España dispone de alrededor de 290.000 viviendas sociales en alquiler asequible, muy por debajo del promedio de la Unión Europea.'
      },
      {
        id: 'effort-rate',
        label: 'Esfuerzo medio de acceso',
        value: '36% de la renta familiar mediana; >45% en grandes áreas urbanas',
        detail:
          'Los hogares jóvenes y de rentas medias superan el umbral recomendado del 30% de ingresos destinados a alquiler o cuota hipotecaria.'
      },
      {
        id: 'housing-deficit',
        label: 'Déficit acumulado de vivienda',
        value: '450.000 - 600.000 viviendas según Banco de España',
        detail:
          'La creación anual de nuevos hogares duplica el ritmo reciente de visados y viviendas terminadas en las áreas metropolitanas.'
      },
      {
        id: 'rent-market',
        label: 'Mercado de alquiler',
        value: 'Subida acumulada >38% en cinco años y contracción de oferta permanente',
        detail:
          'El índice de precios de vivienda en alquiler y los portales oficiales muestran menor rotación en alquiler residencial de larga duración.'
      }
    ],
    sourcesNote:
      'Fuentes: Banco de España (informe anual del mercado residencial), INE y Ministerio de Vivienda y Agenda Urbana (MIVAU, 2025-2026).'
  },
  empleo: {
    topicId: 'empleo',
    title: 'Radiografía oficial del mercado laboral y trabajo autónomo',
    subtitle:
      'Datos base de desempleo, salarios, duración de la jornada en convenio y afiliación al Régimen Especial de Trabajadores Autónomos.',
    updatedLabel: 'INE y Ministerio de Trabajo y Seguridad Social (2025-2026)',
    metrics: [
      {
        id: 'unemployment',
        label: 'Tasa de paro',
        value: '11,2% EPA (~21,4 millones de ocupados)',
        detail:
          'España mantiene máximos históricos de población ocupada junto al mayor desempleo estructural de la zona euro y paro juvenil superior al 25%.'
      },
      {
        id: 'wages',
        label: 'Salario Mínimo y mediano',
        value: 'SMI en 1.184 €/mes (14 pagas); salario mediano en ~23.300 € brutos/año',
        detail:
          'La revalorización acumulada del SMI ha comprimido la parte baja de la distribución salarial frente al estancamiento relativo del salario mediano.'
      },
      {
        id: 'working-hours',
        label: 'Jornada media efectiva',
        value: '37,8 horas semanales pactadas en convenio colectivo',
        detail:
          'La jornada pactada presenta amplias diferencias sectoriales entre la industria, los servicios de proximidad y las administraciones públicas.'
      },
      {
        id: 'self-employed',
        label: 'Trabajadores autónomos',
        value: '3,39 millones de afiliados al RETA',
        detail:
          'El colectivo cotiza bajo el sistema progresivo por tramos de rendimientos netos desplegado entre 2023 y 2026.'
      }
    ],
    sourcesNote:
      'Fuentes: INE (EPA y Encuesta de Estructura Salarial) y Ministerio de Trabajo y Economía Social / Seguridad Social (2025-2026).'
  },
  pensiones: {
    topicId: 'pensiones',
    title: 'Balance financiero y demográfico del sistema de pensiones',
    subtitle:
      'Magnitudes oficiales del gasto contributivo, cuantía media, transferencias presupuestarias y edad real de retiro.',
    updatedLabel: 'Ministerio de Inclusión y AIReF (2025-2026)',
    metrics: [
      {
        id: 'pension-spending',
        label: 'Gasto en pensiones',
        value: '13,1% del PIB (nómina mensual contributiva >13.500 M€)',
        detail:
          'La jubilación absorbe más del 73% de la nómina contributiva mensual ante la entrada progresiva de las cohortes del baby boom.'
      },
      {
        id: 'average-pension',
        label: 'Pensión media del sistema',
        value: '1.315 €/mes (jubilación media en ~1.510 €/mes en 14 pagas)',
        detail:
          'La indexación anual al IPC medio y el incremento adicional de las pensiones mínimas y no contributivas elevan la cuantía de las nuevas altas.'
      },
      {
        id: 'state-transfers',
        label: 'Transferencias del Estado',
        value: '>42.000 M€/año para equilibrar la Seguridad Social y gastos impropios',
        detail:
          'Las aportaciones de los Presupuestos Generales del Estado cubren gastos no contributivos, bonificaciones y el déficit de caja del sistema.'
      },
      {
        id: 'retirement-age',
        label: 'Edad efectiva de jubilación',
        value: '65,2 años de media real frente a 66 años y 10 meses de edad ordinaria',
        detail:
          'Los coeficientes reductores por retiro anticipado e incentivos de demora buscan aproximar la edad real de salida a la legal en 2027.'
      }
    ],
    sourcesNote:
      'Fuentes: Ministerio de Inclusión, Seguridad Social y Migraciones (estadística mensual de pensiones) y AIReF (opinión de sostenibilidad, 2025-2026).'
  },
  regeneracion_justicia: {
    topicId: 'regeneracion_justicia',
    title: 'Estado institucional de la Justicia y calidad democrática',
    subtitle:
      'Cifras de carga judicial, tiempos medios de resolución, dotación de magistratura y recomendaciones europeas de integridad.',
    updatedLabel: 'CGPJ, Comisión Europea y GRECO (2025-2026)',
    metrics: [
      {
        id: 'pending-cases',
        label: 'Asuntos pendientes',
        value: 'Más de 3,9 millones de causas en trámite en los juzgados españoles',
        detail:
          'La litigiosidad civil, mercantil y contencioso-administrativa mantiene una bolsa acumulada récord en órganos de primera instancia.'
      },
      {
        id: 'congestion',
        label: 'Tasa de congestión y duración',
        value: '1,54 de tasa de congestión; instrucción penal media >11 meses',
        detail:
          'Las causas complejas y la fase de ejecución superan con frecuencia los plazos ordinarios en audiencias y juzgados de instrucción.'
      },
      {
        id: 'judge-ratio',
        label: 'Ratio de jueces',
        value: '11,2 jueces por cada 100.000 habitantes frente a ~17,6 de media UE',
        detail:
          'La planta judicial española presenta un déficit estructural de plazas respecto al promedio de los países del Consejo de Europa.'
      },
      {
        id: 'greco-compliance',
        label: 'Cumplimiento GRECO',
        value: 'Recomendaciones pendientes sobre aforamientos, lobbies y Fiscalía',
        detail:
          'Los informes de evaluación señalan reformas pendientes en transparencia del poder ejecutivo, estatuto del Ministerio Fiscal y registro de grupos de interés.'
      }
    ],
    sourcesNote:
      'Fuentes: Consejo General del Poder Judicial (La Justicia Dato a Dato), Comisión Europea (Informe sobre el Estado de Derecho) y GRECO (2025-2026).'
  },
  sanidad: {
    topicId: 'sanidad',
    title: 'Indicadores oficiales del Sistema Nacional de Salud (SNS)',
    subtitle:
      'Recursos públicos consolidados, tiempos de espera quirúrgica y en consultas, y capacidad de la atención primaria y salud mental.',
    updatedLabel: 'Ministerio de Sanidad · SISLE-SNS (2025-2026)',
    metrics: [
      {
        id: 'health-spending',
        label: 'Gasto sanitario público',
        value: '6,8% del PIB (~99.000 M€ consolidados entre CCAA y Estado)',
        detail:
          'Las comunidades autónomas ejecutan más del 90% del presupuesto sanitario público, con diferencias significativas de gasto per cápita entre territorios.'
      },
      {
        id: 'surgery-wait',
        label: 'Listas de espera quirúrgica',
        value: '849.000 pacientes en espera estructural; demora media de 121 días',
        detail:
          'Más del 20% de los pacientes en lista de espera quirúrgica supera los seis meses para ser intervenido en el conjunto del SNS.'
      },
      {
        id: 'specialist-wait',
        label: 'Consultas con especialista',
        value: 'Demora media de 94 días para primera consulta hospitalaria',
        detail:
          'Traumatología, oftalmología y dermatología concentran las mayores esperas para primera valoración especializada.'
      },
      {
        id: 'primary-mental',
        label: 'Atención primaria y salud mental',
        value: '14% del gasto sanitario en primaria; 11,4 psiquiatras y 6,5 psicólogos clínicos por 100.000 hab. en el SNS',
        detail:
          'El porcentaje dedicado a atención primaria sigue lejos del objetivo orientativo del 25% y existe escasez de facultativos en plazas de difícil cobertura.'
      }
    ],
    sourcesNote:
      'Fuentes: Ministerio de Sanidad (Sistema de Información sobre Listas de Espera SISLE-SNS y Estadística de Gasto Sanitario Público, 2025-2026).'
  },
  educacion: {
    topicId: 'educacion',
    title: 'Situación oficial del sistema educativo y universitario',
    subtitle:
      'Inversión pública agregada, abandono temprano, reparto entre redes de enseñanza y resultados comparados en competencias básicas.',
    updatedLabel: 'Ministerio de Educación, INE y OCDE (2025-2026)',
    metrics: [
      {
        id: 'edu-spending',
        label: 'Inversión educativa pública',
        value: '4,6% del PIB (~68.000 M€ en el conjunto de las administraciones)',
        detail:
          'El gasto público por alumno en enseñanzas no universitarias se sitúa en torno a la media europea, con fuerte peso de partidas de personal.'
      },
      {
        id: 'early-dropout',
        label: 'Abandono educativo temprano',
        value: '13,0% de jóvenes de 18 a 24 años, frente al 9,5% de media UE',
        detail:
          'Pese a la mejora de la última década, España conserva una brecha territorial y de género respecto al objetivo europeo para 2030.'
      },
      {
        id: 'school-networks',
        label: 'Distribución por redes',
        value: '67% alumnado en red pública, 25% en concertada y 8% en privada',
        detail:
          'En etapas obligatorias de zonas urbanas la enseñanza concertada supera el 35% de la matrícula total.'
      },
      {
        id: 'pisa-scores',
        label: 'Rendimiento académico PISA',
        value: '473 puntos en Matemáticas y 474 en Lectura, ligeramente por debajo del promedio OCDE',
        detail:
          'El informe internacional refleja un descenso moderado respecto a la década anterior y disparidad entre comunidades autónomas.'
      }
    ],
    sourcesNote:
      'Fuentes: Ministerio de Educación, Formación Profesional y Deportes, INE y OCDE (Panorama de la Educación e Informe PISA, 2025-2026).'
  },
  inmigracion: {
    topicId: 'inmigracion',
    title: 'Cifras oficiales de población extranjera, empleo y asilo',
    subtitle:
      'Demografía residente, contribución laboral a la Seguridad Social, expedientes de protección internacional y vías de regularización.',
    updatedLabel: 'INE, Ministerio del Interior y Seguridad Social (2025-2026)',
    metrics: [
      {
        id: 'foreign-born',
        label: 'Población nacida en el extranjero',
        value: '18,8% de la población residente en España (~9,1 millones de personas)',
        detail:
          'El crecimiento demográfico reciente de España se explica mayoritariamente por el saldo migratorio procedente de América Latina y Europa.'
      },
      {
        id: 'foreign-affiliates',
        label: 'Afiliación a la Seguridad Social',
        value: '2,95 millones de cotizantes extranjeros (13,8% del total de afiliados)',
        detail:
          'Hostelería, comercio, construcción, agricultura y empleo del hogar concentran la mayor proporción de trabajadores de origen extranjero.'
      },
      {
        id: 'asylum-requests',
        label: 'Protección internacional',
        value: '>165.000 solicitudes anuales de asilo, con tasa de resolución favorable cercana al 18%',
        detail:
          'La Oficina de Asilo y Refugio acumula un elevado volumen de expedientes pendientes de resolución administrativa.'
      },
      {
        id: 'irregular-roots',
        label: 'Entradas irregulares y arraigo',
        value: '~64.000 llegadas irregulares anuales y >210.000 autorizaciones vigentes por arraigo',
        detail:
          'Las rutas marítimas hacia Canarias y Baleares representan la mayor parte de las entradas no autorizadas, frente al acceso mayoritario por frontera aérea.'
      }
    ],
    sourcesNote:
      'Fuentes: INE (Estadística Continua de Población), Ministerio del Interior (Oficina de Asilo y Refugio) y Seguridad Social (2025-2026).'
  },
  seguridad: {
    topicId: 'seguridad',
    title: 'Balance oficial de criminalidad, fuerzas policiales y prisiones',
    subtitle:
      'Indicadores oficiales de delincuencia convencional, ciberestafas, efectivos de seguridad del Estado y sistema penitenciario.',
    updatedLabel: 'Ministerio del Interior (2025-2026)',
    metrics: [
      {
        id: 'crime-rate',
        label: 'Tasa de criminalidad',
        value: '50,8 infracciones penales por cada 1.000 habitantes (entre las más bajas de la UE-27)',
        detail:
          'La criminalidad convencional muestra estabilidad relativa con repuntes localizados en hurtos, agresiones sexuales denunciadas y tráfico de drogas.'
      },
      {
        id: 'cybercrime',
        label: 'Cibercriminalidad vs. convencional',
        value: 'La ciberdelincuencia supone ya el 19% de las denuncias, con estafas informáticas al alza',
        detail:
          'Las estafas digitales han multiplicado su peso en el balance estadístico en los últimos cinco años y concentran cerca del 90% de los ciberdelitos.'
      },
      {
        id: 'police-forces',
        label: 'Plantillas policiales',
        value: '~156.500 efectivos entre Policía Nacional y Guardia Civil, más cuerpos autonómicos y locales',
        detail:
          'España cuenta con una de las mayores ratios policiales de la UE al sumar fuerzas estatales, autonómicas y policías municipales.'
      },
      {
        id: 'prison-pop',
        label: 'Población penitenciaria',
        value: '~59.200 internos en centros penitenciarios (121 por cada 100.000 habitantes)',
        detail:
          'La población reclusa se mantiene por debajo de los máximos de la década de 2010, con alrededor de un 19% de internos en prisión preventiva.'
      }
    ],
    sourcesNote:
      'Fuentes: Ministerio del Interior (Balance Trimestral de Criminalidad) y Secretaría General de Instituciones Penitenciarias (2025-2026).'
  },
  modelo_estado: {
    topicId: 'modelo_estado',
    title: 'Arquitectura territorial, gasto público y financiación autonómica',
    subtitle:
      'Reparto competencial del gasto entre administraciones, endeudamiento regional, sistema de financiación y empleo público.',
    updatedLabel: 'IGAE, Ministerio de Hacienda y Banco de España (2025-2026)',
    metrics: [
      {
        id: 'spending-split',
        label: 'Descentralización del gasto',
        value: '36% Comunidades Autónomas, 13% Entidades Locales y 51% Administración Central y Seguridad Social',
        detail:
          'Las comunidades gestionan las principales partidas de sanidad, educación y servicios sociales, mientras pensiones y deuda permanecen en la esfera central.'
      },
      {
        id: 'regional-debt',
        label: 'Deuda autonómica',
        value: '21,1% del PIB (~336.000 M€), con fuerte peso del Fondo de Liquidez Autonómica',
        detail:
          'Más de la mitad del endeudamiento regional está financiado por mecanismos extraordinarios del Tesoro como el FLA y el Fondo de Facilidad Financiera.'
      },
      {
        id: 'regional-funding',
        label: 'Financiación autonómica',
        value: 'Modelo de régimen común caducado desde 2014, con diferencias de hasta 800 € por habitante ajustado',
        detail:
          'La actualización de entregas a cuenta y el criterio de población ajustada siguen pendientes de reforma multilateral entre el Estado y las CCAA.'
      },
      {
        id: 'public-employment',
        label: 'Empleo público territorial',
        value: '3,0 millones de empleados públicos: 61% en CCAA, 21% en EELL y 18% en Estado',
        detail:
          'El grueso del personal público autonómico corresponde a personal docente, sanitario y de administración general transferida.'
      }
    ],
    sourcesNote:
      'Fuentes: Intervención General de la Administración del Estado (IGAE), Ministerio de Hacienda y Banco de España (2025-2026).'
  },
  energia_campo: {
    topicId: 'energia_campo',
    title: 'Datos oficiales de mix energético, renovables y sector agrario',
    subtitle:
      'Peso eléctrico de energías limpias y nucleares, dependencia exterior de combustibles fósiles y aportación económica agroalimentaria.',
    updatedLabel: 'Redeia, MITECO y MAPA (2025-2026)',
    metrics: [
      {
        id: 'renewables-share',
        label: 'Generación eléctrica renovable',
        value: '56,8% del mix eléctrico nacional (eólica y solar fotovoltaica como primeras fuentes)',
        detail:
          'La rápida expansión fotovoltaica y eólica ha reducido los precios mayoristas diurnos y plantea nuevos retos de almacenamiento y redes.'
      },
      {
        id: 'nuclear-fleet',
        label: 'Parque nuclear español',
        value: '7 reactores activos que aportan ~19,6% de la electricidad, con calendario de cierre 2027-2035',
        detail:
          'Las centrales operan como energía firme de base antes del cierre escalonado fijado en el Plan Nacional Integrado de Energía y Clima.'
      },
      {
        id: 'energy-dependence',
        label: 'Dependencia energética exterior',
        value: '68% de la energía primaria consumida procede de importaciones de hidrocarburos',
        detail:
          'El transporte y parte de la industria térmica mantienen una elevada dependencia del petróleo y del gas natural importados.'
      },
      {
        id: 'primary-sector',
        label: 'Peso del sector primario',
        value: '2,6% del VAB nacional y >60% del valor agroalimentario destinado a exportación',
        detail:
          'Agricultura, ganadería y pesca sostienen alrededor de 750.000 ocupados directos y enfrentan costes hídricos y competencia extracomunitaria.'
      }
    ],
    sourcesNote:
      'Fuentes: Redeia (Red Eléctrica de España), Ministerio para la Transición Ecológica (MITECO) y Ministerio de Agricultura, Pesca y Alimentación (MAPA, 2025-2026).'
  },
  exterior_ue: {
    topicId: 'exterior_ue',
    title: 'Posición oficial en defensa, fondos europeos y comercio exterior',
    subtitle:
      'Esfuerzo presupuestario en defensa, despliegue de fondos NextGenerationEU, balanza comercial intracomunitaria y saldo con la UE.',
    updatedLabel: 'Ministerio de Defensa, Comisión Europea y Economía (2025-2026)',
    metrics: [
      {
        id: 'defense-spending',
        label: 'Gasto en defensa',
        value: '1,48% del PIB según criterio OTAN (~21.500 M€ incluyendo programas especiales de modernización)',
        detail:
          'España mantiene compromisos internacionales para converger progresivamente hacia el umbral del 2% del PIB acordado en la Alianza Atlántica.'
      },
      {
        id: 'ngeu-funds',
        label: 'Fondos europeos NextGenerationEU',
        value: '163.000 M€ asignados entre transferencias y préstamos hasta el cierre del Mecanismo en 2026',
        detail:
          'La ejecución de hitos del Plan de Recuperación concentra las inversiones en digitalización, movilidad eléctrica y transición industrial.'
      },
      {
        id: 'eu-trade',
        label: 'Integración comercial UE',
        value: 'El 62% de las exportaciones españolas de bienes se dirige a socios de la Unión Europea',
        detail:
          'Francia, Alemania, Portugal e Italia encabezan los destinos comerciales del tejido exportador industrial y agroalimentario.'
      },
      {
        id: 'eu-budget-balance',
        label: 'Saldo presupuestario con la UE',
        value: 'Aportación anual de ~14.500 M€ al presupuesto ordinario comunitario y recepción de ~6.800 M€ en PAC',
        detail:
          'Al margen de los fondos extraordinarios de recuperación, España figura entre los contribuyentes netos moderados del marco financiero plurianual.'
      }
    ],
    sourcesNote:
      'Fuentes: Ministerio de Defensa, Comisión Europea (Marco Financiero y Mecanismo de Recuperación) y Ministerio de Economía, Comercio y Empresa (2025-2026).'
  }
};

/**
 * Look up official contextual indicators for a given topic ID.
 * Falls back to the fiscal baseline if an unknown topic ID is passed.
 * @param {string} topicId
 * @returns {object}
 */
export function getTopicOfficialContext(topicId) {
  return TOPIC_OFFICIAL_CONTEXT[topicId] || TOPIC_OFFICIAL_CONTEXT.economia;
}
