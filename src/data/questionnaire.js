/**
 * 14 concrete policy-choice questions covering all 12 core axes.
 * Each question presents 4-5 distinct, verifiable programmatic options
 * rather than open-ended Agree/Disagree statements.
 */

export const QUESTIONS = [
  {
    id: 'q-economia-fiscalidad',
    topicId: 'economia',
    title: '1. Estructura de impuestos sobre rentas, patrimonio y empresas',
    questionText:
      '¿Qué reforma fiscal concreta considera prioritaria para los Presupuestos Generales del Estado?',
    contextNote:
      'La política tributaria determina tanto los recursos disponibles para servicios públicos como el margen neto de hogares, pymes y grandes patrimonios.',
    options: [
      {
        id: 'opt-fisc-gran-reforma',
        title: 'Reforma fiscal progresiva intensa sobre fortunas, banca y energéticas',
        description:
          'Impuesto permanente a grandes patrimonios, tipos del 55-60% a rentas muy altas y gravámenes estables a banca y energéticas para ampliar gasto social.',
        representativeParties: ['podemos', 'iu', 'pce', 'sumar'],
        partyWeights: {
          sumar: 0.9,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.6,
          cs: 0.1,
          upyd: 0.15,
          pp: 0.0,
          ucd: 0.25,
          vox: 0.0,
          salf: 0.0,
          nn: 0.2,
          fe_jons: 0.3,
          pacma: 0.75,
          d21: 0.1,
          iustitia: 0.05,
          fo: 0.55
        }
      },
      {
        id: 'opt-fisc-armonizacion-social',
        title: 'Fiscalidad progresiva moderada y armonización entre comunidades',
        description:
          'Mantener tributos selectivos a banca/energéticas y un suelo mínimo del 15% a multinacionales, evitando competencia fiscal a la baja en Patrimonio y Sucesiones.',
        representativeParties: ['psoe', 'sumar', 'pacma', 'ucd'],
        partyWeights: {
          sumar: 0.8,
          podemos: 0.6,
          iu: 0.7,
          pce: 0.55,
          psoe: 1.0,
          cs: 0.3,
          upyd: 0.45,
          pp: 0.15,
          ucd: 0.7,
          vox: 0.05,
          salf: 0.05,
          nn: 0.1,
          fe_jons: 0.25,
          pacma: 0.85,
          d21: 0.35,
          iustitia: 0.15,
          fo: 0.4
        }
      },
      {
        id: 'opt-fisc-auditoria-eficiencia',
        title: 'Auditar primero todo el gasto público y bajar impuestos sin dañar servicios',
        description:
          'Someter cada programa público a auditoría de eficacia y coste, reducir burocracia a pymes y aliviar la carga fiscal de forma responsable y sostenible.',
        representativeParties: ['d21', 'cs', 'upyd', 'ucd'],
        partyWeights: {
          sumar: 0.15,
          podemos: 0.05,
          iu: 0.05,
          pce: 0.0,
          psoe: 0.35,
          cs: 0.95,
          upyd: 0.9,
          pp: 0.75,
          ucd: 0.85,
          vox: 0.4,
          salf: 0.45,
          nn: 0.15,
          fe_jons: 0.1,
          pacma: 0.3,
          d21: 1.0,
          iustitia: 0.65,
          fo: 0.15
        }
      },
      {
        id: 'opt-fisc-rebaja-irpf-sucesiones',
        title: 'Deflactar el IRPF, bajar el IVA energético y suprimir Sucesiones y Patrimonio',
        description:
          'Duplicar mínimos por hijo en IRPF, rebajar IVA de energía al 10% y alimentos al 0%, derogar impuestos a banca/energéticas y suprimir Sucesiones.',
        representativeParties: ['pp', 'cs'],
        partyWeights: {
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.15,
          cs: 0.85,
          upyd: 0.55,
          pp: 1.0,
          ucd: 0.5,
          vox: 0.85,
          salf: 0.7,
          nn: 0.2,
          fe_jons: 0.1,
          pacma: 0.1,
          d21: 0.75,
          iustitia: 0.7,
          fo: 0.1
        }
      },
      {
        id: 'opt-fisc-choque-exencion',
        title: 'Exención total del IRPF a rentas medias/bajas o tipo dual bajo y recorte estatal',
        description:
          'Eximir de IRPF hasta 35.000 euros o fijar un tipo dual reducido (15%-25%), eliminando subvenciones a partidos, sindicatos, patronales y entes autonómicos.',
        representativeParties: ['salf', 'vox', 'iustitia'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.05,
          cs: 0.35,
          upyd: 0.4,
          pp: 0.65,
          ucd: 0.15,
          vox: 0.95,
          salf: 1.0,
          nn: 0.35,
          fe_jons: 0.3,
          pacma: 0.05,
          d21: 0.45,
          iustitia: 0.9,
          fo: 0.3
        }
      }
    ]
  },

  {
    id: 'q-economia-modelo',
    topicId: 'economia',
    title: '2. Papel del Estado en banca, industria y sectores estratégicos',
    questionText:
      '¿Cuál debe ser el grado de intervención pública directa en la economía nacional?',
    contextNote:
      'Contrapone la propiedad pública y protección arancelaria frente al libre mercado, la unidad de mercado y la iniciativa privada.',
    options: [
      {
        id: 'opt-mod-nacionalizacion-plan',
        title: 'Nacionalizar banca y energía con planificación democrática estatal',
        description:
          'Crear una banca pública estatal, nacionalizar eléctricas y controlar márgenes de supermercados en productos básicos.',
        representativeParties: ['pce', 'iu', 'podemos'],
        partyWeights: {
          sumar: 0.7,
          podemos: 0.95,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.3,
          cs: 0.0,
          upyd: 0.1,
          pp: 0.0,
          ucd: 0.1,
          vox: 0.0,
          salf: 0.0,
          nn: 0.4,
          fe_jons: 0.75,
          pacma: 0.4,
          d21: 0.0,
          iustitia: 0.0,
          fo: 0.85
        }
      },
      {
        id: 'opt-mod-proteccionismo-industrial',
        title: 'Reindustrialización estatal, proteccionismo arancelario y control nacional',
        description:
          'Nacionalizar sectores estratégicos y aplicar aranceles frente a importaciones extracomunitarias baratas para proteger la industria y crédito nacional.',
        representativeParties: ['fo', 'fe_jons', 'nn'],
        partyWeights: {
          sumar: 0.25,
          podemos: 0.3,
          iu: 0.35,
          pce: 0.5,
          psoe: 0.15,
          cs: 0.0,
          upyd: 0.05,
          pp: 0.05,
          ucd: 0.1,
          vox: 0.4,
          salf: 0.3,
          nn: 0.95,
          fe_jons: 1.0,
          pacma: 0.1,
          d21: 0.05,
          iustitia: 0.25,
          fo: 1.0
        }
      },
      {
        id: 'opt-mod-mixto-verde',
        title: 'Economía social de mercado con inversión pública verde y digital',
        description:
          'Colaboración público-privada en reindustrialización tecnológica, fondos europeos y regulación de sectores estratégicos sin nacionalizaciones masivas.',
        representativeParties: ['psoe', 'sumar', 'pacma', 'ucd'],
        partyWeights: {
          sumar: 0.85,
          podemos: 0.45,
          iu: 0.5,
          pce: 0.3,
          psoe: 1.0,
          cs: 0.55,
          upyd: 0.6,
          pp: 0.4,
          ucd: 0.9,
          vox: 0.15,
          salf: 0.15,
          nn: 0.1,
          fe_jons: 0.1,
          pacma: 0.85,
          d21: 0.65,
          iustitia: 0.2,
          fo: 0.2
        }
      },
      {
        id: 'opt-mod-libre-mercado-pyme',
        title: 'Desregulación para pymes, unidad de mercado e impulso a la empresa privada',
        description:
          'Suprimir barreras autonómicas al comercio, agilizar licencias en 24 horas y reducir la presencia empresarial del Estado en favor de la iniciativa privada.',
        representativeParties: ['d21', 'cs', 'pp', 'upyd', 'vox', 'salf', 'iustitia'],
        partyWeights: {
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.25,
          cs: 1.0,
          upyd: 0.85,
          pp: 1.0,
          ucd: 0.7,
          vox: 0.85,
          salf: 0.85,
          nn: 0.15,
          fe_jons: 0.05,
          pacma: 0.15,
          d21: 1.0,
          iustitia: 0.9,
          fo: 0.05
        }
      }
    ]
  },

  {
    id: 'q-vivienda-acceso',
    topicId: 'vivienda',
    title: '3. Acceso a la vivienda, alquileres y ocupación ilegal',
    questionText:
      '¿Qué conjunto de medidas debe aprobarse para resolver el problema del acceso a la vivienda?',
    contextNote:
      'Refleja la disyuntiva entre intervención de rentas y expropiación de pisos vacíos, estímulos fiscales para jóvenes o liberalización de suelo y desalojos exprés.',
    options: [
      {
        id: 'opt-viv-intervencion-total',
        title: 'Tope nacional obligatorio al alquiler, veto a fondos y parque público masivo',
        description:
          'Limitar el alquiler por ley al 30% del salario, prohibir compra especulativa a fondos/no residentes y movilizar 1,5 millones de pisos de alquiler social.',
        representativeParties: ['podemos', 'iu', 'pce', 'sumar'],
        partyWeights: {
          sumar: 0.85,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.55,
          cs: 0.05,
          upyd: 0.1,
          pp: 0.0,
          ucd: 0.15,
          vox: 0.0,
          salf: 0.25,
          nn: 0.25,
          fe_jons: 0.55,
          pacma: 0.8,
          d21: 0.05,
          iustitia: 0.05,
          fo: 0.6
        }
      },
      {
        id: 'opt-viv-zonas-tensionadas-ico',
        title: 'Índice de alquiler en zonas tensionadas y préstamos ICO sin intereses',
        description:
          'Regular alquileres de temporada y zonas tensionadas con bonificaciones fiscales a propietarios e impulsar préstamos ICO hasta 50.000 euros para jóvenes.',
        representativeParties: ['psoe', 'sumar', 'pacma'],
        partyWeights: {
          sumar: 0.85,
          podemos: 0.55,
          iu: 0.65,
          pce: 0.45,
          psoe: 1.0,
          cs: 0.35,
          upyd: 0.35,
          pp: 0.2,
          ucd: 0.55,
          vox: 0.05,
          salf: 0.1,
          nn: 0.05,
          fe_jons: 0.15,
          pacma: 0.85,
          d21: 0.4,
          iustitia: 0.15,
          fo: 0.25
        }
      },
      {
        id: 'opt-viv-jovenes-seguridad',
        title: 'Cero impuestos de compra a menores de 35 años y fondo europeo de barrios',
        description:
          'Eliminar tributos en la primera vivienda joven, movilizar 10.000 millones europeos para vivienda protegida y garantizar seguridad jurídica a diez años.',
        representativeParties: ['d21', 'cs', 'upyd', 'ucd'],
        partyWeights: {
          sumar: 0.2,
          podemos: 0.05,
          iu: 0.05,
          pce: 0.0,
          psoe: 0.4,
          cs: 1.0,
          upyd: 0.85,
          pp: 0.75,
          ucd: 0.8,
          vox: 0.45,
          salf: 0.5,
          nn: 0.15,
          fe_jons: 0.15,
          pacma: 0.3,
          d21: 1.0,
          iustitia: 0.6,
          fo: 0.15
        }
      },
      {
        id: 'opt-viv-suelo-desalojo',
        title: 'Derogar topes, liberalizar suelo, bajar IVA/ITP y desalojo en 48 horas',
        description:
          'Construir vivienda liberalizando suelo, reducir impuestos de primera vivienda y reformar la ley para ejecutar desalojos policiales de okupas en 24-48 horas.',
        representativeParties: ['pp', 'vox', 'iustitia'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.1,
          cs: 0.6,
          upyd: 0.6,
          pp: 1.0,
          ucd: 0.4,
          vox: 1.0,
          salf: 0.85,
          nn: 0.4,
          fe_jons: 0.2,
          pacma: 0.05,
          d21: 0.6,
          iustitia: 0.95,
          fo: 0.35
        }
      },
      {
        id: 'opt-viv-veto-extranjeros-desalojo',
        title: 'Prohibir compra a fondos extranjeros, prioridad nacional y mano dura anti-mafias',
        description:
          'Vetar la compra especulativa de vivienda residencial por fondos extranjeros, priorizar al ciudadano nacional en vivienda social y desalojar en 48 horas.',
        representativeParties: ['salf', 'fo', 'nn', 'fe_jons'],
        partyWeights: {
          sumar: 0.2,
          podemos: 0.25,
          iu: 0.2,
          pce: 0.2,
          psoe: 0.05,
          cs: 0.1,
          upyd: 0.2,
          pp: 0.35,
          ucd: 0.1,
          vox: 0.65,
          salf: 1.0,
          nn: 1.0,
          fe_jons: 0.9,
          pacma: 0.1,
          d21: 0.15,
          iustitia: 0.55,
          fo: 1.0
        }
      }
    ]
  },

  {
    id: 'q-empleo-jornada',
    topicId: 'empleo',
    title: '4. Jornada laboral, salarios y trabajadores autónomos',
    questionText:
      '¿Qué reforma concreta prefiere en regulación laboral, jornada y autónomos?',
    contextNote:
      'Cada formación prioriza soluciones opuestas: reducción legal obligatoria del tiempo de trabajo, contrato único, tarifa cero o sindicación productiva.',
    options: [
      {
        id: 'opt-emp-32-horas',
        title: 'Jornada máxima legal de 32 horas semanales y refuerzo de despido e SMI',
        description:
          'Reducir por ley la semana laboral a 32 horas sin pérdida de sueldo, elevar la indemnización por despido improcedente y reforzar el SMI.',
        representativeParties: ['podemos', 'iu', 'pce', 'sumar'],
        partyWeights: {
          sumar: 0.9,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.55,
          cs: 0.05,
          upyd: 0.1,
          pp: 0.0,
          ucd: 0.2,
          vox: 0.0,
          salf: 0.0,
          nn: 0.15,
          fe_jons: 0.35,
          pacma: 0.75,
          d21: 0.05,
          iustitia: 0.05,
          fo: 0.7
        }
      },
      {
        id: 'opt-emp-375-dialogo',
        title: 'Jornada de 37,5 horas pactada y SMI fijado por ley al 60% del salario medio',
        description:
          'Avanzar hacia las 37,5 horas semanales mediante diálogo social y garantizar por ley el SMI al 60% del salario medio.',
        representativeParties: ['psoe', 'sumar', 'pacma', 'ucd'],
        partyWeights: {
          sumar: 0.9,
          podemos: 0.6,
          iu: 0.7,
          pce: 0.55,
          psoe: 1.0,
          cs: 0.35,
          upyd: 0.4,
          pp: 0.2,
          ucd: 0.85,
          vox: 0.1,
          salf: 0.1,
          nn: 0.1,
          fe_jons: 0.25,
          pacma: 0.85,
          d21: 0.4,
          iustitia: 0.15,
          fo: 0.45
        }
      },
      {
        id: 'opt-emp-contrato-unico',
        title: 'Contrato único indefinido, mochila austriaca y menos burocracia a pymes',
        description:
          'Eliminar la dualidad contractual con un contrato único de indemnización creciente, mochila austriaca portátil y reducción de cargas a pymes y autónomos.',
        representativeParties: ['cs', 'upyd', 'd21', 'pp', 'salf'],
        partyWeights: {
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.2,
          cs: 1.0,
          upyd: 1.0,
          pp: 0.85,
          ucd: 0.65,
          vox: 0.55,
          salf: 0.85,
          nn: 0.1,
          fe_jons: 0.05,
          pacma: 0.15,
          d21: 0.95,
          iustitia: 0.65,
          fo: 0.05
        }
      },
      {
        id: 'opt-emp-cuota-cero-autonomos',
        title: 'Suprimir o bonificar a cero la cuota de autónomos y bajar cotizaciones',
        description:
          'Eliminar la cuota fija de autónomos o eximir a quienes ganen por debajo del SMI, reduciendo la cuña fiscal sobre salarios y contratación.',
        representativeParties: ['salf', 'vox', 'pp', 'iustitia', 'd21'],
        partyWeights: {
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.1,
          cs: 0.75,
          upyd: 0.55,
          pp: 0.9,
          ucd: 0.35,
          vox: 1.0,
          salf: 1.0,
          nn: 0.3,
          fe_jons: 0.15,
          pacma: 0.1,
          d21: 0.8,
          iustitia: 0.95,
          fo: 0.15
        }
      },
      {
        id: 'opt-emp-nacional-obrero',
        title: 'Prioridad laboral nacional y persecución a la contratación de mano de obra barata',
        description:
          'Proteger el salario del trabajador nacional frente a competencia de mano de obra irregular, endurecer despidos o implantar sindicatos productivos propios.',
        representativeParties: ['fo', 'nn', 'fe_jons', 'vox'],
        partyWeights: {
          sumar: 0.1,
          podemos: 0.15,
          iu: 0.15,
          pce: 0.25,
          psoe: 0.05,
          cs: 0.05,
          upyd: 0.15,
          pp: 0.2,
          ucd: 0.1,
          vox: 0.7,
          salf: 0.5,
          nn: 1.0,
          fe_jons: 1.0,
          pacma: 0.05,
          d21: 0.1,
          iustitia: 0.4,
          fo: 1.0
        }
      }
    ]
  },

  {
    id: 'q-pensiones-sistema',
    topicId: 'pensiones',
    title: '5. Sistema público de pensiones y edad de jubilación',
    questionText:
      '¿Qué reforma o garantía considera prioritaria para asegurar las pensiones públicas?',
    contextNote:
      'Separa las preferencias sobre pensiones de la regulación del empleo: edad de jubilación, blindaje constitucional, financiación vía PGE, ahorro privado o natalidad.',
    options: [
      {
        id: 'opt-pen-65-pge-minimas',
        title: 'Jubilación a los 65 años, pensiones mínimas al SMI y financiación vía PGE',
        description:
          'Revertir la jubilación a los 67 años, equiparar las pensiones mínimas al salario mínimo, financiar la Seguridad Social con impuestos al capital y eliminar ventajas a planes privados.',
        representativeParties: ['podemos', 'iu', 'pce'],
        partyWeights: {
          sumar: 0.85,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.45,
          cs: 0.05,
          upyd: 0.1,
          pp: 0.0,
          ucd: 0.2,
          vox: 0.1,
          salf: 0.1,
          nn: 0.2,
          fe_jons: 0.55,
          pacma: 0.8,
          d21: 0.05,
          iustitia: 0.1,
          fo: 0.7
        }
      },
      {
        id: 'opt-pen-blindaje-ipc-hucha',
        title: 'Blindaje por ley/constitucional del IPC y refuerzo del Fondo de Reserva',
        description:
          'Asegurar la revalorización anual automática según el IPC, fortalecer el Fondo de Reserva mediante cotizaciones e incentivar el retraso voluntario del retiro.',
        representativeParties: ['psoe', 'sumar', 'pacma', 'ucd'],
        partyWeights: {
          sumar: 0.95,
          podemos: 0.7,
          iu: 0.8,
          pce: 0.6,
          psoe: 1.0,
          cs: 0.35,
          upyd: 0.4,
          pp: 0.4,
          ucd: 0.9,
          vox: 0.15,
          salf: 0.15,
          nn: 0.1,
          fe_jons: 0.25,
          pacma: 0.95,
          d21: 0.45,
          iustitia: 0.2,
          fo: 0.35
        }
      },
      {
        id: 'opt-pen-actuarial-ahorro-mixto',
        title: 'Cuentas individuales transparentes, caja única y ahorro complementario',
        description:
          'Informar de lo cotizado mediante cuentas nocionales, sostener la caja única vía mayor tasa de empleo e impulsar planes complementarios de empleo y ahorro.',
        representativeParties: ['pp', 'cs', 'd21', 'upyd'],
        partyWeights: {
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.3,
          cs: 1.0,
          upyd: 1.0,
          pp: 1.0,
          ucd: 0.7,
          vox: 0.55,
          salf: 0.55,
          nn: 0.1,
          fe_jons: 0.05,
          pacma: 0.15,
          d21: 1.0,
          iustitia: 0.55,
          fo: 0.1
        }
      },
      {
        id: 'opt-pen-auditoria-fin-vitalicias',
        title: 'Auditoría de la Seguridad Social y fin de pensiones vitalicias políticas',
        description:
          'Auditar las cuentas de la Seguridad Social, eliminar pensiones especiales o vitalicias de cargos públicos y recortar gasto político para sostener las pensiones.',
        representativeParties: ['iustitia', 'salf', 'vox'],
        partyWeights: {
          sumar: 0.1,
          podemos: 0.1,
          iu: 0.1,
          pce: 0.05,
          psoe: 0.05,
          cs: 0.5,
          upyd: 0.7,
          pp: 0.4,
          ucd: 0.15,
          vox: 0.85,
          salf: 1.0,
          nn: 0.35,
          fe_jons: 0.35,
          pacma: 0.2,
          d21: 0.65,
          iustitia: 1.0,
          fo: 0.45
        }
      },
      {
        id: 'opt-pen-natalidad-65-nacional',
        title: 'Sostener pensiones con natalidad nacional, industria y vuelta a los 65 años',
        description:
          'Rechazar la inmigración como parche demográfico, recuperar la jubilación a los 65 años (y anticipada por penosidad) y garantizar pensiones mediante natalidad e industria.',
        representativeParties: ['fo', 'fe_jons', 'nn', 'vox'],
        partyWeights: {
          sumar: 0.15,
          podemos: 0.2,
          iu: 0.2,
          pce: 0.3,
          psoe: 0.05,
          cs: 0.05,
          upyd: 0.15,
          pp: 0.2,
          ucd: 0.1,
          vox: 0.8,
          salf: 0.65,
          nn: 1.0,
          fe_jons: 1.0,
          pacma: 0.05,
          d21: 0.1,
          iustitia: 0.4,
          fo: 1.0
        }
      }
    ]
  },

  {
    id: 'q-regeneracion-corrupcion',
    topicId: 'regeneracion_justicia',
    title: '6. Control de la corrupción, aforamientos y gasto político',
    questionText:
      '¿Qué instrumento concreto considera más eficaz para combatir la corrupción y el abuso institucional?',
    contextNote:
      'Distingue entre controles tecnológicos y auditorías administrativas, empoderamiento ciudadano en los tribunales, sanciones punitivas extremas o reformas de incompatibilidad.',
    options: [
      {
        id: 'opt-reg-auditoria-igae',
        title: 'IGAE con inteligencia artificial, juzgados anticorrupción y cese sin PGE',
        description:
          'Blindar por 6 años al interventor general con cruce de datos por IA, crear juzgados anticorrupción, tipificar el enchufismo y cesar al Gobierno tras un año sin PGE.',
        representativeParties: ['d21', 'cs'],
        partyWeights: {
          sumar: 0.35,
          podemos: 0.3,
          iu: 0.3,
          pce: 0.25,
          psoe: 0.35,
          cs: 1.0,
          upyd: 0.85,
          pp: 0.55,
          ucd: 0.5,
          vox: 0.45,
          salf: 0.55,
          nn: 0.15,
          fe_jons: 0.2,
          pacma: 0.45,
          d21: 1.0,
          iustitia: 0.75,
          fo: 0.25
        }
      },
      {
        id: 'opt-reg-accion-popular-sin-subvenciones',
        title: 'Blindar la Acción Popular ciudadana (Art. 125 CE) y suprimir subvenciones a partidos',
        description:
          'Garantizar constitucionalmente la acusación popular ciudadana, abolir la financiación pública de partidos políticos, suprimir aforamientos y limitar mandatos.',
        representativeParties: ['iustitia', 'upyd', 'fo'],
        partyWeights: {
          sumar: 0.25,
          podemos: 0.3,
          iu: 0.25,
          pce: 0.2,
          psoe: 0.1,
          cs: 0.65,
          upyd: 0.85,
          pp: 0.35,
          ucd: 0.25,
          vox: 0.7,
          salf: 0.8,
          nn: 0.5,
          fe_jons: 0.65,
          pacma: 0.55,
          d21: 0.7,
          iustitia: 1.0,
          fo: 0.8
        }
      },
      {
        id: 'opt-reg-macrocarcel-penalizacion',
        title: 'Delitos imprescriptibles, triple devolución, premio al denunciante y macrocárcel',
        description:
          'Imprescriptibilidad de la corrupción, obligación de devolver el triple, 15% de recompensa al alertador, prisión de máxima seguridad y bloqueo de sueldo si incumple.',
        representativeParties: ['salf', 'vox', 'nn'],
        partyWeights: {
          sumar: 0.1,
          podemos: 0.15,
          iu: 0.1,
          pce: 0.1,
          psoe: 0.05,
          cs: 0.45,
          upyd: 0.45,
          pp: 0.4,
          ucd: 0.1,
          vox: 0.75,
          salf: 1.0,
          nn: 0.75,
          fe_jons: 0.7,
          pacma: 0.2,
          d21: 0.5,
          iustitia: 0.75,
          fo: 0.65
        }
      },
      {
        id: 'opt-reg-puertas-giratorias-medios',
        title: 'Prohibir puertas giratorias, regular lobbies y proteger a informantes',
        description:
          'Vetar durante 10 años el paso de altos cargos a empresas reguladas, crear registro obligatorio de grupos de presión y reforzar oficinas antifraude.',
        representativeParties: ['podemos', 'sumar', 'iu', 'pce', 'psoe', 'fo'],
        partyWeights: {
          sumar: 1.0,
          podemos: 1.0,
          iu: 1.0,
          pce: 0.95,
          psoe: 0.85,
          cs: 0.55,
          upyd: 0.75,
          pp: 0.35,
          ucd: 0.45,
          vox: 0.3,
          salf: 0.4,
          nn: 0.25,
          fe_jons: 0.35,
          pacma: 0.75,
          d21: 0.65,
          iustitia: 0.55,
          fo: 0.9
        }
      },
      {
        id: 'opt-reg-organica-antisistema',
        title: 'Sustituir la democracia de partidos por representación orgánica directa',
        description:
          'Superar el sistema parlamentario de partidos mediante representación directa a través de familia, municipio y sindicato productivo o revocación directa.',
        representativeParties: ['fe_jons', 'nn'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.05,
          iu: 0.05,
          pce: 0.15,
          psoe: 0.0,
          cs: 0.0,
          upyd: 0.0,
          pp: 0.0,
          ucd: 0.0,
          vox: 0.25,
          salf: 0.35,
          nn: 0.95,
          fe_jons: 1.0,
          pacma: 0.0,
          d21: 0.0,
          iustitia: 0.45,
          fo: 0.55
        }
      }
    ]
  },

  {
    id: 'q-regeneracion-justicia-voto',
    topicId: 'regeneracion_justicia',
    title: '7. Elección del Poder Judicial (CGPJ) y reforma de la Ley Electoral',
    questionText:
      '¿Cómo deben elegirse el Consejo General del Poder Judicial (CGPJ) y los representantes en el Congreso?',
    contextNote:
      'Aborda dos reformas clave sobre separación de poderes y calidad representativa: el método de designación judicial y las listas electorales.',
    options: [
      {
        id: 'opt-jud-jueces-listas-abiertas',
        title: 'Elección directa del CGPJ por los jueces y listas abiertas y desbloqueadas',
        description:
          'Que los jueces elijan directamente a los vocales del CGPJ, el Fiscal General pase terna parlamentaria y las listas de partido pasen a ser abiertas.',
        representativeParties: ['d21', 'cs', 'upyd', 'pp'],
        partyWeights: {
          sumar: 0.2,
          podemos: 0.1,
          iu: 0.15,
          pce: 0.1,
          psoe: 0.15,
          cs: 1.0,
          upyd: 1.0,
          pp: 0.85,
          ucd: 0.55,
          vox: 0.7,
          salf: 0.65,
          nn: 0.15,
          fe_jons: 0.1,
          pacma: 0.45,
          d21: 1.0,
          iustitia: 0.8,
          fo: 0.2
        }
      },
      {
        id: 'opt-jud-eleccion-directa-presidente',
        title: 'Elección directa del Presidente del Gobierno, referéndums vinculantes y CGPJ judicial',
        description:
          'Separar radicalmente Ejecutivo y Legislativo eligiendo al Presidente en urna directa, CGPJ por jueces y decisiones clave por referéndum vinculante.',
        representativeParties: ['iustitia', 'salf'],
        partyWeights: {
          sumar: 0.15,
          podemos: 0.15,
          iu: 0.15,
          pce: 0.1,
          psoe: 0.05,
          cs: 0.55,
          upyd: 0.6,
          pp: 0.35,
          ucd: 0.15,
          vox: 0.6,
          salf: 0.9,
          nn: 0.3,
          fe_jons: 0.2,
          pacma: 0.35,
          d21: 0.6,
          iustitia: 1.0,
          fo: 0.45
        }
      },
      {
        id: 'opt-jud-proporcionalidad-pura',
        title: 'Circunscripción única o proporcionalidad pura sin barreras a partidos pequeños',
        description:
          'Reformar la Ley Electoral para que cada voto valga exactamente lo mismo en todo el país, eliminando sobrerrepresentación de circunscripciones.',
        representativeParties: ['pacma', 'iu', 'upyd', 'pce'],
        partyWeights: {
          sumar: 0.65,
          podemos: 0.7,
          iu: 0.95,
          pce: 0.95,
          psoe: 0.25,
          cs: 0.7,
          upyd: 1.0,
          pp: 0.1,
          ucd: 0.25,
          vox: 0.25,
          salf: 0.55,
          nn: 0.2,
          fe_jons: 0.2,
          pacma: 1.0,
          d21: 0.65,
          iustitia: 0.6,
          fo: 0.7
        }
      },
      {
        id: 'opt-jud-desbloqueo-parlamentario',
        title: 'Elección parlamentaria con mayorías de desbloqueo y acceso becado a la judicatura',
        description:
          'Mantener la legitimidad democrática parlamentaria en la designación del CGPJ evitando bloqueos por minorías y democratizando oposiciones judiciales.',
        representativeParties: ['psoe', 'sumar', 'podemos', 'iu'],
        partyWeights: {
          sumar: 1.0,
          podemos: 1.0,
          iu: 0.9,
          pce: 0.85,
          psoe: 1.0,
          cs: 0.2,
          upyd: 0.2,
          pp: 0.1,
          ucd: 0.5,
          vox: 0.05,
          salf: 0.05,
          nn: 0.0,
          fe_jons: 0.0,
          pacma: 0.45,
          d21: 0.2,
          iustitia: 0.05,
          fo: 0.2
        }
      }
    ]
  },

  {
    id: 'q-sanidad-gestion',
    topicId: 'sanidad',
    title: '8. Gestión del Sistema Nacional de Salud y listas de espera',
    questionText:
      '¿Qué modelo de gestión y cobertura sanitaria debe aplicarse en España?',
    contextNote:
      'Distingue entre desprivatización completa, gestión mixta con conciertos, devolución de la sanidad al Estado central o profesionalización digital.',
    options: [
      {
        id: 'opt-san-100-publica-cartera',
        title: 'Sanidad 100% pública sin conciertos privados, odontología, salud mental y farmacéutica pública',
        description:
          'Derogar la Ley 15/1997, rescatar concesiones hospitalarias privadas, ampliar cartera dental/psicológica y crear una farmacéutica estatal.',
        representativeParties: ['podemos', 'iu', 'pce', 'sumar', 'pacma'],
        partyWeights: {
          sumar: 0.95,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.65,
          cs: 0.1,
          upyd: 0.2,
          pp: 0.05,
          ucd: 0.25,
          vox: 0.1,
          salf: 0.1,
          nn: 0.2,
          fe_jons: 0.5,
          pacma: 0.95,
          d21: 0.2,
          iustitia: 0.2,
          fo: 0.75
        }
      },
      {
        id: 'opt-san-refuerzo-autonomico',
        title: 'Refuerzo de atención primaria, más plazas MIR y salud mental en el SNS',
        description:
          'Aumentar plazas MIR de familia, financiar planes de choque para listas de espera, reforzar salud mental y limitar nuevas privatizaciones.',
        representativeParties: ['psoe', 'ucd'],
        partyWeights: {
          sumar: 0.85,
          podemos: 0.6,
          iu: 0.7,
          pce: 0.55,
          psoe: 1.0,
          cs: 0.55,
          upyd: 0.4,
          pp: 0.5,
          ucd: 0.9,
          vox: 0.2,
          salf: 0.25,
          nn: 0.1,
          fe_jons: 0.25,
          pacma: 0.75,
          d21: 0.65,
          iustitia: 0.3,
          fo: 0.35
        }
      },
      {
        id: 'opt-san-colaboracion-privada',
        title: 'Colaboración público-privada, tarjeta única interoperable y dirección profesional',
        description:
          'Apoyarse en conciertos privados para reducir listas de espera, unificar la tarjeta e historial clínico digital y seleccionar gerentes por mérito.',
        representativeParties: ['pp', 'cs', 'd21'],
        partyWeights: {
          sumar: 0.1,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.35,
          cs: 1.0,
          upyd: 0.65,
          pp: 1.0,
          ucd: 0.7,
          vox: 0.55,
          salf: 0.5,
          nn: 0.1,
          fe_jons: 0.05,
          pacma: 0.2,
          d21: 0.95,
          iustitia: 0.5,
          fo: 0.05
        }
      },
      {
        id: 'opt-san-centralizada-compras',
        title: 'Central única de compras, devolución al Estado o plazo máximo de 60 días',
        description:
          'Recentralizar el Sistema Nacional de Salud suprimiendo 17 consejerías, centralizar compras médicas y garantizar plazos máximos de cirugía y sueldos europeos.',
        representativeParties: ['vox', 'salf', 'upyd', 'fo', 'fe_jons', 'nn'],
        partyWeights: {
          sumar: 0.15,
          podemos: 0.15,
          iu: 0.15,
          pce: 0.25,
          psoe: 0.15,
          cs: 0.55,
          upyd: 0.95,
          pp: 0.4,
          ucd: 0.2,
          vox: 1.0,
          salf: 1.0,
          nn: 0.85,
          fe_jons: 0.9,
          pacma: 0.2,
          d21: 0.5,
          iustitia: 0.65,
          fo: 0.9
        }
      }
    ]
  },

  {
    id: 'q-educacion-modelo',
    topicId: 'educacion',
    title: '9. Red educativa, lengua vehicular y prueba universitaria',
    questionText:
      '¿Qué política educativa y lingüística debe regir en colegios y universidades?',
    contextNote:
      'Contrasta la prioridad exclusiva por la escuela pública y laicidad frente a los conciertos escolares, el cheque escolar o la EBAU única y castellano común.',
    options: [
      {
        id: 'opt-edu-publica-laica-unica',
        title: 'Supresión de conciertos, escuela pública única y laica, y gratuidad 0-3 años',
        description:
          'Destinar todo el presupuesto público a centros públicos, retirar religión confesional de las aulas, bajar ratios y garantizar becas salario.',
        representativeParties: ['podemos', 'iu', 'pce', 'pacma', 'sumar'],
        partyWeights: {
          sumar: 0.9,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.6,
          cs: 0.1,
          upyd: 0.25,
          pp: 0.0,
          ucd: 0.2,
          vox: 0.0,
          salf: 0.0,
          nn: 0.1,
          fe_jons: 0.25,
          pacma: 0.95,
          d21: 0.15,
          iustitia: 0.05,
          fo: 0.6
        }
      },
      {
        id: 'opt-edu-equilibrio-fp-becas',
        title: 'Convivencia pública-concertada con prioridad pública, FP dual y récord de becas',
        description:
          'Ampliar plazas gratuitas de 0 a 3 años, impulsar la FP dual, mantener conciertos regulados y respetar las competencias lingüísticas autonómicas.',
        representativeParties: ['psoe', 'ucd'],
        partyWeights: {
          sumar: 0.7,
          podemos: 0.4,
          iu: 0.45,
          pce: 0.3,
          psoe: 1.0,
          cs: 0.55,
          upyd: 0.35,
          pp: 0.5,
          ucd: 0.95,
          vox: 0.1,
          salf: 0.1,
          nn: 0.05,
          fe_jons: 0.15,
          pacma: 0.6,
          d21: 0.65,
          iustitia: 0.2,
          fo: 0.2
        }
      },
      {
        id: 'opt-edu-ebau-unica-bilingue',
        title: 'EBAU única nacional, libertad de centro concertado y derecho al castellano',
        description:
          'Establecer prueba de acceso universitaria idéntica en toda España, proteger la enseñanza concertada y garantizar escolarización en castellano e inglés.',
        representativeParties: ['pp', 'cs', 'upyd', 'd21'],
        partyWeights: {
          sumar: 0.1,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.25,
          cs: 1.0,
          upyd: 0.95,
          pp: 1.0,
          ucd: 0.65,
          vox: 0.75,
          salf: 0.75,
          nn: 0.3,
          fe_jons: 0.35,
          pacma: 0.15,
          d21: 0.9,
          iustitia: 0.6,
          fo: 0.4
        }
      },
      {
        id: 'opt-edu-cheque-pin-recentralizada',
        title: 'Cheque escolar universal, ley estatal única y fin de contenidos ideológicos',
        description:
          'Devolver Educación al Estado central, implantar cheque escolar ("el dinero sigue al alumno"), única lengua vehicular común y autorización parental.',
        representativeParties: ['vox', 'salf', 'iustitia', 'nn'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.05,
          cs: 0.45,
          upyd: 0.55,
          pp: 0.65,
          ucd: 0.2,
          vox: 1.0,
          salf: 0.95,
          nn: 0.85,
          fe_jons: 0.75,
          pacma: 0.05,
          d21: 0.4,
          iustitia: 0.95,
          fo: 0.45
        }
      },
      {
        id: 'opt-edu-estatal-unica-tecnica',
        title: 'Escuela pública estatal única y gratuita con currículo científico común',
        description:
          'Devolver Educación al Estado pero suprimiendo conciertos privados para crear una red pública única, laica, exigente y ligada a la industria.',
        representativeParties: ['fo', 'upyd', 'fe_jons'],
        partyWeights: {
          sumar: 0.35,
          podemos: 0.4,
          iu: 0.45,
          pce: 0.55,
          psoe: 0.25,
          cs: 0.3,
          upyd: 0.75,
          pp: 0.2,
          ucd: 0.15,
          vox: 0.3,
          salf: 0.25,
          nn: 0.5,
          fe_jons: 0.8,
          pacma: 0.35,
          d21: 0.35,
          iustitia: 0.3,
          fo: 1.0
        }
      }
    ]
  },

  {
    id: 'q-inmigracion-fronteras',
    topicId: 'inmigracion',
    title: '10. Política migratoria, regularizaciones y control de flujos',
    questionText:
      '¿Qué criterio debe regir la entrada, regularización y residencia de personas extranjeras en España?',
    contextNote:
      'Distingue específicamente el modelo migratorio (regularización, arraigo laboral, visados en origen, expulsión o remigración) de la política policial y penal interna.',
    options: [
      {
        id: 'opt-inm-regularizacion-cie',
        title: 'Regularización extraordinaria, cierre de los CIEs y vías seguras de asilo',
        description:
          'Regularizar a las personas extranjeras que residen en España, cerrar los Centros de Internamiento de Extranjeros y garantizar vías legales de acogida.',
        representativeParties: ['podemos', 'sumar', 'iu', 'pce', 'pacma'],
        partyWeights: {
          sumar: 1.0,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.6,
          cs: 0.15,
          upyd: 0.15,
          pp: 0.0,
          ucd: 0.3,
          vox: 0.0,
          salf: 0.0,
          nn: 0.0,
          fe_jons: 0.0,
          pacma: 1.0,
          d21: 0.2,
          iustitia: 0.05,
          fo: 0.05
        }
      },
      {
        id: 'opt-inm-arraigo-cooperacion',
        title: 'Migración regular ligada al empleo, arraigo y acuerdos con países de origen',
        description:
          'Facilitar vías ordenadas de arraigo laboral y formación en sectores deficitarios junto a cooperación económica con países emisores.',
        representativeParties: ['psoe', 'd21', 'cs', 'ucd'],
        partyWeights: {
          sumar: 0.55,
          podemos: 0.3,
          iu: 0.4,
          pce: 0.3,
          psoe: 1.0,
          cs: 0.85,
          upyd: 0.75,
          pp: 0.5,
          ucd: 0.9,
          vox: 0.05,
          salf: 0.05,
          nn: 0.0,
          fe_jons: 0.05,
          pacma: 0.5,
          d21: 0.95,
          iustitia: 0.25,
          fo: 0.15
        }
      },
      {
        id: 'opt-inm-origen-multirreincidencia',
        title: 'Sin regularizaciones masivas, contratos en origen y visados por cualificación',
        description:
          'Rechazar regularizaciones extraordinarias, exigir contrato previo en país de origen o sistema por puntos y aplicar el pacto europeo de retornos.',
        representativeParties: ['pp', 'upyd', 'cs'],
        partyWeights: {
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.35,
          cs: 0.9,
          upyd: 0.95,
          pp: 1.0,
          ucd: 0.55,
          vox: 0.55,
          salf: 0.5,
          nn: 0.2,
          fe_jons: 0.35,
          pacma: 0.05,
          d21: 0.85,
          iustitia: 0.65,
          fo: 0.45
        }
      },
      {
        id: 'opt-inm-expulsion-armada',
        title: 'Expulsión rápida de irregulares y bloqueo a países que no repatríen',
        description:
          'Deportar de forma ágil a inmigrantes en situación irregular o condenados por delito, suspender visados a países no cooperantes y vetar regularizaciones.',
        representativeParties: ['vox', 'salf', 'fo', 'iustitia', 'fe_jons'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.05,
          cs: 0.15,
          upyd: 0.25,
          pp: 0.55,
          ucd: 0.1,
          vox: 1.0,
          salf: 1.0,
          nn: 0.75,
          fe_jons: 0.95,
          pacma: 0.0,
          d21: 0.2,
          iustitia: 0.95,
          fo: 1.0
        }
      },
      {
        id: 'opt-inm-remigracion-etnonacional',
        title: 'Cierre total a inmigración extracomunitaria y programas de repatriación masiva',
        description:
          'Detener por completo la inmigración de fuera de Europa, rechazar el multiculturalismo y ejecutar planes estatales de remigración identitaria.',
        representativeParties: ['nn', 'fe_jons'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.0,
          cs: 0.0,
          upyd: 0.05,
          pp: 0.15,
          ucd: 0.0,
          vox: 0.6,
          salf: 0.5,
          nn: 1.0,
          fe_jons: 0.85,
          pacma: 0.0,
          d21: 0.0,
          iustitia: 0.35,
          fo: 0.55
        }
      }
    ]
  },

  {
    id: 'q-seguridad-orden',
    topicId: 'seguridad',
    title: '11. Seguridad ciudadana, Código Penal y modelo policial',
    questionText:
      '¿Qué medidas concretas deben priorizarse en seguridad pública, fronteras y política penitenciaria?',
    contextNote:
      'Contrapone la derogación de la Ley Mordaza y seguridad preventiva frente al endurecimiento contra la multirreincidencia, prisiones de máxima seguridad o despliegue militar.',
    options: [
      {
        id: 'opt-seg-derogar-mordaza-proximidad',
        title: 'Derogar la Ley Mordaza, policía de proximidad y prevención social',
        description:
          'Suprimir los artículos sancionadores de la Ley de Seguridad Ciudadana, potenciar la policía comunitaria y reforzar recursos contra violencia machista y delitos de odio.',
        representativeParties: ['podemos', 'iu', 'pce', 'sumar', 'pacma'],
        partyWeights: {
          sumar: 1.0,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.55,
          cs: 0.1,
          upyd: 0.25,
          pp: 0.0,
          ucd: 0.3,
          vox: 0.0,
          salf: 0.0,
          nn: 0.0,
          fe_jons: 0.0,
          pacma: 1.0,
          d21: 0.15,
          iustitia: 0.35,
          fo: 0.05
        }
      },
      {
        id: 'opt-seg-plantillas-ciber-viogen',
        title: 'Ampliar plantillas de Policía y Guardia Civil, ciberseguridad y medios técnicos',
        description:
          'Incrementar efectivos y medios contra narcotráfico, ciberdelincuencia y violencia de género manteniendo garantías procesales y respaldo institucional.',
        representativeParties: ['psoe', 'd21', 'ucd'],
        partyWeights: {
          sumar: 0.45,
          podemos: 0.2,
          iu: 0.3,
          pce: 0.15,
          psoe: 1.0,
          cs: 0.8,
          upyd: 0.7,
          pp: 0.65,
          ucd: 0.95,
          vox: 0.25,
          salf: 0.2,
          nn: 0.05,
          fe_jons: 0.15,
          pacma: 0.5,
          d21: 1.0,
          iustitia: 0.45,
          fo: 0.3
        }
      },
      {
        id: 'opt-seg-multirreincidencia-equiparacion',
        title: 'Agravante penal de multirreincidencia, equiparación salarial y mando estatal',
        description:
          'Endurecer el Código Penal frente a hurtos reiterados y desórdenes graves, equiparar salarios policiales, reconocer profesión de riesgo y despolitizar cúpulas.',
        representativeParties: ['pp', 'cs', 'upyd', 'iustitia'],
        partyWeights: {
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.35,
          cs: 1.0,
          upyd: 1.0,
          pp: 1.0,
          ucd: 0.55,
          vox: 0.75,
          salf: 0.65,
          nn: 0.3,
          fe_jons: 0.45,
          pacma: 0.1,
          d21: 0.85,
          iustitia: 0.9,
          fo: 0.65
        }
      },
      {
        id: 'opt-seg-macrocarcel-armada-defensa',
        title: 'Macrocárcel sin tercer grado, legítima defensa y despliegue militar fronterizo',
        description:
          'Construir prisión de máxima seguridad o ampliar cadena perpetua, reforzar la legítima defensa en el hogar y desplegar a las Fuerzas Armadas en Estrecho, Ceuta y Melilla.',
        representativeParties: ['salf', 'vox', 'fe_jons', 'nn', 'fo'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.05,
          cs: 0.15,
          upyd: 0.2,
          pp: 0.45,
          ucd: 0.05,
          vox: 1.0,
          salf: 1.0,
          nn: 0.95,
          fe_jons: 0.95,
          pacma: 0.0,
          d21: 0.15,
          iustitia: 0.6,
          fo: 0.9
        }
      }
    ]
  },

  {
    id: 'q-modelo-estado',
    topicId: 'modelo_estado',
    title: '12. Organización territorial del Estado y Jefatura del Estado',
    questionText:
      '¿Qué modelo territorial y forma de Estado debe regir la estructura institucional española?',
    contextNote:
      'Define el reparto de poder entre Gobierno central y autonomías: República federal plurinacional, Estado autonómico constitucional, racionalización o Estado unitario.',
    options: [
      {
        id: 'opt-est-republica-federal-plurinacional',
        title: 'República Federal y Plurinacional con derecho a decidir pactado',
        description:
          'Superar la Monarquía mediante referéndum, construir una República federal solidaria y reconocer referéndums pactados y cooficialidad plena.',
        representativeParties: ['podemos', 'iu', 'pce', 'sumar'],
        partyWeights: {
          sumar: 0.9,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.4,
          cs: 0.0,
          upyd: 0.0,
          pp: 0.0,
          ucd: 0.05,
          vox: 0.0,
          salf: 0.0,
          nn: 0.0,
          fe_jons: 0.0,
          pacma: 0.45,
          d21: 0.05,
          iustitia: 0.1,
          fo: 0.15
        }
      },
      {
        id: 'opt-est-autonomico-cooperativo',
        title: 'Estado de las Autonomías cooperativo dentro de la Constitución de 1978',
        description:
          'Mantener la arquitectura autonómica constitucional mejorando conferencias sectoriales, financiación solidaria y convivencia lingüística sin referéndums secesionistas.',
        representativeParties: ['psoe', 'ucd', 'pacma'],
        partyWeights: {
          sumar: 0.65,
          podemos: 0.25,
          iu: 0.35,
          pce: 0.2,
          psoe: 1.0,
          cs: 0.55,
          upyd: 0.25,
          pp: 0.65,
          ucd: 1.0,
          vox: 0.05,
          salf: 0.1,
          nn: 0.0,
          fe_jons: 0.0,
          pacma: 0.8,
          d21: 0.75,
          iustitia: 0.25,
          fo: 0.05
        }
      },
      {
        id: 'opt-est-constitucional-sin-privilegios',
        title: 'Constitucionalismo común sin cupos asimétricos ni duplicidades provinciales',
        description:
          'Preservar las autonomías constitucionales eliminando diputaciones duplicadas, garantizando la unidad de mercado y rechazando financiaciones singulares.',
        representativeParties: ['pp', 'cs', 'd21', 'upyd'],
        partyWeights: {
          sumar: 0.15,
          podemos: 0.05,
          iu: 0.05,
          pce: 0.0,
          psoe: 0.4,
          cs: 1.0,
          upyd: 0.85,
          pp: 0.95,
          ucd: 0.75,
          vox: 0.45,
          salf: 0.55,
          nn: 0.15,
          fe_jons: 0.15,
          pacma: 0.35,
          d21: 1.0,
          iustitia: 0.65,
          fo: 0.25
        }
      },
      {
        id: 'opt-est-recentralizacion-competencias',
        title: 'Devolución de Sanidad, Educación y Justicia al Estado central o República unitaria',
        description:
          'Revertir la descentralización recuperando competencias esenciales para garantizar igualdad en las 52 provincias y suprimir entes regionales redundantes.',
        representativeParties: ['upyd', 'salf', 'fo', 'iustitia'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.05,
          cs: 0.45,
          upyd: 1.0,
          pp: 0.35,
          ucd: 0.1,
          vox: 0.8,
          salf: 0.95,
          nn: 0.65,
          fe_jons: 0.7,
          pacma: 0.15,
          d21: 0.45,
          iustitia: 0.85,
          fo: 0.95
        }
      },
      {
        id: 'opt-est-unitario-abolicion-autonomias',
        title: 'Estado unitario centralizado con abolición total de parlamentos autonómicos',
        description:
          'Suprimir las 17 comunidades autónomas y sus parlamentos para instaurar un Estado unitario centralizado e ilegalizar los partidos separatistas.',
        representativeParties: ['vox', 'fe_jons', 'nn', 'fo'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.0,
          cs: 0.05,
          upyd: 0.3,
          pp: 0.15,
          ucd: 0.0,
          vox: 1.0,
          salf: 0.7,
          nn: 1.0,
          fe_jons: 1.0,
          pacma: 0.0,
          d21: 0.1,
          iustitia: 0.55,
          fo: 0.85
        }
      }
    ]
  },

  {
    id: 'q-energia-campo',
    topicId: 'energia_campo',
    title: '13. Energía nuclear, cambio climático, campo y protección animal',
    questionText:
      '¿Qué prioridad energética, medioambiental y agraria considera acertada para España?',
    contextNote:
      'Aborda la continuidad o cierre de centrales nucleares, la aplicación del Pacto Verde Europeo en agricultura y ganadería, y las leyes de bienestar animal.',
    options: [
      {
        id: 'opt-ene-animalista-macrogranjas',
        title: 'Transición verde urgente, cierre nuclear, fin de macrogranjas, caza y tauromaquia',
        description:
          'Acelerar el mix 100% renovable, prohibir las macrogranjas industriales, abolir la tauromaquia y la caza deportiva, y proteger estrictamente la fauna silvestre.',
        representativeParties: ['pacma', 'sumar', 'podemos', 'iu'],
        partyWeights: {
          sumar: 0.9,
          podemos: 0.95,
          iu: 0.9,
          pce: 0.75,
          psoe: 0.55,
          cs: 0.1,
          upyd: 0.15,
          pp: 0.0,
          ucd: 0.15,
          vox: 0.0,
          salf: 0.0,
          nn: 0.0,
          fe_jons: 0.0,
          pacma: 1.0,
          d21: 0.15,
          iustitia: 0.05,
          fo: 0.1
        }
      },
      {
        id: 'opt-ene-cierre-nuclear-pacto-verde',
        title: 'Cierre nuclear programado (2027-2035), renovables y modernización agraria verde',
        description:
          'Mantener el calendario de cierre nuclear, impulsar renovables e hidrógeno verde y cumplir el Pacto Verde Europeo apoyando regadíos sostenibles.',
        representativeParties: ['psoe', 'sumar', 'iu', 'pce'],
        partyWeights: {
          sumar: 0.95,
          podemos: 0.85,
          iu: 0.95,
          pce: 0.9,
          psoe: 1.0,
          cs: 0.3,
          upyd: 0.25,
          pp: 0.15,
          ucd: 0.45,
          vox: 0.0,
          salf: 0.05,
          nn: 0.05,
          fe_jons: 0.1,
          pacma: 0.85,
          d21: 0.45,
          iustitia: 0.05,
          fo: 0.15
        }
      },
      {
        id: 'opt-ene-neutralidad-tecnologica-nuclear',
        title: 'Prórroga de centrales nucleares, renovables eficientes y flexibilizar la PAC',
        description:
          'Alargar la vida de los reactores nucleares como respaldo barato, combinar renovables competitivas, ejecutar obras hidráulicas y reducir trabas al campo.',
        representativeParties: ['pp', 'd21', 'cs', 'upyd', 'ucd'],
        partyWeights: {
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.05,
          psoe: 0.25,
          cs: 1.0,
          upyd: 1.0,
          pp: 1.0,
          ucd: 0.85,
          vox: 0.65,
          salf: 0.65,
          nn: 0.35,
          fe_jons: 0.45,
          pacma: 0.05,
          d21: 1.0,
          iustitia: 0.55,
          fo: 0.55
        }
      },
      {
        id: 'opt-ene-derogar-agenda2030',
        title: 'Derogar Agenda 2030 y Pacto Verde, energía nuclear fuerte y aranceles agrarios',
        description:
          'Suprimir normativas climáticas europeas que encarecen el campo y la industria, construir o blindar nucleares e imponer aranceles frente a importaciones agrarias.',
        representativeParties: ['vox', 'salf', 'fo', 'iustitia', 'nn', 'fe_jons'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.05,
          psoe: 0.0,
          cs: 0.15,
          upyd: 0.2,
          pp: 0.5,
          ucd: 0.1,
          vox: 1.0,
          salf: 1.0,
          nn: 1.0,
          fe_jons: 0.95,
          pacma: 0.0,
          d21: 0.2,
          iustitia: 0.95,
          fo: 1.0
        }
      }
    ]
  },

  {
    id: 'q-exterior-ue',
    topicId: 'exterior_ue',
    title: '14. Unión Europea, soberanía nacional, OTAN y política exterior',
    questionText:
      '¿Qué posición debe mantener España ante la Unión Europea y las alianzas militares internacionales?',
    contextNote:
      'Resume la elección entre mayor integración federal europea y OTAN, Europa social sin rearme, renegociación soberanista o salida de la UE y OTAN.',
    options: [
      {
        id: 'opt-ext-europeismo-otan-2pct',
        title: 'Europeísmo federalizante, mercado único y cumplimiento del 2% en la OTAN',
        description:
          'Profundizar en la integración fiscal y defensiva de la Unión Europea, impulsar la competitividad y cumplir los compromisos estratégicos en la OTAN.',
        representativeParties: ['psoe', 'pp', 'cs', 'd21', 'upyd', 'ucd'],
        partyWeights: {
          sumar: 0.35,
          podemos: 0.05,
          iu: 0.05,
          pce: 0.0,
          psoe: 1.0,
          cs: 1.0,
          upyd: 1.0,
          pp: 1.0,
          ucd: 1.0,
          vox: 0.35,
          salf: 0.2,
          nn: 0.0,
          fe_jons: 0.0,
          pacma: 0.3,
          d21: 1.0,
          iustitia: 0.15,
          fo: 0.0
        }
      },
      {
        id: 'opt-ext-europa-social-sin-rearme',
        title: 'Unión Europea social y pacífica sin escalada militar ni austeridad',
        description:
          'Permanecer en la UE reformando el Pacto de Estabilidad y el BCE hacia inversión social y verde, rechazando aumentar el gasto militar del 2%.',
        representativeParties: ['sumar', 'pacma', 'psoe'],
        partyWeights: {
          sumar: 1.0,
          podemos: 0.6,
          iu: 0.65,
          pce: 0.4,
          psoe: 0.6,
          cs: 0.3,
          upyd: 0.3,
          pp: 0.15,
          ucd: 0.4,
          vox: 0.05,
          salf: 0.1,
          nn: 0.0,
          fe_jons: 0.05,
          pacma: 0.95,
          d21: 0.35,
          iustitia: 0.1,
          fo: 0.1
        }
      },
      {
        id: 'opt-ext-no-otan-pacifista',
        title: 'Salida de la OTAN, cierre de bases estadounidenses y desarme internacional',
        description:
          'Abandonar la alianza militar atlántica y cerrar las bases de Rota y Morón, priorizando el desarme, la cooperación internacional y una Europa de los pueblos.',
        representativeParties: ['podemos', 'iu', 'pce'],
        partyWeights: {
          sumar: 0.5,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.05,
          cs: 0.0,
          upyd: 0.0,
          pp: 0.0,
          ucd: 0.0,
          vox: 0.1,
          salf: 0.2,
          nn: 0.4,
          fe_jons: 0.55,
          pacma: 0.7,
          d21: 0.0,
          iustitia: 0.25,
          fo: 0.65
        }
      },
      {
        id: 'opt-ext-renegociar-ue-primacia',
        title: 'Primacía constitucional sobre Bruselas, referéndum de renegociación y firmeza exterior',
        description:
          'Someter las directivas de la UE a la Constitución española, renegociar las condiciones de pertenencia mediante referéndum y aplicar firmeza ante Marruecos.',
        representativeParties: ['vox', 'salf', 'iustitia'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.05,
          iu: 0.05,
          pce: 0.05,
          psoe: 0.05,
          cs: 0.1,
          upyd: 0.15,
          pp: 0.25,
          ucd: 0.05,
          vox: 1.0,
          salf: 1.0,
          nn: 0.6,
          fe_jons: 0.55,
          pacma: 0.05,
          d21: 0.1,
          iustitia: 1.0,
          fo: 0.6
        }
      },
      {
        id: 'opt-ext-salida-ue-otan-soberanista',
        title: 'Salida total de la Unión Europea y de la OTAN para recuperar soberanía plena',
        description:
          'Abandonar la UE, el euro y la OTAN para recuperar moneda, aranceles y fronteras propias, cerrando bases militares y trazando alianzas propias.',
        representativeParties: ['fo', 'nn', 'fe_jons'],
        partyWeights: {
          sumar: 0.0,
          podemos: 0.35,
          iu: 0.3,
          pce: 0.45,
          psoe: 0.0,
          cs: 0.0,
          upyd: 0.0,
          pp: 0.0,
          ucd: 0.0,
          vox: 0.4,
          salf: 0.55,
          nn: 1.0,
          fe_jons: 1.0,
          pacma: 0.0,
          d21: 0.0,
          iustitia: 0.55,
          fo: 1.0
        }
      }
    ]
  }
];
