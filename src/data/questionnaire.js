/**
 * 15 concrete policy-choice questions covering all 12 core axes.
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
        representativeParties: ['podemos', 'iu', 'pce', 'frente_amplio', 'sumar'],
        partyWeights: {
          frente_amplio: 0.95,
          sumar: 0.95,
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
          'Mantener tributos selectivos a banca/energéticas y un suelo mínimo del 15%-20% en Sociedades, evitando competencia fiscal a la baja en Patrimonio y Sucesiones.',
        representativeParties: ['psoe', 'frente_amplio', 'sumar', 'pacma', 'ucd'],
        partyWeights: {
          frente_amplio: 0.85,
          sumar: 0.85,
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
          'Someter cada programa público a auditoría de eficacia y coste, reducir burocracia a pymes («Test PYME») y aliviar la carga fiscal de forma sostenible.',
        representativeParties: ['d21', 'cs', 'upyd', 'ucd'],
        partyWeights: {
          frente_amplio: 0.15,
          sumar: 0.15,
          podemos: 0.05,
          iu: 0.05,
          pce: 0.0,
          psoe: 0.35,
          cs: 1.0,
          upyd: 0.9,
          pp: 0.8,
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
        title: 'Deflactar el IRPF, eximir a jóvenes primer año y aplicar IVA 0% en alimentos básicos',
        description:
          'Deflactar la tarifa del IRPF, eximir de IRPF al SMI y el primer año a jóvenes (18-35 años), aplicar IVA del 0% a alimentos básicos y rebajar Sucesiones y Patrimonio.',
        representativeParties: ['pp', 'vox', 'cs'],
        partyWeights: {
          frente_amplio: 0.05,
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.15,
          cs: 0.75,
          upyd: 0.55,
          pp: 1.0,
          ucd: 0.5,
          vox: 0.9,
          salf: 0.75,
          nn: 0.2,
          fe_jons: 0.1,
          pacma: 0.1,
          d21: 0.65,
          iustitia: 0.7,
          fo: 0.1
        }
      },
      {
        id: 'opt-fisc-choque-exencion',
        title: 'Exención total del IRPF a rentas medias/bajas o tipo dual bajo y recorte estatal',
        description:
          'Eximir de IRPF hasta 35.000 euros o rebajar masivamente tipos directos, eliminando subvenciones a partidos, sindicatos, patronales y entes autonómicos.',
        representativeParties: ['salf', 'vox', 'iustitia'],
        partyWeights: {
          frente_amplio: 0.0,
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
        title: 'Banca pública, empresa energética pública y planificación estratégica',
        description:
          'Crear una banca pública estatal, recuperar o nacionalizar sectores energéticos estratégicos y controlar márgenes en productos básicos.',
        representativeParties: ['pce', 'iu', 'podemos', 'frente_amplio'],
        partyWeights: {
          frente_amplio: 0.85,
          sumar: 0.8,
          podemos: 1.0,
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
          frente_amplio: 0.3,
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
        representativeParties: ['psoe', 'frente_amplio', 'sumar', 'pacma', 'ucd'],
        partyWeights: {
          frente_amplio: 0.85,
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
          'Suprimir barreras autonómicas al comercio, reducir burocracia con un Test PYME y reducir la presencia empresarial del Estado en favor de la iniciativa privada.',
        representativeParties: ['d21', 'cs', 'pp', 'upyd', 'vox', 'salf', 'iustitia'],
        partyWeights: {
          frente_amplio: 0.05,
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
    id: 'q-economia-deuda',
    topicId: 'economia',
    title: '3. Gestión de la deuda pública, déficit y reglas fiscales',
    questionText:
      'Ante una deuda pública del 100,3% del PIB (1,767 billones €) y un déficit cercano al 2,8%, ¿qué estrategia fiscal y de gestión de la deuda prefiere?',
    contextNote:
      'Datos de referencia de septiembre de 2026 (Banco de España) y previsiones de la AIReF: el aumento de tipos de refinanciación eleva el gasto en intereses y exige decidir cómo equilibrar las cuentas.',
    options: [
      {
        id: 'opt-deu-auditoria-reestructuracion',
        title: 'Auditoría ciudadana de la deuda pública y reestructuración frente al BCE y mercados',
        description:
          'Auditar la deuda para identificar pasivos ilegítimos de rescates financieros, rechazar recortes de austeridad y exigir que el BCE financie inversión social.',
        representativeParties: ['podemos', 'iu', 'pce', 'fo', 'fe_jons', 'nn'],
        partyWeights: {
          frente_amplio: 0.65,
          sumar: 0.6,
          podemos: 1.0,
          iu: 1.0,
          pce: 1.0,
          psoe: 0.05,
          cs: 0.0,
          upyd: 0.05,
          pp: 0.0,
          ucd: 0.0,
          vox: 0.1,
          salf: 0.25,
          nn: 0.9,
          fe_jons: 0.95,
          pacma: 0.35,
          d21: 0.0,
          iustitia: 0.35,
          fo: 1.0
        }
      },
      {
        id: 'opt-deu-flexibilizar-reglas-verdes',
        title: 'Reformar reglas fiscales europeas, condonar deuda autonómica y blindar inversión verde',
        description:
          'Reformar las reglas fiscales y la regla de gasto municipal, condonar deuda autonómica contra el dumping fiscal y financiar inversión climática con fiscalidad progresiva.',
        representativeParties: ['frente_amplio', 'sumar', 'pacma', 'psoe'],
        partyWeights: {
          frente_amplio: 1.0,
          sumar: 1.0,
          podemos: 0.7,
          iu: 0.85,
          pce: 0.5,
          psoe: 0.75,
          cs: 0.2,
          upyd: 0.2,
          pp: 0.1,
          ucd: 0.45,
          vox: 0.0,
          salf: 0.05,
          nn: 0.0,
          fe_jons: 0.1,
          pacma: 1.0,
          d21: 0.3,
          iustitia: 0.1,
          fo: 0.15
        }
      },
      {
        id: 'opt-deu-senda-europea-progresiva',
        title: 'Cumplir gradualmente la senda europea (<3% déficit) combinando crecimiento e ingresos',
        description:
          'Reducir gradualmente la ratio de deuda y déficit respecto al PIB manteniendo el Estado del bienestar mediante crecimiento económico, fondos UE y tributos a grandes corporaciones.',
        representativeParties: ['psoe', 'ucd'],
        partyWeights: {
          frente_amplio: 0.55,
          sumar: 0.6,
          podemos: 0.25,
          iu: 0.3,
          pce: 0.15,
          psoe: 1.0,
          cs: 0.55,
          upyd: 0.5,
          pp: 0.45,
          ucd: 1.0,
          vox: 0.15,
          salf: 0.1,
          nn: 0.0,
          fe_jons: 0.05,
          pacma: 0.6,
          d21: 0.65,
          iustitia: 0.15,
          fo: 0.05
        }
      },
      {
        id: 'opt-deu-airef-techo-gasto-igae',
        title: 'Regla estricta sin gasto sin financiación, más poder a AIReF e IGAE con IA',
        description:
          'Prohibir aprobar nuevo gasto sin financiación garantizada, ampliar el control vinculante de la AIReF sobre todas las administraciones y auditar cada gran obra y partida.',
        representativeParties: ['pp', 'd21', 'cs', 'upyd'],
        partyWeights: {
          frente_amplio: 0.1,
          sumar: 0.1,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.35,
          cs: 1.0,
          upyd: 0.95,
          pp: 1.0,
          ucd: 0.75,
          vox: 0.55,
          salf: 0.5,
          nn: 0.1,
          fe_jons: 0.1,
          pacma: 0.35,
          d21: 1.0,
          iustitia: 0.7,
          fo: 0.1
        }
      },
      {
        id: 'opt-deu-tijeretazo-duplicidades',
        title: 'Recorte drástico de gasto político, ministerios y duplicidades autonómicas',
        description:
          'Reducir la deuda y el peso de los intereses recortando ministerios, asesores, subvenciones a partidos/sindicatos y entes autonómicos duplicados con auditoría independiente.',
        representativeParties: ['vox', 'salf', 'iustitia', 'upyd'],
        partyWeights: {
          frente_amplio: 0.0,
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.05,
          cs: 0.55,
          upyd: 0.85,
          pp: 0.6,
          ucd: 0.2,
          vox: 1.0,
          salf: 1.0,
          nn: 0.45,
          fe_jons: 0.35,
          pacma: 0.15,
          d21: 0.6,
          iustitia: 1.0,
          fo: 0.45
        }
      }
    ]
  },

  {
    id: 'q-vivienda-acceso',
    topicId: 'vivienda',
    title: '4. Acceso a la vivienda, alquileres y ocupación ilegal',
    questionText:
      '¿Qué conjunto de medidas debe aprobarse para resolver el problema del acceso a la vivienda?',
    contextNote:
      'Refleja la disyuntiva entre intervención de rentas y expropiación de pisos vacíos, estímulos fiscales para jóvenes o liberalización de suelo y desalojos exprés.',
    options: [
      {
        id: 'opt-viv-intervencion-total',
        title: 'Tope al 25% o rebaja legal del 40% al alquiler, veto a fondos y 1,5 M de pisos públicos',
        description:
          'Limitar el alquiler por ley (25% de renta del hogar o rebaja del 40%), prohibir compra especulativa a fondos, expropiar uso ocioso y levantar 1,5 millones de pisos públicos.',
        representativeParties: ['frente_amplio', 'podemos', 'iu', 'pce', 'sumar'],
        partyWeights: {
          frente_amplio: 1.0,
          sumar: 1.0,
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
          fe_jons: 0.85,
          pacma: 0.8,
          d21: 0.05,
          iustitia: 0.05,
          fo: 0.6
        }
      },
      {
        id: 'opt-viv-zonas-tensionadas-ico',
        title: 'CASA 47 (100.000 viviendas), zonas tensionadas y préstamos TUCASA de 50.000 €',
        description:
          'Blindar la vivienda en la Constitución, destinar 1% del PIB y CASA 47 a alquiler asequible, regular zonas tensionadas e impulsar préstamos TUCASA hasta 50.000 euros.',
        representativeParties: ['psoe', 'frente_amplio', 'sumar', 'pacma'],
        partyWeights: {
          frente_amplio: 0.75,
          sumar: 0.75,
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
        title: 'Cero impuestos a menores de 35 años, recargo a no residentes y 10.000 M€ UE',
        description:
          'Eliminar tributos en la primera vivienda joven (hasta 400.000 €), movilizar 10.000 millones europeos para vivienda asequible y gravar compras especulativas de no residentes.',
        representativeParties: ['d21', 'cs', 'upyd', 'ucd'],
        partyWeights: {
          frente_amplio: 0.15,
          sumar: 0.15,
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
        title: 'Derogar topes, construir 1M de pisos, bajar IVA/ITP/IBI y desalojo en 24-48 horas',
        description:
          'Aumentar oferta liberalizando suelo, bajar precios (-35% en primera vivienda, IVA 4% o 0% y fin del IBI) y reformar la ley para ejecutar desalojos de okupas en 24-48 horas.',
        representativeParties: ['pp', 'vox', 'iustitia', 'salf'],
        partyWeights: {
          frente_amplio: 0.0,
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
          salf: 0.95,
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
          'Vetar la compra especulativa de vivienda residencial por fondos o compradores extranjeros, priorizar al ciudadano nacional en vivienda social y desalojar ocupaciones en 48 horas.',
        representativeParties: ['fo', 'nn', 'fe_jons'],
        partyWeights: {
          frente_amplio: 0.15,
          sumar: 0.15,
          podemos: 0.25,
          iu: 0.2,
          pce: 0.2,
          psoe: 0.05,
          cs: 0.1,
          upyd: 0.2,
          pp: 0.35,
          ucd: 0.1,
          vox: 0.65,
          salf: 0.75,
          nn: 1.0,
          fe_jons: 0.95,
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
    title: '5. Jornada laboral, salarios y trabajadores autónomos',
    questionText:
      '¿Qué reforma concreta prefiere en regulación laboral, jornada y autónomos?',
    contextNote:
      'Cada partido prioriza soluciones opuestas: reducción legal obligatoria del tiempo de trabajo, contrato único, tarifa cero o sindicación productiva.',
    options: [
      {
        id: 'opt-emp-32-horas',
        title: 'Jornada máxima legal de 30-32 horas semanales y refuerzo de despido e SMI',
        description:
          'Reducir por ley la semana laboral a 30-32 horas sin pérdida salarial, elevar el SMI (1.800 € o 60% del salario medio) y endurecer la indemnización por despido.',
        representativeParties: ['podemos', 'frente_amplio', 'iu', 'pce', 'sumar'],
        partyWeights: {
          frente_amplio: 0.95,
          sumar: 0.95,
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
        title: 'Jornada de 37,5 horas (senda 35 h) y SMI fijado por ley al 60% del salario medio',
        description:
          'Implantar la jornada máxima de 37,5 horas semanales rumbo a las 35 horas y garantizar por ley el SMI al 60% del salario medio.',
        representativeParties: ['psoe', 'frente_amplio', 'sumar', 'pacma', 'ucd'],
        partyWeights: {
          frente_amplio: 0.9,
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
        title: 'Alivio regulatorio a pymes, productividad con IA o contrato único',
        description:
          'Simplificar obligaciones laborales con transición de 2 años a micropymes, incentivar subidas salariales ligadas a productividad o implantar contrato único.',
        representativeParties: ['cs', 'upyd', 'd21', 'pp', 'salf'],
        partyWeights: {
          frente_amplio: 0.05,
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.2,
          cs: 0.95,
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
        title: 'Cuota cero o sin IVA <85.000 € a autónomos y bajar cotizaciones',
        description:
          'Suprimir o bonificar a cero la cuota de autónomos, eximir de IVA a quienes facturen <85.000 € y reducir la cuña fiscal sobre salarios y contratación.',
        representativeParties: ['salf', 'vox', 'pp', 'iustitia', 'd21'],
        partyWeights: {
          frente_amplio: 0.05,
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.1,
          cs: 0.8,
          upyd: 0.55,
          pp: 0.95,
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
          frente_amplio: 0.1,
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
    title: '6. Sistema público de pensiones y edad de jubilación',
    questionText:
      '¿Qué reforma o garantía considera prioritaria para asegurar las pensiones públicas?',
    contextNote:
      'Separa las preferencias sobre pensiones de la regulación del empleo: edad de jubilación, blindaje constitucional, financiación vía PGE, ahorro privado o natalidad.',
    options: [
      {
        id: 'opt-pen-65-pge-minimas',
        title: 'Jubilación a los 63-65 años, pensiones mínimas al SMI y veto a planes privados',
        description:
          'Recuperar la jubilación ordinaria a los 65 años (o 60-63 en sectores penosos), equiparar pensiones mínimas al SMI y destopar cotizaciones altas.',
        representativeParties: ['frente_amplio', 'podemos', 'iu', 'pce'],
        partyWeights: {
          frente_amplio: 1.0,
          sumar: 1.0,
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
        title: 'Blindaje constitucional al IPC y refuerzo de ingresos públicos',
        description:
          'Blindar por mandato constitucional las pensiones públicas actuales y su revalorización automática con el IPC, nutriendo el Fondo de Reserva.',
        representativeParties: ['psoe', 'frente_amplio', 'sumar', 'pacma', 'ucd'],
        partyWeights: {
          frente_amplio: 0.95,
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
          salf: 0.75,
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
        title: 'Caja única nacional, cuentas mixtas de ahorro o Asamblea Ciudadana por las Pensiones',
        description:
          'Blindar la caja única sin fragmentación territorial, transitar hacia un modelo mixto con cuentas individuales complementarias o consensuar sostenibilidad en una Asamblea Ciudadana.',
        representativeParties: ['pp', 'cs', 'd21', 'upyd', 'salf', 'iustitia'],
        partyWeights: {
          frente_amplio: 0.05,
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.3,
          cs: 0.95,
          upyd: 1.0,
          pp: 1.0,
          ucd: 0.7,
          vox: 0.55,
          salf: 0.95,
          nn: 0.1,
          fe_jons: 0.05,
          pacma: 0.15,
          d21: 0.95,
          iustitia: 0.85,
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
          frente_amplio: 0.1,
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
          frente_amplio: 0.15,
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
    title: '7. Control de la corrupción, aforamientos y gasto político',
    questionText:
      '¿Qué instrumento concreto considera más eficaz para combatir la corrupción y el abuso institucional?',
    contextNote:
      'Distingue entre controles tecnológicos y auditorías administrativas, empoderamiento ciudadano en los tribunales, sanciones punitivas extremas o reformas de incompatibilidad.',
    options: [
      {
        id: 'opt-reg-auditoria-igae',
        title: 'IGAE con inteligencia artificial, juzgados anticorrupción y cese sin PGE',
        description:
          'Blindar por 6 años al interventor general con cruce de datos por IA, crear juzgados anticorrupción, tipificar el enchufismo y cesar al Gobierno tras prórroga de PGE.',
        representativeParties: ['d21', 'cs', 'pp'],
        partyWeights: {
          frente_amplio: 0.35,
          sumar: 0.35,
          podemos: 0.3,
          iu: 0.3,
          pce: 0.25,
          psoe: 0.35,
          cs: 1.0,
          upyd: 0.85,
          pp: 0.7,
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
          frente_amplio: 0.25,
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
        title: 'Delitos imprescriptibles, triple devolución, premio al denunciante y bloqueo de sueldo',
        description:
          'Imprescriptibilidad de la corrupción, obligación de devolver el triple, 15% de recompensa al alertador, prisión de máxima seguridad y bloqueo de sueldo hasta 2030 si incumple.',
        representativeParties: ['salf', 'vox', 'nn'],
        partyWeights: {
          frente_amplio: 0.1,
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
        title: 'Prohibir puertas giratorias, transparencia algorítmica y revocación por incumplimiento',
        description:
          'Vetar el paso de altos cargos a empresas reguladas, exigir responsabilidad judicial por dolo grave, regular pluralismo mediático/IA y proteger informantes.',
        representativeParties: ['frente_amplio', 'podemos', 'sumar', 'iu', 'pce', 'psoe', 'fo'],
        partyWeights: {
          frente_amplio: 1.0,
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
          frente_amplio: 0.0,
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
    title: '8. Elección del Poder Judicial (CGPJ) y reforma de la Ley Electoral',
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
          frente_amplio: 0.2,
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
        title: 'Elección directa del Presidente, distritos uninominales, reforma/fin del TC y CGPJ judicial',
        description:
          'Separar Ejecutivo y Legislativo eligiendo al Presidente en urna directa, implantar distritos uninominales o suprimir/reformar el TC, CGPJ por jueces y referéndums vinculantes.',
        representativeParties: ['iustitia', 'salf'],
        partyWeights: {
          frente_amplio: 0.15,
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
          salf: 0.95,
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
          frente_amplio: 0.75,
          sumar: 0.75,
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
          iustitia: 0.15,
          fo: 0.7
        }
      },
      {
        id: 'opt-jud-desbloqueo-parlamentario',
        title: 'Elección parlamentaria con mayorías de desbloqueo y acceso becado a la judicatura',
        description:
          'Mantener la legitimidad democrática parlamentaria en la designación del CGPJ evitando bloqueos tras 2 meses y democratizando oposiciones judiciales.',
        representativeParties: ['psoe', 'frente_amplio', 'sumar', 'podemos', 'iu'],
        partyWeights: {
          frente_amplio: 1.0,
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
    title: '9. Gestión del Sistema Nacional de Salud y listas de espera',
    questionText:
      '¿Qué modelo de gestión y cobertura sanitaria debe aplicarse en España?',
    contextNote:
      'Distingue entre desprivatización completa, gestión mixta con conciertos, devolución de la sanidad al Estado central o profesionalización digital.',
    options: [
      {
        id: 'opt-san-100-publica-cartera',
        title: 'Sanidad 100% pública (8% PIB), integración MUFACE, dental y farmacéutica pública',
        description:
          'Blindar un suelo del 8% del PIB, revertir externalizaciones e integrar MUFACE, ampliar cartera dental/óptica/auditiva/mental y crear farmacéutica estatal.',
        representativeParties: ['frente_amplio', 'podemos', 'iu', 'pce', 'sumar', 'pacma'],
        partyWeights: {
          frente_amplio: 1.0,
          sumar: 1.0,
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
        title: 'Plan Sonríe dental, salud mental (<30 días) y refuerzo de Atención Primaria',
        description:
          'Ampliar plazas MIR de familia, financiar choque contra listas de espera, implantar Plan Sonríe bucodental y limitar nuevas privatizaciones.',
        representativeParties: ['psoe', 'ucd'],
        partyWeights: {
          frente_amplio: 0.85,
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
        title: 'Pacto sanitario, tarjeta única interoperable y dirección profesional',
        description:
          'Reducir listas de espera con refuerzo de plantillas y conciertos cuando falte capacidad, unificar la historia clínica y social digital y despolitizar gerencias.',
        representativeParties: ['pp', 'cs', 'd21'],
        partyWeights: {
          frente_amplio: 0.1,
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
        title: 'Central única de compras, devolución al Estado y topes de 30-60 días',
        description:
          'Recentralizar el Sistema Nacional de Salud suprimiendo 17 consejerías, centralizar compras médicas y fijar plazos máximos de 30 días especialista y 60 cirugía.',
        representativeParties: ['vox', 'salf', 'upyd', 'fo', 'fe_jons', 'nn'],
        partyWeights: {
          frente_amplio: 0.15,
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
    title: '10. Red educativa, lengua vehicular y prueba universitaria',
    questionText:
      '¿Qué política educativa y lingüística debe regir en colegios y universidades?',
    contextNote:
      'Contrasta la prioridad exclusiva por la escuela pública y laicidad frente a los conciertos escolares, el cheque escolar o la prueba común y castellano vehicular.',
    options: [
      {
        id: 'opt-edu-publica-laica-unica',
        title: 'Suelo del 7% del PIB, gratuidad de 0 años a universidad y fin de conciertos segregadores',
        description:
          'Blindar la financiación pública (7% PIB), garantizar gratuidad desde 0-3 años hasta la universidad, reducir horas lectivas y ratios y reforzar becas.',
        representativeParties: ['frente_amplio', 'podemos', 'iu', 'pce', 'pacma', 'sumar'],
        partyWeights: {
          frente_amplio: 0.95,
          sumar: 0.95,
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
          frente_amplio: 0.75,
          sumar: 0.75,
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
        title: 'Sustituir la LOMLOE, libertad de centro concertado, tecnología y derecho al castellano',
        description:
          'Reforzar lectura, cálculo y tecnología, prestigiar al docente, proteger conciertos (6 años) y educación especial y garantizar escolarización en castellano e inglés.',
        representativeParties: ['pp', 'cs', 'upyd', 'd21'],
        partyWeights: {
          frente_amplio: 0.1,
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
          d21: 0.95,
          iustitia: 0.6,
          fo: 0.4
        }
      },
      {
        id: 'opt-edu-cheque-pin-recentralizada',
        title: 'Cheque escolar universal, ley estatal única y fin de contenidos ideológicos',
        description:
          'Devolver Educación al Estado central, implantar cheque escolar («el dinero sigue al alumno»), prohibir móviles en aulas y exigir autorización parental.',
        representativeParties: ['vox', 'salf', 'iustitia', 'nn'],
        partyWeights: {
          frente_amplio: 0.0,
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
          frente_amplio: 0.35,
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
    title: '11. Política migratoria, regularizaciones y control de flujos',
    questionText:
      '¿Qué criterio debe regir la entrada, regularización y residencia de personas extranjeras en España?',
    contextNote:
      'Distingue específicamente el modelo migratorio (regularización, arraigo laboral, visados en origen, expulsión o remigración) de la política policial y penal interna.',
    options: [
      {
        id: 'opt-inm-regularizacion-cie',
        title: 'Culminar regularización de 2026, vía estable permanente y refugio garantizado',
        description:
          'Consolidar un procedimiento reglado y permanente de regularización, reforzar oficinas de extranjería, aprobar Ley Antirracismo y rechazar centros externos de retorno.',
        representativeParties: ['frente_amplio', 'podemos', 'sumar', 'iu', 'pce', 'pacma'],
        partyWeights: {
          frente_amplio: 1.0,
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
          pacma: 0.95,
          d21: 0.2,
          iustitia: 0.05,
          fo: 0.05
        }
      },
      {
        id: 'opt-inm-arraigo-cooperacion',
        title: 'Migración regular ligada al empleo, fondo de integración y acuerdos de origen',
        description:
          'Facilitar vías ordenadas de migración laboral, homologación digital ágil de títulos y fondo de integración junto a cooperación económica con países emisores.',
        representativeParties: ['psoe', 'd21', 'cs', 'ucd'],
        partyWeights: {
          frente_amplio: 0.6,
          sumar: 0.6,
          podemos: 0.3,
          iu: 0.4,
          pce: 0.3,
          psoe: 1.0,
          cs: 0.95,
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
        title: 'Vetar regularizaciones masivas, visados por puntos y cupos con retorno',
        description:
          'Prohibir regularizaciones indiscriminadas, exigir contrato en origen o visado por puntos, identificar entradas en 7 días y exigir vínculo para la nacionalidad.',
        representativeParties: ['pp', 'upyd', 'cs'],
        partyWeights: {
          frente_amplio: 0.05,
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.35,
          cs: 0.8,
          upyd: 0.95,
          pp: 1.0,
          ucd: 0.55,
          vox: 0.55,
          salf: 0.5,
          nn: 0.2,
          fe_jons: 0.35,
          pacma: 0.05,
          d21: 0.8,
          iustitia: 0.65,
          fo: 0.45
        }
      },
      {
        id: 'opt-inm-expulsion-armada',
        title: 'Expulsión rápida de irregulares, Armada en fronteras y bloqueo a terceros países',
        description:
          'Deportar de forma ágil a inmigrantes en situación irregular o condenados por delito, desplegar la Armada en fronteras y suspender visados a países sin retorno.',
        representativeParties: ['vox', 'salf', 'fo', 'iustitia', 'fe_jons'],
        partyWeights: {
          frente_amplio: 0.0,
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
          iustitia: 1.0,
          fo: 1.0
        }
      },
      {
        id: 'opt-inm-remigracion-etnonacional',
        title: 'Cierre total a inmigración extracomunitaria y Plan Nacional de Remigración',
        description:
          'Detener por completo la inmigración de fuera de Europa, rechazar el multiculturalismo y ejecutar planes estatales de remigración identitaria.',
        representativeParties: ['nn', 'fe_jons'],
        partyWeights: {
          frente_amplio: 0.0,
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
          fe_jons: 0.95,
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
    title: '12. Seguridad ciudadana, Código Penal y modelo policial',
    questionText:
      '¿Qué medidas concretas deben priorizarse en seguridad pública, fronteras y política penitenciaria?',
    contextNote:
      'Contrapone la derogación de la Ley Mordaza y seguridad preventiva frente al endurecimiento contra la multirreincidencia, prisiones de máxima seguridad o despliegue militar.',
    options: [
      {
        id: 'opt-seg-derogar-mordaza-proximidad',
        title: 'Derogar la Ley Mordaza, regular el uso de la fuerza y seguridad preventiva',
        description:
          'Suprimir artículos sancionadores de la Ley de Seguridad Ciudadana, adecuar el uso policial de la fuerza al TEDH y reforzar justicia restaurativa y prevención.',
        representativeParties: ['frente_amplio', 'podemos', 'iu', 'pce', 'sumar', 'pacma'],
        partyWeights: {
          frente_amplio: 1.0,
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
        title: 'Ampliar plantillas policiales, Mando Único de Ciberseguridad (ANCI) y VioGén',
        description:
          'Incrementar efectivos y medios contra narcotráfico, ciberataques (ANCI) y violencia de género manteniendo garantías procesales y respaldo institucional.',
        representativeParties: ['psoe', 'd21', 'cs', 'ucd'],
        partyWeights: {
          frente_amplio: 0.45,
          sumar: 0.45,
          podemos: 0.2,
          iu: 0.3,
          pce: 0.15,
          psoe: 1.0,
          cs: 0.95,
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
        title: 'Agravante penal de multirreincidencia, defensa jurídica policial y mando estatal',
        description:
          'Endurecer el Código Penal frente a hurtos reiterados, narcopisos y desórdenes graves, proteger legalmente a agentes y despolitizar cúpulas policiales.',
        representativeParties: ['pp', 'cs', 'upyd', 'iustitia'],
        partyWeights: {
          frente_amplio: 0.05,
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.35,
          cs: 0.9,
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
          frente_amplio: 0.0,
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
    title: '13. Organización territorial del Estado y Jefatura del Estado',
    questionText:
      '¿Qué modelo territorial y forma de Estado debe regir la estructura institucional española?',
    contextNote:
      'Define el reparto de poder entre Gobierno central y autonomías: República federal plurinacional, Estado autonómico constitucional, racionalización o Estado unitario.',
    options: [
      {
        id: 'opt-est-republica-federal-plurinacional',
        title: 'República Federal y Plurinacional con reconocimiento territorial',
        description:
          'Avanzar hacia una República federal plurinacional que reconozca la diversidad nacional y lingüística, la autonomía local y el derecho a decidir pactado.',
        representativeParties: ['frente_amplio', 'podemos', 'iu', 'pce', 'sumar'],
        partyWeights: {
          frente_amplio: 1.0,
          sumar: 0.95,
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
          frente_amplio: 0.65,
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
        title: 'Constitucionalismo común sin privilegios bilaterales y unidad de mercado',
        description:
          'Preservar el Estado autonómico con financiación multilateral sin privilegios, licencias válidas en toda España y Alta Inspección del Estado.',
        representativeParties: ['pp', 'cs', 'd21', 'upyd'],
        partyWeights: {
          frente_amplio: 0.2,
          sumar: 0.2,
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
        title: 'Centralización de competencias, regiones simétricas y supresión de Senado y diputaciones',
        description:
          'Recuperar Sanidad, Educación o emergencias para garantizar igualdad territorial, instaurar CCAA simétricas o eliminar sobrecostes autonómicos, Senado y diputaciones.',
        representativeParties: ['upyd', 'salf', 'fo', 'iustitia', 'vox'],
        partyWeights: {
          frente_amplio: 0.0,
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.05,
          cs: 0.45,
          upyd: 1.0,
          pp: 0.35,
          ucd: 0.1,
          vox: 0.9,
          salf: 0.95,
          nn: 0.65,
          fe_jons: 0.7,
          pacma: 0.15,
          d21: 0.45,
          iustitia: 0.85,
          fo: 1.0
        }
      },
      {
        id: 'opt-est-unitario-abolicion-autonomias',
        title: 'Estado unitario centralizado con abolición total de autonomías y parlamentos regionales',
        description:
          'Suprimir de raíz las 17 comunidades autónomas y sus parlamentos para instaurar un Estado unitario centralizado e ilegalizar los partidos separatistas.',
        representativeParties: ['fe_jons', 'nn'],
        partyWeights: {
          frente_amplio: 0.0,
          sumar: 0.0,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.0,
          psoe: 0.0,
          cs: 0.05,
          upyd: 0.3,
          pp: 0.15,
          ucd: 0.0,
          vox: 0.6,
          salf: 0.45,
          nn: 1.0,
          fe_jons: 1.0,
          pacma: 0.0,
          d21: 0.1,
          iustitia: 0.55,
          fo: 0.5
        }
      }
    ]
  },

  {
    id: 'q-energia-campo',
    topicId: 'energia_campo',
    title: '14. Energía nuclear, cambio climático, campo y protección animal',
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
        representativeParties: ['pacma', 'frente_amplio', 'sumar', 'podemos', 'iu'],
        partyWeights: {
          frente_amplio: 0.9,
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
        title: 'Cierre nuclear (2027-2035), comercializadora pública con 3h gratis y renovables',
        description:
          'Cumplir el calendario de cierre nuclear, acabar con el sistema marginalista, crear empresa pública eléctrica (3h diarias gratis) e impulsar agroecología y transición verde.',
        representativeParties: ['frente_amplio', 'psoe', 'sumar', 'iu', 'pce'],
        partyWeights: {
          frente_amplio: 1.0,
          sumar: 1.0,
          podemos: 0.9,
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
        title: 'Prórroga de centrales nucleares, desalación/riego eficiente y flexibilizar la PAC',
        description:
          'Alargar la vida de los reactores nucleares, suprimir el impuesto eléctrico del 7%, combinar renovables y desalación eficiente y defender cláusulas espejo al campo.',
        representativeParties: ['pp', 'd21', 'cs', 'upyd', 'ucd'],
        partyWeights: {
          frente_amplio: 0.05,
          sumar: 0.05,
          podemos: 0.0,
          iu: 0.0,
          pce: 0.05,
          psoe: 0.25,
          cs: 0.85,
          upyd: 1.0,
          pp: 1.0,
          ucd: 0.85,
          vox: 0.65,
          salf: 0.65,
          nn: 0.35,
          fe_jons: 0.45,
          pacma: 0.05,
          d21: 0.85,
          iustitia: 0.55,
          fo: 0.55
        }
      },
      {
        id: 'opt-ene-derogar-agenda2030',
        title: 'Derogar Agenda 2030 y Pacto Verde, veto a Mercosur y soberanía energética',
        description:
          'Suprimir normativas climáticas europeas que encarecen el campo y la industria, vetar Mercosur y recortes de la PAC, defender energía barata (nuclear o gas) y aranceles agrarios.',
        representativeParties: ['vox', 'salf', 'fo', 'iustitia', 'nn', 'fe_jons'],
        partyWeights: {
          frente_amplio: 0.0,
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
          salf: 0.95,
          nn: 1.0,
          fe_jons: 0.95,
          pacma: 0.0,
          d21: 0.2,
          iustitia: 1.0,
          fo: 1.0
        }
      }
    ]
  },

  {
    id: 'q-exterior-ue',
    topicId: 'exterior_ue',
    title: '15. Unión Europea, soberanía nacional, OTAN y política exterior',
    questionText:
      '¿Qué posición debe mantener España ante la Unión Europea y las alianzas militares internacionales?',
    contextNote:
      'Resume la elección entre mayor integración federal europea y OTAN, Europa social sin rearme, renegociación soberanista o salida de la UE y OTAN.',
    options: [
      {
        id: 'opt-ext-europeismo-otan-2pct',
        title: 'Integración europea, pilar europeo y cumplimiento de compromisos en la OTAN',
        description:
          'Profundizar en la integración tecnológica, financiera y defensiva de la Unión Europea y cumplir los compromisos estratégicos y de defensa en la OTAN.',
        representativeParties: ['psoe', 'pp', 'cs', 'd21', 'upyd', 'ucd'],
        partyWeights: {
          frente_amplio: 0.25,
          sumar: 0.25,
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
        title: 'Unión Europea social y pacífica sin escalada militar de la OTAN',
        description:
          'Permanecer en la UE reformando el Pacto de Estabilidad hacia inversión social y verde, rechazando objetivos de gasto militar OTAN y destinando el 0,7% a cooperación.',
        representativeParties: ['frente_amplio', 'sumar', 'pacma', 'psoe'],
        partyWeights: {
          frente_amplio: 1.0,
          sumar: 1.0,
          podemos: 0.6,
          iu: 0.8,
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
        title: 'Salida de la OTAN, cierre de bases estadounidenses y estatuto de neutralidad',
        description:
          'Abandonar la alianza militar atlántica y cerrar las bases de Rota y Morón, blindar el «No a la guerra» en la Constitución y priorizar el desarme.',
        representativeParties: ['podemos', 'iu', 'pce'],
        partyWeights: {
          frente_amplio: 0.65,
          sumar: 0.55,
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
          frente_amplio: 0.0,
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
          frente_amplio: 0.0,
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
