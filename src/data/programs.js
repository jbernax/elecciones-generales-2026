/**
 * Structured programmatic corpus for all 18 political formations across
 * the 12 core policy areas (216 topic-party entries), grounded in 2026 programs.
 */

export const PROGRAMS = {
  frente_amplio: {
    economia: {
      headline: 'Tipo mínimo del 20% en Sociedades, impuesto a ultrarricos y banca pública',
      summary:
        'Impulsa una reforma fiscal profunda para que el 1% más rico financie el Estado del bienestar, junto a una banca pública estatal, un fondo soberano renovable y condonación condicionada de deuda.',
      measures: [
        'Fijar un tipo mínimo real del 20% en el Impuesto sobre Sociedades y crear un impuesto estatal a las grandes herencias (>1 millón €, marginal 34%), limitando las herencias de ultrarricos a 10 millones € por heredero.',
        'Implantar un IVA progresivo en suministros básicos (agua, gas y luz) desde el 0% para hogares vulnerables hasta el 21% en mayores consumos y acercar la tributación del capital a la del trabajo.',
        'Crear una banca pública estatal y un fondo soberano renovable junto a políticas de Estado emprendedor e industria verde.',
        'Condonar deuda autonómica de forma condicionada a prohibir el dumping fiscal (destinando un 20% a parque público de alquiler) y aliviar la deuda municipal reformando la regla de gasto.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Caps. 3, 6, 11 y 12)'
    },
    vivienda: {
      headline: '1,5 millones de viviendas públicas (1% PIB/año) y tope de alquiler al 25% de la renta',
      summary:
        'Sitúa la vivienda como eje central: inversión del 1% del PIB anual para levantar 1,5 millones de viviendas públicas, topes estrictos al alquiler y fin de la especulación.',
      measures: [
        'Invertir el 1% del PIB anual para incorporar 1,5 millones de viviendas públicas en 12 años (125.000/año), mayoritariamente en alquiler asequible.',
        'Topar por ley el precio del alquiler en zonas tensionadas al menor valor entre el 25% de la renta neta media del hogar por sección censal y el índice regulado, con rebaja adicional del 30% en ciudades >200.000 habitantes o masificadas.',
        'Prohibir la compra especulativa a personas jurídicas y bancos, expropiar progresivamente el stock residencial de grandes tenedores corporativos y erradicar los desahucios sin alternativa.',
        'Extinguir en un máximo de 3 años las licencias de pisos turísticos en zonas tensionadas, blindar el artículo 47 CE y auditar la SAREB.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Cap. 1: Acabar con la especulación)'
    },
    empleo: {
      headline: 'Jornada de 32 horas (37,5 h inmediatas), SMI al 60% y democracia en la empresa',
      summary:
        'Plantea reducir el tiempo de trabajo sin merma salarial, blindar el poder adquisitivo del SMI e incorporar a las plantillas en los consejos de administración.',
      measures: [
        'Implantar de forma inmediata la jornada de 37,5 horas semanales (35 h en el sector público) con senda legal hacia las 32 horas sin bajada salarial.',
        'Blindar por ley un Salario Mínimo Interprofesional equivalente al 60% del salario medio neto.',
        'Llevar la democracia a las empresas con participación de las plantillas en los consejos de administración y reparto obligatorio de beneficios.',
        'Simplificar trámites a pymes y autónomos, garantizar energía a precios justos e impulsar la economía social.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Caps. 4.1, 8 y 13)'
    },
    pensiones: {
      headline: 'Blindaje constitucional al IPC, vuelta a los 65 años y 200 €/mes por hijo',
      summary:
        'Defiende elevar el sistema público de pensiones a derecho constitucional protegido, recuperar los 65 años de jubilación ordinaria e implantar una Prestación Universal por Crianza.',
      measures: [
        'Blindar en la Constitución (art. 167 CE) el carácter público de las pensiones, su revalorización automática por IPC, la pensión mínima igual al SMI y el veto a la privatización.',
        'Devolver la edad ordinaria de jubilación a los 65 años, adelantar a los 60 años profesiones penosas (construcción, limpieza, ayuda a domicilio, pesca) y eliminar coeficientes reductores con >40 años cotizados.',
        'Implantar una Prestación Universal por Crianza de 200 euros mensuales por menor y desplegar un Pacto de Estado por los Cuidados.',
        'Ampliar el IMV hasta el 60% de la renta mediana autonómica y extenderlo plenamente a jóvenes de 18 a 30 años.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Caps. 2.1, 2.2 y 4.3)'
    },
    regeneracion_justicia: {
      headline: 'Desbloqueo del CGPJ, responsabilidad judicial, transparencia y pluralismo',
      summary:
        'Propone impedir bloqueos partidistas en el CGPJ, democratizar el acceso a la judicatura, reforzar la lucha anticorrupción y regular el pluralismo mediático y algorítmico.',
      measures: [
        'Reformar la LOPJ para desbloquear el CGPJ por mayoría absoluta tras dos meses sin acuerdo de 3/5 y recuperar la reclamación directa frente a jueces por dolo o culpa grave.',
        'Crear juzgados especializados en violencia sobre la mujer con formación acreditada y democratizar el acceso a la carrera judicial.',
        'Regular la transparencia algorítmica y de la inteligencia artificial con responsabilidad penal de directivos y pluralismo en medios públicos y privados.',
        'Asegurar la laicidad del Estado y ampliar la memoria democrática y la rendición de cuentas ética en la gestión pública.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Caps. 14 y 18)'
    },
    sanidad: {
      headline: 'Suelo del 8% del PIB, integración de MUFACE, farmacia pública y salud bucodental',
      summary:
        'Apuesta por una sanidad 100% pública de gestión directa financiada con al menos el 8% del PIB, revirtiendo privatizaciones e integrando mutuas de funcionarios.',
      measures: [
        'Blindar en los Presupuestos un suelo del 8% del PIB para sanidad pública, con el 25% destinado a Atención Primaria.',
        'Derogar las puertas a la gestión privada en el SNS, aprobar planes de reversión e internalización e integrar MUFACE, MUGEJU e ISFAS en la red pública.',
        'Incorporar plenamente en la cartera común la salud bucodental, visual, auditiva (audífonos) y mental, además de protección por duelo perinatal.',
        'Crear una empresa farmacéutica 100% pública y limitar las mutuas laborales al apoyo en enfermedades profesionales, devolviendo altas y bajas al SNS.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Cap. 2.4: Una sanidad pública más fuerte)'
    },
    educacion: {
      headline: 'Suelo del 7% del PIB en 2030, gratuidad de 0 años a universidad y menos horas lectivas',
      summary:
        'Defiende blindar la financiación educativa pública hasta el 7% del PIB, garantizar la gratuidad integral y mejorar ratios, becas y condiciones docentes.',
      measures: [
        'Aprobar una ley de financiación que garantice un suelo mínimo del 7% del PIB estatal para educación pública en 2030.',
        'Implantar la gratuidad educativa desde la etapa 0-3 años hasta la universidad, duplicar becas para familias vulnerables en etapas obligatorias y ofrecer comedores escolares gratuitos.',
        'Fijar por ley un máximo de 18 horas lectivas en Secundaria/FP/Bachillerato y 23 horas en Primaria, reduciendo ratios y estabilizando plantillas.',
        'Aprobar auditorías y estándares de calidad obligatorios para las universidades privadas.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Cap. 2.5: Educación pública)'
    },
    inmigracion: {
      headline: 'Culminar la regularización de 2026, vía estable permanente y Ley Antirracismo',
      summary:
        'Propone consolidar un procedimiento reglado y permanente de regularización administrativa, eliminar trabas en extranjería y aprobar una Ley Integral Antirracismo.',
      measures: [
        'Culminar todas las solicitudes de la regularización extraordinaria de 2026 reforzando en un 30% las Oficinas de Extranjería.',
        'Reformar integralmente la Ley de Extranjería para crear un procedimiento estable y permanente de regularización administrativa.',
        'Suprimir las listas nacionales de países seguros y rechazar centros de retorno en terceros países, eximiendo de visado de tránsito a países en conflicto.',
        'Aprobar una Ley Integral Antirracismo, el Estatuto del Pueblo Gitano y apoyo institucional estable a asociaciones antirracistas.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Cap. 16: Migraciones y antirracismo)'
    },
    seguridad: {
      headline: 'Seguridad humana preventiva, regulación del uso de la fuerza y fin de la Ley Mordaza',
      summary:
        'Sustituye el enfoque punitivo por un modelo policial preventivo y de justicia restaurativa alineado con Naciones Unidas, el Consejo de Europa y el TEDH.',
      measures: [
        'Acabar con la criminalización de la protesta social derogando los artículos sancionadores de la Ley de Seguridad Ciudadana y delitos de opinión.',
        'Regular por ley el uso de la fuerza, armas policiales y vigilancia siguiendo la jurisprudencia del TEDH y organismos internacionales.',
        'Impulsar políticas de seguridad preventivas y multiagencia combinadas con justicia restaurativa y respeto íntegro de derechos en prisiones.',
        'Garantizar derechos laborales y deberes democráticos de las Fuerzas y Cuerpos de Seguridad del Estado.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Caps. 18.3 y 18.4)'
    },
    modelo_estado: {
      headline: 'República Federal y Plurinacional, fin del dumping fiscal y autonomía municipal',
      summary:
        'Propone avanzar hacia una República Federal que reconozca la plurinacionalidad del Estado, refuerce el poder local y reforme la financiación autonómica.',
      measures: [
        'Avanzar hacia una República Federal y Plurinacional que reconozca la diversidad nacional, cultural y lingüística del Estado.',
        'Reformar el modelo de financiación autonómica compensando déficits acumulados desde 2001 y prohibiendo bajadas fiscales a rentas altas (dumping fiscal).',
        'Fortalecer la autonomía financiera de los ayuntamientos con un nuevo marco local y reforma de la regla de gasto.',
        'Reforzar la vertebración territorial y ferroviaria contra la despoblación y atender los retos específicos de la insularidad.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Caps. 9, 11, 12 y 18.1)'
    },
    energia_campo: {
      headline: '3,5% del PIB en transición verde, 3 horas de luz gratis, cierre nuclear y bienestar animal',
      summary:
        'Dedica el 3,5% del PIB anual a descarbonizar la economía con comercializadora eléctrica pública, tres horas diarias de luz gratuita, fin del sistema marginalista y cierre nuclear.',
      measures: [
        'Excluir nuclear e hidroeléctrica del sistema marginalista, crear una comercializadora pública con tres horas diarias de luz gratuita y recuperar redes de distribución.',
        'Cumplir el calendario de cierre nuclear (Almaraz I y II en 2027-2028) con fondos de transición justa, y dedicar el 3,5% del PIB anual a transición ecológica.',
        'Alcanzar un 25% de superficie agraria y ganadera ecológica en 2030, apoyar la ganadería extensiva y crear un abono único estatal de transporte.',
        'Reformar la Ley 7/2023 para incluir plenamente a los perros de caza y trabajo, y endurecer el Código Penal contra el maltrato animal.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Caps. 5 y 7)'
    },
    exterior_ue: {
      headline: 'Rechazo al objetivo militar de la OTAN, 0,7% cooperación, Palestina y Sáhara',
      summary:
        'Rechaza la escalada armamentística y el objetivo del 5% del PIB de la OTAN, apostando por seguridad humana, Europa social, Palestina y Sáhara Occidental.',
      measures: [
        'Rechazar explícitamente el objetivo de gasto militar de la OTAN y reorientar partidas militares hacia seguridad humana, clima, sanidad y educación.',
        'Alcanzar el 0,7% en cooperación internacional al desarrollo y establecer control parlamentario efectivo sobre comercio de armas y misiones exteriores.',
        'Defender una Europa social y autónoma de los pueblos frente a las reglas de austeridad.',
        'Practicar una política exterior basada en el derecho internacional y solidaridad activa con Palestina y el Sáhara Occidental.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Cap. 17: Seguridad humana, paz y Europa)'
    }
  },

  sumar: {
    economia: {
      headline: 'Tipo mínimo del 20% en Sociedades, impuesto a ultrarricos y Estado emprendedor',
      summary:
        'Como cofundador de Frente Amplio en 2026, prioriza la reforma fiscal sobre grandes corporaciones y fortunas, IVA progresivo en suministros, banca pública y alivio de deuda territorial.',
      measures: [
        'Fijar un tipo mínimo real del 20% en Sociedades, gravar grandes herencias (>1 M€) y topar herencias de ultrarricos a 10 millones € por heredero.',
        'Implantar IVA progresivo (0%-21%) en suministros básicos y acercar la tributación del capital a las rentas salariales.',
        'Impulsar una banca pública estatal y un fondo soberano renovable para reindustrialización verde y soberanía tecnológica.',
        'Condonar deuda autonómica condicionada a prohibir dumping fiscal a rentas altas y flexibilizar la regla de gasto municipal.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Caps. 3, 6 y 11)'
    },
    vivienda: {
      headline: '1,5 millones de viviendas públicas (1% PIB/año) y tope al 25% de la renta',
      summary:
        'Reemplaza propuestas anteriores por el plan conjunto 2026: parque público de 1,5 millones de viviendas, alquiler limitado al 25% de la renta y fin de pisos turísticos en 3 años.',
      measures: [
        'Invertir el 1% del PIB anual para construir y movilizar 1,5 millones de viviendas públicas en 12 años destinadas a alquiler asequible.',
        'Topar los alquileres al 25% de la renta media por hogar en zonas tensionadas (con rebaja del 30% en ciudades >200.000 hab. o masificadas).',
        'Prohibir la compra especulativa a personas jurídicas, expropiar progresivamente el stock de grandes tenedores y frenar desahucios sin alternativa.',
        'Extinguir en 3 años las licencias de pisos turísticos en zonas tensionadas y blindar el artículo 47 de la Constitución.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Cap. 1)'
    },
    empleo: {
      headline: 'Jornada de 37,5 h inmediata rumbo a 32 h, SMI al 60% y democracia empresarial',
      summary:
        'Eje histórico de Movimiento Sumar en Frente Amplio 2026: reducción legal inmediata de la jornada sin recorte salarial, SMI blindado y cogestión en consejos.',
      measures: [
        'Implantar de inmediato las 37,5 horas semanales en 2026 (35 h en sector público) avanzando por ley hacia las 32 horas sin bajada salarial.',
        'Blindar por ley un Salario Mínimo Interprofesional equivalente al 60% del salario medio neto.',
        'Establecer participación de las plantillas en los consejos de administración y reparto obligatorio de beneficios empresariales.',
        'Simplificar trabas a autónomos y pymes garantizando energía a precios justos.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Caps. 4.1, 8 y 13)'
    },
    pensiones: {
      headline: 'Blindaje constitucional al IPC, jubilación a los 65 años y 200 €/mes por crianza',
      summary:
        'Integra la garantía constitucional de revalorización por IPC y pensión mínima igual al SMI junto a la Prestación Universal por Crianza de 200 euros mensuales.',
      measures: [
        'Blindar en la Constitución (art. 167 CE) las pensiones públicas, la revalorización por IPC y una pensión mínima igual al SMI.',
        'Recuperar los 65 años como edad ordinaria de jubilación, 60 años en trabajos penosos y eliminar penalizaciones tras >40 años cotizados.',
        'Implantar la Prestación Universal por Crianza de 200 €/mes por menor y un Pacto de Estado por los Cuidados.',
        'Extender el IMV hasta el 60% de la renta mediana autonómica e incorporar a jóvenes de 18 a 30 años.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Caps. 2.1, 2.2 y 4.3)'
    },
    regeneracion_justicia: {
      headline: 'Desbloqueo del CGPJ, responsabilidad judicial y gobernanza digital',
      summary:
        'Aboga por impedir el bloqueo del CGPJ, exigir responsabilidad judicial por dolo o culpa grave y regular algoritmos e inteligencia artificial.',
      measures: [
        'Permitir renovar el CGPJ por mayoría absoluta tras dos meses sin acuerdo de 3/5 y recuperar la reclamación directa por dolo o culpa grave judicial.',
        'Garantizar juzgados especializados en violencia sobre la mujer y democratizar el acceso a la judicatura.',
        'Imponer transparencia algorítmica y responsabilidad penal de directivos tecnológicos en gobernanza digital e IA.',
        'Impulsar pluralismo informativo, memoria democrática y laicidad del Estado.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Caps. 14 y 18)'
    },
    sanidad: {
      headline: 'Suelo del 8% del PIB, integración de MUFACE y farmacia pública',
      summary:
        'Plantea revertir externalizaciones hospitalarias, destinar el 25% a Atención Primaria, integrar mutuas de funcionarios y ampliar cartera pública.',
      measures: [
        'Blindar un suelo del 8% del PIB para sanidad pública, con el 25% reservado para Atención Primaria.',
        'Planificar la reversión de servicios privatizados e integrar MUFACE, MUGEJU e ISFAS en el Sistema Nacional de Salud.',
        'Incorporar plenamente salud bucodental, visual, audífonos y salud mental en la cartera común.',
        'Crear una farmacéutica 100% pública y devolver la gestión de altas y bajas médicas exclusivamente al SNS.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Cap. 2.4)'
    },
    educacion: {
      headline: 'Suelo del 7% del PIB, gratuidad de 0 años a universidad y menos horas lectivas',
      summary:
        'Concentra la inversión en la red pública hasta alcanzar el 7% del PIB en 2030, ampliando becas y reduciendo horas lectivas y ratios.',
      measures: [
        'Blindar por ley un crecimiento de la inversión educativa pública hasta el 7% del PIB en 2030.',
        'Garantizar gratuidad educativa desde los 0 años hasta la universidad, duplicar becas obligatorias y ofrecer comedores escolares gratuitos.',
        'Fijar un máximo de 18 horas lectivas en Secundaria/FP y 23 en Primaria con reducción de ratios y estabilización docente.',
        'Establecer auditorías y estándares estrictos de calidad docente a las universidades privadas.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Cap. 2.5)'
    },
    inmigracion: {
      headline: 'Culminar regularización de 2026, procedimiento permanente y Ley Antirracismo',
      summary:
        'Defiende resolver la regularización de 2026, crear una vía administrativa estable y combatir el racismo institucional.',
      measures: [
        'Culminar la regularización extraordinaria de 2026 ampliando en un 30% la capacidad de las Oficinas de Extranjería.',
        'Reformar la Ley de Extranjería para instaurar un procedimiento estable y permanente de regularización.',
        'Suprimir listas de países seguros, rechazar centros de retorno externos y facilitar visados en conflictos.',
        'Aprobar una Ley Integral Antirracismo y el Estatuto del Pueblo Gitano.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Cap. 16)'
    },
    seguridad: {
      headline: 'Seguridad humana preventiva, regulación del uso de la fuerza y derechos civiles',
      summary:
        'Plantea un modelo de seguridad preventiva y justicia restaurativa conforme a estándares europeos de derechos humanos.',
      measures: [
        'Derogar los artículos sancionadores de la Ley de Seguridad Ciudadana y despenalizar delitos de opinión y protesta social.',
        'Regular por ley el uso de la fuerza y armamento policial conforme a la jurisprudencia del TEDH.',
        'Orientar la seguridad a políticas preventivas multiagencia y reinserción real en instituciones penitenciarias.',
        'Garantizar derechos laborales y formación democrática en las FCSE.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Caps. 18.3 y 18.4)'
    },
    modelo_estado: {
      headline: 'República Federal y Plurinacional, fin del dumping fiscal y poder local',
      summary:
        'Propugna avanzar hacia una República Federal y Plurinacional con nuevo sistema de financiación autonómica y local.',
      measures: [
        'Impulsar una República Federal y Plurinacional que reconozca la diversidad nacional y las lenguas cooficiales.',
        'Reformar la financiación autonómica compensando déficits acumulados y prohibiendo el dumping fiscal a rentas altas.',
        'Aprobar un nuevo marco de financiación municipal y una regla de gasto que no castigue a los ayuntamientos.',
        'Reforzar la inversión ferroviaria y servicios contra la despoblación y la insularidad.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Caps. 9, 11, 12 y 18.1)'
    },
    energia_campo: {
      headline: 'Transición ecológica (3,5% PIB), 3h de luz gratis, cierre nuclear y bienestar animal',
      summary:
        'Prioriza el fin del sistema marginalista eléctrico, comercializadora pública con luz gratuita en horas punta solares y cierre nuclear programado.',
      measures: [
        'Excluir nuclear e hidroeléctrica del sistema marginalista, crear comercializadora pública con tres horas diarias de luz gratuita y recuperar redes.',
        'Cumplir el calendario de cierre nuclear (Almaraz I y II en 2027-2028) con inversión del 3,5% del PIB anual en transición verde.',
        'Alcanzar el 25% de superficie agraria y ganadera ecológica en 2030 y crear un abono único estatal de transporte.',
        'Incluir perros de caza y trabajo en la Ley de Bienestar Animal y endurecer penas por maltrato.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Caps. 5 y 7)'
    },
    exterior_ue: {
      headline: 'Rechazo al objetivo militar de la OTAN, Europa social, Palestina y Sáhara',
      summary:
        'Defiende la seguridad humana frente a la carrera armamentística de la OTAN, el 0,7% en cooperación y el respeto al derecho internacional.',
      measures: [
        'Rechazar el incremento del gasto militar exigido en la OTAN y reorientar fondos a emergencia climática y servicios públicos.',
        'Alcanzar el 0,7% en cooperación internacional y reforzar el control parlamentario sobre comercio de armas.',
        'Impulsar una Europa social de los pueblos frente al ajuste fiscal ortodoxo.',
        'Defender los derechos de Palestina y la libre determinación del Sáhara Occidental.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Sumar 29N-2026 (Cap. 17)'
    }
  },

  podemos: {
    economia: {
      headline: 'Banca pública, tope a márgenes de supermercados y fiscalidad intensa a fortunas',
      summary:
        'Su programa 29N-2026 («Así de básico: paz, casa y trabajo», 442 medidas) plantea una banca pública estatal, control de márgenes básicos e impuestos reforzados al gran capital.',
      measures: [
        'Crear una banca pública estatal e inmobiliaria pública que ofrezcan crédito e hipotecas en condiciones reguladas.',
        'Topar los márgenes comerciales de las grandes distribuidoras de alimentación en productos de primera necesidad.',
        'Elevar la carga fiscal sobre grandes fortunas, grandes herencias y beneficios extraordinarios empresariales.',
        'Auditar la deuda pública frente a los mercados financieros y exigir que el BCE financie inversión social sin austeridad.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Así de básico (442 medidas)'
    },
    vivienda: {
      headline: 'Rebaja legal del 40% en alquileres, contratos indefinidos y expropiación de uso',
      summary:
        'Propone intervenir drásticamente el mercado reduciendo un 40% por ley todos los alquileres, prohibiendo la compra no residencial y creando una inmobiliaria pública.',
      measures: [
        'Reducir por ley un 40% el precio de los alquileres vigentes y nuevos, limitándolo al precio medio de cada zona.',
        'Convertir los contratos de alquiler de vivienda habitual en indefinidos por defecto y crear una inmobiliaria pública.',
        'Prohibir la compra de vivienda que no se destine a residencia habitual y eliminar progresivamente los pisos turísticos en zonas tensionadas.',
        'Expropiar temporalmente el uso de viviendas de grandes tenedores, ilegalizar empresas de desokupación y prohibir desahucios sin alternativa.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Bloque de Vivienda'
    },
    empleo: {
      headline: 'Jornada laboral de 30 horas, SMI de 1.800 € y castigo penal a horas extra impagadas',
      summary:
        'Recorta la jornada legal a 30 horas semanales sin bajada salarial, eleva el SMI a 1.800 euros, indexa salarios al IPC y penaliza el fraude en horas extraordinarias.',
      measures: [
        'Establecer por ley la jornada laboral máxima de 30 horas semanales sin reducción salarial.',
        'Elevar el Salario Mínimo Interprofesional hasta los 1.800 euros mensuales.',
        'Actualizar los salarios por ley conforme al IPC real y restablecer la indemnización de 45 días por despido improcedente.',
        'Castigar penalmente (incluso con penas de cárcel) las horas extraordinarias no retribuidas ni compensadas con descanso.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Bloque Laboral'
    },
    pensiones: {
      headline: 'Jubilación anticipada a los 63 años, IPC real y rechazo a planes privados',
      summary:
        'Defiende adelantar la edad de jubilación a los 63 años en determinadas condiciones, blindar la actualización al IPC y financiar el sistema con cotizaciones altas y fiscalidad.',
      measures: [
        'Habilitar el adelanto de la edad de jubilación a los 63 años y recuperar coeficientes justos sin merma tras largas carreras de cotización.',
        'Revalorizar obligatoriamente todas las pensiones conforme al IPC real y equiparar pensiones mínimas al SMI.',
        'Rechazar rotundamente los planes privados de pensiones o modelos de capitalización.',
        'Financiar la Seguridad Social destopando cotizaciones de los salarios más altos y mediante reforma fiscal progresiva.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Pensiones'
    },
    regeneracion_justicia: {
      headline: 'Revocación ciudadana a los 2 años, voto a los 16 y fin de aforamientos',
      summary:
        'Propone un mecanismo de revocación del Gobierno a mitad de legislatura si incumple el programa, reforma judicial y rebaja de la edad de voto a 16 años.',
      measures: [
        'Implantar un mecanismo de revocación ciudadana del Gobierno a los dos años de legislatura en caso de incumplimiento grave del programa.',
        'Suprimir todos los aforamientos políticos, limitar el peso político del Tribunal Supremo y democratizar el CGPJ.',
        'Reformar la ley electoral hacia mayor proporcionalidad y rebajar la edad mínima de voto a los 16 años.',
        'Prohibir diez años las puertas giratorias y aprobar una ley de pluralismo mediático.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Democracia y Regeneración'
    },
    sanidad: {
      headline: '25% para Atención Primaria, cita en 48h y dentista, gafas y psicólogo gratis',
      summary:
        'Exige derogar la Ley 15/1997 para impedir privatizaciones, garantizar cita en Atención Primaria en 48 horas hábiles e incorporar salud dental, óptica y mental.',
      measures: [
        'Derogar la Ley 15/1997 para prohibir cualquier forma de gestión privada o externalización en centros sanitarios públicos.',
        'Destinar al menos el 25% del presupuesto sanitario a Atención Primaria y garantizar por ley una cita médica en un máximo de 48 horas hábiles.',
        'Incluir de forma gratuita en la cartera pública la salud bucodental, oftalmología (gafas y lentillas), atención auditiva y fisioterapia.',
        'Ampliar transversalmente la atención psicológica pública gratuita y crear una farmacéutica estatal.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Sanidad Pública'
    },
    educacion: {
      headline: 'Educación 100% pública y laica, fin de conciertos que segregan y bajas ratios',
      summary:
        'Concentra los recursos públicos en la red pública educativa, frena conciertos con centros que segregan, reduce ratios y amplía becas.',
      measures: [
        'Frenar la financiación pública y conciertos con centros privados que segregan, priorizando la red 100% pública y laica.',
        'Reducir las ratios de alumnado por aula e incrementar plantillas y estabilidad del profesorado.',
        'Garantizar la gratuidad completa de etapas educativas desde infantil hasta la universidad.',
        'Ampliar el sistema de becas y ayudas al estudio para familias trabajadoras.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Educación Pública'
    },
    inmigracion: {
      headline: 'Regularización extraordinaria con plenos derechos y acceso universal a servicios',
      summary:
        'Rechaza las expulsiones masivas y el endurecimiento fronterizo, defendiendo la regularización de quienes residen y trabajan en España y derechos sin distinción de origen.',
      measures: [
        'Impulsar procesos amplios de regularización extraordinaria para personas migrantes que viven y trabajan en España con plenos derechos.',
        'Cerrar todos los Centros de Internamiento de Extranjeros (CIEs) y derogar los elementos restrictivos de la Ley de Extranjería.',
        'Garantizar el acceso universal a servicios públicos y ayudas sociales al margen del origen o la nacionalidad.',
        'Establecer vías legales y seguras de asilo y rescate marítimo sin externalización de fronteras.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Derechos e Inmigración'
    },
    seguridad: {
      headline: 'Derogación de la Ley Mordaza, control policial democrático y prevención social',
      summary:
        'Aboga por suprimir artículos sancionadores de la Ley de Seguridad Ciudadana, reforzar la rendición de cuentas policial y priorizar la prevención.',
      measures: [
        'Derogar íntegramente la Ley de Seguridad Ciudadana (Ley Mordaza) en todos sus preceptos sancionadores.',
        'Someter a mayor control democrático, identificación visible y rendición de cuentas a los cuerpos policiales.',
        'Ampliar medios judiciales y policiales contra la violencia machista, delitos económicos y delitos de odio.',
        'Orientar el sistema penitenciario hacia la reinserción efectiva y medidas alternativas.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Libertades Públicas y Seguridad'
    },
    modelo_estado: {
      headline: 'Proceso constituyente hacia la Tercera República y España plurinacional',
      summary:
        'Propone abrir un proceso constituyente para proclamar una Tercera República mediante referéndum vinculante sobre la Monarquía y reconocer el derecho a decidir.',
      measures: [
        'Convocar un referéndum vinculante sobre la continuidad de la Monarquía y abrir un proceso constituyente hacia una Tercera República.',
        'Reconocer una España plurinacional basada en el derecho a decidir de los territorios y profundización del autogobierno.',
        'Suprimir los privilegios institucionales de la Corona y garantizar igualdad jurídica de las lenguas cooficiales.',
        'Reforzar la solidaridad interterritorial y los servicios públicos comunes.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Modelo de Estado'
    },
    energia_campo: {
      headline: 'Empresa energética pública (nacionalización), fin del marginalismo y topes',
      summary:
        'Plantea topar por ley las tarifas eléctricas, acabar con el sistema marginalista y crear una gran empresa pública de energía hacia un modelo 100% renovable.',
      measures: [
        'Acabar con el sistema marginalista de fijación de precios eléctricos e imponer topes legales en tarifas de luz y gas.',
        'Crear una gran empresa pública de energía (nacionalizando grandes operadoras estratégicas) para dirigir la transición 100% renovable.',
        'Impulsar el autoconsumo, el cierre nuclear y una transición justa que proteja el empleo de las comarcas afectadas.',
        'Prohibir las macrogranjas industriales y apoyar la ganadería y agricultura sostenible.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Energía y Transición Ecológica'
    },
    exterior_ue: {
      headline: '«No a la guerra» en la Constitución, estatuto de neutralidad y salida de la OTAN',
      summary:
        'Propugna blindar constitucionalmente el «No a la guerra», aprobar un estatuto de neutralidad militar, abandonar la OTAN y cerrar bases estadounidenses.',
      measures: [
        'Reformar la Constitución para incluir expresamente el principio del «No a la guerra» y aprobar un estatuto de neutralidad.',
        'Promover la salida de España de la OTAN y el cierre inmediato de las bases militares de Rota y Morón.',
        'Rechazar el aumento del gasto militar y reorientar esos recursos a sanidad, vivienda y educación.',
        'Aplicar embargos de armamento y sanciones diplomáticas ante vulneraciones del derecho internacional.'
      ],
      sourceRef: 'Programa Electoral Podemos 29N-2026: Paz, Neutralidad y Exterior'
    }
  },

  iu: {
    economia: {
      headline: 'Reforma fiscal al 1% más rico, banca pública, IVA progresivo y alivio de deuda',
      summary:
        'Dentro de Frente Amplio 2026, IU impulsa una reforma fiscal profunda sobre grandes fortunas y sociedades, banca pública, control de precios y condonación de deuda territorial.',
      measures: [
        'Ejecutar una reforma fiscal progresiva con tipo mínimo real del 20% en Sociedades y gravamen a grandes herencias y patrimonios.',
        'Crear una banca pública estatal, un fondo soberano renovable y empresas públicas en sectores estratégicos.',
        'Implantar IVA progresivo (0%-21%) en suministros básicos e intervenir márgenes abusivos en bienes esenciales.',
        'Condonar deuda autonómica condicionada a prohibir bajadas fiscales a rentas altas y aliviar la deuda de los ayuntamientos.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026'
    },
    vivienda: {
      headline: '1,5 millones de viviendas públicas (1% PIB/año), tope del 25% y expropiación',
      summary:
        'Reclama en el programa conjunto 2026 la movilización del 1% del PIB anual para 1,5 millones de viviendas públicas y límites obligatorios al alquiler.',
      measures: [
        'Construir y movilizar 1,5 millones de viviendas públicas en 12 años destinadas a alquiler social permanente.',
        'Topar los alquileres al 25% de la renta neta del hogar en zonas tensionadas con rebaja adicional en urbes masificadas.',
        'Expropiar progresivamente el stock residencial de grandes tenedores corporativos y prohibir compra especulativa a personas jurídicas.',
        'Paralizar todo desahucio sin alternativa habitacional y extinguir pisos turísticos en zonas tensionadas en 3 años.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Vivienda'
    },
    empleo: {
      headline: 'Jornada de 32 horas (37,5 h ya), SMI al 60% y democracia en las empresas',
      summary:
        'Impulsa la reducción inmediata de jornada hacia las 32 horas semanales, la mejora del SMI y la participación obrera en la gestión empresarial.',
      measures: [
        'Implantar las 37,5 horas semanales en 2026 (35 h en empleo público) con horizonte legal de 32 horas sin pérdida salarial.',
        'Blindar el Salario Mínimo Interprofesional equivalente al 60% del salario medio neto.',
        'Incorporar representación de las plantillas en los consejos de administración y reparto obligatorio de beneficios.',
        'Reforzar la negociación colectiva, la Inspección de Trabajo y la indemnización disuasoria por despido.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Trabajo'
    },
    pensiones: {
      headline: 'Blindaje constitucional al IPC, jubilación a los 65 años y 200 €/mes por menor',
      summary:
        'Defiende proteger las pensiones en la Constitución, recuperar los 65 años de jubilación ordinaria y desplegar la Prestación Universal por Crianza.',
      measures: [
        'Blindar en la Constitución (art. 167 CE) el sistema público de pensiones, su revalorización al IPC y pensión mínima igual al SMI.',
        'Devolver la edad ordinaria de jubilación a los 65 años, con retiro a los 60 en oficios penosos y sin coeficientes reductores tras 40 años cotizados.',
        'Implantar una Prestación Universal por Crianza de 200 €/mes por menor y reforzar el IMV hasta el 60% de la renta mediana.',
        'Eliminar deducciones a planes privados individuales y destopar cotizaciones máximas.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Pensiones'
    },
    regeneracion_justicia: {
      headline: 'Estado laico, desbloqueo del CGPJ, proporcionalidad electoral y transparencia',
      summary:
        'Defiende reformar la LOPJ para impedir bloqueos en el CGPJ, garantizar la laicidad del Estado y ampliar mecanismos anticorrupción y de memoria democrática.',
      measures: [
        'Desbloquear la renovación del CGPJ por mayoría absoluta tras dos meses sin acuerdo y recuperar la responsabilidad civil judicial por dolo o culpa grave.',
        'Garantizar la laicidad del Estado suprimiendo privilegios fiscales confesionales y reforzando la memoria democrática.',
        'Regular transparencia algorítmica, pluralismo en medios de comunicación y control ético de la contratación pública.',
        'Ampliar la proporcionalidad electoral y la participación ciudadana vinculante.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Democracia'
    },
    sanidad: {
      headline: 'Suelo del 8% del PIB, reversión de privatizaciones e integración de MUFACE',
      summary:
        'Exige blindar el 8% del PIB en sanidad pública, destinar el 25% a Atención Primaria, integrar mutuas de funcionarios y crear una farmacéutica pública.',
      measures: [
        'Garantizar un mínimo del 8% del PIB para sanidad pública de gestión directa, con un 25% para Atención Primaria.',
        'Revertir e internalizar servicios privatizados e integrar MUFACE, MUGEJU e ISFAS en el SNS.',
        'Incluir gratuitamente salud bucodental, visual, audífonos y psicología clínica en la cartera pública.',
        'Crear una industria farmacéutica 100% pública y devolver la gestión de bajas médicas al SNS.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Sanidad'
    },
    educacion: {
      headline: 'Suelo del 7% del PIB, gratuidad de 0 años a universidad y red pública fuerte',
      summary:
        'Reivindica alcanzar el 7% del PIB en educación pública en 2030, gratuidad integral desde 0-3 años a la universidad y reducción de carga lectiva docente.',
      measures: [
        'Alcanzar por ley un suelo mínimo del 7% del PIB para educación pública en 2030.',
        'Garantizar la gratuidad completa desde la etapa 0-3 años hasta la universidad, duplicar becas obligatorias y comedores escolares gratuitos.',
        'Limitar la carga lectiva a 18 horas en Secundaria y 23 en Primaria, reduciendo ratios por aula.',
        'Someter las universidades privadas a auditorías estrictas de calidad docente e investigadora.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Educación'
    },
    inmigracion: {
      headline: 'Regularización estable, refuerzo de extranjería y Ley Integral Antirracismo',
      summary:
        'Aboga por culminar la regularización de 2026, establecer vías permanentes de regularización y aprobar una Ley Integral Antirracismo.',
      measures: [
        'Culminar todas las solicitudes de regularización de 2026 reforzando un 30% las Oficinas de Extranjería.',
        'Instaurar un procedimiento reglado y permanente de regularización en la Ley de Extranjería.',
        'Eliminar listas de países seguros, rechazar centros de retorno externos y facilitar visados en crisis humanitarias.',
        'Aprobar una Ley Integral Antirracismo y el Estatuto del Pueblo Gitano.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Migraciones'
    },
    seguridad: {
      headline: 'Derogación de la Ley Mordaza y seguridad preventiva basada en derechos',
      summary:
        'Rechaza la criminalización de la protesta y plantea políticas preventivas multiagencia y regulación estricta del uso policial de la fuerza.',
      measures: [
        'Derogar los preceptos sancionadores de la Ley de Seguridad Ciudadana y eliminar delitos contra la protesta social.',
        'Regular por ley el uso de la fuerza policial conforme a estándares del TEDH y Naciones Unidas.',
        'Priorizar políticas preventivas y de justicia restaurativa frente al punitivismo.',
        'Reforzar juzgados especializados en violencia machista y delitos de odio.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Seguridad'
    },
    modelo_estado: {
      headline: 'República Federal y Plurinacional, financiación justa y autonomía local',
      summary:
        'Defiende avanzar hacia una República Federal y Plurinacional que prohíba el dumping fiscal autonómico y refuerce la financiación municipal.',
      measures: [
        'Avanzar hacia una República Federal y Plurinacional que reconozca la diversidad de pueblos y lenguas cooficiales.',
        'Reformar la financiación autonómica compensando déficits históricos y prohibiendo rebajas fiscales a rentas altas.',
        'Crear un nuevo marco de financiación municipal con regla de gasto justa y alivio de deuda local.',
        'Invertir en tren público y servicios para frenar la despoblación y atender la insularidad.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Modelo Federal'
    },
    energia_campo: {
      headline: 'Comercializadora pública, 3h de luz gratis, cierre nuclear y 25% agroecológico',
      summary:
        'Combina el fin del sistema marginalista eléctrico y la energía pública con tres horas de luz gratuita, cierre nuclear en 2027-2028 y apoyo al campo sostenible.',
      measures: [
        'Excluir nuclear e hidroeléctrica del sistema marginalista, crear comercializadora pública con 3 horas diarias de luz gratuita y recuperar redes.',
        'Cumplir el calendario de cierre nuclear (Almaraz I y II en 2027-2028) con transición justa y 3,5% del PIB en transición ecológica.',
        'Alcanzar un 25% de superficie agraria y ganadera ecológica en 2030 y crear un abono único estatal de transporte.',
        'Ampliar la protección penal contra el maltrato animal e incluir perros de caza en la Ley de Bienestar Animal.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Transición Ecológica'
    },
    exterior_ue: {
      headline: 'Rechazo al gasto OTAN, 0,7% cooperación, Europa social y solidaridad internacional',
      summary:
        'Mantiene el rechazo al rearme y al objetivo militar de la OTAN, defendiendo cooperación del 0,7%, Palestina y el Sáhara Occidental.',
      measures: [
        'Rechazar explícitamente el objetivo de gasto militar de la OTAN y redirigir fondos hacia protección civil y gasto social.',
        'Alcanzar el 0,7% de ayuda oficial al desarrollo y someter el comercio de armas a control estricto.',
        'Impulsar una Europa social y autónoma que reforme el Pacto de Estabilidad frente a la austeridad.',
        'Defender el derecho internacional y la solidaridad activa con Palestina y el Sáhara Occidental.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio / Izquierda Unida 29N-2026: Paz y Europa'
    }
  },

  pce: {
    economia: {
      headline: 'Planificación democrática, nacionalización estratégica y propiedad pública',
      summary:
        'Plantea superar el dominio de los monopolios privados mediante la nacionalización de sectores clave y la planificación económica al servicio del trabajo.',
      measures: [
        'Nacionalizar sectores estratégicos: energía, banca, telecomunicaciones y transporte ferroviario y aéreo.',
        'Implantar una planificación democrática de la economía orientada a la reindustrialización y el empleo estable.',
        'Establecer una reforma fiscal radical que grave el gran capital, el patrimonio y los beneficios empresariales.',
        'Controlar por ley los precios de bienes básicos y servicios esenciales frente a la inflación.',
        'Ejecutar una auditoría integral y suspensión de pagos sobre la deuda considerada ilegítima frente a acreedores financieros y reglas del euro.'
      ],
      sourceRef: 'Programa Estratégico del PCE (febrero 2024; concurre en Frente Amplio 2026)'
    },
    vivienda: {
      headline: 'Expropiación de viviendas vacías de fondos y parque público permanente',
      summary:
        'Concibe la vivienda como un bien social incompatible con la especulación financiera, defendiendo la intervención total del parque ocioso.',
      measures: [
        'Expropiar las viviendas vacías acumuladas por la banca rescatada y los fondos buitre.',
        'Crear un parque público estatal y municipal permanente de alquiler social limitado al 15% del salario.',
        'Prohibir por ley todo desahucio de primera residencia sin alternativa habitacional digna.',
        'Regular todos los precios del alquiler y prohibir la conversión de vivienda residencial en alojamiento turístico.'
      ],
      sourceRef: 'Propuestas de Vivienda del PCE'
    },
    empleo: {
      headline: 'Jornada de 32 horas, pleno empleo garantizado y fin de subcontratas abusivas',
      summary:
        'Propone la reducción drástica de la jornada laboral, el trabajo garantizado desde el sector público y la recuperación integral de derechos laborales.',
      measures: [
        'Implantar la jornada laboral de 32 horas semanales sin pérdida de poder adquisitivo ni flexibilidad patronal.',
        'Crear un plan de trabajo garantizado en servicios públicos, industria, cuidados y transición ecológica.',
        'Derogar todas las reformas laborales regresivas y prohibir las empresas de trabajo temporal y subcontratas abusivas.',
        'Reforzar la negociación colectiva sectorial y la capacidad sancionadora de la Inspección de Trabajo.'
      ],
      sourceRef: 'Programa Laboral y Sindical del PCE'
    },
    pensiones: {
      headline: 'Pensiones 100% públicas financiadas por PGE y jubilación a los 60-65 años',
      summary:
        'Reivindica un sistema público de reparto blindado con cargo a los Presupuestos Generales y la rebaja de la edad de jubilación.',
      measures: [
        'Financiar las pensiones públicas también vía Presupuestos Generales del Estado mediante fiscalidad al capital.',
        'Fijar la edad ordinaria de jubilación en los 65 años, con reducción a los 60 años en profesiones penosas o de riesgo.',
        'Revalorizar todas las pensiones por encima del IPC real y prohibir la privatización mediante fondos de empleo.',
        'Equiparar la pensión mínima con el salario mínimo garantizado.'
      ],
      sourceRef: 'Sistema Público de Pensiones en las Tesis del PCE'
    },
    regeneracion_justicia: {
      headline: 'Proceso constituyente, justicia popular y fin de privilegios institucionales',
      summary:
        'Propugna la apertura de un proceso constituyente republicano que democratice los tribunales, el sistema electoral y las instituciones del Estado.',
      measures: [
        'Abrir un proceso constituyente democrático que someta a control ciudadano todos los poderes del Estado.',
        'Reformar el sistema electoral para lograr representación proporcional estricta en todo el país.',
        'Suprimir aforamientos, leyes mordaza y organismos heredados sin control democrático.',
        'Garantizar la transparencia absoluta del patrimonio de cargos públicos y financiación de partidos.'
      ],
      sourceRef: 'Documentos Políticos del PCE sobre Democracia y Estado'
    },
    sanidad: {
      headline: 'Sistema Nacional de Salud único, 100% público y de gestión directa',
      summary:
        'Exige la desprivatización completa de hospitales, centros y servicios auxiliares, además de la nacionalización de la industria farmacéutica.',
      measures: [
        'Nacionalizar los hospitales privados concertados y prohibir todo lucro empresarial en la salud.',
        'Crear una industria farmacéutica estatal que produzca medicamentos y vacunas sin patentes especulativas.',
        'Integrar toda la atención sociosanitaria, dental, psicológica y geriátrica en la red pública.',
        'Incrementar las plantillas fijas y eliminar la temporalidad en el Sistema Nacional de Salud.'
      ],
      sourceRef: 'Sanidad Pública en las Tesis del PCE'
    },
    educacion: {
      headline: 'Escuela pública única y laica, supresión de conciertos y acceso universal',
      summary:
        'Defiende la integración progresiva de la enseñanza concertada en la red pública única, gratuita y laica.',
      measures: [
        'Eliminar los conciertos educativos e integrar los centros privados sostenidos con fondos públicos en la red pública.',
        'Garantizar gratuidad total desde el ciclo de 0 a 3 años hasta el doctorado universitario.',
        'Suprimir la enseñanza confesional religiosa de todos los centros escolares.',
        'Garantizar becas salario para que ningún estudiante abandone los estudios por motivos económicos.'
      ],
      sourceRef: 'Educación Pública y Laica del PCE'
    },
    inmigracion: {
      headline: 'Solidaridad internacionalista de clase, papeles para todos y fin de CIEs',
      summary:
        'Rechaza la criminalización de la población migrante, defendiendo derechos laborales plenos como garantía frente a la explotación patronal.',
      measures: [
        'Derogar la Ley de Extranjería y conceder residencia y permisos de trabajo plenos a todas las personas migrantes.',
        'Cerrar todos los Centros de Internamiento de Extranjeros y poner fin a las políticas de frontera de la UE.',
        'Perseguir penalmente a las empresas que exploten mano de obra sin papeles para rebajar salarios.',
        'Garantizar la igualdad de derechos políticos, sindicales y sociales de toda la clase trabajadora residente.'
      ],
      sourceRef: 'Programa del PCE sobre Migración y Clase Trabajadora'
    },
    seguridad: {
      headline: 'Derogación de leyes represivas y desmilitarización del orden público',
      summary:
        'Exige eliminar normas que limitan la acción sindical y social, desmilitarizar cuerpos policiales y perseguir delitos económicos y fascismo.',
      measures: [
        'Derogar íntegramente la Ley de Seguridad Ciudadana y eliminar la criminalización del derecho de huelga y piquetes.',
        'Suprimir el carácter militar de la Guardia Civil avanzando hacia cuerpos policiales civiles unificados.',
        'Perseguir de oficio el fraude fiscal, los delitos contra los derechos de los trabajadores y los delitos de odio.',
        'Orientar el sistema penitenciario a la reeducación y reinserción social eliminando la prisión permanente revisable.'
      ],
      sourceRef: 'Derechos Democráticos y Seguridad — PCE'
    },
    modelo_estado: {
      headline: 'República Federal, Plurinacional y Solidaria con derecho de autodeterminación',
      summary:
        'Defiende la superación de la Monarquía y la construcción de una República federal basada en la libre adhesión de los pueblos.',
      measures: [
        'Proclamar una República Federal y Solidaria mediante referéndum constituyente.',
        'Reconocer el derecho de autodeterminación de las naciones del Estado en el marco de una unión federal libre.',
        'Garantizar la igualdad fiscal y redistributiva entre todos los territorios del Estado.',
        'Abolir privilegios dinásticos y democratizar la Jefatura del Estado.'
      ],
      sourceRef: 'Tesis sobre el Modelo de Estado del PCE'
    },
    energia_campo: {
      headline: 'Nacionalización energética, reforma agraria y transición ecológica pública',
      summary:
        'Propone una transición ecológica dirigida por el Estado que evite la quiebra del campo familiar y la pobreza energética.',
      measures: [
        'Nacionalizar las grandes compañías eléctricas e hidroeléctricas creando una red energética estatal.',
        'Impulsar una reforma agraria social que proteja a pequeños agricultores frente a grandes cadenas distribuidoras.',
        'Sustituir la energía nuclear y los combustibles fósiles por renovables planificadas sin expolio rural.',
        'Garantizar suministro básico de luz, agua y gas como derecho humano inalienable.'
      ],
      sourceRef: 'Plan Ecosocialista del PCE'
    },
    exterior_ue: {
      headline: 'Ruptura con la OTAN, desmantelamiento de bases y soberanía frente al euro',
      summary:
        'Defiende una política exterior antiimperialista, salida inmediata de la OTAN y superación de los tratados neoliberales de la UE.',
      measures: [
        'Salida unilateral de España de la OTAN y cierre inmediato de las bases militares estadounidenses.',
        'Rechazar los tratados europeos que imponen austeridad, privatizaciones y rearme militar.',
        'Construir una política exterior no alineada basada en el derecho internacional y el desarme nuclear.',
        'Establecer relaciones comerciales soberanas y justas con América Latina, el Magreb y el Sur Global.'
      ],
      sourceRef: 'Política Internacional Antiimperialista del PCE'
    }
  },

  psoe: {
    economia: {
      headline: 'Fiscalidad a grandes tecnológicas y fortunas, consolidación y reglas europeas',
      summary:
        'Su programa 29N-2026 («La fuerza de seguir avanzando») refuerza la tributación sobre grandes patrimonios, tecnológicas y empresas con brechas salariales altas manteniendo la senda fiscal europea.',
      measures: [
        'Introducir figuras impositivas específicas sobre grandes patrimonios, grandes tecnológicas y empresas cotizadas con mayores brechas salariales.',
        'Consolidar gravámenes permanentes a banca y grandes fortunas y el mínimo del 15% en Sociedades para multinacionales.',
        'Impulsar la digitalización productiva, apoyo a pymes y regulación ética de la inteligencia artificial frente a monopolios digitales.',
        'Mantener la senda gradual de reducción del déficit bajo el 3% y de la deuda pública conforme a las reglas fiscales europeas.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: La fuerza de seguir avanzando'
    },
    vivienda: {
      headline: 'Derecho constitucional, CASA 47 (100.000 viviendas), TUCASA (50.000 €) y 1% del PIB',
      summary:
        'Eleva la vivienda a derecho constitucional exigible, moviliza el 1% del PIB anual, consolida la entidad CASA 47 y crea préstamos TUCASA sin intereses de hasta 50.000 €.',
      measures: [
        'Reformar la Constitución para reconocer la vivienda digna como derecho fundamental exigible.',
        'Movilizar anualmente el 1% del PIB en vivienda y destinar el 1% de cada licitación de obra pública estatal a vivienda protegida.',
        'Consolidar la Entidad Estatal de Vivienda (CASA 47) con 100.000 viviendas de protección permanente y presión fiscal contra viviendas vacías de grandes tenedores.',
        'Desplegar el programa TUCASA con préstamos públicos sin intereses de hasta 50.000 € para jóvenes en la entrada de su primera vivienda.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Bloque de Vivienda'
    },
    empleo: {
      headline: 'Jornada legal de 37,5 horas (senda 35 h), SMI al 60% y apoyo a pymes',
      summary:
        'Se compromete a completar por ley la jornada máxima de 37,5 horas semanales, incentivar en convenios el avance hacia 35 horas y proteger el poder adquisitivo del SMI.',
      measures: [
        'Completar por ley la reducción de la jornada ordinaria máxima a 37,5 horas semanales sin pérdida salarial.',
        'Incentivar en la negociación colectiva el avance progresivo hacia las 35 horas semanales con adaptación para pymes.',
        'Seguir elevando el Salario Mínimo Interprofesional en consonancia con el coste de la vida (60% del salario medio).',
        'Consolidar la estabilidad contractual, los permisos de conciliación (19 semanas) y la digitalización de autónomos y pymes.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Empleo y Conciliación'
    },
    pensiones: {
      headline: 'Blindaje constitucional al IPC y sostenibilidad mediante Fondo de Reserva',
      summary:
        'Propone blindar constitucionalmente el sistema público de pensiones y su revalorización anual obligatoria por IPC, reforzando los ingresos de la Seguridad Social.',
      measures: [
        'Reformar la Constitución para blindar explícitamente el sistema público de pensiones y su actualización automática conforme al IPC.',
        'Seguir nutriendo el Fondo de Reserva de la Seguridad Social mediante los mecanismos de ingresos y equidad intergeneracional.',
        'Mejorar de forma gradual las pensiones mínimas y de viudedad reduciendo la brecha de género.',
        'Incentivar la jubilación demorada voluntaria y compatible con la actividad laboral.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Pensiones'
    },
    regeneracion_justicia: {
      headline: 'Renovación sin bloqueos del CGPJ, digitalización judicial y transparencia',
      summary:
        'Propone reformar plazos de renovación de órganos constitucionales, agilizar los juzgados digitalmente y ampliar derechos civiles como el blindaje constitucional del aborto.',
      measures: [
        'Reformar los mecanismos legales para evitar bloqueos en la renovación del Consejo General del Poder Judicial.',
        'Blindar el derecho al aborto en la Constitución y aprobar una ley específica contra la violencia vicaria.',
        'Digitalizar los juzgados y ampliar tribunales de instancia para reducir la congestión procesal.',
        'Reforzar la transparencia en publicidad institucional, contratos públicos y prevención de conflictos de interés.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Instituciones y Derechos'
    },
    sanidad: {
      headline: 'Plan Sonríe dental, salud mental (<30 días) y blindaje de gestión directa',
      summary:
        'Incorpora el Plan Sonríe para tratamientos bucodentales públicos, garantiza primera cita psicológica en menos de 30 días y limita el trasvase a la sanidad privada.',
      measures: [
        'Desplegar el Plan Sonríe para incorporar tratamientos dentales básicos en el SNS (con ayudas puente de hasta 200 € para rentas bajas).',
        'Consolidar la atención psicológica pública gratuita garantizando una primera consulta en menos de 30 días.',
        'Reforzar la Atención Primaria, ampliar plazas MIR y limitar nuevas privatizaciones mediante gestión pública directa.',
        'Aprobar planes de choque con financiación finalista para reducir listas de espera quirúrgicas y diagnósticas.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Sanidad Pública'
    },
    educacion: {
      headline: 'Universalización de 0-3 años, nueva FP dual y récord histórico en becas',
      summary:
        'Mantiene la convivencia de red pública y concertada priorizando la inversión en la red pública, las becas universitarias y la Formación Profesional dual.',
      measures: [
        'Crear nuevas plazas públicas gratuitas en la etapa de educación infantil de 0 a 3 años.',
        'Consolidar la red de Formación Profesional dual ligada a las demandas industriales, digitales y tecnológicas.',
        'Ampliar la red de becas y ayudas al estudio desde la etapa escolar hasta la universidad.',
        'Fomentar programas de refuerzo escolar en matemáticas y comprensión lectora y coordinación técnica en la PAU.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Educación y Ciencia'
    },
    inmigracion: {
      headline: 'Migración legal ordenada, fondo de 500 M€ de integración y reparto solidario',
      summary:
        'Plantea vías legales y circulares de migración laboral, un fondo de 500 millones € para integración, persecución de mafias y reparto solidario de menores.',
      measures: [
        'Facilitar vías ordenadas de migración legal vinculada al empleo (incluyendo visados de arraigo y migración circular).',
        'Destinar una partida específica de unos 500 millones de euros a políticas de integración y convivencia social.',
        'Combatir la inmigración irregular persiguiendo mafias en origen y tránsito con cooperación bilateral.',
        'Garantizar un reparto coordinado y solidario de menores migrantes no acompañados entre las comunidades autónomas.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Política Migratoria'
    },
    seguridad: {
      headline: 'Más plantillas policiales, lucha contra ciberdelitos y protección VioGén',
      summary:
        'Apuesta por ampliar efectivos y medios tecnológicos de Policía y Guardia Civil, reforzar la seguridad frente al narcotráfico y proteger en el entorno digital.',
      measures: [
        'Ampliar las plantillas y equipamientos de Policía Nacional y Guardia Civil con nuevas ofertas de plazas.',
        'Reforzar los planes de seguridad en el Campo de Gibraltar y costas frente al narcotráfico y crimen organizado.',
        'Potenciar unidades de ciberseguridad, estafas digitales y protección de menores y derechos en la red.',
        'Consolidar el sistema VioGén y los mecanismos contra la violencia vicaria y delitos de odio.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Seguridad Ciudadana'
    },
    modelo_estado: {
      headline: 'Estado autonómico cooperativo frente a recentralización o fragmentación',
      summary:
        'Defiende el Estado de las Autonomías frente a propuestas centralizadoras o independentistas, reforzando la cogobernanza y un nuevo sistema de financiación.',
      measures: [
        'Rechazar tanto la recentralización autonómica como los referéndums unilaterales de independencia.',
        'Aprobar un nuevo sistema de financiación autonómica que garantice suficiencia en servicios básicos y lealtad institucional.',
        'Institucionalizar la Conferencia de Presidentes y la cooperación multilateral entre administraciones.',
        'Proteger y fomentar el uso práctico de las lenguas cooficiales en las instituciones del Estado.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Modelo Territorial'
    },
    energia_campo: {
      headline: 'Transición verde justa, renovables y salida nuclear con control técnico',
      summary:
        'Mantiene el calendario de transición ecológica hacia energías renovables e hidrógeno verde, compatibilizado con informes de seguridad del CSN sobre extensiones transitorias.',
      measures: [
        'Mantener el calendario pactado de salida nuclear compaginado con autorizaciones técnicas condicionadas por el Consejo de Seguridad Nuclear.',
        'Alcanzar más del 80% de generación eléctrica renovable en 2030 e impulsar el almacenamiento y el hidrógeno verde.',
        'Invertir en modernización de regadíos sostenibles, digitalización rural y seguros agrarios frente a sequías.',
        'Defender una transición ecológica justa que proteja el empleo industrial y la competitividad del sector primario.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Transición Ecológica y Campo'
    },
    exterior_ue: {
      headline: 'Europeísmo integrador, compromisos con la OTAN y multilateralismo',
      summary:
        'Reafirma los compromisos de España en la Unión Europea y la OTAN, combinados con seguridad humana, deuda común europea y cooperación multilateral.',
      measures: [
        'Impulsar en la Unión Europea mecanismos permanentes de financiación común para defensa, clima, industria y autonomía estratégica.',
        'Reafirmar los compromisos de España en el seno de la OTAN y el vínculo transatlántico.',
        'Promover el concepto de seguridad humana, el multilateralismo y el derecho internacional humanitario.',
        'Fortalecer la diplomacia con Iberoamérica, la vecindad mediterránea y la solución de dos Estados en Oriente Próximo.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Europa y Política Exterior'
    }
  },

  cs: {
    economia: {
      headline: 'Auditorías de eficacia, «Test PYME», alivio fiscal y control de deuda',
      summary:
        'En coalición electoral 2026 con Democracia 21 y UCIN («La España que merecemos»), prioriza auditar el gasto público, desburocratizar pymes e incentivar subidas salariales.',
      measures: [
        'Someter todo programa de gasto público a auditorías independientes de impacto y evaluar las grandes obras a través de la AIReF.',
        'Implantar un «Test PYME» preceptivo en toda nueva norma y reducir cargas regulatorias para evitar la asfixia burocrática.',
        'Crear una deducción en Sociedades para empresas que suban salarios por encima del IPC (reforzada en jóvenes) y reformar la Segunda Oportunidad.',
        'Rebajar el IRPF de forma sostenible y contener la deuda pública eliminando duplicidades y gasto clientelar.'
      ],
      sourceRef: 'La España que merecemos (Programa coalición Democracia para el Siglo 21 · 2026)'
    },
    vivienda: {
      headline: 'Cero impuestos a menores de 35 años, recargo a no residentes y 10.000 M€ UE',
      summary:
        'Suprime impuestos de compra de primera vivienda a menores de 35 años (hasta 400.000 €), reorienta 10.000 millones europeos y persigue el alquiler fraudulento.',
      measures: [
        'Eliminar impuestos estatales en la compra de vivienda habitual a menores de 35 años y reducirlos para todos (hasta 400.000 €).',
        'Reorientar 10.000 millones de euros de fondos europeos hacia un fondo soberano de vivienda asequible y rehabilitación.',
        'Aplicar un recargo autonómico de hasta el 25% a la compra de vivienda no habitual por no residentes y bonificar el IRPF a caseros en alquiler estable.',
        'Tipificar como estafa la inquiocupación premeditada y cruzar digitalmente alquileres de temporada con el padrón.'
      ],
      sourceRef: 'La España que merecemos: Bloque de Vivienda (Coalición D21/Cs 2026)'
    },
    empleo: {
      headline: 'Productividad con IA, alivio burocrático a autónomos y marco pyme proporcional',
      summary:
        'Plantea elevar los salarios vía productividad y deducciones fiscales, proteger a los autónomos de cargas administrativas y habilitar transición de 2 años a micropymes.',
      measures: [
        'Desplegar un Plan Estatal de Integración de la IA y apoyar a pymes para elevar su tamaño y productividad salarial.',
        'Reducir más de 200 horas anuales de burocracia a autónomos mediante la «Autopista Digital Española» y pago proporcional a lo ganado.',
        'Habilitar periodos transitorios de adaptación de 2 años en nuevas obligaciones laborales para micropymes y vetar contratos públicos con sueldos precarios.',
        'Facilitar el relevo generacional de negocios rentables próximos a la jubilación del titular.'
      ],
      sourceRef: 'La España que merecemos: Productividad, PYMES y Autónomos (2026)'
    },
    pensiones: {
      headline: 'Asamblea Ciudadana de 150 miembros y sostenibilidad intergeneracional',
      summary:
        'Propone sacar las pensiones del debate partidista mediante una Asamblea Ciudadana sorteada junto a expertos para acordar estabilidad presente y futura.',
      measures: [
        'Convocar en los primeros 100 días una Asamblea Ciudadana por el Futuro de las Pensiones (150 ciudadanos sorteados + consejo plural de expertos).',
        'Elevar recomendaciones transparentes y simuladas al Pacto de Toledo y a las Cortes para asegurar estabilidad sin brecha generacional.',
        'Sostener el sistema ampliando la tasa de actividad formal, el empleo joven y la productividad.',
        'Desplegar un plan sociosanitario contra la soledad no deseada de las personas mayores.'
      ],
      sourceRef: 'La España que merecemos: Pensiones y Mayores (Coalición D21/Cs 2026)'
    },
    regeneracion_justicia: {
      headline: 'IGAE blindada con IA, recorte del 90% de asesores, CGPJ judicial y listas abiertas',
      summary:
        'Eje «España Limpia» compartido en 2026: cortar redes clientelares, cesar al Gobierno tras prórroga de presupuestos, acabar con aforamientos y despolitizar la justicia.',
      measures: [
        'Recortar el 90% de asesores a dedo (máximo 4 por ministro), tipificar el enchufismo y hacer responder civilmente a partidos por corrupción.',
        'Blindar al Interventor General (IGAE) por 6 años irrevocables con control de contratación pública en tiempo real por IA.',
        'Suspender sueldos al Gobierno si no presenta Presupuestos y cesarlo automáticamente tras un año de prórroga.',
        'Elegir vocales judiciales del CGPJ por los jueces (sin asociaciones), terna de 3/5 para el Fiscal General, eliminar aforamientos y abrir listas electorales.'
      ],
      sourceRef: 'La España que merecemos: España Limpia (Coalición D21/Cs 2026)'
    },
    sanidad: {
      headline: 'Reducción de listas de espera, retención de talento y salud digital única',
      summary:
        'Ataja récords de listas de espera reforzando plantillas sanitarias, despolitizando gerencias por mérito y digitalizando la historia clínica.',
      measures: [
        'Frenar la fuga de profesionales sanitarios mejorando retribuciones y condiciones laborales en Atención Primaria y hospitales.',
        'Evaluar resultados clínicos y listas de espera de cada hospital con transparencia y gerencias elegidas por concurso de mérito.',
        'Implantar la historia clínica y tarjeta sanitaria plenamente interoperables en todo el territorio.',
        'Centralizar compras tecnológicas y farmacéuticas aprovechando economías de escala.'
      ],
      sourceRef: 'La España que merecemos: Sanidad Pública (Coalición D21/Cs 2026)'
    },
    educacion: {
      headline: 'Tecnología en el currículo, índice socioeducativo y cierre de brechas entre CCAA',
      summary:
        'Propone incorporar competencias tecnológicas reales más allá de pantallas, medir resultados nacionales por comunidades y reforzar las que queden rezagadas.',
      measures: [
        'Incorporar la tecnología como pilar curricular real y eliminar barracones climatizando todos los centros.',
        'Crear un Sistema Nacional de Medición Educativa e Índice Socioeducativo con refuerzo estatal automático a CCAA rezagadas.',
        'Garantizar bilingüismo real, dominio del inglés y derecho al estudio en castellano junto a lenguas cooficiales.',
        'Reforzar la Formación Profesional tecnológica y becas basadas en renta y esfuerzo.'
      ],
      sourceRef: 'La España que merecemos: La educación en el centro (Coalición D21/Cs 2026)'
    },
    inmigracion: {
      headline: '«Política Migratoria con Cabeza»: vías legales, homologación ágil y orden',
      summary:
        'Reconoce la aportación económica y demográfica de la inmigración ordenada mientras exige reglas claras, homologación digital y control de la irregularidad.',
      measures: [
        'Reconocer la aportación productiva de la migración legal y agilizar visados laborales en sectores con déficit y atracción de talento.',
        'Agilizar digitalmente la homologación transparente de títulos universitarios y profesionales extranjeros.',
        'Garantizar el cumplimiento estricto de la ley frente a entradas irregulares en coordinación con Frontex y la UE.',
        'Vincular la residencia estable a integración cívica, lingüística y laboral.'
      ],
      sourceRef: 'La España que merecemos: Política Migratoria con Cabeza (2026)'
    },
    seguridad: {
      headline: 'Mando Único Civil de Ciberseguridad (ANCI), respaldo policial y agilidad penal',
      summary:
        'Crea la Agencia Nacional de Ciberseguridad Independiente (ANCI) separando la ciberseguridad civil del CNI y refuerza medios policiales y judiciales.',
      measures: [
        'Crear la Agencia Nacional de Ciberseguridad Independiente (ANCI) unificando INCIBE, CCN y CNPIC y segregando la ciberseguridad civil del CNI.',
        'Dotar de ciberasesores y protección gratuita ante ciberataques a micropymes y autónomos.',
        'Respaldar salarial y materialmente a Policía Nacional y Guardia Civil y agilizar juicios contra multirreincidencia.',
        'Perseguir penalmente la inquiocupación y proteger la seguridad en barrios y entornos digitales.'
      ],
      sourceRef: 'La España que merecemos: Ciberseguridad y Seguridad (2026)'
    },
    modelo_estado: {
      headline: 'Estado autonómico eficiente, servicios compartidos en diputaciones y unidad de mercado',
      summary:
        'Defiende el modelo autonómico como fortaleza arquitectónica si se eliminan barreras regulatorias internas, duplicidades y privilegios de partido.',
      measures: [
        'Establecer validez automática en toda España de licencias y requisitos empresariales aprobados en cualquier autonomía.',
        'Dotar a entidades locales y comunidades de medios técnicos compartidos a través de las diputaciones y administración digital.',
        'Vincular transferencias territoriales a evaluación de servicios públicos e igualdad de derechos sin privilegios fiscales.',
        'Incorporar una estrategia europea contra la despoblación para la España interior.'
      ],
      sourceRef: 'La España que merecemos: Estado Inteligente y Territorio (2026)'
    },
    energia_campo: {
      headline: 'Desalación con renovables, riego inteligente y ciudades frescas',
      summary:
        'Apuesta por modernización hídrica mediante desalación alimentada con renovables, riego de precisión con incentivos fiscales y adaptación urbana al calor.',
      measures: [
        'Impulsar plantas de desalación alimentadas por energías renovables y reutilización masiva de aguas depuradas.',
        'Fomentar el riego agrícola inteligente (sensores y automatización) con amortización fiscal acelerada y deducciones I+D+i.',
        'Devolver parte del agua ahorrada a ríos y acuíferos sobreexplotados y desplegar planes de «Ciudades Frescas».',
        'Asegurar suministro energético limpio y competitivo para evitar la desindustrialización.'
      ],
      sourceRef: 'La España que merecemos: Agua, Campo y Clima (2026)'
    },
    exterior_ue: {
      headline: 'Refundar el pacto europeo, pilar europeo en la OTAN y condicionalidad democrática',
      summary:
        'Propone una UE motor tecnológico y de defensa común dentro del pilar europeo de la OTAN, condicionando fondos europeos al Estado de derecho.',
      measures: [
        'Exigir condicionalidad democrática estricta para percibir fondos europeos frente a la erosión de libertades.',
        'Reforzar el pilar europeo dentro de la OTAN, la Hoja de Ruta de Defensa 2030 y las compras conjuntas de defensa.',
        'Impulsar el mercado único europeo de capitales, tecnología e innovación industrial.',
        'Reorientar fondos europeos Next Generation no ejecutados a vivienda asequible y cohesión contra la despoblación.'
      ],
      sourceRef: 'La España que merecemos: Construir la UE del Siglo 21 (2026)'
    }
  },

  upyd: {
    economia: {
      headline: 'Unidad de mercado nacional, rigor fiscal y reforma del sector público',
      summary:
        'Propone suprimir barreras administrativas entre comunidades autónomas, revisar subvenciones opacas y reducir la deuda mediante eficiencia administrativa.',
      measures: [
        'Garantizar la plena unidad de mercado suprimiendo normativas autonómicas contradictorias para empresas.',
        'Eliminar subvenciones directas sin concurrencia a organizaciones patronales, sindicatos y entidades afines.',
        'Reorientar el gasto administrativo hacia inversión en I+D+i y formación profesional.',
        'Asegurar transparencia absoluta en todos los contratos y presupuestos públicos.',
        'Reducir el déficit y la deuda pública eliminando duplicidades autonómicas, diputaciones y entes administrativos redundantes.'
      ],
      sourceRef: 'Corpus Programático de Unión Progreso y Democracia (UPyD)'
    },
    vivienda: {
      headline: 'Seguridad jurídica frente a ocupaciones y parque público de alquiler racional',
      summary:
        'Defiende reforzar la protección del propietario frente a ocupaciones ilegales mientras se impulsa oferta pública asequible sin topes intervencionistas.',
      measures: [
        'Acelerar el desalojo judicial de viviendas ocupadas ilegalmente garantizando la tutela efectiva.',
        'Fomentar un parque público de vivienda en alquiler de gestión transparente para jóvenes.',
        'Eliminar trabas urbanísticas locales y desigualdades fiscales autonómicas en la compra de vivienda.',
        'Vincular las ayudas de vivienda directamente a la renta real del ciudadano.'
      ],
      sourceRef: 'Propuestas Sociales y de Vivienda de UPyD'
    },
    empleo: {
      headline: 'Contrato único indefinido e igualdad laboral sin barreras autonómicas',
      summary:
        'Propugna combatir la temporalidad con un contrato único, eliminar barreras lingüísticas para trabajar en otras regiones y modernizar convenios.',
      measures: [
        'Implantar un contrato único indefinido con indemnización progresiva para terminar con la precariedad dual.',
        'Garantizar la igualdad de oportunidades laborales en todo el país eliminando requisitos lingüísticos discriminatorios.',
        'Facilitar la movilidad geográfica de trabajadores eliminando barreras administrativas regionales.',
        'Suprimir cuotas corporativas obligatorias y subvenciones directas sin concurrencia a sindicatos y patronales.'
      ],
      sourceRef: 'Reforma Laboral de UPyD'
    },
    pensiones: {
      headline: 'Cuentas individuales transparentes, Pacto de Toledo y viabilidad actuarial',
      summary:
        'Aboga por asegurar la viabilidad financiera a largo plazo de la Seguridad Social mediante cuentas informativas y reforma del gasto público.',
      measures: [
        'Asegurar cuentas individuales informativas en la Seguridad Social que reflejen exactamente lo cotizado.',
        'Separar claramente las fuentes de financiación de prestaciones contributivas y no contributivas.',
        'Garantizar el poder adquisitivo de las pensiones con reformas estructurales que amplíen la base de cotizantes.',
        'Eliminar pensiones especiales o privilegios parlamentarios respecto al régimen general.'
      ],
      sourceRef: 'Sostenibilidad de Pensiones — UPyD'
    },
    regeneracion_justicia: {
      headline: 'Reforma de la LOREG, proporcionalidad pura, listas abiertas y fin de partidocracia',
      summary:
        'La regeneración institucional constituye la razón de ser del programa de UPyD: igualdad de voto, despolitización de la justicia y fin de duplicidades.',
      measures: [
        'Reformar la Ley Electoral (LOREG) para aplicar proporcionalidad pura ("un ciudadano, un voto") y listas abiertas.',
        'Despolitizar por completo el CGPJ, el Tribunal Constitucional y la Fiscalía General del Estado eliminando cuotas de partido.',
        'Suprimir los aforamientos políticos, tipificar el enriquecimiento ilícito y prohibir indultos por corrupción.',
        'Abolir las puertas giratorias y regular estrictamente la financiación privada y pública de los partidos.'
      ],
      sourceRef: 'Plan de Regeneración Democrática de UPyD'
    },
    sanidad: {
      headline: 'Devolución de la Sanidad al Estado para garantizar igualdad real',
      summary:
        'Reclama recuperar la competencia estatal de Sanidad para evitar 17 carteras distintas de servicios y suprimir desigualdades territoriales.',
      measures: [
        'Reintegrar las competencias de Sanidad al Estado central garantizando gestión eficiente y cobertura idéntica.',
        'Implantar una cartera de servicios, calendario vacunal e historial clínico único en todo el país.',
        'Centralizar compras farmacéuticas y equipamiento tecnológico para ahorrar costes.',
        'Profesionalizar la dirección de centros sanitarios sin nombramientos políticos.'
      ],
      sourceRef: 'Reforma del Estado en Sanidad (UPyD)'
    },
    educacion: {
      headline: 'Competencia educativa estatal, EBAU única y libertad lingüística en castellano',
      summary:
        'Plantea devolver Educación al Estado para homogeneizar niveles, asegurar el estudio en castellano en todo el territorio y exigir excelencia.',
      measures: [
        'Recuperar las competencias de Educación para el Estado garantizando un currículo común de calidad.',
        'Establecer una prueba única nacional de acceso a la universidad y oposiciones docentes homogéneas.',
        'Garantizar la libertad de escolarización en castellano como lengua común y en las cooficiales en su ámbito.',
        'Sustituir la inmersión lingüística obligatoria por modelos trilingües equilibrados.'
      ],
      sourceRef: 'Propuesta Educativa Nacional de UPyD'
    },
    inmigracion: {
      headline: 'Política común europea de asilo, visados legales e integración cívica',
      summary:
        'Defiende la gestión europea coordinada de los flujos migratorios junto al cumplimiento estricto de las leyes de extranjería e integración.',
      measures: [
        'Transferir y coordinar en la Unión Europea el control efectivo de fronteras y el sistema de asilo común.',
        'Condicionar la inmigración laboral a contratos legales y capacidad de integración en la sociedad de acogida.',
        'Garantizar la igualdad de derechos y deberes constitucionales evitando guetos comunitarios.',
        'Agilizar procedimientos de retorno ante entrada irregular firme respetando derechos humanos.'
      ],
      sourceRef: 'Política Migratoria en el Ideario de UPyD'
    },
    seguridad: {
      headline: 'Cuerpos de seguridad bajo mando estatal único y lucha contra multirreincidencia',
      summary:
        'Propone unificar criterios policiales bajo competencia del Estado central y reforzar los recursos contra crimen organizado y terrorismo.',
      measures: [
        'Unificar criterios de seguridad bajo mando estatal reforzando Policía Nacional y Guardia Civil.',
        'Aumentar los recursos contra el crimen organizado, narcotráfico y delincuencia multirreincidente.',
        'Eliminar duplicidades administrativas entre cuerpos policiales mejorando la interoperabilidad de bases de datos.',
        'Reformar la Ley de Seguridad Ciudadana protegiendo derechos fundamentales junto a la autoridad policial.'
      ],
      sourceRef: 'Seguridad Nacional en el Ideario de UPyD'
    },
    modelo_estado: {
      headline: 'Reforma constitucional del Estado autonómico y supresión de diputaciones',
      summary:
        'Propone racionalizar el Estado devolviendo competencias esenciales al centro y eliminando administraciones intermedias redundantes.',
      measures: [
        'Reformar la Constitución para devolver al Estado las competencias de Sanidad, Educación y Justicia.',
        'Suprimir las diputaciones provinciales, las comarcas administrativas y fusionar pequeños municipios inviables.',
        'Eliminar los conciertos y cupos fiscales diferenciados para asegurar igualdad tributaria entre ciudadanos.',
        'Reformar el Senado y el sistema de partidos para evitar que minorías nacionalistas decidan la gobernabilidad.'
      ],
      sourceRef: 'Propuesta de Reforma Constitucional de UPyD'
    },
    energia_campo: {
      headline: 'Mix energético equilibrado con energía nuclear y Plan Hidrológico Nacional',
      summary:
        'Defiende decisiones técnicas alejadas del sesgo ideológico en energía nuclear, renovables y trasvases hídricos estatales.',
      measures: [
        'Mantener las centrales nucleares seguras como energía de respaldo libre de emisiones.',
        'Recuperar competencias hídricas nacionales para garantizar un Plan Hidrológico solidario entre cuencas.',
        'Fomentar energías renovables con criterios de eficiencia económica sin primas especulativas.',
        'Proteger el sector agrario con mercados europeos abiertos y reciprocidad regulatoria.'
      ],
      sourceRef: 'Política Energética e Hídrica de UPyD'
    },
    exterior_ue: {
      headline: 'Federalismo europeo democrático, defensa atlántica y Gibraltar español',
      summary:
        'Apuesta por una Unión Europea federalizada, cumplimiento de compromisos con la OTAN y defensa firme de los intereses estratégicos españoles.',
      measures: [
        'Impulsar una Europa federal dotada de política exterior, fiscal y de seguridad verdaderamente común.',
        'Mantener el compromiso firme de España en la OTAN y modernizar las Fuerzas Armadas.',
        'Defender activamente la soberanía de Ceuta, Melilla y la reivindicación diplomática sobre Gibraltar.',
        'Promover una diplomacia de defensa de la democracia y derechos humanos sin concesiones.'
      ],
      sourceRef: 'Política Exterior y Unión Europea de UPyD'
    }
  },

  pp: {
    economia: {
      headline: 'Deflactación del IRPF, 0% IRPF primer año a jóvenes, IVA 0% básico y control AIReF',
      summary:
        'Su programa «La Reconstrucción Nacional» deflacta el IRPF, exime del IRPF al SMI y el primer año a jóvenes (18-35 años), aplica IVA 0% a alimentos básicos y refuerza la AIReF.',
      measures: [
        'Deflactar el IRPF, eximir por ley al Salario Mínimo (indexado) y reducir el IRPF a trabajadores y autónomos de 18 a 35 años (100% primer año, 75%, 50% y 25% los tres siguientes).',
        'Refundir deducciones familiares del IRPF en una deducción reembolsable mensual y actualizar todos los mínimos familiares con la inflación.',
        'Aplicar IVA del 0% a alimentos básicos (incluidos carne, pescado y conservas) y reducir cargas administrativas generales un 25% (35% en pymes) antes de 2029.',
        'Reducir la deuda pública conforme a reglas europeas, prohibir nuevo gasto sin financiación garantizada y ampliar competencias de la AIReF.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 1.1, 4.2 y 4.4)'
    },
    vivienda: {
      headline: 'Un millón de viviendas, derogación de zonas tensionadas, IVA 4% joven y desalojo en 48h',
      summary:
        'Suprime las zonas tensionadas y topes de alquiler, moviliza suelo público y privado para un millón de viviendas, rebaja al 4% el IVA joven y ordena desalojos judiciales en 48 horas.',
      measures: [
        'Impulsar un millón de viviendas adicionales con una nueva Ley del Suelo, silencio positivo en licencias a tres meses, vivienda industrializada y rehabilitación (IVA 4%).',
        'Derogar las zonas tensionadas y el índice de control de precios de la Ley de Vivienda e introducir deducción en el IRPF para inquilinos con contratos estables.',
        'Reducir del 10% al 4% el IVA de primera vivienda para menores de 40 años (fraccionable), rebajar el ITP usado y ofrecer aval público para la entrada.',
        'Aprobar una ley para el desalojo por orden judicial en 48 horas desde el primer día y facultar a las comunidades de propietarios frente a la ocupación (medida 157).'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Cap. 4.1: Vivienda)'
    },
    empleo: {
      headline: 'Autónomos sin IVA hasta 85.000 €, cuota cero y cheque de formación en IA',
      summary:
        'Exime de cobrar y declarar IVA a autónomos que facturen menos de 85.000 €, amplía la cuota cero, protege su vivienda habitual y crea un cheque de formación en IA.',
      measures: [
        'Eximir de cobrar y declarar el IVA a los autónomos que facturen menos de 85.000 euros anuales y pasar de cuatro declaraciones trimestrales a dos semestrales.',
        'Implantar cuota cero a nuevos autónomos el primer año (y el segundo si no alcanzan el SMI) y proteger por defecto su vivienda habitual.',
        'Bonificar al 100% durante dos años la cuota de autónomos tras permiso de maternidad o paternidad.',
        'Crear un cheque individual de formación en inteligencia artificial para cada trabajador financiado con las cuotas de formación ya existentes.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 4.2 y 4.3)'
    },
    pensiones: {
      headline: 'Caja única de la Seguridad Social y deducciones en IRPF a jubilación activa',
      summary:
        'Blinda la caja única nacional de cotizaciones frente a fragmentaciones territoriales, incentiva la jubilación activa vía IRPF y vincula sostenibilidad al empleo.',
      measures: [
        'Garantizar la caja única de la Seguridad Social para que las cotizaciones financien pensiones y prestaciones por igual en toda España sin dividir recursos por territorios.',
        'Incentivar la jubilación activa voluntaria mediante deducciones específicas en el IRPF.',
        'Sostener el sistema público mediante creación de empleo formal, productividad y actualización demográfica.',
        'Proteger las pensiones y el poder adquisitivo de los mayores reduciendo la carga fiscal básica.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 1.3 y 3.2)'
    },
    regeneracion_justicia: {
      headline: 'Disolución tras 2 prórrogas presupuestarias, TC sin políticos y trazabilidad digital',
      summary:
        'Impone elecciones automáticas si se prorrogan dos Presupuestos seguidos, veta ex cargos políticos recientes en el Tribunal Constitucional y recupera penas previas de malversación.',
      measures: [
        'Promover reformas para que una segunda prórroga presupuestaria consecutiva provoque la disolución automática de las Cortes y convocatoria de elecciones (medida 65).',
        'Exigir que ningún candidato al Tribunal Constitucional haya ocupado cargos políticos en los 5 años previos y resolver recursos sobre derechos fundamentales en 90 días.',
        'Restablecer las penas anteriores por malversación, limitar aforamientos y crear trazabilidad digital interoperable de contratos y subvenciones públicas.',
        'Reforzar al Senado en el control anual de ejecución presupuestaria, fondos europeos y transferencias autonómicas.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Cap. 2: Regenerar la democracia)'
    },
    sanidad: {
      headline: 'Pacto de Estado por la Sanidad, +4.500 médicos de Familia y tarjeta única',
      summary:
        'Propone un Pacto de Estado sanitario con las CCAA, incorporar al menos 4.500 médicos en Atención Primaria y garantizar tarjeta e historia clínica y social únicas.',
      measures: [
        'Impulsar un Pacto de Estado por la Sanidad Pública y un plan urgente de reducción de listas de espera garantizado por la nueva financiación autonómica.',
        'Incorporar al menos 4.500 médicos más en Atención Primaria y ampliar la oferta de formación sanitaria especializada.',
        'Implantar tarjeta sanitaria, historia clínica e historia social únicas consultables desde cualquier servicio asistencial de España (medida 93).',
        'Crear reservas estratégicas nacionales de medicamentos esenciales junto a la industria y las CCAA.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 3.1 y 4.8)'
    },
    educacion: {
      headline: 'Sustituir la LOMLOE, refuerzo en lectura/cálculo y blindar conciertos y educación especial',
      summary:
        'Acuerda sustituir la LOMLOE para mejorar resultados PISA, exigir nota mínima en Magisterio, defender al docente y garantizar conciertos de al menos seis años.',
      measures: [
        'Sustituir la LOMLOE mediante un nuevo marco educativo con refuerzo específico en lectura y cálculo dentro del horario escolar.',
        'Prestigiar la carrera docente exigiendo nota mínima en Magisterio, defensa jurídica de oficio al profesor agredido y menor burocracia.',
        'Garantizar conciertos educativos de al menos seis años con módulos de coste real donde exista demanda familiar y mantener centros de educación especial.',
        'Ampliar la Formación Profesional en ciclos de alta empleabilidad y fomentar coordinación común en la PAU.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Cap. 4.7: Educación)'
    },
    inmigracion: {
      headline: 'Autoridad Migratoria Única, visados por puntos, cupos y nueva Ley de Nacionalidad',
      summary:
        'Prohíbe por ley las regularizaciones masivas, fija cupos anuales vinculados a acuerdos de retorno, identifica entradas irregulares en 7 días y endurece la nacionalidad.',
      measures: [
        'Prohibir por ley las regularizaciones masivas e indiscriminadas y limitar el arraigo a supuestos excepcionales.',
        'Crear una Autoridad Migratoria Única, implantar visados por puntos y fijar cupos anuales solo con países que cumplan acuerdos de retorno.',
        'Identificar a quienes entren irregularmente en un máximo de 7 días y reformar la Ley de Extranjería para rechazar en frontera entradas a nado en Ceuta y Melilla.',
        'Aprobar una nueva Ley de Nacionalidad que exija vínculo efectivo, idioma español, cultura constitucional y ausencia de antecedentes.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 1.5, 1.6 y 3.5)'
    },
    seguridad: {
      headline: 'Refuerzo frontera sur con FFAA, anti-narcopisos y 300.000 M€ en infraestructuras seguras',
      summary:
        'Refuerza Policía, Guardia Civil y apoyo militar puntual en frontera, combate narcopisos y crimen organizado e invierte en seguridad ferroviaria y de presas.',
      measures: [
        'Reforzar de forma permanente Guardia Civil, Policía Nacional, Frontex, drones y apoyo jurídico de las Fuerzas Armadas en Ceuta, Melilla y Canarias.',
        'Endurecer el Código Penal frente a multirreincidencia, ocupación y narcopisos, financiando videovigilancia local y defensa jurídica policial.',
        'Lanzar un plan de más de 300.000 millones de euros en infraestructuras seguras priorizando mantenimiento ferroviario, presas y prevención de catástrofes.',
        'Ampliar incompatibilidades e inelegibilidades para condenados por terrorismo, corrupción grave o en rebeldía judicial.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 1.4, 1.7, 2.1 y 3.3)'
    },
    modelo_estado: {
      headline: 'Financiación multilateral sin privilegios y Alta Inspección del Estado',
      summary:
        'Defiende la pluralidad constitucional dentro de reglas comunes, rechazando cupos bilaterales a cambio de apoyo parlamentario y reforzando la Alta Inspección.',
      measures: [
        'Negociar un nuevo sistema de financiación autonómica de forma multilateral en el CPFF con un fondo de nivelación transitorio financiado por el Estado.',
        'Impedir que ninguna comunidad de régimen común salga del sistema general ni obtenga privilegios fiscales bilaterales (medidas 100-101).',
        'Fortalecer la Alta Inspección del Estado para garantizar que los derechos nacionales se ejerzan por igual en toda España.',
        'Mantener la corresponsabilidad fiscal autonómica bajo análisis técnico conjunto del Ministerio de Hacienda y la AIReF.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 3.1 y 3.2)'
    },
    energia_campo: {
      headline: 'Prórroga nuclear (Almaraz a Trillo), fin impuesto eléctrico 7% y defensa del campo',
      summary:
        'Anula en 100 días el cierre nuclear, suprime el impuesto del 7% a la generación eléctrica, crea una tarifa social única y protege al sector primario con cláusulas espejo.',
      measures: [
        'Eliminar el calendario de cierre de Almaraz, Ascó, Vandellós, Cofrentes y Trillo en los primeros 100 días con aval del CSN y apostar por reactores modulares.',
        'Suprimir el impuesto del 7% a la producción eléctrica, abaratar costes de ajuste del sistema y crear una tarifa social única de la luz.',
        'Reformar la Ley de Montes para gestión preventiva todo el año y defender cláusulas espejo frente a importaciones agrarias.',
        'Garantizar estabilidad regulatoria para la agricultura, ganadería preventiva y pesca.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 1.7, 4.6 y 4.9)'
    },
    exterior_ue: {
      headline: 'Ley de programación de defensa, FFAA profesión de riesgo y peso en Europa',
      summary:
        'Convierte la defensa en política de Estado con financiación plurianual controlada por las Cortes, reconoce a militares como profesión de riesgo y refuerza la UE.',
      measures: [
        'Aprobar una ley plurianual de programación y financiación de la defensa para cumplir con transparencia los compromisos con aliados y la OTAN.',
        'Reconocer a las Fuerzas Armadas como profesión de riesgo, mejorar sus retribuciones y renovar sus capacidades.',
        'Exigir información previa y autorización de las Cortes ante cambios de política exterior que afecten a intereses esenciales o fronteras.',
        'Impulsar una pausa normativa europea de un año sobre burocracia excesiva y reforzar la competitividad industrial de la UE.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 1.1, 1.8 y 4.10)'
    }
  },

  ucd: {
    economia: {
      headline: 'Economía social de mercado, reforma fiscal moderna y Pactos de la Moncloa',
      summary:
        'Referencia histórica de centro reformista: articuló la transición hacia una economía abierta, el IRPF progresivo moderno y el control de la inflación por consenso.',
      measures: [
        'Consolidar una economía social de mercado combinando iniciativa privada con cohesión social.',
        'Mantener un sistema tributario progresivo inspirado en la reforma fiscal de 1977 (IRPF y Patrimonio) con lucha contra el fraude.',
        'Impulsar acuerdos macroeconómicos de consenso entre Gobierno, sindicatos y patronal para moderar la inflación.',
        'Modernizar infraestructuras e industria para preparar la adhesión plena al mercado común europeo.',
        'Controlar el déficit público y el endeudamiento estatal mediante disciplina presupuestaria y equilibrio monetario gradual.'
      ],
      sourceRef: 'Programa UCD (1977-1979) y Pactos de la Moncloa (Referencia histórica)'
    },
    vivienda: {
      headline: 'Fomento de vivienda de protección oficial y seguridad jurídica patrimonial',
      summary:
        'Combinaba el desarrollo de programas estatales de Vivienda de Protección Oficial (VPO) con la protección de la propiedad privada y el crédito hipotecario.',
      measures: [
        'Impulsar planes estatales de Vivienda de Protección Oficial (VPO) en colaboración con entidades de ahorro.',
        'Garantizar el derecho constitucional a la propiedad privada y la estabilidad contractual del alquiler.',
        'Facilitar crédito bancario a familias trabajadoras para acceso a primera vivienda en propiedad.',
        'Coordinar el ordenamiento urbanístico entre ayuntamientos y administraciones autonómicas.'
      ],
      sourceRef: 'Política Social y de Vivienda de UCD (Referencia histórica)'
    },
    empleo: {
      headline: 'Estatuto de los Trabajadores, diálogo sindical y defensa del empleo estable',
      summary:
        'Sentó las bases del moderno marco laboral democrático mediante el derecho de huelga, la negociación colectiva y el consenso social.',
      measures: [
        'Garantizar el diálogo social estable bajo el marco del Estatuto de los Trabajadores y libertad sindical.',
        'Fomentar el empleo estable mediante reducción de cargas empresariales en momentos de reconversión industrial.',
        'Proteger las prestaciones por desempleo y la formación profesional para trabajadores afectados.',
        'Impulsar el empleo juvenil y rural mediante crédito oficial e incentivos a la inversión.'
      ],
      sourceRef: 'Marco Laboral de la Transición — UCD (Referencia histórica)'
    },
    pensiones: {
      headline: 'Universalización de la Seguridad Social y revalorización solidaria',
      summary:
        'Expandió la cobertura de la Seguridad Social hacia un sistema público universal, contributivo y financieramente equilibrado.',
      measures: [
        'Sostener y ampliar la cobertura universal de la Seguridad Social con equilibrio actuarial.',
        'Actualizar periódicamente las pensiones de jubilación, viudedad e invalidez atendiendo a las más bajas.',
        'Integrar regímenes especiales agrarios y de trabajadores autónomos en la protección social moderna.',
        'Modernizar la gestión administrativa del Instituto Nacional de la Seguridad Social.'
      ],
      sourceRef: 'Seguridad Social de la Transición — UCD (Referencia histórica)'
    },
    regeneracion_justicia: {
      headline: 'Consenso constitucional, independencia judicial y libertades democráticas',
      summary:
        'Su programa fundacional estableció el Estado social y democrático de derecho, la separación de poderes y la amnistía y concordia civil.',
      measures: [
        'Preservar el consenso constitucional de 1978 como pacto integrador de toda la sociedad española.',
        'Garantizar la plena independencia del Poder Judicial y del Tribunal Constitucional.',
        'Asegurar el pluralismo político, la libertad de expresión y prensa y la alternancia democrática.',
        'Descentralizar administrativamente con sujeción estricta a la ley y los órganos de control.'
      ],
      sourceRef: 'Fundamentos Constitucionales UCD 1977-1979'
    },
    sanidad: {
      headline: 'Creación del INSALUD y ampliación progresiva de la cobertura asistencial',
      summary:
        'Impulsó la transición hacia un sistema sanitario integrado y financiado públicamente con convivencia de centros públicos y concertados.',
      measures: [
        'Consolidar una red hospitalaria pública amplia coordinada a través del Instituto Nacional de la Salud.',
        'Mantener conciertos complementarios con entidades asistenciales sin ánimo de lucro.',
        'Extender progresivamente la cobertura sanitaria a toda la población residente.',
        'Modernizar la atención primaria rural y comarcal.'
      ],
      sourceRef: 'Reforma Sanitaria de la Transición — UCD'
    },
    educacion: {
      headline: 'Libertad de enseñanza, pacto escolar constitucional y expansión de plazas',
      summary:
        'Articuló el equilibrio constitucional del artículo 27: gratuidad obligatoria de la educación básica junto a la libertad de creación de centros.',
      measures: [
        'Garantizar la enseñanza básica obligatoria y gratuita en toda España construyendo escuelas públicas suficientes.',
        'Respetar la libertad de elección de centro y el derecho de los padres sobre la formación moral de sus hijos.',
        'Financiar conciertos escolares con centros privados de función social bajo control público.',
        'Promover la autonomía universitaria y la ampliación de becas por capacidad y necesidad.'
      ],
      sourceRef: 'Pacto Educativo Constitucional (Art. 27) — UCD'
    },
    inmigracion: {
      headline: 'Regulación legal de extranjería compatible con estándares europeos',
      summary:
        'Sentó el marco legal inicial de extranjería y asilo democrático en concordancia con la Constitución de 1978 y tratados europeos.',
      measures: [
        'Regular los flujos de extranjería con criterios legales compatibles con los estándares europeos.',
        'Reconocer el derecho constitucional de asilo y refugio conforme a la Convención de Ginebra.',
        'Establecer convenios bilaterales de cooperación consular y movilidad laboral con Iberoamérica y Europa.',
        'Garantizar garantías jurídicas administrativas en procedimientos de residencia y permisos de trabajo.'
      ],
      sourceRef: 'Política de Extranjería — UCD (Referencia histórica)'
    },
    seguridad: {
      headline: 'Seguridad ciudadana democrática, profesionalización policial y orden constitucional',
      summary:
        'Transformó los cuerpos policiales hacia modelos democráticos de servicio público, defendiendo la seguridad bajo garantías procesales.',
      measures: [
        'Garantizar la seguridad ciudadana mediante cuerpos policiales sometidos estrictamente a la ley y los jueces.',
        'Fomentar el consenso político y policial frente al terrorismo y el crimen organizado.',
        'Modernizar el sistema penitenciario orientándolo a la legalidad constitucional y reinserción.',
        'Profesionalizar la formación de los cuerpos y fuerzas de seguridad del Estado democrático.'
      ],
      sourceRef: 'Política de Interior y Seguridad — UCD'
    },
    modelo_estado: {
      headline: 'Construcción del Estado de las Autonomías dentro de la unidad nacional',
      summary:
        'Diseñó la arquitectura territorial de 1978 combinando la indisoluble unidad de la Nación española con el derecho a la autonomía de regiones y nacionalidades.',
      measures: [
        'Desarrollar de forma ordenada y pactada el Estado de las Autonomías previsto en el Título VIII de la Constitución.',
        'Asegurar la solidaridad interterritorial mediante el Fondo de Compensación Interterritorial.',
        'Reconocer las lenguas y culturas propias de las comunidades en un marco de lealtad institucional.',
        'Mantener la Monarquía parlamentaria como símbolo de unidad, arbitraje y estabilidad del Estado.'
      ],
      sourceRef: 'Pactos Autonómicos y Constitución de 1978 — UCD'
    },
    energia_campo: {
      headline: 'Plan Energético Nacional equilibrado y modernización del mundo rural',
      summary:
        'Impulsó la diversificación energética ante la crisis del petróleo, combinando centrales térmicas, nucleares e hidráulicas junto al desarrollo agrario.',
      measures: [
        'Planificar el suministro energético nacional combinando energía nuclear, hidroeléctrica y ahorro energético.',
        'Apoyar la modernización de explotaciones agrarias y ganaderas para su integración competitiva en Europa.',
        'Proteger los regadíos y obras hidráulicas mediante planificación estatal.',
        'Iniciar la ordenación de parques nacionales y protección del medio ambiente.'
      ],
      sourceRef: 'Plan Energético Nacional y Política Agraria — UCD'
    },
    exterior_ue: {
      headline: 'Integración en la Comunidad Económica Europea y pertenencia a la OTAN',
      summary:
        'Abrió la política exterior española a las democracias occidentales, solicitando el ingreso en las Comunidades Europeas y formalizando la entrada en la OTAN.',
      measures: [
        'Culminar la integración plena de España en las Comunidades Europeas (CEE) como ancla democrática y económica.',
        'Integrar a España en la Alianza Atlántica (OTAN) garantizando su defensa colectiva occidental.',
        'Mantener relaciones diplomáticas de respeto y cooperación preferente con Iberoamérica.',
        'Normalizar relaciones exteriores con todos los países desde el respeto a la democracia.'
      ],
      sourceRef: 'Política Exterior Occidental de UCD (Referencia histórica)'
    }
  },

  vox: {
    economia: {
      headline: 'Rebaja masiva de IRPF, IVA e Impuesto de Sociedades y regla de derogar 3 normas',
      summary:
        'Su programa 29N-2026 («Es sentido común», 115 medidas) combina rebajas de IRPF con deducciones por hijos, IVA reducido, menos Sociedades y recorte del gasto político.',
      measures: [
        'Rebajar masivamente el IRPF con tipos reducidos según el número de hijos, el Impuesto de Sociedades y el IVA en productos esenciales y electricidad.',
        'Aplicar la regla de derogar tres leyes innecesarias o restrictivas por cada nueva ley aprobada.',
        'Suprimir el Impuesto de Patrimonio, Sucesiones y Donaciones y eliminar subvenciones a partidos, sindicatos, patronales y ONG.',
        'Reducir la deuda pública y el déficit ejecutando recortes drásticos en estructuras autonómicas duplicadas y gasto político.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Es sentido común (115 medidas)'
    },
    vivienda: {
      headline: 'IVA 0% en primera vivienda nueva, bonificación ITP 100% y desalojo <24 horas',
      summary:
        'Aplica IVA del 0% y bonificación del 100% del ITP en primera vivienda habitual para familias españolas, deroga la Ley de Vivienda y acelera desalojos en menos de 24 horas.',
      measures: [
        'Aplicar IVA al 0% en la compra de primera vivienda habitual de nueva construcción y bonificación del 100% del ITP en segunda mano para familias españolas.',
        'Derogar la Ley de Vivienda suprimiendo topes al alquiler y liberalizar suelo urbanizable no protegido.',
        'Ejecutar desalojos exprés de viviendas ocupadas en menos de 24 horas y tipificar la «inquiocupación» como delito de estafa.',
        'Establecer prioridad nacional para españoles en acceso a vivienda protegida y ayudas habitacionales.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Bloque de Vivienda'
    },
    empleo: {
      headline: 'Cuota cero a autónomos <SMI, escala progresiva desde 50 € y prioridad nacional',
      summary:
        'Fija cuota cero para autónomos por debajo del SMI y cuota progresiva desde 50 € por encima, suprime rigideces laborales y prioriza al trabajador nacional.',
      measures: [
        'Implantar cuota cero para autónomos cuyos ingresos no alcancen el SMI y una cuota progresiva desde los 50 euros para quienes lo superen.',
        'Suprimir trabas y rigideces de la legislación laboral vigente y reducir cotizaciones sociales empresariales.',
        'Establecer prioridad nacional en el acceso a ayudas sociales, prestaciones y programas de empleo.',
        'Eliminar subvenciones públicas a sindicatos y patronales.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Empleo y Autónomos'
    },
    pensiones: {
      headline: 'Garantía de pensiones con recorte autonómico y apoyo a la natalidad',
      summary:
        'Sostiene las pensiones públicas eliminando duplicidades autonómicas y ministeriales e impulsando la natalidad familiar como base demográfica.',
      measures: [
        'Garantizar el poder adquisitivo de las pensiones recortando el gasto político autonómico, ministerios y entes duplicados.',
        'Fomentar la natalidad y protección familiar española como base demográfica del sistema de reparto.',
        'Aliviar la carga del IRPF a pensiones de jubilación y viudedad más bajas.',
        'Promover el ahorro previsional complementario sin penalizaciones fiscales.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Pensiones y Familia'
    },
    regeneracion_justicia: {
      headline: 'CGPJ independiente, prisión permanente ampliada y rebaja de edad penal',
      summary:
        'Modifica la elección del CGPJ, amplía la prisión permanente revisable, rebaja la edad penal, deroga leyes ideológicas y promueve la ilegalización del separatismo.',
      measures: [
        'Modificar el sistema de elección del Consejo General del Poder Judicial para garantizar su independencia.',
        'Rebajar la edad de responsabilidad penal y ampliar los supuestos de prisión permanente revisable.',
        'Derogar la LOMLOE, leyes de género y Ley de Memoria Democrática y suprimir aforamientos.',
        'Promover la ilegalización de partidos y organizaciones que atenten contra la unidad constitucional de España.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Justicia y Desregulación'
    },
    sanidad: {
      headline: 'Tarjeta sanitaria única nacional y prioridad nacional en prestaciones',
      summary:
        'Crea una tarjeta sanitaria única para toda España, centraliza compras y devuelve la gestión sanitaria al Estado frente a las 17 administraciones.',
      measures: [
        'Implantar una tarjeta sanitaria única válida en todo el territorio nacional y recentralizar el sistema sanitario.',
        'Centralizar las compras de medicamentos y equipamiento tecnológico para eliminar sobrecostes autonómicos.',
        'Establecer prioridad nacional y excluir atención no urgente gratuita a inmigrantes en situación irregular.',
        'Colaborar con la sanidad privada para reducir listas de espera.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Sanidad Única Nacional'
    },
    educacion: {
      headline: 'Currículo común, EvAU única, prohibición de móviles y libre elección de centro',
      summary:
        'Deroga la LOMLOE para instaurar una EvAU única y currículo nacional común, refuerza autoridad docente, prohíbe móviles en aulas y defiende libre elección.',
      measures: [
        'Derogar la LOMLOE e implantar un currículo común nacional y una EvAU única en toda España.',
        'Garantizar la libre elección de centro (cheque escolar) y la enseñanza en castellano en todo el territorio.',
        'Reforzar la autoridad del profesorado y prohibir el uso de teléfonos móviles en las aulas.',
        'Implantar autorización parental expresa ante contenidos morales o afectivo-sexuales.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Educación'
    },
    inmigracion: {
      headline: 'Plan de remigración, fin del arraigo, veto a regularizaciones y fin a ayudas ONG',
      summary:
        'Prohíbe regularizaciones masivas, anula la vía del arraigo, ejecuta repatriaciones de irregulares y delincuentes y suprime subvenciones a ONG.',
      measures: [
        'Prohibir por completo las regularizaciones masivas y anular la vía del arraigo para quienes entren ilegalmente.',
        'Ejecutar un plan de remigración para inmigrantes irregulares, condenados por delitos graves o reiterados y dependientes de subsidios.',
        'Suprimir toda subvención pública a ONG que colaboren con redes migratorias o fomenten el efecto llamada.',
        'Implantar la prioridad nacional en ayudas sociales, guarderías, vivienda protegida y servicios públicos.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Inmigración y Remigración'
    },
    seguridad: {
      headline: 'Militarización de Ceuta y Melilla, equiparación policial y profesión de riesgo',
      summary:
        'Militariza las fronteras de Ceuta y Melilla frente a entradas masivas y reconoce a policías, guardias civiles, militares y prisiones como profesión de riesgo.',
      measures: [
        'Militarizar las fronteras y desplegar a las Fuerzas Armadas para proteger Ceuta y Melilla con expulsión inmediata ante entradas masivas.',
        'Reconocer a policías nacionales, guardias civiles, militares y funcionarios de prisiones como profesión de riesgo con equiparación salarial.',
        'Endurecer el Código Penal rebajando la edad penal y ampliando la prisión permanente revisable.',
        'Suprimir policías autonómicas integrando sus efectivos en las FCSE.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Ceuta, Melilla y Seguridad'
    },
    modelo_estado: {
      headline: 'Estado unitario sin autonomías ni privilegios fiscales territoriales',
      summary:
        'Propone transformar el Estado autonómico en un Estado unitario centralizado recuperando Sanidad, Educación, Justicia y Seguridad.',
      measures: [
        'Sustituir los 17 parlamentos y gobiernos autonómicos por un Estado unitario con un único Gobierno y Parlamento.',
        'Recuperar de inmediato las competencias de Educación, Sanidad, Justicia e Interior para el Estado.',
        'Suprimir las policías autonómicas duplicadas integrando sus efectivos en Policía Nacional y Guardia Civil.',
        'Garantizar la unidad de mercado suprimiendo trabas normativas regionales.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Unidad Nacional'
    },
    energia_campo: {
      headline: 'Revertir Pacto Verde y Agenda 2030, prórroga nuclear y apoyo al campo',
      summary:
        'Revierte el Pacto Verde europeo y la Agenda 2030, deroga el calendario de cierre nuclear, baja impuestos de la luz y defiende la rentabilidad agraria.',
      measures: [
        'Revertir el Pacto Verde Europeo, la Agenda 2030 y las normas ambientales y burocráticas de la PAC que lastran al campo.',
        'Derogar el calendario de cierre nuclear para recuperar soberanía energética y abaratar la factura de la luz.',
        'Aprobar un Plan Hidrológico Nacional con trasvases entre cuencas excedentarias y deficitarias.',
        'Exigir cláusulas espejo y aranceles estrictos frente a importaciones agrarias extracomunitarias.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Energía, Industria y Campo'
    },
    exterior_ue: {
      headline: 'Europa de naciones soberanas, defensa de Ceuta/Melilla y vínculo Iberosfera',
      summary:
        'Defiende la primacía de la Constitución española sobre directivas europeas, la cobertura aliada de Ceuta y Melilla y la alianza con la Iberosfera.',
      measures: [
        'Reformar los tratados europeos para crear una Europa de naciones soberanas sin primacía burocrática de Bruselas.',
        'Exigir cobertura expresa de la OTAN sobre Ceuta y Melilla y firmeza frente a presiones de Marruecos.',
        'Consolidar una alianza diplomática, cultural y comercial estratégica con las naciones de la Iberosfera.',
        'Oponerse a cesiones de soberanía fiscal, migratoria o agraria ante organismos supranacionales.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Soberanía y Política Exterior'
    }
  },

  salf: {
    economia: {
      headline: '0% IRPF hasta 35.000 €, Sociedades al 20% (15% reinversión) y de 22 a 10 ministerios',
      summary:
        'Su Contrato Electoral 29N (119 medidas) exime de IRPF hasta 35.000 €, recorta el Gobierno de 22 a 10 ministerios y de 3 a 1 vicepresidencias y suprime subvenciones políticas.',
      measures: [
        'Fijar un tipo del 0% de IRPF para rentas de hasta 35.000 euros anuales, con deducciones por hijo a cargo, y suprimir Patrimonio y Sucesiones.',
        'Rebajar el Impuesto de Sociedades del 25% al 20% (y al 15% si se reinvierten beneficios) y reducir el gasto estatal pasando de 22 a 10 ministerios.',
        'Recortar entre un 60% y 70% asesores y altos cargos y suprimir subvenciones a partidos, sindicatos, patronales y publicidad institucional.',
        'Contener la deuda pública y el gasto financiero eliminando duplicidades autonómicas y ministeriales en lugar de subir impuestos.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026 (119 medidas en 10 bloques)'
    },
    vivienda: {
      headline: 'Rechazo a topes de alquiler, cero impuestos primera vivienda y desalojo exprés',
      summary:
        'Se opone frontalmente a la intervención de precios del alquiler, elimina impuestos en primera vivienda y endurece las penas contra la ocupación ilegal.',
      measures: [
        'Rechazar los topes legales de alquiler y eliminar impuestos ligados a la compra de primera vivienda (ITP, AJD e IVA reducido).',
        'Endurecer drásticamente las penas contra la ocupación ilegal ejecutando desalojos inmediatos sin dilación.',
        'Prohibir la compra masiva especulativa por grandes fondos extranjeros y liberalizar suelo urbano.',
        'Facilitar líneas de crédito hipotecario garantizadas para jóvenes y familias.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Vivienda'
    },
    empleo: {
      headline: 'Supresión de cuota de autónomos, contrato único y menor cuña fiscal',
      summary:
        'Elimina la cuota fija mensual de autónomos vinculándola al beneficio real, implanta contrato único con mochila austriaca y baja cotizaciones.',
      measures: [
        'Suprimir la cuota fija de autónomos sustituyéndola por tributación vinculada exclusivamente al beneficio neto real.',
        'Implantar un contrato único con mochila austriaca para facilitar la movilidad laboral.',
        'Reducir la cuña fiscal y cotizaciones sobre el trabajo para elevar el salario neto.',
        'Suprimir toda subvención pública a sindicatos mayoritarios y patronales.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Empleo y Autónomos'
    },
    pensiones: {
      headline: 'Auditoría de la Seguridad Social y fin de pensiones vitalicias políticas',
      summary:
        'Sostiene las pensiones públicas eliminando el gasto político improductivo, realizando auditoría independiente y fomentando la natalidad nacional.',
      measures: [
        'Garantizar las pensiones públicas eliminando gasto político improductivo y suprimiendo pensiones vitalicias de cargos públicos.',
        'Fomentar la natalidad y empleo formal para equilibrar la base de cotizantes.',
        'Realizar una auditoría independiente integral de las cuentas de la Seguridad Social.',
        'Permitir compatibilizar voluntariamente la pensión de jubilación con el trabajo autónomo o profesional.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Pensiones'
    },
    regeneracion_justicia: {
      headline: 'Bloqueo de sueldo hasta 2030, corrupción imprescriptible y macrocárcel',
      summary:
        'Deposita el 100% del sueldo público de Alvise Pérez en el Banco de España hasta junio de 2030 sujeto al cumplimiento del contrato electoral y crea juzgados anticorrupción.',
      measures: [
        'Bloquear el 100% del sueldo público en el Banco de España hasta junio de 2030: si no se cumplen las 119 medidas, el dinero revierte al Estado.',
        'Declarar imprescriptibles los delitos de corrupción política, obligar a devolver el triple de lo sustraído y premiar al denunciante con el 15%.',
        'Construir una macrocárcel de máxima seguridad (3.000 M€) sin tercer grado ni permisos para corruptos que no devuelvan lo robado y criminales graves.',
        'Recortar de 22 a 10 ministerios, de 3 a 1 vicepresidencias y un 60%-70% los asesores.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Cláusula de Responsabilidad y Justicia'
    },
    sanidad: {
      headline: 'Topes de 30 días especialista y 90 días cirugía y central única de compras',
      summary:
        'Fija un límite máximo de 30 días para especialistas y 90 días para cirugías apoyándose en conciertos privados sin coste y crea una central única de compras.',
      measures: [
        'Garantizar por ley un máximo de 30 días para consultas de especialista y 90 días para cirugías, apoyándose en conciertos privados sin coste para el paciente.',
        'Crear una central única nacional de compras sanitarias evitando duplicidades de 17 sistemas autonómicos.',
        'Equiparar salarios de médicos y enfermeros con la media de Europa occidental.',
        'Digitalizar plenamente la historia clínica única e impedir el turismo sanitario fraudulento.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Sanidad'
    },
    educacion: {
      headline: 'Ley educativa a 20 años, cheque escolar y castellano garantizado en España',
      summary:
        'Propone sacar la educación del vaivén partidista mediante un marco estable de 20 años, cheque escolar y defensa del castellano.',
      measures: [
        'Aprobar una ley educativa estable con vigencia mínima de 20 años centrada en mérito y conocimiento.',
        'Implantar un cheque escolar («el dinero sigue al alumno») para que las familias elijan centro libremente.',
        'Garantizar la escolarización en castellano en todo el territorio nacional sin exclusiones lingüísticas.',
        'Reforzar las carreras técnicas, matemáticas y formación profesional práctica.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Educación'
    },
    inmigracion: {
      headline: 'Expulsión rápida de irregulares, Armada en el Estrecho y bloqueo a terceros países',
      summary:
        'Despliega a la Armada y Ejército del Aire en el Estrecho contra entradas clandestinas, expulsa irregulares y condiciona visados a repatriaciones.',
      measures: [
        'Ejecutar expulsiones rápidas de inmigrantes en situación irregular o condenados por delito.',
        'Desplegar permanentemente a la Armada y Ejército del Aire en el Estrecho contra entradas clandestinas y mafias.',
        'Suspender visados, ayudas y acuerdos con países que rechacen repatriar a sus nacionales en situación ilegal.',
        'Retirar subvenciones públicas a organizaciones dedicadas a la acogida irregular.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Inmigración y Fronteras'
    },
    seguridad: {
      headline: 'Macrocárcel tipo Bukele, registro de agresores sexuales y legítima defensa',
      summary:
        'Presupuesta una macrocárcel de 3.000 M€ sin tercer grado, amplía la legítima defensa armada en domicilios y crea registro público de delincuentes sexuales.',
      measures: [
        'Construir una macrocárcel de máxima seguridad (3.000 M€) sin tercer grado ni permisos para asesinos, violadores, terroristas, narcotraficantes y corruptos.',
        'Crear un registro público de delincuentes sexuales reincidentes, seguimiento telemático vitalicio y castración química voluntaria.',
        'Ampliar la presunción legal de legítima defensa armada en domicilios y negocios frente a asaltos violentos o nocturnos.',
        'Desplegar Armada y Ejército del Aire en el Estrecho contra narcotráfico y mafias.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Seguridad y Prisiones'
    },
    modelo_estado: {
      headline: 'Centralización frente al «estado de las taifas» y recorte administrativo',
      summary:
        'Aboga por recentralizar Sanidad, Educación y compras públicas, cerrar o reformar órganos institucionales y recortar ministerios y entes regionales.',
      measures: [
        'Recentralizar competencias clave de Sanidad, Educación, Justicia y Compras Públicas frente a los 17 sistemas autonómicos.',
        'Reducir de 22 a 10 ministerios, de 3 a 1 vicepresidencias y recortar asesores, diputaciones y entes duplicados.',
        'Suprimir la financiación pública a partidos y reducir el número de parlamentarios.',
        'Garantizar la igualdad fiscal y jurídica en todo el territorio nacional.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Estructura del Estado'
    },
    energia_campo: {
      headline: 'Revisión del Pacto Verde, energía nuclear y reciprocidad arancelaria agraria',
      summary:
        'Suspende trabas de la Agenda 2030 sobre el sector primario, defiende la energía nuclear para abaratar electricidad y exige reciprocidad arancelaria.',
      measures: [
        'Suspender restricciones de la Agenda 2030 que penalicen a agricultores, ganaderos y transportistas españoles.',
        'Mantener y potenciar la energía nuclear para garantizar electricidad barata y estable a la industria.',
        'Imponer controles estrictos y reciprocidad arancelaria frente a importaciones agrarias extracomunitarias.',
        'Ejecutar infraestructuras hidráulicas nacionales contra la sequía.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Energía y Campo'
    },
    exterior_ue: {
      headline: 'Referéndum de renegociación con la UE y firmeza comercial frente a Marruecos',
      summary:
        'Propone someter a referéndum los términos de pertenencia a la Unión Europea y aplicar reciprocidad dura y bloqueos ante presiones fronterizas.',
      measures: [
        'Convocar un referéndum vinculante para renegociar las condiciones de pertenencia de España a la Unión Europea.',
        'Aplicar bloqueos comerciales inmediatos a Marruecos ante presiones migratorias o bloqueos aduaneros en Ceuta y Melilla.',
        'Impulsar una ley antiterrorista de máximos contra redes extremistas violentas.',
        'Defender la primacía jurídica nacional frente a imposiciones burocráticas supranacionales.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Geopolítica y UE'
    }
  },

  nn: {
    economia: {
      headline: 'Antiliberalismo económico, proteccionismo nacional y crítica al capitalismo global',
      summary:
        'Rechaza tanto el capitalismo financiero globalizado como el socialismo parlamentario, proponiendo una economía nacional autárquica y social.',
      measures: [
        'Subordinar la actividad financiera y bancaria al interés nacional frente a multinacionales y fondos extranjeros.',
        'Imponer proteccionismo económico estricto para preservar industrias y comercios locales frente a importaciones.',
        'Combatir la usura bancaria y el endeudamiento nacional con instituciones financieras internacionales.',
        'Reorientar el presupuesto hacia vivienda, natalidad e industria propia suprimiendo gasto político.',
        'Rechazar la deuda pública externa y el pago de intereses usurarios vinculados al sistema financiero global.'
      ],
      sourceRef: 'Manifiesto Ideológico y Puntos Programáticos de Núcleo Nacional'
    },
    vivienda: {
      headline: 'Prioridad nacional absoluta en vivienda y freno a fondos extranjeros',
      summary:
        'Plantea prohibir la adquisición especulativa de inmuebles por capital extranjero y reservar ayudas y vivienda pública exclusivamente a nacionales.',
      measures: [
        'Prohibir la compra masiva de vivienda por fondos de inversión extranjeros y capital especulativo.',
        'Establecer prioridad nacional estricta en el acceso a vivienda social, ayudas al alquiler y avales públicos.',
        'Construir promociones públicas para familias jóvenes nacionales vinculadas a natalidad.',
        'Ejecutar desalojos inmediatos contra la usurpación ilegal de viviendas.'
      ],
      sourceRef: 'Puntos Sociales de Núcleo Nacional'
    },
    empleo: {
      headline: 'Prioridad laboral nacional y rechazo a la devaluación salarial',
      summary:
        'Vincula la protección del salario del trabajador español al cierre frente a mano de obra extranjera barata y al apoyo al comercio local.',
      measures: [
        'Imponer prioridad absoluta del trabajador nacional en la contratación pública y privada.',
        'Combatir la devaluación salarial derivada de la contratación de mano de obra inmigrante.',
        'Proteger el pequeño comercio y el trabajo autónomo frente a grandes plataformas transnacionales.',
        'Sancionar la deslocalización de industrias nacionales hacia países con costes laborales ínfimos.'
      ],
      sourceRef: 'Doctrina Social de Núcleo Nacional'
    },
    pensiones: {
      headline: 'Sostenimiento generacional de pensiones mediante natalidad e industria nacional',
      summary:
        'Rechaza sostener el sistema de pensiones mediante inmigración y propone vincularlo a la natalidad nacional y reindustrialización.',
      measures: [
        'Garantizar las pensiones de jubilación exclusivamente a través de empleo industrial nacional y natalidad.',
        'Rechazar explícitamente las políticas de reemplazo demográfico como solución al envejecimiento.',
        'Proteger a los pensionistas españoles frente a la inflación en energía, alimentación y vivienda.',
        'Suprimir cualquier prestación no contributiva o subsidio para población no nacional.'
      ],
      sourceRef: 'Doctrina Social de Núcleo Nacional: Natalidad y Mayores'
    },
    regeneracion_justicia: {
      headline: 'Ruptura total con el régimen de partidos de 1978 y endurecimiento penal',
      summary:
        'Adopta una postura antisistema que rechaza el modelo parlamentario de partidos actual y reclama orden penal estricto.',
      measures: [
        'Superar el sistema parlamentario de partidos vigente al que consideran corrupto e ineficaz.',
        'Implantar penas de máxima severidad y cumplimiento íntegro para delitos graves, corrupción y traición.',
        'Suprimir toda subvención estatal a partidos políticos, sindicatos mayoritarios y ONG.',
        'Establecer mecanismos directos de responsabilidad personal para gobernantes.'
      ],
      sourceRef: 'Posicionamiento Institucional de Núcleo Nacional'
    },
    sanidad: {
      headline: 'Sistema sanitario estatal nacionalizado con prioridad exclusiva a ciudadanos',
      summary:
        'Defiende la sanidad gestionada centralmente por el Estado pero reservada de forma prioritaria a ciudadanos españoles.',
      measures: [
        'Centralizar la sanidad en una única estructura nacional suprimiendo desigualdades autonómicas.',
        'Excluir de cobertura no urgente a residentes ilegales reservando recursos a contribuyentes nacionales.',
        'Reforzar la atención a la natalidad, maternidad y salud juvenil frente a adicciones.',
        'Garantizar soberanía farmacéutica produciendo medicamentos esenciales en España.'
      ],
      sourceRef: 'Propuestas Sociales de Núcleo Nacional'
    },
    educacion: {
      headline: 'Educación nacional unitaria, disciplina escolar e identidad histórica',
      summary:
        'Propone un sistema educativo único nacional centrado en la identidad española, la disciplina y la eliminación de contenidos progresistas.',
      measures: [
        'Implantar un sistema educativo único en todo el Estado con el castellano como única lengua vehicular.',
        'Suprimir cualquier contenido curricular vinculado a perspectiva de género, multiculturalismo o memoria democrática.',
        'Reforzar la enseñanza de la historia nacional, cultura clásica, disciplina y educación física.',
        'Orientar la formación profesional hacia sectores productivos e industriales estratégicos.'
      ],
      sourceRef: 'Educación y Cultura en Núcleo Nacional'
    },
    inmigracion: {
      headline: 'Etnonacionalismo, remigración masiva y rechazo frontal a la multiculturalidad',
      summary:
        'Núcleo central de su ideario: oposición radical a toda inmigración extracomunitaria, programas de repatriación y cierre total de asilo.',
      measures: [
        'Detener por completo toda inmigración extracomunitaria y derogar mecanismos de asilo y nacionalización acelerada.',
        'Ejecutar programas estatales de repatriación masiva (remigración) de población inmigrante.',
        'Rechazar el multiculturalismo y defender la identidad étnica, cultural e histórica europea y española.',
        'Suprimir toda ayuda económica o sanitaria no urgente dirigida a inmigrantes.'
      ],
      sourceRef: 'Programa Identitario de Núcleo Nacional'
    },
    seguridad: {
      headline: 'Despliegue policial y militar permanente y endurecimiento penal extremo',
      summary:
        'Propone una política de orden autoritario con presencia permanente en fronteras y barrios conflictivos y penas de máxima severidad.',
      measures: [
        'Desplegar presencia permanente policial y militar en fronteras y barrios con alta conflictividad.',
        'Endurecer de forma drástica el Código Penal con cumplimiento íntegro de condenas por delitos violentos.',
        'Reforzar los cuerpos de seguridad suprimiendo restricciones operativas en actuaciones de orden público.',
        'Combatir bandas criminales, narcotráfico y usurpación de propiedades con detención preventiva reforzada.'
      ],
      sourceRef: 'Orden y Seguridad en Núcleo Nacional'
    },
    modelo_estado: {
      headline: 'Estado nacional unitario, centralizado y opuesto a autonomías y separatismo',
      summary:
        'Exige la abolición total del Estado de las Autonomías para instaurar un Estado nacional fuertemente centralizado y unitario.',
      measures: [
        'Abolir las 17 comunidades autónomas y sus parlamentos para instaurar un Estado unitario centralizado.',
        'Prohibir e ilegalizar cualquier partido o movimiento separatista o regionalista.',
        'Suprimir toda estructura burocrática territorial duplicada.',
        'Reorganizar la administración territorial en torno a provincias o municipios subordinados al poder central.'
      ],
      sourceRef: 'Modelo Nacional Unitario — Núcleo Nacional'
    },
    energia_campo: {
      headline: 'Soberanía energética nacional y oposición radical a la Agenda 2030',
      summary:
        'Rechaza las normativas ecológicas supranacionales, defendiendo autosuficiencia energética, energía nuclear y apoyo al campo español.',
      measures: [
        'Derogar por completo los compromisos derivados de la Agenda 2030 y el Pacto Verde Europeo.',
        'Apostar por la energía nuclear y recursos propios para alcanzar plena autosuficiencia energética.',
        'Proteger la agricultura y ganadería españolas bloqueando importaciones de terceros países.',
        'Preservar el patrimonio natural nacional sin subordinación a directivas externas.'
      ],
      sourceRef: 'Soberanía Material y Campo — Núcleo Nacional'
    },
    exterior_ue: {
      headline: 'Ruptura con la Unión Europea y la OTAN hacia una Europa identitaria',
      summary:
        'Rechaza la Unión Europea actual y la alianza militar atlantista de la OTAN, abogando por la soberanía nacional plena y cooperación europea identitaria.',
      measures: [
        'Promover la salida de España de la Unión Europea y recuperar la moneda y política comercial propias.',
        'Abandonar la OTAN y cerrar bases militares extranjeras en territorio español.',
        'Romper relaciones preferentes y acuerdos económicos con Marruecos ante la presión migratoria.',
        'Articular alianzas exclusivas entre naciones soberanas de raíz cultural europea.'
      ],
      sourceRef: 'Posición Geopolítica de Núcleo Nacional'
    }
  },

  fe_jons: {
    economia: {
      headline: 'Nacionalsindicalismo: nacionalización de banca, crédito público y tercera vía',
      summary:
        'Rechaza tanto el capitalismo financiero como el marxismo, proponiendo la nacionalización del crédito, sindicatos productivos y propiedad con función social.',
      measures: [
        'Nacionalizar la banca privada y las grandes empresas de energía, agua y comunicaciones.',
        'Superar el capitalismo especulativo mediante crédito público a interés mínimo para trabajadores y pymes.',
        'Organizar la economía en torno al trabajo como valor supremo, eliminando la usura y especulación bursátil.',
        'Reconocer la propiedad privada familiar y cooperativa ligada a su función productiva social.',
        'Ejecutar una auditoría integral de cuentas y deuda pública frente al endeudamiento externo y la usura financiera.'
      ],
      sourceRef: 'Programa Nacionalsindicalista (27 Puntos y Programa Actual de FE de las JONS)'
    },
    vivienda: {
      headline: 'Vivienda familiar en propiedad sin especulación y abolición de hipotecas abusivas',
      summary:
        'Defiende la erradicación de los fondos especulativos, la construcción estatal masiva para familias y el crédito social sin usura bancaria.',
      measures: [
        'Prohibir la especulación inmobiliaria y confiscar viviendas acaparadas con fines especulativos por fondos buitre.',
        'Crear un plan estatal de acceso a vivienda familiar en propiedad mediante crédito público sin interés usurero.',
        'Garantizar que ninguna familia trabajadora pierda su hogar habitual por desahucio financiero.',
        'Fomentar cooperativas municipales de construcción residencial.'
      ],
      sourceRef: 'Propuestas Sociales de FE de las JONS'
    },
    empleo: {
      headline: 'Sindicatos productivos, salario familiar y participación obrera en beneficios',
      summary:
        'Propone sustituir los sindicatos subvencionados por representación productiva directa, salario familiar suficiente y estabilidad laboral.',
      measures: [
        'Garantizar un salario familiar suficiente que permita vivir dignamente con un solo sueldo si se desea.',
        'Participación de los trabajadores en la gestión y beneficios de las empresas productivas.',
        'Sustituir los sindicatos subvencionados por sindicatos libres de rama de producción.',
        'Combatir la precariedad, subcontratas abusivas y destrucción de empleo industrial nacional.'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Trabajo'
    },
    pensiones: {
      headline: 'Vuelta a la jubilación a los 65 años, retiro anticipado penoso y natalidad',
      summary:
        'Exige revertir el retraso de la edad de jubilación, reconocer profesiones penosas y sostener las pensiones mediante natalidad y Estado social.',
      measures: [
        'Recuperar los 65 años como edad ordinaria de jubilación frente a las prórrogas actuales.',
        'Establecer jubilación anticipada obligatoria y sin merma en sectores físicos o penosos.',
        'Sostener el sistema público de reparto fomentando la natalidad española en lugar de inmigración de reemplazo.',
        'Garantizar pensiones dignas indexadas al coste real de la vida financiadas solidariamente por el Estado.'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Pensiones'
    },
    regeneracion_justicia: {
      headline: 'Superación del sistema de partidos y representación orgánica (familia, municipio, sindicato)',
      summary:
        'Cuestiona la partitocracia liberal desde su doctrina fundacional, propugnando representación directa por cuerpos naturales y justicia implacable.',
      measures: [
        'Sustituir la representación de partidos políticos por representación orgánica de familia, municipio y sindicato.',
        'Eliminar toda financiación pública a partidos políticos y recortar cargos políticos parasitarios.',
        'Endurecer severamente las penas contra la corrupción política con confiscación total de bienes ilícitos.',
        'Garantizar una justicia independiente gratuita y ágil para todos los españoles.'
      ],
      sourceRef: 'Reforma del Estado — FE de las JONS'
    },
    sanidad: {
      headline: 'Sanidad nacional 100% pública, única y gratuita bajo gestión directa estatal',
      summary:
        'Defiende un sistema sanitario único centralizado de propiedad pública sin intermediación privada ni diferencias territoriales.',
      measures: [
        'Nacionalizar y unificar los 17 sistemas sanitarios en un solo Servicio Nacional de Salud gratuito.',
        'Eliminar concesiones privadas sanitarias y crear industria farmacéutica nacional pública.',
        'Reforzar la protección médica a la maternidad, la infancia y los trabajadores en activo.',
        'Garantizar atención médica completa en todo el medio rural español.'
      ],
      sourceRef: 'Sanidad y Justicia Social — FE de las JONS'
    },
    educacion: {
      headline: 'Educación pública universal gratuita hasta la universidad con formación patriótica',
      summary:
        'Propugna la igualdad absoluta de acceso a todos los niveles educativos por mérito, con sentido católico tradicional y unidad idiomática.',
      measures: [
        'Garantizar acceso gratuito a todos los niveles de enseñanza y universidad en función del mérito y capacidad.',
        'Recuperar la competencia estatal exclusiva de Educación con currículo común e idioma español en todo el país.',
        'Integrar la tradición histórica y espiritual española respetando la separación funcional Iglesia-Estado.',
        'Promover escuelas técnicas y formación profesional vinculadas a la industria nacional.'
      ],
      sourceRef: 'Educación y Cultura Nacional — FE de las JONS'
    },
    inmigracion: {
      headline: 'Plan Nacional de Remigración, control fronterizo y prioridad laboral nacional',
      summary:
        'Su programa 29N-2026 incluye un Plan Nacional de Remigración (Anexo I) frente a la inmigración masiva y reserva empleo y vivienda pública a los españoles.',
      measures: [
        'Ejecutar un Plan Nacional de Remigración (Anexo I) para revertir flujos irregulares y no integrados.',
        'Establecer el cierre estricto frente a la inmigración irregular y priorizar al trabajador español en empleo y vivienda.',
        'Rechazar acuerdos internacionales que impongan cuotas obligatorias de reparto de inmigrantes.',
        'Priorizar la relación cultural e histórica ordenada con naciones hermanas de Hispanoamérica.'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026 (Bloque I y Anexo I)'
    },
    seguridad: {
      headline: 'Fortalecimiento militar y policial, orden público y lucha contra mafias',
      summary:
        'Reclama dotar de máxima dignidad y medios a Fuerzas Armadas y cuerpos policiales, con firmeza penal frente a violencia y narcotráfico.',
      measures: [
        'Reforzar a las Fuerzas Armadas y cuerpos de seguridad para proteger la integridad física y territorial.',
        'Combatir con máxima firmeza penal las mafias, el narcotráfico y la delincuencia violenta.',
        'Garantizar el control fronterizo permanente en Ceuta, Melilla, Canarias y costas peninsulares.',
        'Proteger la seguridad en barrios obreros y medio rural aumentando dotaciones de Guardia Civil.'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Seguridad y Defensa'
    },
    modelo_estado: {
      headline: 'Unidad nacional intangible, abolición de autonomías y estado sindical unitario',
      summary:
        'Principio doctrinal innegociable: oposición absoluta al Estado autonómico y al separatismo, defendiendo España como unidad indivisible.',
      measures: [
        'Abolir las comunidades autónomas devolviendo la unidad legislativa y política al Estado nacional.',
        'Ilegalizar de forma inmediata todo partido, entidad o movimiento separatista.',
        'Respetar las variedades culturales y folclóricas regionales dentro de la unidad política nacional indivisible.',
        'Fortalecer el papel del municipio y la provincia como entidades administrativas cercanas.'
      ],
      sourceRef: 'Unidad de España en el Programa de FE de las JONS'
    },
    energia_campo: {
      headline: 'Reforma agraria comunal, soberanía energética y rechazo a imposiciones externas',
      summary:
        'Recoge la defensa histórica del campo mediante recuperación de patrimonios comunales, precios justos agrarios y nacionalización energética.',
      measures: [
        'Impulsar una reforma agraria y ganadera con recuperación de tierras comunales y precios justos frente a distribuidoras.',
        'Nacionalizar el sector eléctrico y mantener la energía nuclear junto a planes hidráulicos nacionales.',
        'Ejecutar una repoblación forestal masiva y proteger el medio rural de la despoblación.',
        'Rechazar imposiciones de Bruselas y tratados que arruinen al agricultor y ganadero español.'
      ],
      sourceRef: 'Reforma Agraria y Energía — FE de las JONS'
    },
    exterior_ue: {
      headline: 'Comunidad Hispánica (Hispanidad), salida de la OTAN y rechazo a la UE tecnocrática',
      summary:
        'Plantea abandonar la OTAN y la subordinación a la UE actual, apostando por la hermandad política y económica con Hispanoamérica.',
      measures: [
        'Promover la salida inmediata de España de la OTAN y desmantelar bases militares extranjeras.',
        'Recuperar la soberanía monetaria y económica frente a las directivas de la Unión Europea.',
        'Construir una alianza política, económica y cultural preferente con los países de Hispanoamérica (Hispanidad).',
        'Reivindicar la soberanía sobre Gibraltar y reforzar la defensa de Ceuta, Melilla y Canarias.'
      ],
      sourceRef: 'Política Exterior e Hispanidad — FE de las JONS'
    }
  },

  pacma: {
    economia: {
      headline: 'Economía verde sostenible, fiscalidad justa e incentivos a la transición ecológica',
      summary:
        'Defiende reorientar subvenciones desde industrias contaminantes y taurinas hacia sectores sostenibles, investigación sin experimentación animal y bienestar social.',
      measures: [
        'Suprimir el 100% de las subvenciones públicas a la tauromaquia, caza y ganadería intensiva industrial.',
        'Reducir el IVA de los servicios veterinarios del 21% al tipo superreducido del 4%.',
        'Establecer fiscalidad progresiva y tasas ambientales sobre industrias altamente contaminantes.',
        'Redirigir ayudas públicas hacia la economía circular, energías limpias y alimentación vegetal.',
        'Medir la eficiencia y eficacia del gasto público evitando recortes en servicios sociales mientras se elimina el gasto insostenible.'
      ],
      sourceRef: 'Programa Político PACMA 2026: Economía Sostenible'
    },
    vivienda: {
      headline: 'Vivienda asequible, parque público amplio y protección a familias con animales',
      summary:
        'Defiende topar precios abusivos, frenar la turistificación masiva y prohibir cláusulas que discriminen a inquilinos que conviven con animales.',
      measures: [
        'Ampliar el parque público de vivienda en alquiler social y regular los precios frente a la especulación.',
        'Limitar la masificación turística residencial para garantizar el derecho a la vivienda de los vecinos.',
        'Prohibir por ley la discriminación en contratos de alquiler hacia familias que convivan con animales de compañía.',
        'Garantizar alternativas habitacionales que incluyan refugios pet-friendly en casos de emergencia o desahucio.'
      ],
      sourceRef: 'Programa Político PACMA 2026: Vivienda Digna'
    },
    empleo: {
      headline: 'Igualdad salarial, jornada flexible para conciliación y transición a empleos verdes',
      summary:
        'Impulsa la igualdad retributiva real, la adaptación flexible de la jornada y el teletrabajo para conciliación y la reconversión hacia empleos sostenibles.',
      measures: [
        'Facilitar que los trabajadores adapten la duración y distribución de su jornada laboral y ejerzan el teletrabajo para conciliación.',
        'Combatir la brecha salarial de género, la discriminación laboral y la estacionalidad en el empleo.',
        'Impulsar empleo estable en energías renovables, turismo sostenible, agricultura orgánica, construcción verde e I+D+i.',
        'Fomentar guarderías en centros de trabajo, apoyo a autónomos y pymes y reconversión laboral de sectores taurinos o contaminantes.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026 (Cap. 3.4: Empleo justo y de calidad)'
    },
    pensiones: {
      headline: 'Blindaje constitucional de las pensiones y refuerzo de no contributivas',
      summary:
        'Propone reformar la Constitución para proteger las pensiones públicas frente a recortes y elevar las pensiones mínimas y no contributivas.',
      measures: [
        'Reformar la Constitución para blindar el sistema público de pensiones y su revalorización conforme al coste de la vida.',
        'Elevar las pensiones mínimas, de viudedad y no contributivas garantizando una vejez digna.',
        'Reforzar los servicios públicos sociosanitarios de cuidados para mayores para evitar la sobrecarga económica de pensionistas.',
        'Promover líneas de apoyo contra la soledad no deseada permitiendo la compañía de animales en residencias.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026: Pensiones y Mayores'
    },
    regeneracion_justicia: {
      headline: 'Juzgados especializados en maltrato animal, ley electoral justa y transparencia',
      summary:
        'Reclama una reforma electoral que elimine la discriminación al voto minoritario y la creación de fiscalías dotadas contra delitos ambientales y de maltrato.',
      measures: [
        'Reformar la Ley Electoral eliminando barreras que infrarrepresentan a partidos estatales sin concentración provincial.',
        'Crear juzgados y fiscalías especializados con medios reales contra el maltrato animal y el delito ecológico.',
        'Endurecer el Código Penal con penas efectivas de prisión para maltratadores de animales (#MaltratadoresALaCárcel).',
        'Suprimir privilegios institucionales y asegurar transparencia total de subvenciones públicas.'
      ],
      sourceRef: 'Programa Político PACMA 2026: Justicia y Reforma Electoral'
    },
    sanidad: {
      headline: 'Enfoque One Health, sanidad 100% pública, salud mental y nutrición preventiva',
      summary:
        'Promueve el enfoque de Salud Única (humana, animal y ambiental), el blindaje de la sanidad pública y la prevención basada en nutrición saludable.',
      measures: [
        'Blindar la sanidad 100% pública sin externalizaciones privadas y reducir listas de espera.',
        'Adoptar el enfoque One Health integrando salud humana, sanidad animal y prevención ambiental.',
        'Ampliar plantillas de psicología clínica y salud mental gratuita en centros de salud e institutos.',
        'Fomentar alternativas científicas libres de experimentación animal en investigación biomédica.'
      ],
      sourceRef: 'Programa Político PACMA 2026: Sanidad Pública y One Health'
    },
    educacion: {
      headline: 'Educación pública laica, educación en empatía y menús vegetales escolares',
      summary:
        'Propone invertir en escuela pública laica, incorporar educación ambiental y respeto animal y garantizar opciones vegetales en comedores.',
      measures: [
        'Invertir prioritariamente en la red pública educativa reduciendo ratios y aumentando becas.',
        'Incorporar de forma transversal en el currículo escolar la educación en empatía hacia los animales y ecología.',
        'Garantizar menús escolares saludables con opciones 100% vegetales en todos los centros públicos.',
        'Prohibir la entrada de menores a espectáculos taurinos y actividades cinegéticas.'
      ],
      sourceRef: 'Programa Político PACMA 2026: Educación y Empatía'
    },
    inmigracion: {
      headline: 'Acogida humanitaria, refugio climático y asesoramiento integral (incluidos animales)',
      summary:
        'Defiende la protección de personas migrantes y refugiadas por conflictos, persecución o cambio climático, campañas contra la xenofobia y protocolos con animales.',
      measures: [
        'Garantizar vías seguras de asilo y refugio para personas desplazadas por guerra, persecución o emergencia climática.',
        'Prestar asesoramiento jurídico y social sobre inmigración, refugio y retorno voluntario (incluyendo protocolos para viajar con animales de compañía).',
        'Desplegar campañas educativas y sociales contra el racismo y la xenofobia y fomentar la inclusión laboral.',
        'Proteger los derechos humanos de las personas migrantes en el acceso a vivienda, sanidad y educación.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026 (Cap. 3.10.6: Por las personas migrantes)'
    },
    seguridad: {
      headline: 'Seguridad ciudadana en áreas urbanas y rurales, SEPRONA y delitos de odio',
      summary:
        'Propone reforzar la seguridad pública preventiva, dotar al SEPRONA contra delitos ecológicos y proteger a víctimas de violencia y odio.',
      measures: [
        'Mejorar la seguridad ciudadana en núcleos urbanos y rurales reforzando las plantillas de proximidad.',
        'Dotar de mayores medios al SEPRONA y fiscalías especializadas contra el maltrato animal y el delito medioambiental.',
        'Ampliar la asistencia psicológica y recursos policiales contra la violencia machista y los delitos de odio.',
        'Endurecer el Código Penal frente a la crueldad contra los animales como indicador de violencia interpersonal.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026: Seguridad Ciudadana y Ambiental'
    },
    modelo_estado: {
      headline: 'Leyes marco estatales de protección animal y descentralización cooperativa',
      summary:
        'Respeta la organización autonómica pero exige una Ley Cero estatal vinculante que prohíba la tauromaquia y proteja a todos los animales por igual.',
      measures: [
        'Aprobar una Ley Cero estatal de protección animal vinculante en todas las comunidades autónomas sin excepciones.',
        'Retirar la catalogación de la tauromaquia como patrimonio cultural protegible en todo el país.',
        'Fomentar la cooperación interterritorial en gestión de espacios naturales protegidos y cuencas fluviales.',
        'Asegurar que las administraciones locales dispongan de financiación para gestión ética de colonias felinas y refugios.'
      ],
      sourceRef: 'Programa Político PACMA 2026: Legislación Marco'
    },
    energia_campo: {
      headline: 'Fin de macrogranjas, caza y tauromaquia; defensa del lobo y transición verde',
      summary:
        'Eje vertebrador de PACMA: prohibición inmediata de tauromaquia, caza deportiva y macrogranjas, junto a un plan urgente de transición ecológica.',
      measures: [
        'Abolir la tauromaquia, los festejos populares con animales y prohibir la caza deportiva, protegiendo galgos y podencos.',
        'Prohibir las macrogranjas industriales y fomentar la transición hacia agricultura sostenible y proteínas vegetales.',
        'Proteger estrictamente al lobo ibérico y especies amenazadas prohibiendo batidas y controles letales.',
        'Cerrar las centrales nucleares, impulsar renovables respetuosas con la biodiversidad y prevenir incendios forestales.'
      ],
      sourceRef: 'Programa Político PACMA 2026: Animales y Medio Ambiente'
    },
    exterior_ue: {
      headline: 'Directivas europeas de bienestar animal, paz y reducción del gasto militar',
      summary:
        'Reclama estándares vinculantes en la Unión Europea contra el transporte de animales vivos y reorientación del gasto militar hacia clima y sanidad.',
      measures: [
        'Impulsar en la Unión Europea la prohibición del transporte de animales vivos a terceros países y fin de subvenciones taurinas.',
        'Reducir el gasto militar armamentístico para financiar políticas climáticas, sanitarias y sociales.',
        'Promover tratados comerciales que exijan los máximos estándares ambientales y de protección animal.',
        'Apoyar la diplomacia internacional de paz y la acogida de refugiados climáticos.'
      ],
      sourceRef: 'Programa Político PACMA 2026: Europa y Paz'
    }
  },

  d21: {
    economia: {
      headline: '«Test PYME», auditoría del gasto, deducción salarial en Sociedades y control AIReF',
      summary:
        'Propone evaluar cada programa público por eficacia y coste, implantar un Test PYME contra cargas burocráticas, incentivar subidas salariales y contener la deuda pública.',
      measures: [
        'Someter todo programa de gasto público a auditorías de impacto y encargar a la AIReF la evaluación ex post de grandes obras.',
        'Implantar un «Test PYME» preceptivo en toda nueva norma y reducir cargas regulatorias mediante transición en rampa y reforma de Segunda Oportunidad.',
        'Crear una deducción en Sociedades para empresas que eleven salarios por encima del IPC (reforzada para trabajadores jóvenes).',
        'Contener el déficit y la deuda pública combinando control digital del gasto y simplificación fiscal sostenible.'
      ],
      sourceRef: 'La España que merecemos — Democracia 21 (29N-2026)'
    },
    vivienda: {
      headline: 'Cero impuestos en vivienda a menores de 35 años, recargo a no residentes y 10.000 M€ UE',
      summary:
        'Suprime impuestos en compra habitual para menores de 35 años (hasta 400.000 €), reorienta 10.000 millones europeos y aplica recargos a compra especulativa de no residentes.',
      measures: [
        'Suprimir los impuestos en compra de vivienda habitual para menores de 35 años y reducirlos para todos hasta un máximo de 400.000 €.',
        'Reorientar 10.000 millones de euros en fondos europeos no ejecutados hacia un fondo soberano de vivienda asequible y rehabilitación.',
        'Aplicar un recargo autonómico de hasta el 25% a vivienda no habitual adquirida por no residentes y bonificar el IRPF por alquiler estable.',
        'Tipificar como estafa la inquiocupación premeditada y cruzar digitalmente pisos de temporada con el padrón municipal.'
      ],
      sourceRef: 'La España que merecemos: Vivienda y Emancipación — D21 (2026)'
    },
    empleo: {
      headline: 'Productividad con IA, alivio de 200h a autónomos y transición de 2 años en micropymes',
      summary:
        'Despliega un Plan Estatal de IA para elevar salarios con productividad, reduce >200 horas de burocracia a autónomos y protege a micropymes con transiciones de 2 años.',
      measures: [
        'Desplegar un Plan Estatal de Dinamización e Integración de la IA para elevar la productividad salarial y prohibir contratos públicos con sueldos precarios.',
        'Reducir más de 200 horas anuales de trámites a autónomos con la «Autopista Digital Española» y cotización ajustada a ingresos reales.',
        'Establecer un periodo transitorio de adaptación de 2 años para micropymes ante nuevos permisos o cargas laborales.',
        'Facilitar el relevo generacional de negocios rentables próximos a la jubilación del titular.'
      ],
      sourceRef: 'La España que merecemos: Revolución Pyme y Empleo — D21 (2026)'
    },
    pensiones: {
      headline: 'Asamblea Ciudadana de 150 miembros sorteados y pacto intergeneracional',
      summary:
        'Convoca una Asamblea Ciudadana por el Futuro de las Pensiones en los primeros 100 días junto a expertos independientes para acordar reformas ante el Pacto de Toledo.',
      measures: [
        'Convocar en los primeros 100 días una Asamblea Ciudadana por el Futuro de las Pensiones (150 ciudadanos por sorteo cívico + consejo plural de expertos).',
        'Publicar simulaciones transparentes y elevar las recomendaciones al Pacto de Toledo y las Cortes garantizando pensiones actuales y futuras.',
        'Elevar la tasa de actividad formal, empleo joven y productividad para sostener el sistema sin fractura generacional.',
        'Desplegar un plan sociosanitario frente a la soledad no deseada de los mayores.'
      ],
      sourceRef: 'La España que merecemos: Asamblea por las Pensiones — D21 (2026)'
    },
    regeneracion_justicia: {
      headline: 'IGAE con IA blindada 6 años, cese sin presupuestos y recorte del 90% de asesores',
      summary:
        'Eje «España Limpia»: interventor blindado con control en tiempo real por IA, cese del Gobierno tras prórroga de PGE, listas abiertas y CGPJ elegido por jueces.',
      measures: [
        'Dotar a la IGAE de IA para fiscalizar contratos (incluidos menores) en tiempo real con un interventor irrevocable durante 6 años.',
        'Suspender el sueldo al Gobierno si no presenta Presupuestos y cesarlo automáticamente tras un año de prórroga presupuestaria.',
        'Recortar el 90% de asesores a dedo (máximo 4 por ministro), tipificar el enchufismo y hacer responder civilmente a partidos por corrupción.',
        'Elegir vocales judiciales del CGPJ por los jueces (sin asociaciones), terna de 3/5 para Fiscal General, eliminar aforamientos y abrir listas electorales.'
      ],
      sourceRef: 'Documento España Limpia — Democracia 21 (29N-2026)'
    },
    sanidad: {
      headline: 'Choque contra listas de espera, retención de profesionales y salud digital única',
      summary:
        'Combate récords de espera quirúrgica reteniendo talento sanitario, despolitizando gerencias hospitalarias por mérito e implantando historia clínica interoperable.',
      measures: [
        'Mejorar condiciones y retribuciones para frenar la fuga de médicos y enfermeros en Atención Primaria y hospitales.',
        'Evaluar con indicadores públicos las listas de espera y resultados clínicos de cada hospital.',
        'Despolitizar cargos directivos sanitarios mediante concurso de méritos e implantar historia clínica interoperable en toda España.',
        'Centralizar compras sanitarias aprovechando economías de escala.'
      ],
      sourceRef: 'La España que merecemos: Sanidad Pública — D21 (2026)'
    },
    educacion: {
      headline: 'Tecnología en el currículo, índice socioeducativo y cierre de brechas autonómicas',
      summary:
        'Sitúa la tecnología como pilar educativo más allá de pantallas, mide competencias en toda España e interviene en autonomías con peores resultados.',
      measures: [
        'Incorporar la tecnología como pilar curricular fundamental, climatizar centros y suprimir barracones.',
        'Evaluar periódicamente resultados educativos creando un Índice Socioeducativo con refuerzo estatal para autonomías rezagadas.',
        'Impulsar la Formación Profesional tecnológica con empresas innovadoras y asegurar dominio del inglés y lenguas propias.',
        'Ampliar becas basadas en renta y esfuerzo académico.'
      ],
      sourceRef: 'La España que merecemos: La educación en el centro — D21 (2026)'
    },
    inmigracion: {
      headline: '«Política Migratoria con Cabeza»: vías legales, homologación digital y control',
      summary:
        'Reconoce la contribución de la inmigración al crecimiento y demografía española mientras agiliza homologación de títulos y exige legalidad en frontera.',
      measures: [
        'Agilizar visados legales de talento internacional y mano de obra necesaria en sectores con déficit.',
        'Agilizar digitalmente la homologación transparente de títulos universitarios y profesionales extranjeros.',
        'Garantizar el cumplimiento estricto de la ley frente a entradas irregulares en coordinación con Frontex y la UE.',
        'Vincular la residencia estable a formación laboral e integración cívica constitucional.'
      ],
      sourceRef: 'La España que merecemos: Política Migratoria con Cabeza — D21 (2026)'
    },
    seguridad: {
      headline: 'Mando Único Civil de Ciberseguridad (ANCI), respaldo policial y agilidad penal',
      summary:
        'Crea la Agencia Nacional de Ciberseguridad Independiente (ANCI) segregando la ciberseguridad civil del CNI y apoya gratuita a pymes junto al respaldo policial.',
      measures: [
        'Crear la Agencia Nacional de Ciberseguridad Independiente (ANCI) unificando INCIBE, CCN y CNPIC y separando ciberseguridad civil del CNI.',
        'Proveer ciberasesores cercanos y protección gratuita frente a ciberataques para micropymes y autónomos.',
        'Dotar de medios modernos y respaldo institucional a Policía Nacional y Guardia Civil frente a crimen organizado y multirreincidencia.',
        'Agilizar la respuesta judicial ante inquiocupación y fraudes.'
      ],
      sourceRef: 'La España que merecemos: Ciberseguridad y Seguridad — D21 (2026)'
    },
    modelo_estado: {
      headline: 'Autonomías eficientes, servicios compartidos vía diputaciones y unidad de mercado',
      summary:
        'Considera las comunidades autónomas una fortaleza si se eliminan barreras regulatorias internas mediante licencias únicas y servicios técnicos en diputaciones.',
      measures: [
        'Hacer automáticamente válida en toda España cualquier licencia o permiso empresarial otorgado en una comunidad autónoma.',
        'Dotar de medios técnicos compartidos a municipios y autonomías a través de las diputaciones y la Autopista Digital Española.',
        'Vincular financiación territorial a evaluación objetiva de servicios públicos sin privilegios fiscales.',
        'Impulsar una estrategia europea específica contra la despoblación en la España interior.'
      ],
      sourceRef: 'La España que merecemos: Estado Inteligente y Territorio — D21 (2026)'
    },
    energia_campo: {
      headline: 'Desalación con renovables, riego inteligente y «Ciudades Frescas»',
      summary:
        'Combina desalación alimentada con energías renovables, riego agrícola de precisión con incentivos fiscales, restauración de acuíferos y adaptación climática urbana.',
      measures: [
        'Desarrollar desalación alimentada con renovables y reutilización masiva de aguas depuradas para regantes y hogares.',
        'Incentivar el riego inteligente (sensores y automatización) con amortización fiscal acelerada y deducciones de I+D+i en explotaciones.',
        'Restituir parte del agua ahorrada a ríos y acuíferos presionados e impulsar planes urbanos de «Ciudades Frescas».',
        'Asegurar energía limpia y competitiva que preserve la industria.'
      ],
      sourceRef: 'La España que merecemos: Agua, Campo y Clima — D21 (2026)'
    },
    exterior_ue: {
      headline: 'Refundar la UE, pilar europeo en la OTAN y condicionalidad democrática de fondos',
      summary:
        'Propone condicionalidad democrática estricta para fondos europeos, compras conjuntas en el pilar europeo de la OTAN y reorientar Next Generation a vivienda.',
      measures: [
        'Exigir condicionalidad democrática estricta para percibir fondos europeos frente a la erosión de libertades civiles.',
        'Reforzar el pilar europeo dentro de la OTAN, la Hoja de Ruta de Defensa 2030 y las compras conjuntas de defensa.',
        'Reorientar fondos europeos Next Generation no ejecutados a vivienda asequible y estrategia contra la despoblación 2028-2034.',
        'Impulsar el mercado único europeo de capitales, tecnología e innovación.'
      ],
      sourceRef: 'La España que merecemos: Construir la UE del Siglo 21 — D21 (2026)'
    }
  },

  iustitia: {
    economia: {
      headline: 'Tijeretazo al gasto político superfluo y alivio burocrático a ciudadanos y pymes',
      summary:
        'Propone recortar drásticamente el gasto público partidista, auditar subvenciones y reducir cargas burocráticas y fiscales sobre familias y empresas.',
      measures: [
        'Aplicar un recorte profundo del gasto político, ministerios, asesores y subvenciones sin interés general.',
        'Suprimir impuestos confiscatorios y simplificar obligaciones fiscales para autónomos y pymes.',
        'Auditar el uso de fondos públicos y recuperar patrimonios desviados mediante corrupción.',
        'Fomentar la libertad económica liberando al ciudadano del intervencionismo regulatorio excesivo.',
        'Crear una Auditoría Independiente del Gasto Público para frenar la deuda pública insostenible y el pago de intereses.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Economía y Tijeretazo al Gasto'
    },
    vivienda: {
      headline: 'Protección estricta de la propiedad privada, desalojo rápido y rebaja fiscal',
      summary:
        'Defiende garantizar la seguridad jurídica de los propietarios frente a ocupaciones ilegales y reducir la carga tributaria sobre la vivienda.',
      measures: [
        'Garantizar el desalojo rápido de viviendas ocupadas ilegalmente con tutela judicial inmediata.',
        'Reducir impuestos estatales y autonómicos que encarecen la compra y alquiler de la vivienda.',
        'Rechazar controles coercitivos de precios que reducen la oferta y fomentar suelo disponible.',
        'Asegurar transparencia en la adjudicación de cualquier promoción de vivienda pública.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Vivienda y Propiedad'
    },
    empleo: {
      headline: 'Reducción de cargas a autónomos y empresas y fin de subvenciones sindicales',
      summary:
        'Propone reducir las cuotas y cotizaciones que asfixian al empleo y al trabajador autónomo, aumentando el salario neto y suprimiendo subvenciones.',
      measures: [
        'Rebajar las cuotas y trabas administrativas a trabajadores autónomos y pequeñas empresas.',
        'Reducir las cotizaciones sociales para aumentar el salario neto disponible de los trabajadores.',
        'Eliminar subvenciones públicas obligatorias a sindicatos y patronales financiados con impuestos.',
        'Fomentar la libertad contractual y el emprendimiento eliminando burocracia estatal.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Trabajo y Autónomos'
    },
    pensiones: {
      headline: 'Reforma realista de pensiones, auditoría y fin de pensiones vitalicias políticas',
      summary:
        'Denuncia la insostenibilidad del sistema actual por parches políticos, propone auditoría transparente y suprime pensiones especiales de cargos.',
      measures: [
        'Realizar una auditoría transparente e independiente del sistema de pensiones frente a usos impropios de fondos.',
        'Implantar un sistema de contribución realista y transparente que garantice pensiones dignas a quienes han cotizado.',
        'Suprimir por completo las pensiones vitalicias e indemnizaciones especiales de exministros, diputados y cargos públicos.',
        'Proteger el poder adquisitivo de los mayores reduciendo la carga fiscal sobre suministros e IVA básico.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Reforma de Pensiones y Privilegios'
    },
    regeneracion_justicia: {
      headline: 'Blindaje de la Acción Popular (Art. 125 CE), fin de subvenciones a partidos y elección directa',
      summary:
        'Núcleo fundacional de Iustitia Europa: empoderar a la sociedad civil en los tribunales contra la corrupción, abolir privilegios políticos y despolitizar la justicia.',
      measures: [
        'Reformar el artículo 125 de la Constitución para blindar la Acción Popular ciudadana frente a cualquier limitación legal.',
        'Suprimir al 100% las subvenciones públicas a partidos políticos para acabar con la partidocracia estatal.',
        'Instaurar la elección directa del Presidente del Gobierno, referéndums vinculantes y límites estrictos de mandato.',
        'Eliminar los aforamientos políticos y hacer que los jueces elijan directamente a los miembros del CGPJ.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Reinicio Moral y Reforma Constitucional'
    },
    sanidad: {
      headline: 'Despolitización sanitaria, libertad terapéutica y refuerzo de derechos del paciente',
      summary:
        'Combina la defensa de una sanidad pública libre de corrupción contractual con la transparencia clínica y la integración de terapias naturales.',
      measures: [
        'Auditar todos los contratos de compras y concesiones sanitarias persiguiendo el lucro ilícito.',
        'Garantizar la libertad terapéutica, el consentimiento informado estricto y la integración de terapias naturales.',
        'Despolitizar la gestión hospitalaria dando voz a médicos y colegios profesionales independientes.',
        'Asegurar cobertura sanitaria nacional ágil reduciendo el gasto burocrático directivo.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Sanidad'
    },
    educacion: {
      headline: 'Desideologización de las aulas, libertad parental y excelencia educativa',
      summary:
        'Reclama retirar contenidos ideológicos del currículo escolar, garantizar la autoridad docente y defender la libertad de elección de las familias.',
      measures: [
        'Suprimir contenidos políticos o ideológicos de las aulas centrándose en conocimiento científico y humanístico.',
        'Reconocer el derecho preferente de los padres a elegir la formación moral y escolar de sus hijos.',
        'Garantizar la igualdad de nivel educativo y estudio en castellano en todo el territorio nacional.',
        'Reforzar la protección jurídica y autoridad del profesorado.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Educación'
    },
    inmigracion: {
      headline: 'Cierre total de la frontera sur, Armada en Canarias y deportaciones de ilegales',
      summary:
        'Su Contrato Electoral exige tolerancia cero con la inmigración irregular: refuerzo militar en Ceuta y Melilla, flota de la Armada en Canarias y deportaciones inmediatas.',
      measures: [
        'Reforzar las vallas de Ceuta y Melilla habilitando a las Fuerzas Armadas y destinar la flota de la Armada en Ferrol a patrullar aguas de Canarias.',
        'Ejecutar deportaciones masivas de inmigrantes irregulares («fin de los papeles para todos») y expulsar de inmediato a extranjeros delincuentes.',
        'Rechazar repartos obligatorios de inmigrantes impuestos por la Unión Europea sin consentimiento nacional.',
        'Reformar integralmente la Ley de Extranjería para vincular la residencia al cumplimiento estricto de la legalidad.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa (Punto 7: Inmigración)'
    },
    seguridad: {
      headline: 'Nuevo modelo policial despolitizado y defensa de libertades civiles',
      summary:
        'Plantea despolitizar las cúpulas policiales sujetándolas únicamente a la ley y los jueces, mientras deroga normas restrictivas de libertades.',
      measures: [
        'Despolitizar las cúpulas de Policía Nacional y Guardia Civil asegurando su sujeción exclusiva a la ley y los jueces.',
        'Dotar de medios jurídicos y materiales suficientes a los agentes para combatir delincuencia y corrupción.',
        'Derogar leyes que restrinjan libertades civiles fundamentales de manifestación, expresión e información.',
        'Agilizar los juzgados de instrucción para acabar con la impunidad en delitos reiterados.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Nuevo Modelo Policial y Seguridad'
    },
    modelo_estado: {
      headline: 'Reforma profunda del régimen institucional de 1978 hacia democracia directa y unidad',
      summary:
        'Plantea superar la partitocracia del régimen del 78 mediante división real de poderes, referéndums vinculantes y eliminación de duplicidades autonómicas.',
      measures: [
        'Someter las grandes reformas territoriales e institucionales a referéndum ciudadano vinculante.',
        'Suprimir duplicidades administrativas autonómicas que multiplican el gasto político y las redes clientelares.',
        'Asegurar la igualdad ante la ley de todos los españoles sin privilegios territoriales ni impunidad.',
        'Reforzar la separación efectiva entre poder ejecutivo, legislativo y judicial.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Reforma del Estado'
    },
    energia_campo: {
      headline: 'Energía nuclear y gas, salida del Pacto Verde y fin de subvenciones renovables',
      summary:
        'Apuesta por energía nuclear, gas, nacionalización de tierras raras y derogación inmediata del Pacto Verde Europeo, la PAC y las leyes de Bienestar Animal y Restauración.',
      measures: [
        'Apostar por la energía nuclear, el gas y los recursos propios, nacionalizar tierras raras y suprimir subvenciones a macroinstalaciones renovables.',
        'Salir del Pacto Verde Europeo y derogar de inmediato la Política Agraria Común (PAC) y la Ley de Restauración de la Naturaleza.',
        'Derogar las leyes de Bienestar Animal, Cadena Alimentaria, Quemas y el cuaderno digital obligatorio para proteger al sector primario.',
        'Rechazar las imposiciones de la Agenda 2030 y las organizaciones supranacionales no electas.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa (Puntos 12, 13 y 14)'
    },
    exterior_ue: {
      headline: 'Soberanía constitucional frente a tratados supranacionales y organismos globales',
      summary:
        'Cuestiona la cesión creciente de soberanía a la Unión Europea, la OMS y organismos no electos, exigiendo supremacía nacional y democracia.',
      measures: [
        'Blindar la primacía de la Constitución española y el derecho nacional frente a imposiciones de tratados supranacionales.',
        'Rechazar tratados globales sanitarios o climáticos que limiten derechos fundamentales sin refrendo ciudadano.',
        'Exigir transparencia absoluta en los contratos y compromisos internacionales suscritos por el Gobierno.',
        'Defender una cooperación europea basada en naciones soberanas y libertades individuales.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Soberanía e Internacional'
    }
  },

  fo: {
    economia: {
      headline: 'Reindustrialización nacional, nacionalización estratégica y proteccionismo obrero',
      summary:
        'Propone recuperar sectores estratégicos privatizados, proteger la industria y agricultura españolas mediante aranceles y suprimir subvenciones a ONG y sindicatos.',
      measures: [
        'Ejecutar un Plan Estatal de Reindustrialización para recuperar siderurgia, manufactura y bienes de equipo.',
        'Nacionalizar sectores estratégicos como energía, banca, telecomunicaciones y transporte clave.',
        'Aplicar aranceles y proteccionismo comercial frente a importaciones desleales y deslocalizaciones empresariales.',
        'Suprimir subvenciones a ONG, patronales y sindicatos institucionalizados destinando el presupuesto a industria.',
        'Auditar la deuda pública frente a los mercados financieros y el BCE, reorientando el ahorro nacional hacia inversión productiva.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Defendamos España'
    },
    vivienda: {
      headline: 'Parque público obrero, control de precios e intervención contra mafias y fondos',
      summary:
        'Combina la intervención del mercado frente a fondos especulativos con medidas firmes de desalojo frente a mafias de ocupación que degradan barrios obreros.',
      measures: [
        'Construir vivienda pública obrera y limitar los precios del alquiler frente a fondos buitre y grandes tenedores.',
        'Prohibir la especulación inmobiliaria extranjera sobre vivienda urbana residencial.',
        'Desalojar rápidamente usurpaciones vinculadas a mafias que generan inseguridad en barrios trabajadores.',
        'Conceder créditos públicos hipotecarios sin usura a familias trabajadoras para primera vivienda.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Vivienda'
    },
    empleo: {
      headline: 'Endurecimiento del despido, defensa salarial y alivio de cuotas a autónomos',
      summary:
        'Defiende reforzar los derechos del trabajador frente a la patronal, reducir la jornada y cuotas de autónomos y perseguir la contratación irregular.',
      measures: [
        'Incrementar las indemnizaciones por despido improcedente y combatir la precariedad y horas extras impagadas.',
        'Reducir la jornada laboral sin pérdida salarial y garantizar salarios ligados al coste real de la vida.',
        'Perseguir penalmente a empresas que contraten mano de obra irregular para devaluar salarios de los trabajadores.',
        'Reducir las cuotas de trabajadores autónomos y garantizarles cobertura real por baja médica.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Derechos Laborales'
    },
    pensiones: {
      headline: 'Rechazo al retraso de jubilación, garantía para autónomos y natalidad nacional',
      summary:
        'Se opone al aumento de la edad de jubilación, exige pensiones dignas para obreros y autónomos y vincula su sostenibilidad a natalidad e industria.',
      measures: [
        'Rechazar el retraso progresivo de la edad de jubilación recuperando los 65 años y jubilación anticipada por penosidad.',
        'Garantizar pensiones públicas dignas también para los trabajadores autónomos y sectores físicos.',
        'Sostener el sistema público mediante reindustrialización, empleo estable y fomento de la natalidad nacional.',
        'Blindar las pensiones frente a la inflación y al encarecimiento abusivo de vivienda y energía.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Pensiones'
    },
    regeneracion_justicia: {
      headline: 'República popular unitaria, fin de puertas giratorias y control ciudadano',
      summary:
        'Critica la corrupción del sistema político actual y plantea eliminar privilegios partidistas, puertas giratorias y subvenciones a castas burocráticas.',
      measures: [
        'Prohibir de forma absoluta las puertas giratorias de exministros y cargos hacia grandes empresas estratégicas.',
        'Suprimir subvenciones públicas a partidos políticos, fundaciones y sindicatos del régimen.',
        'Endurecer las penas por corrupción política con incautación de patrimonio y responsabilidad penal efectiva.',
        'Establecer mecanismos de revocación de cargos públicos que incumplan su programa.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Instituciones'
    },
    sanidad: {
      headline: 'Sanidad 100% pública, nacionalización farmacéutica y expulsión de fondos buitre',
      summary:
        'Exige una sanidad estatal pública, gratuita y centralizada, expulsando por completo la gestión privada y creando una farmacéutica nacional.',
      measures: [
        'Expulsar a fondos privados de los hospitales públicos y revertir todas las concesiones y conciertos.',
        'Centralizar la sanidad en un único sistema público nacional eliminando desigualdades entre regiones.',
        'Crear una industria farmacéutica pública nacional para producir medicamentos estratégicos.',
        'Ampliar plantillas fijas y dotar de medios a la atención primaria en barrios obreros y zonas rurales.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Sanidad Pública'
    },
    educacion: {
      headline: 'Escuela pública estatal única, exigencia académica e igualdad territorial',
      summary:
        'Defiende la educación pública laica y gratuita unificada en toda España, con alta exigencia técnica y acceso universal por capacidad.',
      measures: [
        'Recuperar las competencias educativas para el Estado estableciendo un currículo común exigente e idioma común.',
        'Suprimir conciertos privados para destinar todo el presupuesto a una red pública gratuita hasta la universidad.',
        'Impulsar la formación profesional industrial y científica vinculada a la reindustrialización del país.',
        'Garantizar becas completas a hijos de familias trabajadoras para estudios superiores.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Educación'
    },
    inmigracion: {
      headline: 'Rechazo a la inmigración masiva, fin de regularizaciones y expulsión de irregulares',
      summary:
        'Sostiene que la inmigración descontrolada sirve a la patronal para abaratar salarios y degrada barrios obreros, exigiendo fin de regularizaciones.',
      measures: [
        'Rechazar regularizaciones extraordinarias masivas y restringir estrictamente la entrada de mano de obra extranjera.',
        'Expulsar de forma inmediata a inmigrantes en situación irregular y a extranjeros que cometan delitos.',
        'Retirar subvenciones a ONG que gestionen flujos migratorios irregulares o fomenten el efecto llamada.',
        'Exigir asimilación cultural y lingüística real para quienes residan legalmente en España.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Inmigración'
    },
    seguridad: {
      headline: 'Seguridad en barrios obreros, fronteras firmes y lucha contra mafias e islamismo',
      summary:
        'Exige proteger barrios trabajadores frente a delincuencia, narcopisos e islamismo radical dotando de plena autoridad y medios a la policía.',
      measures: [
        'Implantar control estricto de fronteras nacionales desplegando los medios necesarios del Estado.',
        'Combatir frontalmente el islamismo político radical y las mafias criminales y narcopisos en barrios obreros.',
        'Dotar de autoridad jurídica, equipamiento y refuerzo de plantillas a las fuerzas y cuerpos de seguridad.',
        'Endurecer el Código Penal frente a delincuencia violenta, multirreincidencia y agresiones a agentes.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Seguridad y Fronteras'
    },
    modelo_estado: {
      headline: 'República unitaria y centralizada frente al separatismo y las 17 taifas',
      summary:
        'Rechaza frontalmente el Estado de las Autonomías y el independentismo por fragmentar a la clase trabajadora, proponiendo una República unitaria.',
      measures: [
        'Superar la Monarquía y el modelo de 17 autonomías instaurando una República unitaria y centralizada.',
        'Combatir políticamente a los nacionalismos periféricos por dividir a los trabajadores en beneficio de oligarquías regionales.',
        'Unificar los códigos legales, fiscales, sanitarios y educativos en todo el territorio nacional.',
        'Suprimir parlamentos y estructuras burocráticas autonómicas duplicadas.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Modelo de Estado'
    },
    energia_campo: {
      headline: 'Energía nuclear estatal, rechazo al fanatismo verde de Bruselas y defensa agraria',
      summary:
        'Defiende la energía nuclear pública como base industrial barata, rechaza la Agenda 2030 por deslocalizar fábricas y apoya al campo español.',
      measures: [
        'Apostar por la energía nuclear bajo titularidad pública para garantizar electricidad barata a la industria y hogares.',
        'Rechazar normativas climáticas de la UE que cierran fábricas españolas y arruinan a agricultores y ganaderos.',
        'Proteger la producción agraria nacional frente a importaciones del norte de África o terceros países.',
        'Garantizar un plan hídrico nacional público que abastezca al mundo rural.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Energía y Campo'
    },
    exterior_ue: {
      headline: 'Salida de la Unión Europea y de la OTAN por soberanía nacional y obrera',
      summary:
        'Mantiene un euroescepticismo y anti-OTAN frontal, exigiendo recuperar la moneda, las fronteras, la política exterior y cerrar bases extranjeras.',
      measures: [
        'Promover la salida de España de la Unión Europea para recuperar la soberanía económica, monetaria e industrial.',
        'Abandonar de forma inmediata la OTAN y desmantelar las bases militares estadounidenses en territorio nacional.',
        'Practicar una política exterior soberana y firme frente a Marruecos en defensa de Ceuta, Melilla y Canarias.',
        'Rechazar la subordinación geopolítica de España a intereses imperialistas anglosajones o de Bruselas.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Soberanía, UE y OTAN'
    }
  }
};

/**
 * Retrieve all 12 topic proposals for a given party.
 * @param {string} partyId
 * @returns {Record<string, object>|undefined}
 */
export function getPartyProgram(partyId) {
  return PROGRAMS[partyId];
}

/**
 * Retrieve a single party proposal for a specific topic.
 * @param {string} partyId
 * @param {string} topicId
 * @returns {object|undefined}
 */
export function getProposal(partyId, topicId) {
  return PROGRAMS[partyId]?.[topicId];
}

