/**
 * Structured programmatic corpus for all 11 active 29N-2026 candidatures
 * across the 12 core policy areas (132 topic-party entries), grounded in 2026 programs.
 */

export const PROGRAMS = {
  frente_amplio: {
    economia: {
      headline: 'Tasa Zucman (3% >50 M€), Sociedades al 20%, banca pública y ayuda energética de 1.000 €',
      summary:
        'Implanta la Tasa Zucman del 3% desde 50 M€, eleva al 1% el impuesto a depósitos bancarios y al 15% la Tasa Google, topa herencias en 10 M€, financia ayudas de 1.000 € y crea banca pública.',
      measures: [
        'Implantar la Tasa Zucman (3% desde 50 M€), elevar al 1% el impuesto a depósitos bancarios, fijar Sociedades mínimo del 20% y subir la Tasa Google al 15% junto a una «tasa nube» a centros de datos.',
        'Gravar herencias desde 1 M€ (marginal 34%), topar herencias de ultrarricos en 10 millones € por heredero y crear una ayuda energética directa de 1.000 € durante 2 años a 1,4M hogares.',
        'Crear una banca pública estatal, un fondo soberano renovable y un Fondo Soberano Europeo de IA financiado con un impuesto del 50% en acciones a grandes empresas de IA (>200 M€).',
        'Condonar deuda autonómica condicionada a prohibir el dumping fiscal y aliviar la deuda municipal reformando la regla de gasto.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Caps. 3, 6, 11, 12 y 17)'
    },
    vivienda: {
      headline: '1,5 millones de viviendas públicas, tope al 25%, expropiación en 3 fases y cuota 0,45%',
      summary:
        'Moviliza el 1% del PIB y una cuota empresarial del 0,45% para 1,5 millones de viviendas públicas, topa alquileres al 25%, expropia en 3 fases a grandes tenedores y adscribe SAREB a Casa 47.',
      measures: [
        'Invertir el 1% del PIB anual y crear una cotización empresarial del 0,45% (>=50 trabajadores) para incorporar 1,5 millones de viviendas públicas en 12 años destinadas a alquiler asequible.',
        'Topar por ley el alquiler en zonas tensionadas al menor valor entre el 25% de la renta neta media por sección censal y el índice regulado (con rebaja adicional del 30% en ciudades masificadas).',
        'Aprobar una Ley de Expropiación en 3 fases (>1.000, >700 y >50 viviendas) a propietarios corporativos, prohibir compra especulativa a personas jurídicas, elevar al 50% el recargo IBI a vivienda vacía y adscribir SAREB a Casa 47.',
        'Extinguir en 3 años licencias turísticas en zonas tensionadas, reservar el 90%-100% de edificabilidad a vivienda habitual y blindar el artículo 47 CE.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Cap. 1: Acabar con la especulación)'
    },
    empleo: {
      headline: 'Jornada de 32 horas (37,5 h ya), reparto del 10% del beneficio, tasa del 30% y fondos Meidner',
      summary:
        'Reduce la jornada hacia 32 horas, exige repartir el 10% de beneficios en empresas >=50 trabajadores, grava al 30% beneficios no compartidos, crea Fondos Meidner y amplía permisos a 20 semanas.',
      measures: [
        'Implantar de inmediato las 37,5 horas semanales (35 h públicas) con senda legal hacia las 32 horas sin bajada salarial y ampliar permisos de nacimiento a 20 semanas intransferibles.',
        'Blindar el SMI en el 60% del salario medio neto con revisión salarial obligatoria según inflación/AENC y prohibir su absorción con complementos.',
        'Implantar reparto obligatorio del 10% de beneficios en empresas >=50 trabajadores (con prioridad sobre el dividendo), gravar al 30% beneficios no compartidos y crear Fondos Meidner de propiedad obrera.',
        'Simplificar trámites a pymes y autónomos y garantizar derecho preferente de compra cooperativa de la plantilla ante cierres.'
      ],
      sourceRef: 'Programa Electoral Frente Amplio 29N-2026 (Caps. 2, 4.1, 8 y 13)'
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
      headline: '3,5% del PIB verde, 3 horas de luz gratis, cancelación H2Med y cierre nuclear',
      summary:
        'Crea comercializadora pública con tres horas diarias de luz gratis, redirige los 7.000 M€ del H2Med a redes eléctricas, cierra nucleares (Almaraz 2027-2028) y apoya la agricultura regenerativa.',
      measures: [
        'Excluir nuclear e hidroeléctrica del sistema marginalista, crear comercializadora pública con tres horas diarias de luz gratuita solar para todos los hogares y recuperar redes de distribución.',
        'Cumplir el calendario de cierre nuclear (Almaraz I y II en 2027-2028), retirar fondos públicos al H2Med destinando esos 7.000 M€ a redes y dedicar el 3,5% del PIB anual a transición ecológica.',
        'Alcanzar un 25% de superficie agraria ecológica en 2030, crear un cuerpo civil climático en apoyo a la agricultura regenerativa y un abono único estatal de transporte.',
        'Reformar la Ley 7/2023 para incluir plenamente a perros de caza y trabajo y endurecer el Código Penal contra el maltrato animal.'
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

  psoe: {
    economia: {
      headline: 'Progresividad del capital (hasta 35%), Tasa Tobin 0,4%, crédito fiscal por hijo y deuda',
      summary:
        'Su programa 29N-2026 («La fuerza de seguir avanzando») refuerza la tributación de capital (>300.000 € al 35%), duplica la Tasa Tobin al 0,4%, reembolsa deducciones por hijo a 2M de hogares y asume deuda autonómica.',
      measures: [
        'Elevar la progresividad de las rentas del capital más altas hasta el 35% (>300.000 €), duplicar la Tasa Tobin del 0,2% al 0,4% y gravar grandes patrimonios y tecnológicas (c. 130, 135, 457).',
        'Convertir el mínimo exento por descendiente en el IRPF en un crédito fiscal reembolsable para 2 millones de hogares y exonerar al SMI (c. 134).',
        'Asumir parcialmente 83.000 M€ de deuda autonómica y consolidar el mínimo global del 15% en Sociedades junto al Régimen 20 empresarial (c. 5, 231).',
        'Mantener la reducción gradual del déficit bajo el 3% y de la deuda pública conforme a las reglas fiscales europeas.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: La fuerza de seguir avanzando (c. 5, 130-135, 231, 457)'
    },
    vivienda: {
      headline: 'Derecho constitucional, CASA 47, TUCASA (50.000 €), 1% PIB e impuesto a fondos buitre',
      summary:
        'Reforma la Constitución para hacer exigible la vivienda, moviliza el 1% del PIB anual y 25.000 M€ ICO, consolida CASA 47, crea préstamos TUCASA y grava solares ociosos y fondos buitre.',
      measures: [
        'Reformar la Constitución para hacer de la vivienda un derecho exigible y destinar el 1% del PIB anual más el 1% de obra pública estatal (c. 37-41).',
        'Consolidar CASA 47 para que la vivienda pública sea al menos el 25% de la nueva construcción, gravar solares ociosos y congelar temporalmente rentas abusivas (c. 41, 53, 62).',
        'Desplegar TUCASA (10.000 M€ en préstamos de hasta 50.000 € sin intereses), más de 25.000 M€ vía ICO y 4.700 M€ del Plan Social del Clima (c. 55-56, 67).',
        'Aprobar un impuesto progresivo contra la especulación de fondos buitre y grandes propietarios y permitir tasa municipal a pisos turísticos (c. 70, 73).'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Bloque de Vivienda (c. 37-73)'
    },
    empleo: {
      headline: 'Jornada legal de 37,5 h (senda 35 h), SMI >60% blindado y límite a parcialidad',
      summary:
        'Completa la jornada legal de 37,5 horas incentivando avanzar a 35 horas, blinda por ley el SMI por encima del 60% del salario medio y frena la parcialidad involuntaria.',
      measures: [
        'Completar por ley la reducción de jornada ordinaria a 37,5 horas semanales e incentivar en negociación colectiva el avance hacia las 35 horas (c. 108).',
        'Blindar por ley el SMI por encima del 60% del salario medio según precios y productividad (c. 87).',
        'Reformar el contrato a tiempo parcial: si supera el 80% de la jornada ordinaria pasará a considerarse contrato a jornada completa (c. 123).',
        'Actualizar el Estatuto del Trabajo Autónomo en conciliación, cese de actividad y prevención de riesgos laborales.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Empleo y Conciliación (c. 87, 108, 123)'
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
      headline: 'Aborto en art. 43 CE, voto a los 16, escaño ciudadano y fin de aforamientos',
      summary:
        'Blinda el aborto (art. 43 CE), matrimonio igualitario y eutanasia en la Constitución, rebaja el voto a 16 años, crea un escaño ciudadano, suprime aforamientos comunes y agiliza la justicia.',
      measures: [
        'Reformar el art. 43 de la Constitución para blindar el aborto y proteger constitucionalmente matrimonio igualitario y eutanasia (c. 327, 368).',
        'Rebajar la edad de voto a los 16 años, crear un escaño ciudadano sin voto en Congreso y Senado e incorporar la unión de amistad al Código Civil (c. 370-372).',
        'Suprimir los aforamientos por delitos ajenos al ejercicio del cargo y evitar bloqueos en la renovación del CGPJ (c. 373).',
        'Digitalizar juzgados, ampliar tribunales de instancia y aprobar una ley específica contra la violencia vicaria.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Instituciones y Derechos (c. 327, 368-373)'
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
      headline: 'Estado autonómico cooperativo, +21.000 M€ financiación, quita de 83.000 M€ y Senado',
      summary:
        'Defiende el Estado de las Autonomías con 21.000 millones adicionales, asunción parcial de 83.000 M€ de deuda autonómica y reforma del Senado en Cámara territorial.',
      measures: [
        'Aprobar un nuevo sistema de financiación autonómica que aporte 21.000 millones de euros adicionales para blindar sanidad, educación y servicios sociales (c. 229).',
        'Avanzar en la asunción parcial por el Estado de 83.000 millones de euros de deuda autonómica liberando recursos regionales (c. 231).',
        'Reformar el Senado como auténtica Cámara de representación territorial e institucionalizar la Conferencia de Presidentes y cooficialidad lingüística (c. 382-385).',
        'Rechazar tanto la recentralización autonómica como los referéndums unilaterales de independencia.'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Modelo Territorial (c. 229-231, 382-387)'
    },
    energia_campo: {
      headline: 'Cierre nuclear hasta 2035, 81% renovables en 2030 y mínimo vital de agua',
      summary:
        'Mantiene el calendario de cierre de las centrales nucleares hasta 2035 con transición justa, eleva las renovables al 81% en 2030 y blinda un mínimo vital de agua en la Constitución.',
      measures: [
        'Mantener el calendario de cierre de las centrales nucleares hasta 2035 acompañado de proyectos de transición justa en las comarcas afectadas (c. 240).',
        'Alcanzar el 81% de generación eléctrica renovable en 2030 priorizando Zonas de Aceleración Renovable compatibles con la actividad agroganadera (c. 234).',
        'Garantizar un mínimo vital de agua potable blindado en la Constitución y actualizar la Estrategia Nacional de Resiliencia Hídrica (c. 261-262).',
        'Aprobar una Ley de Agricultura Familiar y Profesional y reforzar la financiación de una Política Pesquera Común justa (c. 268, 273).'
      ],
      sourceRef: 'Programa Electoral PSOE 29N-2026: Transición Ecológica, Agua y Campo (c. 234-273)'
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
      headline: 'Un millón de viviendas, Hucha Hogar Joven, IVA 4% y desalojo en 48h',
      summary:
        'Deroga zonas tensionadas, impulsa un millón de viviendas, crea la Hucha Hogar Joven y el incentivo «Tres Años+», rebaja el IVA joven al 4% y desaloja en 48 horas.',
      measures: [
        'Impulsar un millón de viviendas adicionales con nueva Ley del Suelo, silencio positivo en licencias y rehabilitación con IVA superreducido al 4% (m. 144-149).',
        'Derogar las zonas tensionadas y el índice de alquiler, implantar el incentivo fiscal «Tres Años+» para renovaciones estables y deducción de alquiler en IRPF (m. 145, 156).',
        'Crear la «Hucha Hogar Joven» (hasta 2.000 €/año con 20% deducción y tope 40.000 € exento) y bajar al 4% el IVA de primera vivienda para menores de 40 años (m. 154-155).',
        'Aprobar desalojos judiciales de okupas en 48 horas desde el primer día y facultar a las comunidades de propietarios frente a la ocupación (m. 157).'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Cap. 4.1: m. 144-157)'
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
      headline: 'Sustituir la LOMLOE, PAU común nacional, 0-3 gratuita 50/50 y blindar conciertos',
      summary:
        'Sustituye la LOMLOE, implanta una PAU común en toda España, financia al 50% con CCAA la etapa 0-3 gratuita, garantiza conciertos de 6 años y blinda educación especial.',
      measures: [
        'Sustituir la LOMLOE con refuerzo en lectura y cálculo e implantar una Prueba de Acceso a la Universidad (PAU) común en toda España.',
        'Universalizar la educación infantil gratuita de 0 a 3 años cofinanciada al 50% por Estado y CCAA, pública o concertada (m. 163).',
        'Prestigiar al docente con nota mínima en Magisterio, defensa jurídica de oficio al profesor agredido y prohibición de redes sociales a menores de 14 años (m. 168).',
        'Garantizar conciertos educativos de al menos seis años donde exista demanda familiar y mantener centros de educación especial.'
      ],
      sourceRef: 'La Reconstrucción Nacional: Programa PP 29N-2026 (Caps. 3.1 y 4.7)'
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

  vox: {
    economia: {
      headline: 'Rebaja de IRPF, IVA y Sociedades, fin de cita previa y derogar 3 normas por cada nueva',
      summary:
        'Su programa 29N-2026 («Es sentido común», 115 medidas) baja IRPF por hijos, IVA y Sociedades, alivia a Baleares y Canarias, reduce deuda pública y audita todo gasto superfluo.',
      measures: [
        'Rebajar el IRPF con tipos reducidos según el número de hijos, el IVA general y reducido y el Impuesto de Sociedades, junto a fiscalidad mínima contra la despoblación (m. 2-3, 6).',
        'Aprobar un alivio fiscal específico para Baleares y Canarias mediante rebaja del IGIC y supresión del AIEM (m. 4).',
        'Aplicar la regla de derogar tres normas por cada nueva ley aprobada, suprimir la cita previa obligatoria e implantar la Ley de Unidad de Mercado (m. 39-40, 42).',
        'Reducir la deuda pública realizando una auditoría integral de gasto político superfluo y suprimiendo subvenciones a partidos, sindicatos, patronales y ONG (m. 2, 43).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Es sentido común (m. 2-6, 39-43)'
    },
    vivienda: {
      headline: 'IVA 0% en primera vivienda nueva, ITP bonificado al 100% y desalojo <24 horas',
      summary:
        'Aplica IVA 0% y bonificación del 100% del ITP en primera vivienda habitual, grava compras no comunitarias y fondos, veta el alquiler a irregulares y desaloja en <24h.',
      measures: [
        'Aplicar IVA del 0% en primera vivienda nueva habitual, bonificación del 100% del ITP en segunda mano y recuperación de la deducción por inversión en vivienda habitual (m. 34).',
        'Derogar la Ley de Vivienda suprimiendo topes al alquiler, ampliar la vivienda pública, regular VUT ilegales y agravar la fiscalidad a compradores no comunitarios y fondos especulativos (m. 29-30, 35).',
        'Ejecutar desalojos exprés en menos de 24 horas y tipificar la «inquiocupación» como delito de estafa (m. 31).',
        'Implantar prioridad nacional en vivienda protegida y ayudas y prohibir el alquiler de viviendas a inmigrantes en situación ilegal (m. 27, 32).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Bloque de Vivienda (m. 26-35)'
    },
    empleo: {
      headline: 'Cuota cero a autónomos <SMI, escala progresiva desde 50 € y prioridad nacional',
      summary:
        'Fija cuota cero para autónomos por debajo del SMI y cuota progresiva desde 50 € por encima, reduce cotizaciones y establece prioridad nacional.',
      measures: [
        'Implantar cuota cero para autónomos con ingresos por debajo del SMI y cuota progresiva desde 50 euros para quienes lo superen (m. 3).',
        'Reducir las cotizaciones sociales y cargas burocráticas que lastran la contratación en pymes y autónomos.',
        'Establecer prioridad nacional en el acceso al empleo, programas de formación y al Ingreso Mínimo Vital (m. 22).',
        'Eliminar toda subvención pública a sindicatos mayoritarios y patronales (m. 43).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Empleo, Autónomos y Protección Social'
    },
    pensiones: {
      headline: 'Sostenibilidad del sistema, cotización estatal por cuidado de hijos y dependencia',
      summary:
        'Garantiza el poder adquisitivo de las pensiones con recorte del gasto político superfluo y financia con cargo al Estado las cotizaciones de padres dedicados al cuidado de hijos.',
      measures: [
        'Garantizar la sostenibilidad y el poder adquisitivo de las pensiones públicas eliminando el despilfarro político y duplicidades administrativas (m. 7, 43).',
        'Financiar con cargo al Estado las cotizaciones a la Seguridad Social de los españoles dedicados al cuidado de sus hijos para evitar penalizaciones en la jubilación (m. 94).',
        'Impulsar un Plan Nacional de Natalidad con ayudas progresivas desde el primer hijo y gratuidad real de 0 a 3 años (m. 94).',
        'Reforzar el presupuesto de dependencia y eliminar trabas burocráticas para mayores y personas con discapacidad (m. 95-96).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Pensiones, Familia y Dependencia (m. 7, 94-96)'
    },
    regeneracion_justicia: {
      headline: '12 vocales del CGPJ por jueces, sedición, malversación e ilegalización separatista',
      summary:
        'Devuelve a los jueces la elección de 12 vocales del CGPJ, recupera el delito de sedición, prohíbe indultos políticos, rebaja la edad penal e ilegaliza al separatismo.',
      measures: [
        'Reformar la LOPJ para que los 12 vocales judiciales del CGPJ sean elegidos directamente por los jueces y proteger la primacía del Supremo frente al TC (m. 100-101).',
        'Recuperar el delito de sedición, agravar la malversación y prohibir los indultos en delitos de corrupción o contra la integridad territorial (m. 103).',
        'Rebajar la edad penal eliminando la inimputabilidad del menor en delitos violentos graves y ampliar la prisión permanente revisable (m. 80-81).',
        'Derogar leyes ideológicas como la de Memoria Democrática e ilegalizar partidos que atenten contra la unidad constitucional de España (m. 46-47, 103).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Justicia y Regeneración (m. 46-47, 80-81, 100-103)'
    },
    sanidad: {
      headline: 'Tarjeta sanitaria única nacional, retorno de sanitarios y sin requisito lingüístico',
      summary:
        'Implanta la tarjeta sanitaria única con historia clínica compartida sin barreras lingüísticas, refuerza plantillas y excluye atención gratuita no urgente a irregulares.',
      measures: [
        'Implantar una tarjeta sanitaria única nacional con historia clínica compartida eliminando el requisito de lengua regional en oposiciones sanitarias (m. 60).',
        'Reforzar las plantillas con contratos estables y poner en marcha un plan de retorno de médicos y sanitarios emigrados (m. 61).',
        'Excluir de la sanidad gratuita no urgente a inmigrantes en situación irregular salvo casos de urgencia grave (m. 20).',
        'Ampliar conciertos y recursos asistenciales para reducir listas de espera.'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Sanidad (m. 20, 60-65)'
    },
    educacion: {
      headline: 'Currículo común, reválidas y EVAU única, sin móviles y topes culturales en aula',
      summary:
        'Deroga la LOMLOE para instaurar reválidas, EVAU única y enseñanza en español, garantiza libre elección de centro, prohíbe móviles y fija cupos de nivelación lingüística.',
      measures: [
        'Derogar la LOMLOE e implantar currículo común nacional, reválidas, EVAU única y enseñanza garantizada en español en toda España (m. 66, 69).',
        'Garantizar el derecho de las familias a elegir libremente centro educativo en todos los niveles sin barreras económicas (m. 67).',
        'Prohibir los teléfonos móviles en clase, reforzar la autoridad del profesorado e implantar un plan contra el acoso escolar (m. 69).',
        'Fijar un cupo máximo por aula de alumnos de otras culturas o dominio insuficiente del español con aulas de nivelación, y suprimir menús halal, burka y el programa de lengua marroquí (m. 70-74).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Educación e Identidad (m. 66-74)'
    },
    inmigracion: {
      headline: 'Remigración, fin del arraigo, gravamen a remesas y devolución de MENAS',
      summary:
        'Ejecuta un plan de remigración y devolución de menores con sus familias, anula el arraigo, grava las remesas al extranjero y reserva el IMV a españoles.',
      measures: [
        'Prohibir regularizaciones masivas, anular la vía del arraigo y ejecutar la remigración de irregulares, delincuentes y dependientes crónicos de subsidios (m. 9-16).',
        'Devolver a los menores extranjeros no acompañados (MENAS) con sus familias y países de origen y prohibir el burka y niqab en espacios públicos (m. 19, 71).',
        'Gravar las remesas enviadas al extranjero y suspender toda ayuda o cooperación con países que rechacen repatriaciones (m. 17, 21).',
        'Reservar el Ingreso Mínimo Vital a españoles y suprimir subvenciones a ONG de acogida irregular (m. 22, 43).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Inmigración y Remigración (m. 9-22, 71)'
    },
    seguridad: {
      headline: 'Militarización de Ceuta y Melilla, OCON-Sur, mandos profesionales y profesión de riesgo',
      summary:
        'Militariza las fronteras de Ceuta y Melilla, restablece el OCON-Sur, exige mandos policiales profesionales y reconoce como profesión de riesgo a FCSE, prisiones y FFAA.',
      measures: [
        'Militarizar las fronteras y desplegar permanentemente a las Fuerzas Armadas en Ceuta y Melilla con expulsión inmediata ante asaltos masivos (m. 1, 88).',
        'Reconocer como profesión de riesgo y equiparar salarialmente a Policía Nacional, Guardia Civil, funcionarios de prisiones y militares (m. 84-85, 89).',
        'Designar directores generales de Policía Nacional y Guardia Civil entre profesionales de carrera y restablecer de inmediato el OCON-Sur contra el narcotráfico (m. 82, 86).',
        'Endurecer el Código Penal rebajando la edad penal en delitos violentos graves y ampliando la prisión permanente revisable (m. 80-81).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Seguridad y Defensa (m. 1, 80-91)'
    },
    modelo_estado: {
      headline: 'Igualdad nacional de servicios, Ley de Unidad de Mercado y fin del despilfarro',
      summary:
        'Exige igualdad de Educación, Sanidad, Seguridad y Justicia en toda España, impone la Ley de Unidad de Mercado, ilegaliza al separatismo y protege la Corona y símbolos.',
      measures: [
        'Garantizar la misma calidad e igualdad en Educación, Sanidad, Seguridad y Justicia en toda España, implantando tarjeta sanitaria única y currículo nacional común (m. 25, 60, 66).',
        'Aprobar una Ley de Unidad de Mercado para que una licencia autonómica valga automáticamente en todo el territorio nacional (m. 42).',
        'Auditar las administraciones para recortar todo gasto político autonómico superfluo y organismos duplicados (m. 43).',
        'Ilegalizar los partidos que atenten contra la unidad territorial y agravar las penas por ultrajes a la Bandera, Escudo, Himno y Corona (m. 103-105).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Unidad Nacional e Instituciones (m. 25, 42-43, 103-105)'
    },
    energia_campo: {
      headline: 'Plan Nuclear Nacional, Plan Nacional del Agua y veto al Pacto Verde y Mercosur',
      summary:
        'Suspende el Pacto Verde, Agenda 2030 y las ZBE, recupera el plan nuclear nacional, impulsa la interconexión de cuencas y rechaza el acuerdo UE-Mercosur.',
      measures: [
        'Suspender el Pacto Verde Europeo, la Agenda 2030 y las Zonas de Bajas Emisiones, reduciendo el coste eléctrico para industria y hogares (m. 8, 44).',
        'Recuperar el Plan Nuclear Nacional frenando el calendario de cierre y recuperar la soberanía energética (m. 8).',
        'Aprobar un Plan Nacional del Agua con interconexión de cuencas para abastecer al campo y territorios deficitarios (m. 115).',
        'Rechazar explícitamente el acuerdo UE-Mercosur, exigir cláusulas espejo y preferencia comunitaria y frenar plantas fotovoltaicas descontroladas en suelo agrícola (m. 48, 51, 54).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Energía, Campo y Agua (m. 8, 44, 48-54, 115)'
    },
    exterior_ue: {
      headline: 'Soberanía nacional ante Bruselas, sanciones por Ceuta y recuperación de Gibraltar',
      summary:
        'Defiende la primacía nacional frente a imposiciones de Bruselas y Mercosur, exige firmeza y sanciones ante Marruecos, condiciona ayudas al retorno y reclama Gibraltar.',
      measures: [
        'Enfrentar económica, política y jurídicamente las imposiciones de Bruselas, el Pacto Verde y el acuerdo UE-Mercosur priorizando el interés nacional (m. 48, 92).',
        'Imponer sanciones a Marruecos, militarizar la frontera de Ceuta y Melilla y exigir responsabilidades penales ante cualquier cesión fronteriza (m. 1, 88).',
        'Reclamar la recuperación de la soberanía española sobre Gibraltar y el control de sus aguas frente a narcotráfico y contrabando (m. 93).',
        'Cortar toda ayuda y cooperación exterior con países que no colaboren en la repatriación de inmigrantes en situación ilegal (m. 17).'
      ],
      sourceRef: 'Programa Electoral VOX 29N-2026: Soberanía Exterior y Fronteras (m. 1, 17, 48, 92-93)'
    }
  },

  salf: {
    economia: {
      headline: '0% IRPF hasta 35.000 €, 5.000 € por hijo, déficit cero en 2030 y de 22 a 10 ministerios',
      summary:
        'Exime de IRPF hasta 35.000 € con deducción de 5.000 € por hijo, fija un techo constitucional de deuda y déficit cero en 2030 y recorta ministerios y gasto político.',
      measures: [
        'Fijar 0% de IRPF hasta 35.000 euros anuales (más 5.000 € por hijo para cada progenitor y deflactación obligatoria al IPC) y suprimir Patrimonio, Sucesiones y Donaciones.',
        'Bajar Sociedades al 20% (15% por reinversión y 10% a startups), fijar IVA del 4% en luz y agua, blindar el pago en efectivo y exigir 3/5 del Congreso para subir impuestos.',
        'Implantar un techo constitucional de deuda y gasto público hacia el déficit cero en 2030 (-6.800 M€/año en deuda) junto a la Ley de Devolución del Rescate Bancario (70.000 M€ en 15 años).',
        'Reducir el Gobierno de 22 a 10 ministerios (3 a 1 vicepresidencias), recortar un 60%-70% asesores y eliminar subvenciones a partidos, sindicatos y patronales.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloque III (Fiscalidad y Gasto Público, pp. 12-16)'
    },
    vivienda: {
      headline: 'Rebaja legal del 35% en primera vivienda, cero IBI y desalojo en 48 horas',
      summary:
        'Abarata un 35% la primera vivienda suprimiendo IBI, ITP, AJD e IVA (devuelto en IRPF), grava al 25% a SOCIMIs de más de 100 pisos y desaloja okupas en 48 horas.',
      measures: [
        'Aprobar una rebaja legal del 35% en la primera vivienda eliminando ITP y AJD, devolviendo íntegro el IVA del 4% en IRPF y cediendo suelo estatal y Sareb gratis para 100.000 viviendas.',
        'Eliminar por completo el IBI (-13.400 M€/año), rechazar topes de alquiler y elevar al 25% el Impuesto de Sociedades a las SOCIMIs con más de 100 viviendas.',
        'Ejecutar desalojos exprés de okupas en 48 horas y de inquiokupas en 30 días, con seguro público de impago de 12 meses.',
        'Crear un aval público del 20% para menores de 40 años y licencias en 15 días para vivienda industrializada.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloque I (Vivienda, pp. 5-7)'
    },
    empleo: {
      headline: 'Cuota cero permanente de autónomos, contrato único con mochila y cuña al 29%',
      summary:
        'Suprime de forma permanente la cuota fija de autónomos, baja la cuña fiscal del 41,4% al 29%, crea un contrato único con mochila del 1,53% e introduce IVA de caja.',
      measures: [
        'Instaurar la cuota cero total y para siempre para autónomos (12.000 M€/año), junto al IVA de caja y licencia de apertura automática en 24 horas.',
        'Reducir la cuña fiscal del 41,4% al 29% (+80 €/mes netos en el SMI) e implantar un contrato único (12 a 33 días) con mochila austriaca del 1,53%.',
        'Sufragar las bajas médicas desde la Seguridad Social desde el día 1 (revisión INSS en 72h), aplicar la regla de 1 norma que entra por 2 que salen y suprimir subvenciones a sindicatos y patronales.',
        'Computar a los 640.900 fijos discontinuos inactivos como parados reales e implantar oposiciones a ciegas.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloques III.4 y VIII (pp. 12, 30-32)'
    },
    pensiones: {
      headline: 'Blindaje constitucional al IPC y sistema mixto con cuenta del 2% para menores de 45',
      summary:
        'Blinda en la Constitución el IPC de las pensiones actuales, envía el «sobre naranja» anual e introduce para menores de 45 años una cuenta individual heredable del 2%.',
      measures: [
        'Blindar constitucionalmente la revalorización según el IPC de las pensiones actuales e implantar el envío anual del «sobre naranja» informativo.',
        'Crear para menores de 45 años un sistema mixto con cuenta individual obligatoria y heredable del 2% (comisión máxima del 0,3%) sumada a la mochila austriaca del 1,53%.',
        'Fijar pensión mínima de 1.000 euros en 14 pagas con 35 años cotizados y permitir jubilación activa al 100% y jubilación libre con 40 años cotizados.',
        'Suprimir el complemento parlamentario de 7 años y proteger un Fondo de Reserva soberano de 15.267 M€ fuera del control gubernamental.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloque V (Pensiones, pp. 20-21)'
    },
    regeneracion_justicia: {
      headline: 'Bloqueo de sueldo hasta 2030, fin del TC y 17.621 aforamientos y macrocárcel',
      summary:
        'Deposita el 100% del sueldo público en el Banco de España hasta 2030, suprime el Tribunal Constitucional y 17.621 aforamientos y declara imprescriptible la corrupción.',
      measures: [
        'Bloquear el 100% del sueldo público en el Banco de España hasta junio de 2030 sujeto al cumplimiento íntegro de las 119 medidas electorales.',
        'Declarar imprescriptible la corrupción con triple devolución, premio del 15% al denunciante y macrocárcel sin tercer grado, además de prohibir constitucionalmente las amnistías.',
        'Suprimir el Tribunal Constitucional (pasando sus funciones a una sala del Supremo elegida por jueces), despolitizar el CGPJ, elegir Fiscal General por 3/5 (6 años) y sumar 100 fiscales Anticorrupción.',
        'Eliminar los 17.621 aforamientos, limitar cargos públicos a 15 años, blindar la Acción Popular (Art. 125 CE) e implantar juicios rápidos en 72h (+2.000 jueces y +1.500 fiscales).'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloque VII (Justicia y Corrupción, pp. 25-29)'
    },
    sanidad: {
      headline: 'Topes de 48h médico, 30 días especialista y 60 cirugía con central única',
      summary:
        'Fija plazos máximos legales de 48 horas en Primaria, 30 días en especialista, 60 en cirugía y 15 en salud mental, con central única de compras.',
      measures: [
        'Garantizar por ley plazos máximos de 48 horas en médico de cabecera, 7 días en pruebas prioritarias, 30 días en especialista y 60 días en cirugías (con conciertos gratuitos si se superan).',
        'Fijar un tope de 15 días en salud mental (1 psicólogo por 10.000 habitantes), sumar 10.000 camas y 1.500 UCI e implantar la central única de compras e historia clínica nacional.',
        'Subir el sueldo un 20% a médicos y un 10% al resto de sanitarios (con 30.000 euros por plaza rural) y eliminar el copago farmacéutico a menores de 3 años, pensiones mínimas y crónicos.',
        'Incluir test de paternidad gratuitos al nacer e impedir el turismo sanitario fraudulento.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloque VI (Sanidad, pp. 22-24)'
    },
    educacion: {
      headline: 'Ley educativa de 20 años por 2/3, cheque escolar de 8.293 € y MIR docente',
      summary:
        'Propone una ley estable de 20 años por mayoría de 2/3, cheque escolar de 8.293 euros, MIR docente de 2 años y materias obligatorias de Economía y Constitución.',
      measures: [
        'Pactar por mayoría de 2/3 una ley educativa con vigencia de 20 años garantizando la escolarización en castellano en toda España.',
        'Implantar un cheque escolar de 8.293 euros válido en centros públicos, concertados y privados.',
        'Crear un MIR docente de 2 años y elevar un 10% el sueldo del profesorado.',
        'Impartir Economía y Constitución de forma obligatoria, otorgar beca-salario de 2.000 € en FP e inglés B2 gratuito en Bachillerato.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloque IX (Educación, pp. 33-34)'
    },
    inmigracion: {
      headline: 'Expulsión en 48 horas, derogación regularización 2026 y 5 años para ayudas',
      summary:
        'Impone expulsiones en 48h, deroga la regularización de 2026, bloquea en 72h a países que no repatríen y exige 5 años de cotización para ayudas y 10 para nacionalidad.',
      measures: [
        'Ejecutar expulsiones en 48 horas (100% en 90 días) de irregulares o delincuentes, derogar la regularización de 2026 y exigir 10 años para nacionalidad (con cupos hispanoamericanos).',
        'Aplicar moratoria y bloqueo de visados y comercio en 72 horas a países no colaboradores, además de una tasa del 2% a remesas hacia dichos estados.',
        'Realizar pruebas radiológicas y dentales para verificar la edad de menores y exigir 5 años de residencia y cotización para ayudas públicas o vivienda social.',
        'Prohibir el burka y niqab en espacios públicos, ilegalizar los Hermanos Musulmanes y cortar la financiación extranjera a mezquitas y ONG de acogida irregular.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloque IV (Inmigración y Fronteras, pp. 17-19)'
    },
    seguridad: {
      headline: 'Macrocárcel de 3.000 M€, equiparación policial (+7.500 €) y legítima defensa',
      summary:
        'Construye una macrocárcel de 3.000 M€ sin tercer grado, equipara salarios policiales con los Mossos, triplica unidades especiales y blinda la legítima defensa.',
      measures: [
        'Construir una macrocárcel de máxima seguridad (3.000 M€) sin tercer grado ni permisos; extranjeros condenados cumplen en su país con veto vitalicio de regreso.',
        'Equiparar Policía Nacional y Guardia Civil con los Mossos (+7.500 € y jubilación a los 60 años), triplicar UCO/UDEF/UDYCO (+3.000) y desplegar Armada y Ejército del Aire en el Estrecho.',
        'Crear un registro público y castración química voluntaria para agresores sexuales, e impulsar mili voluntaria (1.600 €/mes netos y 50.000 € exentos de IRPF 10 años).',
        'Ampliar la legítima defensa armada, proteger penalmente a vigilantes de seguridad (jubilación a los 60) e implantar juicios rápidos en 72h.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloque II (Seguridad y Justicia Penal, pp. 8-11)'
    },
    modelo_estado: {
      headline: 'Recorte de 57.000 millones en sobrecoste autonómico y supresión de Senado y diputaciones',
      summary:
        'Suprime Senado, Consejo de Estado, CES y diputaciones, recorta de 22 a 10 ministerios sin abolir formalmente las autonomías y blinda Ceuta, Melilla y Canarias.',
      measures: [
        'Ahorrar 57.000 millones de euros anuales en sobrecoste y duplicidades autonómicas, reduciendo el Gobierno de 22 a 10 ministerios y de 3 a 1 vicepresidencias.',
        'Suprimir el Senado, el Consejo de Estado, el Consejo Económico y Social (CES), las diputaciones provinciales y toda financiación pública a partidos.',
        'Convertir Ceuta y Melilla en zona franca (0% IRPF, Sociedades 10 años y cotizaciones) y aplicar -1.000 euros en IRPF y ZEC al 0% en Canarias.',
        'Centralizar compras públicas e historia clínica sanitaria garantizando la igualdad fiscal y jurídica territorial.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloques III y X (Estructura del Estado, pp. 13-16 y 35-38)'
    },
    energia_campo: {
      headline: 'Veto al Pacto Verde y Mercosur, IVA al 4% eléctrico y recuperación del gas argelino',
      summary:
        'Fija un IVA del 4% en luz y agua, veta el acuerdo UE-Mercosur, el recorte de la PAC y el Pacto Verde, y repara la relación energética con Argelia.',
      measures: [
        'Rebajar al 4% el IVA de la electricidad y el agua y suprimir el impuesto a la producción eléctrica para abaratar el coste energético.',
        'Ejercer el veto en la UE frente al acuerdo UE-Mercosur, el recorte del 20% de la PAC (-877 millones), el Pacto Verde Europeo y la Ley de Restauración de la Naturaleza.',
        'Exigir cláusulas espejo y controles estrictos frente a importaciones agrarias extracomunitarias y derogar trabas de la Agenda 2030 sobre el campo.',
        'Retirar la carta sobre el Sáhara para recuperar la alianza comercial y el suministro de gas de Argelia (38,5%).'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloques III.6 y X (pp. 13, 35-39)'
    },
    exterior_ue: {
      headline: 'Referéndum de renegociación UE, escudo de Ceuta y Melilla y gas argelino',
      summary:
        'Convoca referéndum vinculante de renegociación europea (y salida si se rechaza), veta Mercosur y la ayuda exterior sin retorno, protege Ceuta y Melilla y repara la relación con Argelia.',
      measures: [
        'Convocar un referéndum vinculante para renegociar los tratados con la UE (y someter la salida si se deniega), vetando Mercosur, el Pacto Verde y el recorte de la PAC.',
        'Aplicar bloqueo comercial total a Marruecos ante presiones fronterizas o aduaneras, desplegar +5.000 militares en Ceuta y Melilla y reclamar cosoberanía en Gibraltar.',
        'Retirar la carta sobre el Sáhara Occidental para recuperar la alianza comercial y contratos de gas a largo plazo con Argelia (38,5%).',
        'Suprimir los 4.550 millones de ayuda exterior sin acuerdos de repatriación y fijar cupos preferentes con Hispanoamérica.'
      ],
      sourceRef: 'Contrato Electoral SALF 29N-2026: Bloque X (Geopolítica y Soberanía, pp. 35-39)'
    }
  },

  fe_jons: {
    economia: {
      headline: 'Nacionalización bancaria e INI, Sociedades de Retorno, deflactación y auditoría de deuda',
      summary:
        'Nacionaliza banca bajo modelo de cajas, crea un Instituto de Crédito público y el INI, baja el IRPF con deflactación y ejecuta una auditoría de cuentas y deuda pública.',
      measures: [
        'Nacionalizar la banca como cajas de ahorro, crear un Instituto de Crédito público e impulsar la reindustrialización mediante el INI (2% PIB en I+D y centros de datos autosuficientes) (Secs. 9-10).',
        'Aplicar un Impuesto de Sociedades de Retorno vinculado a inversión y empleo local, deflactar el IRPF bajando tipos a trabajadores e introducir tramos progresivos (Sec. 9).',
        'Revisar progresivamente Sucesiones y Donaciones y regular precios e impuestos de bienes esenciales (Sec. 9.4, 9.8).',
        'Auditar cuentas y deuda pública y suprimir subvenciones partidistas y a organizaciones sectarias (Sec. 18.6-18.7).'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Secciones 9, 10 y 18'
    },
    vivienda: {
      headline: 'INV, tope de alquiler al 25% SMI, veto a fondos y créditos ICO condonados al 4º hijo',
      summary:
        'Crea el Instituto Nacional de Vivienda, topa alquileres al 25% del SMI, prohíbe compras a fondos y extranjeros, y concede créditos ICO ~0% condonados por natalidad.',
      measures: [
        'Crear el Instituto Nacional de Vivienda (INV) y sacar al mercado pisos vacíos bancarios para vivienda familiar en propiedad (Sec. 2).',
        'Fijar un tope legal de alquiler al 25% del SMI y definir gran tenedor desde 5 viviendas (Sec. 2).',
        'Prohibir la adquisición especulativa de vivienda a fondos buitre, SOCIMIs y compradores extranjeros (Sec. 2).',
        'Conceder préstamos ICO públicos a interés próximo al 0% para primera vivienda, condonando capital por cada hijo hasta quedar saldada la deuda al cuarto hijo (Sec. 2).'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Sección 2 (Vivienda)'
    },
    empleo: {
      headline: 'Giro industrial (47%), fin de ETTs, despido improcedente, jornada partida y cuota 0',
      summary:
        'Transforma el modelo productivo hacia el 47% industrial y 8% primario, ilegaliza ETTs, prohíbe despido improcedente, suprime jornada partida y da cuota cero <SMI sectorial.',
      measures: [
        'Reequilibrar la economía en 10-15 años hacia un 8% de sector primario, 47% industria y 53% servicios de alto valor (Sec. 6.1.1).',
        'Derogar las reformas laborales, ilegalizar las ETTs y prohibir el despido improcedente dejando solo despido objetivo (20-33 días) o disciplinario (Sec. 6.4-6.6).',
        'Suprimir la jornada partida y el comercio los sábados desde las 14:00, y estudiar la reducción semanal de jornada por sectores (Sec. 6).',
        'Garantizar cuota cero a autónomos por debajo del SMI de su sector, IVA de caja automático y bonificación del 50% por relevo generacional familiar (Sec. 9.6).'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Secciones 6 y 9.6 (Trabajo y Autónomos)'
    },
    pensiones: {
      headline: 'Jubilación a los 65 años, traslado del MEI a pensiones altas y retiro anticipado',
      summary:
        'Devuelve la jubilación a los 65 años, retira el MEI de las nóminas trasladándolo a pensiones por encima del salario mediano y retira pensiones no contributivas a extranjeros.',
      measures: [
        'Recuperar los 65 años como edad ordinaria de jubilación con jubilación anticipada obligatoria según penosidad sectorial (Sec. 6).',
        'Eliminar el MEI de las nóminas de trabajadores aplicándolo a las pensiones por encima del salario mediano para financiar ayudas juveniles y familiares (Sec. 9.10).',
        'Blindar el sistema público de reparto rechazando toda privatización y estudiando fondos soberanos de respaldo si fuera necesario (Sec. 9.11).',
        'Retirar pensiones no contributivas a extranjeros y sostener el sistema mediante natalidad española y reindustrialización (Anexo I y Sec. 9).'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Secciones 6, 9.10-11 y Anexo I'
    },
    regeneracion_justicia: {
      headline: 'Abolición de la Monarquía borbónica, fin del TC, CGPJ judicial y Lesa Patria',
      summary:
        'Propone abolir la Monarquía y el Tribunal Constitucional, elegir el CGPJ entre jueces, cadena perpetua para delitos de Lesa Patria y suprimir subvenciones partidistas.',
      measures: [
        'Abolir la Monarquía borbónica, superar el régimen partitocrático y sustituir subvenciones a partidos y organismos sectarios por acceso meritocrático (Secs. 13, 18).',
        'Abolir el Tribunal Constitucional y garantizar la elección directa del CGPJ por los propios jueces (Sec. 17).',
        'Instaurar la cadena perpetua no revisable para delitos de Lesa Patria (corrupción grave, latrocinio y separatismo) con redención penal laboral 2:1 (Sec. 17).',
        'Ejecutar una auditoría integral de cuentas y deuda pública y descentralizar administrativamente el traslado de ministerios (Sec. 13, 18.7).'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Secciones 13, 17 y 18'
    },
    sanidad: {
      headline: 'Servicio Nacional de Salud único, cobertura dental y oftalmológica y salida de la OMS',
      summary:
        'Centraliza la sanidad pública sin gestión privada ni lucro farmacéutico, incorpora tratamientos bucodentales y oftalmológicos en el SNS y abandona la OMS.',
      measures: [
        'Centralizar los 17 servicios regionales en un único Servicio Nacional de Salud 100% público sin concesiones privadas (Sec. 20).',
        'Incluir de forma universal los tratamientos bucodentales y oftalmológicos dentro de la cartera pública del SNS (Sec. 20.8).',
        'Garantizar el acceso sanitario en el medio rural y combatir el oligopolio farmacéutico privado.',
        'Retirar a España de la Organización Mundial de la Salud (OMS) defendiendo la soberanía sanitaria (Sec. 20).'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Sección 20 (Sanidad)'
    },
    educacion: {
      headline: 'Fin de Bolonia y máster docente, Universidades Laborales y policía en colegios',
      summary:
        'Deroga el Plan Bolonia y el máster habilitante del profesorado, recupera Universidades Laborales, introduce policía en escuelas y excluye contenidos LGTBI/feministas.',
      measures: [
        'Derogar el Plan Bolonia reformulando la universidad e implantar acceso gratuito por mérito hasta estudios superiores (Sec. 19).',
        'Suprimir el máster habilitante obligatorio para docentes y recuperar la red de Universidades Laborales vinculadas a la industria (Sec. 19).',
        'Establecer presencia policial en centros escolares, suprimir contenidos ideológicos LGTBI y feministas y garantizar enseñanza en español (Sec. 19).',
        'Recuperar la competencia estatal exclusiva educativa con currículo único nacional.'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Sección 19 (Educación)'
    },
    inmigracion: {
      headline: 'Remigración en 3 fases, revisión 35-50 años de nacionalidades y tasa del 50% a remesas',
      summary:
        'Ejecuta una remigración en 3 fases hacia el criterio de ius sanguinis, revisa nacionalidades de los últimos 35-50 años e impone tasa del 50% y tope del 1,5% a remesas.',
      measures: [
        'Ejecutar un Plan Nacional de Remigración en 3 fases expulsando a irregulares y extranjeros condenados o inactivos (Anexo I).',
        'Revisar las concesiones de nacionalidad de los últimos 35-50 años implantando el criterio único jurídico del ius sanguinis (Anexo I).',
        'Aplicar una tasa del 50% y tope del 1,5% del PIB/flujos a remesas exteriores y retirar toda pensión o ayuda no contributiva a extranjeros (Anexo I).',
        'Militarizar las fronteras nacionales y rechazar repartos de migrantes impuestos desde Bruselas.'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Anexo I (Remigración y Extranjería)'
    },
    seguridad: {
      headline: 'Servicio militar obligatorio de 18 meses, Ley de Fugas, Nube Soberana y cadena perpetua',
      summary:
        'Reintroduce la mili obligatoria de 18 meses, aplica Ley de Fugas a narcolanchas que no se detengan, crea una Nube Soberana y fija cadena perpetua con trabajo 2:1.',
      measures: [
        'Reintroducir el Servicio Militar obligatorio de 18 meses entre los 18 y 22 años y militarizar las fronteras nacionales (Sec. 16.6-7).',
        'Aplicar la Ley de Fugas a embarcaciones que huyan en persecución contra narcotráfico y contrabando y proteger Ceuta, Melilla y Canarias (Sec. 14).',
        'Construir una Nube Soberana estatal para blindar datos de ciudadanos, empresas e infraestructuras críticas (Sec. 15).',
        'Implantar cadena perpetua no revisable para delitos gravísimos y redención de condena por trabajo penal en proporción 2:1 (Sec. 17).'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Secciones 14-17 (Defensa, Seguridad y Datos)'
    },
    modelo_estado: {
      headline: 'Abolición de la Monarquía y de las 17 autonomías hacia Estado nacional unitario',
      summary:
        'Suprime la Monarquía borbónica y las 17 comunidades autónomas por un Estado nacional unitario descentralizado administrativamente, sin potestad legislativa regional.',
      measures: [
        'Abolir las 17 comunidades autónomas y sus parlamentos sustituyéndolas por administración descentralizada sin potestad legislativa política (Sec. 13).',
        'Abolir la Monarquía borbónica e ilegalizar de inmediato partidos y organizaciones separatistas (Sec. 13, 17).',
        'Descentralizar la sede de ministerios por provincias para vertebrar el territorio dentro de la unidad política nacional (Sec. 13).',
        'Fortalecer el municipio y la provincia suprimiendo duplicidades autonómicas.'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Sección 13 (Modelo Territorial e Institucional)'
    },
    energia_campo: {
      headline: 'Nuclear con reactores SMR, autoconsumo 1:1, tasa 25% macrorenovables y Banco de Semillas',
      summary:
        'Combina energía nuclear y minirreactores SMR con autoconsumo 1:1 (<15 kW), grava con el 25% macroinstalaciones en suelo rural y crea un Banco Nacional de Semillas.',
      measures: [
        'Apostar por la energía nuclear, incluyendo minirreactores SMR, bajo control nacional para abaratar la electricidad industrial (Sec. 11).',
        'Implantar balance neto 1:1 automático en autoconsumo (<15 kW) con mero certificado técnico y gravar al 25% las macroplantas en suelo rural (Sec. 11).',
        'Crear un Banco Nacional de Semillas autóctonas obligatorio y recuperar tierras comunales con precios agrarios justos (Sec. 12).',
        'Rechazar restricciones climáticas de Bruselas que destruyen el sector primario.'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Secciones 11 y 12 (Energía y Sector Primario)'
    },
    exterior_ue: {
      headline: 'Salida del Euro, OTAN, FMI, ONU y UE, Schengen y repatriación del oro',
      summary:
        'Exige abandonar el Euro, OTAN, FMI, ONU y OMS, salir de forma progresiva de la UE y Schengen, repatriar reservas de oro y construir la comunidad de la Hispanidad.',
      measures: [
        'Promover la salida inmediata del Euro, OTAN, FMI, ONU y OMS, junto a la salida progresiva de la Unión Europea y del espacio Schengen (Secs. 3-5, 16, 20).',
        'Repatriar y blindar en territorio nacional todas las reservas de oro y metales preciosos y desmantelar bases militares extranjeras (Secs. 4-5, 16).',
        'Forjar una alianza soberana política, económica y cultural preferente con las naciones de Hispanoamérica.',
        'Reivindicar la soberanía sobre Gibraltar y reforzar el despliegue militar en Ceuta, Melilla y Canarias (Sec. 14).'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Secciones 3-5, 14 y 16 (Soberanía Exterior)'
    }
  },

  pacma: {
    economia: {
      headline: 'Casilla 0,7% IRPF para protección animal, IVA veterinario al 4% y gasto sostenible',
      summary:
        'Incorpora la protección animal y los santuarios a la casilla del 0,7% del IRPF, baja al 4% el IVA veterinario, suprime ayudas taurinas y orienta el gasto público a sostenibilidad.',
      measures: [
        'Suprimir el 100% de las subvenciones públicas a la tauromaquia, caza y ganadería intensiva industrial.',
        'Incorporar la defensa animal y santuarios de animales legalmente reconocidos dentro de la casilla del 0,7% del IRPF (Sec. 1.1.12-13).',
        'Reducir el IVA de los servicios veterinarios del 21% al tipo superreducido del 4% y fijar tasas ambientales sobre industrias contaminantes.',
        'Evaluar la eficiencia del gasto público reorientando ayudas hacia economía circular y proteínas vegetales sin recortar servicios sociales.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026 (Caps. 1.1 y 3.4: Economía y Casilla 0,7%)'
    },
    vivienda: {
      headline: 'Vivienda asequible, admisión en casas de acogida y no discriminación con animales',
      summary:
        'Defiende topar alquileres y frenar la turistificación, prohíbe cláusulas discriminatorias hacia familias con animales y garantiza admisión de animales en casas de acogida.',
      measures: [
        'Ampliar el parque público de vivienda en alquiler social y regular precios frente a la especulación y masificación turística.',
        'Prohibir por ley la discriminación en contratos de alquiler hacia familias que convivan con animales de compañía.',
        'Garantizar la admisión de animales de compañía en casas de acogida y pisos tutelados de víctimas de violencia machista y desahucios (Sec. 3.10.1).',
        'Asegurar alternativas habitacionales dignas y refugios adecuados para familias vulnerables.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026 (Vivienda y Cap. 3.10.1)'
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
      headline: 'Violencia vicaria animal, juzgados ecológicos, reforma electoral y Ley de Paridad',
      summary:
        'Reconoce legalmente la violencia vicaria sobre animales, crea fiscalías ecológicas, reforma una ley electoral desigual y cuestiona el tope del 50% femenino de listas cremallera.',
      measures: [
        'Reconocer legalmente la violencia vicaria ejercida sobre los animales y dotar de recursos a equipos especializados en violencia de género (Sec. 3.10.1).',
        'Crear juzgados y fiscalías especializados con medios reales contra el maltrato animal y el delito ecológico (#MaltratadoresALaCárcel).',
        'Reformar la LOREG eliminando barreras que discriminan candidaturas estatales sin concentración provincial y cuestionar que las listas cremallera reduzcan al 50% candidaturas mayoritariamente femeninas (p. 64).',
        'Suprimir privilegios institucionales y asegurar transparencia total de subvenciones públicas.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026 (Caps. 1, 3.10 y p. 64: Justicia y LOREG)'
    },
    sanidad: {
      headline: 'One Health, exclusión de mascotas en RD 666/2023 (PRESVET) y salud mental',
      summary:
        'Aplica el enfoque One Health, modifica el RD 666/2023 excluyendo a animales de compañía de notificaciones PRESVET, blinda el SNS y refuerza psicología clínica.',
      measures: [
        'Modificar el Real Decreto 666/2023 para excluir a los animales de compañía de la obligación de notificación en el sistema PRESVET, coherente con la normativa europea (Cap. 1.8).',
        'Blindar la sanidad 100% pública sin externalizaciones privadas y reducir listas de espera.',
        'Adoptar el enfoque One Health integrando salud humana, sanidad animal y prevención ambiental.',
        'Ampliar plantillas de psicología clínica y salud mental gratuita y fomentar investigación sin experimentación animal.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026 (Cap. 1.8 RD 666/2023 y One Health)'
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
      headline: '«Test PYME», Sociedades al 5% en reinversión, I+D al 3% y control AIReF',
      summary:
        'Propone evaluar cada programa público por eficacia y coste, rebajar Sociedades al 5% por reinversión pyme, alcanzar el 3% del PIB en I+D y contener la deuda pública.',
      measures: [
        'Someter todo programa de gasto público a auditorías de impacto y encargar a la AIReF la evaluación ex post de grandes obras.',
        'Implantar un «Test PYME» preceptivo en toda nueva norma, fijar Sociedades al 5% en beneficios reinvertidos en pymes y deducir subidas salariales por encima del IPC.',
        'Alcanzar una inversión en I+D del 2% del PIB en 2027 y del 3% en 2030 y reformar la Ley de Segunda Oportunidad.',
        'Contener el déficit y la deuda pública combinando control digital del gasto y simplificación fiscal sostenible.'
      ],
      sourceRef: 'La España que merecemos — Democracia para el Siglo 21 (29N-2026)'
    },
    vivienda: {
      headline: 'Pacto de Reconciliación del Alquiler, 0 impuestos <35 años e IVA 4% / ITP 2%',
      summary:
        'Combina el Pacto de Reconciliación del Alquiler (SERPAVI) con escudo estatal antiimpagos, 0 impuestos <35 años, rebaja general a ITP 2% / AJD 0% / IVA 4% y 10.000 M€ UE.',
      measures: [
        'Aplicar el Pacto de Reconciliación del Alquiler (SERPAVI) con limitación temporal y excepcional de rentas acompañada de escudo estatal frente a impagos e inquiokupación.',
        'Suprimir IVA, ITP y AJD a menores de 35 años (hasta 400.000 €) y rebajar para todos el ITP al 2%, AJD al 0% y el IVA al 4% en vivienda habitual y obra nueva asequible.',
        'Reorientar 10.000 millones de euros de fondos europeos hacia un Fondo Soberano de Vivienda y aplicar un recargo autonómico de hasta el 25% a no residentes.',
        'Tipificar como estafa la inquiocupación premeditada y cruzar digitalmente pisos de temporada con el padrón municipal.'
      ],
      sourceRef: 'La España que merecemos: Vivienda y Emancipación — Democracia para el Siglo 21 (29N-2026)'
    },
    empleo: {
      headline: 'IVA franquiciado <85.000 €, plus salarial al 5%, SMI 2/3 y 200h menos de burocracia',
      summary:
        'Exime de IVA a autónomos <85.000 €, bonifica pluses salariales al 5%, fija senda del SMI a 2/3 del salario mediano, recorta >200 horas de trámites y protege a micropymes.',
      measures: [
        'Implantar el IVA franquiciado europeo para autónomos que facturen menos de 85.000 € al año y ahorrar >200 horas anuales con la «Autopista Digital Española».',
        'Aplicar un tipo único del 5% en IRPF a pluses salariales de hasta 5.000 €/año y fijar una senda plurianual para que el SMI alcance 2/3 del salario mediano.',
        'Desplegar un Plan Estatal de Dinamización de la IA para elevar salarios, prohibir contratos públicos precarios y dar transición de 2 años a micropymes.',
        'Facilitar el relevo generacional de negocios rentables próximos a la jubilación del titular.'
      ],
      sourceRef: 'La España que merecemos: Revolución Pyme y Empleo — Democracia para el Siglo 21 (29N-2026)'
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
      sourceRef: 'La España que merecemos: Asamblea por las Pensiones — Democracia para el Siglo 21 (29N-2026)'
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
      sourceRef: 'La España que merecemos: España Limpia — Democracia para el Siglo 21 (29N-2026)'
    },
    sanidad: {
      headline: 'Guardias máximas de 12 horas, Grupo A1 en Enfermería y salud digital única',
      summary:
        'Limita las guardias médicas a 12 horas, reconoce el Grupo A1 a Enfermería, integra la clínica veterinaria en Sanidad (IVA fármacos 4%), despolitiza gerencias y reduce esperas.',
      measures: [
        'Limitar las guardias médicas a 12 horas y mejorar retribuciones y condiciones para frenar la fuga de profesionales en Primaria y hospitales.',
        'Reconocer la categoría del Grupo A1 y especialidades para Enfermería e integrar la veterinaria en Sanidad (One Health, con IVA al 4% en medicamentos veterinarios).',
        'Evaluar con indicadores públicos las listas de espera, despolitizar gerencias por concurso de méritos e implantar historia clínica interoperable.',
        'Centralizar compras sanitarias aprovechando economías de escala.'
      ],
      sourceRef: 'La España que merecemos: Sanidad Pública — Democracia para el Siglo 21 (29N-2026)'
    },
    educacion: {
      headline: 'Objetivo PISA Top 10 europeo, tecnología curricular e índice socioeducativo',
      summary:
        'Lanza el Plan Estatal «Objetivo PISA: España al Top 10 Europeo» en 8 años (modelo Estonia), prioriza materias instrumentales y refuerza autonomías rezagadas.',
      measures: [
        'Implantar el Plan Estatal «Objetivo PISA: España al Top 10 Europeo» en 8 años ampliando horas instrumentales con ciencia cognitiva.',
        'Incorporar la tecnología como pilar curricular fundamental, climatizar centros y suprimir barracones.',
        'Evaluar resultados educativos creando un Índice Socioeducativo con refuerzo estatal para autonomías rezagadas.',
        'Impulsar la FP tecnológica, dominio del inglés y lenguas propias y becas de renta y esfuerzo.'
      ],
      sourceRef: 'La España que merecemos: La educación en el centro — Democracia para el Siglo 21 (29N-2026)'
    },
    inmigracion: {
      headline: '«Política Migratoria con Cabeza»: visado tipo Chancenkarte y homologación ágil',
      summary:
        'Crea un visado de búsqueda de empleo de 6 meses (prorrogable a 9) inspirado en la Chancenkarte alemana, agiliza homologación digital de títulos y exige legalidad.',
      measures: [
        'Crear un visado de búsqueda de empleo de 6 meses (prorrogable a 9) inspirado en la Chancenkarte alemana: baremo por puntos, cupo según vacantes y resolución online en 2 meses.',
        'Agilizar digitalmente la homologación transparente de títulos extranjeros e impulsar programas de formación en origen.',
        'Garantizar el cumplimiento estricto de la ley frente a entradas irregulares y retornos verificados en coordinación con Frontex y la UE.',
        'Vincular la residencia estable a formación laboral e integración cívica constitucional.'
      ],
      sourceRef: 'La España que merecemos: Política Migratoria con Cabeza — Democracia para el Siglo 21 (29N-2026)'
    },
    seguridad: {
      headline: 'Agencia de Ciberseguridad (ANCI), fin del cese militar a los 45 y respaldo policial',
      summary:
        'Crea la ANCI segregando la ciberseguridad civil del CNI, elimina la salida forzosa de tropa a los 45 años con FP homologada y respalda a las fuerzas policiales.',
      measures: [
        'Crear la Agencia Nacional de Ciberseguridad Independiente (ANCI) unificando INCIBE, CCN y CNPIC y separando ciberseguridad civil del CNI.',
        'Eliminar de forma progresiva la salida forzosa de tropa y marinería a los 45 años con carrera estable hasta la reserva y homologación de FP militar.',
        'Proveer ciberasesores gratuitos a micropymes y dotar de medios a Policía Nacional y Guardia Civil frente a crimen organizado y multirreincidencia.',
        'Agilizar la respuesta judicial ante inquiocupación y fraudes.'
      ],
      sourceRef: 'La España que merecemos: Ciberseguridad, Defensa y Seguridad — Democracia para el Siglo 21 (29N-2026)'
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
      sourceRef: 'La España que merecemos: Estado Inteligente y Territorio — Democracia para el Siglo 21 (29N-2026)'
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
      sourceRef: 'La España que merecemos: Agua, Campo y Clima — Democracia para el Siglo 21 (29N-2026)'
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
      sourceRef: 'La España que merecemos: Construir la UE del Siglo 21 — Democracia para el Siglo 21 (29N-2026)'
    }
  },

  iustitia: {
    economia: {
      headline: 'Máximo 7 ministerios, -75% asesores, fin de 2.000 chiringuitos y freno a la deuda',
      summary:
        'Limita el Gobierno a 7 ministerios, recorta un 75% asesores y un 20% sueldos políticos, suprime más de 2.000 chiringuitos y recorta un 80% en subvenciones para frenar la deuda pública.',
      measures: [
        'Reducir el Consejo de Ministros a un máximo de 7 ministerios, recortar un 75% los asesores y bajar un 20% los salarios políticos.',
        'Suprimir más de 2.000 chiringuitos (>6.000 M€), eliminar un 40% de los más de 600 entes públicos y suprimir las diputaciones provinciales.',
        'Recortar un 80% las subvenciones públicas (eliminando el 100% a partidos, sindicatos, patronales y ONG) y frenar la deuda pública y el déficit.',
        'Rebajar impuestos confiscatorios, auditar el gasto público y rechazar el euro digital.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Punto 6 (Economía y Gasto Público, pp. 15-18)'
    },
    vivienda: {
      headline: 'Supresión de IVA en primera vivienda, fin de topes de alquiler y desalojo <24h',
      summary:
        'Suprime el IVA en primera vivienda habitual, elimina controles de precios en el alquiler y ejecuta desalojos exprés de okupas en menos de 24 horas.',
      measures: [
        'Suprimir el IVA en la adquisición de la primera vivienda habitual y reducir cargas fiscales inmobiliarias.',
        'Eliminar los topes y controles coercitivos al alquiler para ampliar la oferta residencial.',
        'Garantizar el desalojo rápido de viviendas ocupadas ilegalmente en menos de 24 horas.',
        'Blindar la seguridad jurídica de la propiedad privada frente a la ocupación.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Punto 6.8 (Vivienda, p. 18)'
    },
    empleo: {
      headline: 'Cuota 0 a autónomos 4 años, exención sin ingresos reales y fin del sistema de módulos',
      summary:
        'Fija 4 años de cuota cero a autónomos, exime del pago en meses sin ingresos reales, suprime los módulos y acaba con subvenciones a sindicatos y patronales.',
      measures: [
        'Establecer cuota cero para trabajadores autónomos durante los primeros 4 años y suprimir la cuota en los meses sin ingresos reales.',
        'Eliminar el sistema de tributación por módulos y reducir trabas administrativas a pymes y autónomos.',
        'Rebajar las cotizaciones sociales sobre el trabajo para mejorar el salario neto disponible.',
        'Suprimir el 100% de las subvenciones públicas a sindicatos, patronales y organizaciones políticas.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Punto 6.6 (Trabajo y Autónomos, p. 17)'
    },
    pensiones: {
      headline: 'Derogación del factor de sostenibilidad, modelo mixto y fin de pensiones vitalicias',
      summary:
        'Suprime el factor de sostenibilidad, inicia una transición hacia un modelo mixto de capitalización individual y elimina pensiones vitalicias de cargos públicos.',
      measures: [
        'Derogar el factor de sostenibilidad y reformas penalizadoras que recortan las pensiones futuras.',
        'Transitar de forma ordenada hacia un sistema mixto que combine reparto público con cuentas de capitalización individual.',
        'Suprimir por completo las pensiones vitalicias e indemnizaciones especiales de exministros y cargos públicos.',
        'Auditar las cuentas de la Seguridad Social y proteger el poder adquisitivo de los mayores.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Punto 6.5 (Pensiones, p. 17)'
    },
    regeneracion_justicia: {
      headline: 'Blindaje de la Acción Popular (Art. 125 CE), distritos uninominales y elección directa',
      summary:
        'Implanta distritos uninominales mayoritarios y elección directa del Presidente, blinda la Acción Popular, introduce Tribunales de Instancia y sortea Juntas Electorales.',
      measures: [
        'Sustituir el sistema proporcional por distritos uninominales mayoritarios en listas abiertas (art. 68 CE), elección directa del Presidente del Gobierno, límite de 2 mandatos y referéndums vinculantes.',
        'Reformar el art. 125 CE para blindar la Acción Popular ciudadana, crear Juntas Electorales por sorteo ciudadano (nuevo art. 81 bis CE) y suprimir el 100% de subvenciones a partidos.',
        'Elegir los 10 miembros del CGPJ directamente entre jueces (quien nombra al Fiscal General por 9 años) y someter a referéndum un TC de juristas con >25 años de ejercicio y sin militancia en 30 años.',
        'Sustituir los más de 3.600 juzgados por Tribunales de Instancia bajo un Ministerio del Sistema Jurídico y eliminar aforamientos.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Puntos 2-4 y 11 (Regeneración y Justicia, pp. 6-12 y 23)'
    },
    sanidad: {
      headline: 'Integración de terapias naturales en el SNS, IVA 0% y fin del monopolio farmacéutico',
      summary:
        'Incorpora legalmente las terapias naturales en el SNS con IVA del 0% a terapeutas, acaba con el monopolio farmacéutico y garantiza consentimiento informado y libertad terapéutica.',
      measures: [
        'Incorporar legalmente las terapias naturales y medicinas complementarias en la cartera del Sistema Nacional de Salud.',
        'Aplicar un IVA del 0% a los terapeutas naturales y romper el monopolio corporativo farmacéutico.',
        'Garantizar la libertad terapéutica, el consentimiento informado estricto y los derechos clínicos del paciente.',
        'Rechazar la cesión de soberanía sanitaria nacional a tratados de la OMS sin refrendo ciudadano.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Punto 10 (Sanidad y Libertad Terapéutica, p. 22)'
    },
    educacion: {
      headline: 'Aulas libres de Agenda 2030 e ideología, autoridad docente y castellano garantizado',
      summary:
        'Retira la Agenda 2030 y contenidos ideológicos del currículo, refuerza la autoridad del profesorado y garantiza la elección parental y el castellano.',
      measures: [
        'Eliminar los contenidos de la Agenda 2030 y adoctrinamiento político o ideológico de las aulas.',
        'Garantizar el derecho preferente de las familias a elegir la educación moral y escolar de sus hijos.',
        'Asegurar la enseñanza en castellano y la igualdad de exigencia académica en todo el territorio.',
        'Reforzar la autoridad y protección jurídica del profesorado.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Punto 9 (Educación, p. 21)'
    },
    inmigracion: {
      headline: 'Cierre de fronteras con FFAA, Armada en Canarias y deportaciones masivas',
      summary:
        'Despliega a las Fuerzas Armadas en Ceuta y Melilla y la Armada en Canarias, ejecuta deportaciones masivas de irregulares y rechaza repartos europeos obligatorios.',
      measures: [
        'Reforzar las vallas de Ceuta y Melilla con las Fuerzas Armadas y destinar la flota de la Armada en Ferrol a patrullar Canarias.',
        'Ejecutar deportaciones masivas de inmigrantes irregulares («fin de los papeles para todos») y expulsar de inmediato a extranjeros delincuentes.',
        'Rechazar repartos obligatorios de inmigrantes impuestos por la Unión Europea sin consentimiento nacional.',
        'Reformar la Ley de Extranjería vinculando residencia y acceso a prestaciones al cumplimiento estricto de la ley.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Punto 7 (Inmigración y Fronteras, p. 19)'
    },
    seguridad: {
      headline: 'Desmilitarización de la Guardia Civil en referéndum, equiparación policial y libertades',
      summary:
        'Saca a la Guardia Civil del Código Penal Militar con referéndum interno sobre su carácter civil, reorganiza Policía y GC, equipara sueldos y veta la vigilancia biométrica.',
      measures: [
        'Despenalizar a la Guardia Civil sacándola del Código Penal Militar y convocar un referéndum interno sobre su desmilitarización en policía civil.',
        'Reorganizar territorialmente a Policía Nacional y Guardia Civil y garantizar por ley una equiparación salarial nunca inferior a policías autonómicas o locales.',
        'Prohibir el euro digital, el reconocimiento facial, la identificación biométrica obligatoria y las Zonas de Bajas Emisiones.',
        'Dotar de medios y tutela judicial efectiva a los cuerpos policiales garantizando los derechos civiles.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Puntos 8 y 15 (Seguridad y Libertades Civiles, pp. 20 y 26)'
    },
    modelo_estado: {
      headline: 'Democracia directa, distritos uninominales, fin de diputaciones y -40% entes',
      summary:
        'Supera la partitocracia del 78 mediante distritos uninominales, elección directa del Presidente, límite de 2 mandatos, referéndums vinculantes y eliminación de diputaciones.',
      measures: [
        'Instaurar distritos uninominales mayoritarios, elección directa del Presidente del Gobierno y límite estricto de 2 mandatos.',
        'Someter las reformas constitucionales e institucionales clave a referéndum ciudadano vinculante.',
        'Suprimir las diputaciones provinciales, reducir en un 40% los entes públicos y cerrar más de 2.000 chiringuitos.',
        'Garantizar la igualdad legal de todos los españoles frente a privilegios territoriales y aforamientos.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Puntos 2-6 (Reforma del Estado, pp. 6-18)'
    },
    energia_campo: {
      headline: 'Nuclear y tierras raras, salida del Pacto Verde y derogación de PAC y Bienestar Animal',
      summary:
        'Apuesta por nuclear, gas y nacionalización de tierras raras, sale del Pacto Verde y deroga PAC, Restauración de la Naturaleza, Bienestar Animal y cuaderno digital.',
      measures: [
        'Apostar por la energía nuclear, el gas y nacionalizar tierras raras suprimiendo subvenciones a macroinstalaciones renovables.',
        'Salir del Pacto Verde Europeo y derogar de inmediato la PAC y la Ley de Restauración de la Naturaleza.',
        'Derogar la Ley de Bienestar Animal, Cadena Alimentaria, Quemas y el cuaderno digital obligatorio.',
        'Frenar prohibiciones de movilidad urbana (ZBE) y defender la soberanía alimentaria y energética nacional.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Puntos 12-15 (Energía, Campo y Movilidad, pp. 24-26)'
    },
    exterior_ue: {
      headline: 'Dos referéndums vinculantes sobre permanencia o salida de la UE y de la OTAN',
      summary:
        'Somete a sendos referéndums vinculantes la permanencia o salida de España de la Unión Europea y de la OTAN, y rechaza la cesión de soberanía ante Bruselas y la OMS.',
      measures: [
        'Convocar dos referéndums ciudadanos vinculantes sobre la permanencia o salida de España de la Unión Europea y de la OTAN.',
        'Blindar la primacía de la Constitución española sobre directivas y imposiciones burocráticas de Bruselas.',
        'Rechazar tratados globales sanitarios (OMS), climáticos y el euro digital que recorten derechos sin refrendo nacional.',
        'Defender la soberanía comercial, monetaria, fronteriza y energética frente a organismos supranacionales no electos.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Puntos 5 y 15 (Soberanía, UE y OTAN, pp. 13-14 y 26)'
    }
  },

  fo: {
    economia: {
      headline: 'Reindustrialización estatal, fiscalidad de clase, proteccionismo y fin de la usura',
      summary:
        'Nacionaliza sectores estratégicos, centraliza Patrimonio y Sucesiones para grandes fortunas, suprime gasto público improductivo y alivia la deuda de familias insolventes.',
      measures: [
        'Ejecutar un Plan de Reindustrialización y nacionalizar sectores estratégicos como energía, banca y transporte junto a aranceles frente a deslocalizaciones (Cap. 4).',
        'Bajar el IRPF a rentas bajas ampliando tramos altos, fijar IVA superreducido en bienes básicos y elevar Sociedades a grandes empresas (Cap. 6).',
        'Centralizar Patrimonio y Sucesiones eliminando bonificaciones a ricos mientras se suprime Sucesiones a rentas bajas, y expropiar o multar empresas por fraude fiscal (Cap. 6).',
        'Combatir la usura facilitando el pago de deuda a insolventes y suprimir subvenciones y gasto público improductivo en ONG, patronales y sindicatos del régimen (Cap. 6.7).'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulos 4 y 6 (Economía y Fiscalidad, pp. 12-19)'
    },
    vivienda: {
      headline: 'Parques públicos juveniles, topes al alquiler, dación en pago y desalojo de mafias',
      summary:
        'Construye parques públicos juveniles y limita alquileres, garantiza dación en pago a vulnerables y ejecuta desalojo rápido de pisos particulares, inquiokupas y narcopisos.',
      measures: [
        'Crear parques públicos de vivienda para jóvenes, limitar los precios del alquiler frente a fondos buitre y priorizar a los autóctonos en vivienda pública (Cap. 15).',
        'Paralizar desahucios de familias vulnerables garantizando la dación en pago y la ley de segunda oportunidad (Cap. 15).',
        'Ejecutar el desalojo rápido de ocupaciones en viviendas particulares, inquiokupas y narcopisos que degradan barrios obreros (Cap. 15).',
        'Conceder crédito público hipotecario sin usura para primera vivienda de familias trabajadoras.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulo 15 (Vivienda)'
    },
    empleo: {
      headline: 'Prohibición de ETTs, derogación RD 17/1977 de huelga, cuota cero <SMI y salarios',
      summary:
        'Liga salarios al coste real de la vida, prohíbe las ETTs, exige representación desde 10 trabajadores, deroga el decreto de huelga de 1977 y fija cuota cero <SMI a autónomos.',
      measures: [
        'Prohibir las ETTs, restringir temporales y fijos discontinuos, aumentar indemnizaciones por despido improcedente e indexar salarios al coste de la vida (Cap. 2).',
        'Implantar representación obligatoria desde 10 trabajadores, asegurar la primacía del convenio sectorial y derogar el RD 17/1977 para la huelga en sectores estratégicos (Cap. 2).',
        'Fijar cuota cero a autónomos por debajo del SMI con bonificación del 100% en bajas médicas (Cap. 2).',
        'Perseguir penalmente a empresas que contraten mano de obra irregular para devaluar salarios nacionales (Cap. 2).'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulo 2 (Derechos Laborales, pp. 7-9)'
    },
    pensiones: {
      headline: 'Retorno a los 65 años, cálculo por mejores años cotizados y subida de mínimas',
      summary:
        'Revierte el retraso de la edad de jubilación, calcula la pensión sobre la media de los mejores años cotizados y eleva pensiones mínimas y no contributivas.',
      measures: [
        'Revertir el retraso de la edad de jubilación recuperando los 65 años y jubilación anticipada en trabajos penosos (Cap. 16).',
        'Calcular la cuantía de la pensión con la media de los mejores años cotizados y elevar las pensiones mínimas y no contributivas (Cap. 16).',
        'Garantizar pensiones públicas dignas también a trabajadores autónomos y sectores físicos.',
        'Sostener la Seguridad Social mediante reindustrialización, empleo formal estable y natalidad.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulo 16 (Pensiones)'
    },
    regeneracion_justicia: {
      headline: 'Fin de subvenciones partidistas, fuera Igualdad y Trans, anti-censura y control judicial',
      summary:
        'Suprime el Ministerio de Igualdad, deroga la Ley Trans y cupos, combate la censura de plataformas, prohíbe indultos por corrupción y despolitiza el poder judicial.',
      measures: [
        'Suprimir el Ministerio de Igualdad, derogar la Ley Trans y las cuotas y prohibir prostitución y vientres de alquiler (Cap. 10).',
        'Extender las penas por corrupción a partidos políticos, prohibir indultos en delitos de corrupción y eliminar puertas giratorias y subvenciones a partidos (Cap. 13, 19).',
        'Asegurar la independencia judicial sin elección gubernamental e instaurar control estatal frente a la censura arbitraria en plataformas digitales (Cap. 13, 19).',
        'Implantar mecanismos de revocación para cargos públicos que incumplan su mandato.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulos 10, 13 y 19'
    },
    sanidad: {
      headline: 'SNS centralizado, dental/fisio/óptica gratis, desintoxicación y farmacéutica estatal',
      summary:
        'Centraliza la sanidad sin concesiones privadas, integra gratis odontología, fisioterapia, oftalmología y centros de desintoxicación e impulsa una farmacéutica estatal.',
      measures: [
        'Centralizar el SNS eliminando desigualdades autonómicas y expulsar la gestión privada de los hospitales públicos (Cap. 14).',
        'Incluir de forma gratuita atención bucodental, fisioterapia y oftalmología en la sanidad pública e integrar centros de desintoxicación en el SNS (Cap. 9, 14).',
        'Crear una industria farmacéutica pública nacional para producir medicamentos estratégicos (Cap. 14).',
        'Reforzar plantillas fijas de Atención Primaria en barrios obreros y medio rural.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulos 9 y 14 (Sanidad Pública)'
    },
    educacion: {
      headline: 'Comedor gratis, freno digital (<16), expulsión de privadas de FP y fin del islam',
      summary:
        'Implanta comedor escolar gratuito, frena la digitalización (<16 años), expulsa empresas de FP y universidad, garantiza castellano o cooficiales y saca islam y teoría queer del aula.',
      measures: [
        'Garantizar comedor escolar gratuito, frenar la digitalización escolar en menores de 16 años y suprimir toda subvención a la enseñanza privada (Cap. 7).',
        'Expulsar empresas privadas de la universidad y la FP y hacer obligatoriamente remuneradas todas las prácticas formativas (Cap. 7).',
        'Garantizar el derecho a estudiar en castellano o en lenguas cooficiales en todo el sistema público (Cap. 7).',
        'Sacar la enseñanza islámica y la teoría queer de las aulas reforzando la exigencia científica y técnica (Cap. 7).'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulo 7 (Educación)'
    },
    inmigracion: {
      headline: 'Revisión de 20 años de nacionalidades, fuera hijab público y centros en terceros países',
      summary:
        'Frena regularizaciones, revisa 20 años de nacionalizaciones hacia ius sanguinis, retira nacionalidad por delitos graves, veta el hijab público y crea centros en terceros países.',
      measures: [
        'Cesar regularizaciones, expulsar a irregulares y reincidentes y habilitar centros de clasificación y deportación en terceros países (Cap. 17).',
        'Revisar las concesiones de nacionalidad de los últimos 20 años recuperando el criterio de ius sanguinis y retirar la nacionalidad por delitos graves (Cap. 17).',
        'Prohibir el uso del hijab en espacios y empleos públicos y exigir asimilación cultural y lingüística (Cap. 17).',
        'Retirar toda subvención a ONG que fomenten flujos migratorios irregulares.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulo 17 (Inmigración)'
    },
    seguridad: {
      headline: 'Sindicación en Guardia Civil y Ejército, fin del cese militar a los 45 y Policía única',
      summary:
        'Reconoce sindicación en Guardia Civil y Ejército, suprime el despido militar a los 45 años, integra policías autonómicas en la PN y combate narcopisos e islamismo.',
      measures: [
        'Reconocer el derecho a sindicación en la Guardia Civil y de reunión, sindicación y afiliación en las Fuerzas Armadas, y eliminar el cese militar obligatorio a los 45 años (Cap. 20-21).',
        'Suprimir las policías autonómicas integrando sus efectivos en la Policía Nacional y depurar mandos políticos (Cap. 20-21).',
        'Implantar control estricto de fronteras nacionales desplegando los medios operativos necesarios del Estado.',
        'Combatir frontalmente mafias criminales, narcopisos e islamismo político radical en barrios trabajadores.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulos 20 y 21 (Seguridad y Defensa)'
    },
    modelo_estado: {
      headline: 'Regiones simétricas con igualdad fiscal y centralización hacia República socialista',
      summary:
        'Exige autonomías simétricas con idénticas competencias e idéntico régimen fiscal, centraliza Sanidad, Educación y Emergencias y fusiona ayuntamientos hacia una República socialista.',
      measures: [
        'Implantar comunidades autónomas simétricas con las mismas competencias y el mismo régimen fiscal en toda España, eliminando privilegios forales o territoriales (Cap. 18).',
        'Centralizar en el Estado las competencias de Sanidad, Educación y Emergencias y promover la fusión de ayuntamientos pequeños (Cap. 18).',
        'Combatir políticamente los nacionalismos periféricos por dividir a la clase trabajadora.',
        'Avanzar hacia una República socialista unitaria que supere la Monarquía (Cap. 18).'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulo 18 (Modelo Territorial, pp. 55-56)'
    },
    energia_campo: {
      headline: 'Nuclear y uranio nacional, expropiación de latifundios baldíos y fuera solares agrícolas',
      summary:
        'Rompe la PAC, regula luz y carburantes, apuesta por nuclear y uranio propios, expropia tierras sin usar, prohíbe placas solares en tierra fértil y frena el derribo de presas.',
      measures: [
        'Romper la PAC y rechazar la transición ecológica de la UE, regulando precios de electricidad y carburantes (Cap. 5, 12).',
        'Apostar por la energía nuclear estatal y la extracción de uranio nacional para garantizar energía barata e industrial (Cap. 5).',
        'Expropiar tierras sin cultivar en manos de grandes terratenientes y prohibir instalar parques solares en suelo cultivable (Cap. 12).',
        'Frenar el derribo de presas, asumir la caza como competencia estatal y proteger la producción agraria nacional (Cap. 12).'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulos 5 y 12 (Energía y Campo)'
    },
    exterior_ue: {
      headline: 'Salida de UE y OTAN, expulsión de bases, Gibraltar, Sáhara y aguas archipelágicas',
      summary:
        'Exige salir de la UE y OTAN y desmantelar bases extranjeras, reclama Gibraltar, apoya la autodeterminación del pueblo saharaui y delimita las aguas archipelágicas.',
      measures: [
        'Promover la salida de España de la Unión Europea y de la OTAN y expulsar las bases militares estadounidenses (Cap. 3).',
        'Reclamar la devolución de Gibraltar y mantener firmeza soberana frente a Marruecos en Ceuta, Melilla y Canarias (Cap. 3).',
        'Defender el derecho a la autodeterminación del pueblo saharaui y delimitar las aguas archipelágicas españolas (Cap. 3).',
        'Rechazar cualquier subordinación diplomática, comercial o militar a bloques imperialistas.'
      ],
      sourceRef: 'Programa Político Frente Obrero 2026: Capítulo 3 (Política Exterior y Soberanía)'
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

