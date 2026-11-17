/**
 * Structured programmatic corpus for all 17 political formations across
 * the 12 core policy areas (204 topic-party entries).
 */

export const PROGRAMS = {
  sumar: {
    economia: {
      headline: 'Fiscalidad progresiva sobre grandes fortunas, banca y herencia universal',
      summary:
        'Impulsa el mantenimiento permanente del gravamen a grandes patrimonios, banca y energéticas, junto a la equiparación fiscal de las rentas del capital con las del trabajo.',
      measures: [
        'Hacer permanente el Impuesto de Solidaridad a las Grandes Fortunas a partir de 3 millones de euros.',
        'Consolidar gravámenes extraordinarios sobre los beneficios de grandes entidades financieras y energéticas.',
        'Financiar una herencia universal de 20.000 euros para jóvenes al cumplir los 18 años orientada a formación o vivienda.',
        'Equiparar progresivamente los tipos efectivos del IRPF entre rentas del ahorro y rentas salariales.',
        'Reformar las reglas fiscales europeas de estabilidad para excluir inversiones verdes y sociales del cómputo de déficit y deuda.'
      ],
      sourceRef: 'Programa económico de Sumar / Frente Amplio 2026'
    },
    vivienda: {
      headline: 'Topes al alquiler en todo el país, regulación turística y parque público',
      summary:
        'Propone intervenir el mercado del alquiler para frenar subidas especulativas, restringir pisos turísticos y movilizar vivienda hacia alquiler social.',
      measures: [
        'Extender el índice obligatorio de contención de rentas y vincular las subidas salariales al límite del 30% de renta familiar.',
        'Limitar la compra especulativa de vivienda a grandes tenedores y fondos en zonas declaradas tensionadas.',
        'Regular y reducir drásticamente las licencias de viviendas de uso turístico y contratos de temporada fraudulentos.',
        'Elevar el parque público de alquiler social hasta acercarlo al promedio europeo del 10%.'
      ],
      sourceRef: 'Bloque de Vivienda de Sumar 2026'
    },
    empleo: {
      headline: 'Reducción legal de la jornada a 37,5 y 32 horas sin bajada salarial',
      summary:
        'Sitúa la reducción del tiempo de trabajo, la mejora del SMI y el encarecimiento del despido improcedente como ejes centrales.',
      measures: [
        'Implantar por ley la jornada máxima de 37,5 horas semanales de forma inmediata con senda hacia las 32 horas.',
        'Revalorizar el Salario Mínimo Interprofesional por encima del 60% del salario medio.',
        'Establecer el despido restaurativo o indemnizaciones disuasorias adaptadas al daño real del trabajador.',
        'Impulsar la democracia en la empresa con participación de las plantillas en los consejos de dirección.'
      ],
      sourceRef: 'Programa laboral de Sumar / Frente Amplio 2026'
    },
    pensiones: {
      headline: 'Blindaje constitucional de las pensiones públicas y fin de deducciones privadas',
      summary:
        'Defiende garantizar constitucionalmente la revalorización por IPC, elevar las pensiones mínimas y suprimir incentivos fiscales a planes privados.',
      measures: [
        'Blindar en la Constitución el sistema público de pensiones y su revalorización anual conforme al IPC.',
        'Incrementar las pensiones mínimas y no contributivas para reducir la brecha de pobreza en mayores.',
        'Eliminar deducciones y bonificaciones fiscales a planes de pensiones privados individuales.',
        'Reforzar los ingresos de la Seguridad Social destopando progresivamente las cotizaciones máximas.'
      ],
      sourceRef: 'Bloque de Pensiones Públicas de Sumar / Frente Amplio 2026'
    },
    regeneracion_justicia: {
      headline: 'Desbloqueo institucional, democracia participativa y transparencia pública',
      summary:
        'Aboga por reformar los mecanismos de renovación judicial para impedir bloqueos parlamentarios y reforzar la protección de alertadores.',
      measures: [
        'Establecer mayorías parlamentarias alternativas de desbloqueo si caduca el mandato del CGPJ.',
        'Ampliar los mecanismos de Iniciativa Legislativa Popular y consultas ciudadanas vinculantes.',
        'Endurecer el régimen de incompatibilidades y registro obligatorio de grupos de interés (lobbies).',
        'Garantizar la gratuidad de la justicia para rentas medias y trabajadoras.'
      ],
      sourceRef: 'Eje institucional y democrático de Sumar'
    },
    sanidad: {
      headline: 'Blindaje del Sistema Nacional de Salud y fin de externalizaciones',
      summary:
        'Plantea revertir concesiones hospitalarias privadas, reforzar la atención primaria y ampliar la cartera pública de salud mental, bucodental y óptica.',
      measures: [
        'Derogar la Ley 15/1997 para impedir nuevas formas de gestión privada en centros sanitarios públicos.',
        'Incorporar plenamente la atención bucodental, óptica y fisioterapia en la cartera común del SNS.',
        'Fijar por ley un máximo de espera en atención primaria de 48 horas y duplicar plantillas de psicología clínica.',
        'Establecer una farmacéutica pública para garantizar el suministro de medicamentos esenciales.'
      ],
      sourceRef: 'Bloque de Sanidad Pública de Sumar'
    },
    educacion: {
      headline: 'Gratuidad de 0 a 3 años, becas salario y refuerzo de la escuela pública',
      summary:
        'Concentra la inversión pública en la red de titularidad estatal y autonómica, eliminando conciertos que segreguen.',
      measures: [
        'Universalizar la educación pública gratuita de 0 a 3 años en toda España.',
        'Retirar progresivamente conciertos educativos a centros que segreguen por sexo o cobren cuotas encubiertas.',
        'Reducir las ratios máximas por aula e incrementar becas salario para estudiantes universitarios y de FP.',
        'Equiparar el sistema de evaluación sin recentralizar el currículo autonómico.'
      ],
      sourceRef: 'Eje de Educación y Universidad de Sumar'
    },
    inmigracion: {
      headline: 'Regularización extraordinaria, cierre de CIEs y homologación ágil de títulos',
      summary:
        'Defiende la regularización administrativa de residentes sin papeles, vías legales de acogida y derechos humanos en frontera.',
      measures: [
        'Aprobar la regularización extraordinaria de personas extranjeras que ya residen y trabajan en España.',
        'Cerrar progresivamente los Centros de Internamiento de Extranjeros (CIEs) y fin de devoluciones en caliente.',
        'Agilizar la homologación de títulos académicos de personas migrantes para cubrir vacantes profesionales.',
        'Establecer vías legales y seguras de visado y asilo en países de origen.'
      ],
      sourceRef: 'Bloque de Derechos y Migraciones de Sumar'
    },
    seguridad: {
      headline: 'Policía de proximidad, prevención social y lucha contra delitos de odio',
      summary:
        'Plantea un modelo policial comunitario centrado en derechos civiles, violencia machista, delitos de odio y seguridad digital.',
      measures: [
        'Reforzar la policía de proximidad y los juzgados especializados en violencia machista y delitos de odio.',
        'Reformar el Código Penal y leyes de protección frente a la violencia digital y por inteligencia artificial.',
        'Sustituir los aspectos más punitivos de la Ley de Seguridad Ciudadana garantizando derechos de reunión.',
        'Incrementar la coordinación preventiva frente a redes de crimen organizado y trata.'
      ],
      sourceRef: 'Seguridad Democrática y Derechos de Sumar'
    },
    modelo_estado: {
      headline: 'Estado plurinacional, federalismo cooperativo y mayor autogobierno',
      summary:
        'Reconoce la pluralidad nacional y lingüística de España, defendiendo un modelo federal asimétrico y el diálogo territorial.',
      measures: [
        'Reformar el Senado para convertirlo en una cámara real de representación territorial y plurinacional.',
        'Garantizar la oficialidad y uso de todas las lenguas cooficiales en las instituciones del Estado y la UE.',
        'Impulsar un nuevo modelo de financiación autonómica solidario que respete la corresponsabilidad fiscal.',
        'Promover acuerdos políticos dialogados para resolver conflictos territoriales sin judicialización.'
      ],
      sourceRef: 'Modelo territorial y plurinacional de Sumar'
    },
    energia_campo: {
      headline: 'Cierre nuclear, descarbonización acelerada y prohibición de macrogranjas',
      summary:
        'Prioriza la transición hacia un mix 100% renovable, la reducción de emisiones en transporte y la protección del sector agrario familiar.',
      measures: [
        'Cumplir el calendario de cierre de las centrales nucleares entre 2027 y 2035 sin prórrogas.',
        'Prohibir nuevas macrogranjas industriales y reorientar ayudas de la PAC hacia agricultura familiar y ecológica.',
        'Suprimir vuelos domésticos cortos con alternativa ferroviaria inferior a 2,5 horas.',
        'Crear una empresa pública de energía para gestionar concesiones hidroeléctricas revertidas.'
      ],
      sourceRef: 'Agenda Verde y Transición Justa de Sumar'
    },
    exterior_ue: {
      headline: 'Europa social y democrática, autonomía diplomática y contención militar',
      summary:
        'Defiende una Unión Europea con mayor integración fiscal y social, rechazando la escalada armamentística.',
      measures: [
        'Rechazar el aumento del gasto militar hacia el 2% del PIB y priorizar presupuestos de cooperación y paz.',
        'Impulsar en la UE la reforma del Pacto de Estabilidad para excluir inversiones verdes y sociales del déficit.',
        'Reconocer plenamente el derecho internacional en Palestina y defender la libre determinación del Sáhara Occidental.',
        'Revisar acuerdos comerciales que permitan competencia desleal sin cláusulas ambientales y laborales.'
      ],
      sourceRef: 'Política Exterior y Unión Europea de Sumar'
    }
  },

  podemos: {
    economia: {
      headline: 'Banca pública, tope a márgenes de supermercados y tipos del 60% a fortunas',
      summary:
        'Plantea una intervención directa del Estado en sectores estratégicos, control de precios básicos e incremento sustancial de la carga fiscal al gran capital.',
      measures: [
        'Crear una banca pública estatal que ofrezca hipotecas y crédito a pymes en condiciones reguladas.',
        'Topar los márgenes comerciales de las grandes distribuidoras de alimentación en productos de primera necesidad.',
        'Elevar el tipo marginal del IRPF al 60% para rentas superiores a 300.000 euros anuales.',
        'Establecer un impuesto permanente y elevado a las grandes fortunas y beneficios extraordinarios.',
        'Auditar la deuda pública para reestructurar pasivos ilegítimos de rescate financiero y exigir que el BCE financie inversión pública sin austeridad.'
      ],
      sourceRef: 'Programa Económico Podemos 2026'
    },
    vivienda: {
      headline: 'Prohibición de compra especulativa, expropiación de uso y tope al alquiler',
      summary:
        'Considera la vivienda un derecho incompatible con el lucro de fondos inversores, proponiendo intervención de precios y movilización forzosa de pisos vacíos.',
      measures: [
        'Prohibir la compra de vivienda a fondos de inversión y no residentes que no la destinen a residencia habitual.',
        'Fijar por ley un tope nacional al alquiler para que no supere el 30% del salario medio de cada zona.',
        'Expropiar temporalmente el uso de viviendas vacías de grandes tenedores y bancos para alquiler social.',
        'Prohibir todos los desahucios de familias vulnerables sin alternativa habitacional garantizada.'
      ],
      sourceRef: 'Plan de Choque en Vivienda de Podemos'
    },
    empleo: {
      headline: 'Semana laboral de 32 horas, subida del SMI y recuperación del despido de 45 días',
      summary:
        'Propugna reducir la jornada sin merma salarial, elevar el salario mínimo y revertir por completo los recortes laborales de 2012.',
      measures: [
        'Establecer por ley la jornada laboral de 32 horas semanales (4 días) sin reducción salarial.',
        'Elevar el SMI de forma progresiva hasta garantizar una renta digna indexada automáticamente al coste de la vida.',
        'Restablecer la indemnización de 45 días por año trabajado y los salarios de tramitación en despidos improcedentes.',
        'Reforzar la Inspección de Trabajo contra contratos fraudulentos y horas extraordinarias no pagadas.'
      ],
      sourceRef: 'Bloque Laboral de Podemos'
    },
    pensiones: {
      headline: 'Derogar la jubilación a los 67 años y equiparar pensiones mínimas al SMI',
      summary:
        'Reclama volver a la edad ordinaria de jubilación de 65 años, subir pensiones mínimas al nivel del SMI y financiar déficits con fiscalidad.',
      measures: [
        'Derogar la jubilación a los 67 años recuperando los 65 años y la jubilación anticipada sin penalización con 40 años cotizados.',
        'Equiparar progresivamente las pensiones mínimas y no contributivas con el Salario Mínimo Interprofesional.',
        'Garantizar la revalorización automática por IPC y financiar la Seguridad Social con impuestos si fuera necesario.',
        'Suprimir cualquier incentivo fiscal a planes privados de pensiones de empresa o individuales.'
      ],
      sourceRef: 'Bloque de Pensiones de Podemos'
    },
    regeneracion_justicia: {
      headline: 'Reforma democrática del Poder Judicial, fin de puertas giratorias y pluralismo mediático',
      summary:
        'Propone mecanismos populares de control de la judicatura, prohibición estricta de puertas giratorias y regulación contra monopolios informativos.',
      measures: [
        'Reformar el acceso a la carrera judicial mediante becas públicas y democratizar la elección del CGPJ.',
        'Prohibir durante diez años que altos cargos públicos pasen a consejos de administración de empresas reguladas.',
        'Eliminar los aforamientos políticos y limitar mandatos en cargos ejecutivos.',
        'Aprobar una ley de pluralismo y transparencia en la propiedad de los medios de comunicación.'
      ],
      sourceRef: 'Democracia y Regeneración Institucional de Podemos'
    },
    sanidad: {
      headline: 'Sanidad 100% pública sin conciertos privados y farmacéutica estatal',
      summary:
        'Exige la reversión inmediata de todas las concesiones privadas sanitarias y la creación de industria farmacéutica pública.',
      measures: [
        'Prohibir los conciertos con la sanidad privada y rescatar todos los hospitales de gestión externalizada.',
        'Crear una empresa farmacéutica pública para investigar, producir y distribuir medicamentos genéricos.',
        'Integrar odontología, salud mental, óptica y audífonos gratuitamente en el Sistema Nacional de Salud.',
        'Blindar por ley un mínimo del 7,5% del PIB destinado exclusivamente a la sanidad pública.'
      ],
      sourceRef: 'Programa de Sanidad Pública de Podemos'
    },
    educacion: {
      headline: 'Supresión de conciertos educativos, universidad gratuita y laicidad escolar',
      summary:
        'Reclama que todo el presupuesto educativo público vaya exclusivamente a centros de titularidad pública, con tasas universitarias cero.',
      measures: [
        'Eliminar progresivamente la financiación pública a colegios privados concertados.',
        'Garantizar la gratuidad completa desde la escuela infantil de 0 a 3 años hasta los estudios de máster universitario.',
        'Suprimir la asignatura de religión confesional del horario escolar y blindar la escuela laica.',
        'Aumentar el gasto educativo hasta alcanzar el 6% del PIB en una legislatura.'
      ],
      sourceRef: 'Bloque de Educación Pública de Podemos'
    },
    inmigracion: {
      headline: 'Papeles para todos, derogación de la Ley de Extranjería y cierre de CIEs',
      summary:
        'Plantea el reconocimiento de plenos derechos de ciudadanía y trabajo a todas las personas migrantes y la eliminación de trabas legales.',
      measures: [
        'Derogar la Ley de Extranjería y aprobar una regularización inmediata sin requisitos restrictivos.',
        'Cerrar de forma definitiva todos los Centros de Internamiento de Extranjeros (CIEs).',
        'Garantizar vías legales y seguras de asilo y rescate marítimo sin externalización de fronteras.',
        'Reconocer el derecho al voto en todas las elecciones a residentes extranjeros tras un período breve de empadronamiento.'
      ],
      sourceRef: 'Derechos Civiles y Migraciones de Podemos'
    },
    seguridad: {
      headline: 'Derogación de la Ley Mordaza, policía democrática y prevención social',
      summary:
        'Aboga por revertir reformas penales punitivas, proteger libertades de protesta y reforzar las plantillas frente a violencia machista y corrupción.',
      measures: [
        'Derogar la Ley de Seguridad Ciudadana (Ley Mordaza) en todos sus artículos sancionadores.',
        'Reformar los protocolos policiales para garantizar identificación visible y rendición de cuentas.',
        'Ampliar los recursos policiales y judiciales contra violencia de género, delitos económicos y delitos de odio.',
        'Orientar el sistema penitenciario hacia la reinserción efectiva y medidas alternativas no privativas de libertad.'
      ],
      sourceRef: 'Libertades Públicas y Seguridad de Podemos'
    },
    modelo_estado: {
      headline: 'República federal plurinacional y derecho a decidir pactado',
      summary:
        'Propone superar la Monarquía mediante referéndum y construir una República plurinacional que reconozca consultas territoriales.',
      measures: [
        'Convocar un referéndum sobre la forma de Estado para avanzar hacia una República federal.',
        'Reconocer el derecho a decidir mediante referéndums pactados en Cataluña y Euskadi.',
        'Garantizar el pleno bilingüismo e igualdad jurídica de todas las lenguas del Estado.',
        'Suprimir el delito de injurias a la Corona y reforzar los derechos territoriales.'
      ],
      sourceRef: 'Proyecto Republicano y Plurinacional de Podemos'
    },
    energia_campo: {
      headline: 'Empresa pública de energía, cierre nuclear y transición ecológica 100% renovable',
      summary:
        'Defiende nacionalizar empresas eléctricas estratégicas, cerrar las centrales nucleares y transformar el modelo ganadero.',
      measures: [
        'Crear una gran empresa energética pública que fije precios asequibles para hogares y pymes.',
        'Acelerar el cierre de las centrales nucleares y prohibir nuevos proyectos de combustibles fósiles.',
        'Prohibir las macrogranjas industriales y limitar el consumo hídrico de cultivos superintensivos.',
        'Implantar el transporte público gratuito y electrificado en áreas metropolitanas.'
      ],
      sourceRef: 'Transición Ecosocialista de Podemos'
    },
    exterior_ue: {
      headline: 'Salida de la OTAN, cierre de bases militares y ruptura con la austeridad europea',
      summary:
        'Mantiene una línea pacifista y anti-OTAN contraria al rearme europeo y crítica con las reglas fiscales de Bruselas.',
      measures: [
        'Promover la salida de España de la OTAN y el cierre de las bases militares de Rota y Morón.',
        'Rechazar el incremento del presupuesto militar y redirigir el gasto de defensa hacia gasto social.',
        'Embargar la compraventa de armamento y romper relaciones diplomáticas ante vulneraciones de derechos humanos.',
        'Impulsar una reforma de los tratados de la UE para democratizar el Banco Central Europeo.'
      ],
      sourceRef: 'Paz, Soberanía y Política Internacional de Podemos'
    }
  },

  iu: {
    economia: {
      headline: 'Reforma fiscal de 111.000 millones anuales, banca pública e industria estatal',
      summary:
        'Propone una transformación profunda de la estructura tributaria bajo el principio de que aporten más las grandes fortunas, corporaciones y rentas del capital.',
      measures: [
        'Ejecutar una reforma fiscal progresiva capaz de recaudar 111.000 millones de euros adicionales cada año.',
        'Crear una banca pública y empresas públicas estratégicas en industria, telecomunicaciones y energía.',
        'Intervenir precios de la cesta básica de alimentos y suministros energéticos esenciales.',
        'Suprimir paraísos fiscales internos y reforzar la inspección fiscal contra la elusión de multinacionales.',
        'Realizar una auditoría ciudadana de la deuda pública y cuestionar las reglas de déficit europeas que priorizan intereses frente al gasto social.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Economía al servicio de la mayoría social'
    },
    vivienda: {
      headline: 'Parque público de 1,5 millones de viviendas y control estricto de alquileres',
      summary:
        'Plantea garantizar la vivienda como derecho fundamental mediante regulación obligatoria de precios e inversión pública masiva.',
      measures: [
        'Construir y movilizar un parque de 1,5 millones de viviendas públicas destinadas a alquiler social permanente.',
        'Imponer topes obligatorios y bajadas de precios del alquiler en todo el territorio según la renta de los hogares.',
        'Paralizar por ley los desahucios de personas vulnerables sin alternativa habitacional adecuada.',
        'Gravar fiscalmente de forma progresiva las viviendas vacías en manos de bancos y fondos de inversión.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Vivienda'
    },
    empleo: {
      headline: 'Jornada de 32 horas, refuerzo sindical y derogación de reformas laborales',
      summary:
        'Impulsa la reducción inmediata del tiempo de trabajo, la subida del salario mínimo y el refuerzo de la negociación colectiva.',
      measures: [
        'Implantar por ley la jornada laboral de 32 horas semanales sin pérdida de salario.',
        'Derogar por completo los aspectos lesivos de las reformas laborales y aumentar las indemnizaciones por despido.',
        'Combatir la precariedad juvenil y suprimir las horas extras no remuneradas mediante control laboral estricto.',
        'Garantizar un Salario Mínimo Interprofesional suficiente vinculado a la evolución real del coste de la vida.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Trabajo'
    },
    pensiones: {
      headline: 'Blindaje constitucional del sistema público, IPC real y jubilación a los 65 años',
      summary:
        'Defiende la revalorización automática por IPC, el incremento de pensiones mínimas y la financiación solidaria vía Presupuestos Generales.',
      measures: [
        'Garantizar por mandato constitucional la revalorización automática de todas las pensiones según el IPC real.',
        'Elevar las pensiones mínimas y de viudedad para erradicar la pobreza entre personas mayores.',
        'Recuperar los 65 años como edad ordinaria de jubilación y coeficientes reductores sin penalización para trabajos penosos.',
        'Reforzar la Seguridad Social eliminando topes máximos de cotización y bonificaciones a planes privados.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Pensiones'
    },
    regeneracion_justicia: {
      headline: 'Estado laico, democratización judicial y rendición de cuentas ciudadana',
      summary:
        'Defiende la reforma del sistema electoral hacia mayor proporcionalidad, la transparencia administrativa total y la separación Iglesia-Estado.',
      measures: [
        'Reformar la Ley Electoral hacia una circunscripción única o sistema estrictamente proporcional.',
        'Democratizar el acceso a la carrera judicial y acabar con la endogamia en los órganos de gobierno judicial.',
        'Suprimir las exenciones fiscales y privilegios económicos de confesiones religiosas en la hacienda pública.',
        'Impulsar presupuestos participativos vinculantes y protección integral a denunciantes de corrupción.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Democracia y Derechos'
    },
    sanidad: {
      headline: 'Blindaje financiero de la sanidad 100% pública y salud mental prioritaria',
      summary:
        'Exige eliminar cualquier ánimo de lucro en la gestión sanitaria, ampliar recursos de atención primaria y reducir listas de espera.',
      measures: [
        'Reintegrar al sistema público todos los servicios sanitarios externalizados o concertados con empresas privadas.',
        'Reforzar la atención primaria con al menos el 25% del presupuesto sanitario y reducir listas de espera.',
        'Ampliar la plantilla pública de salud mental, salud bucodental y cuidados de larga duración.',
        'Garantizar la cobertura universal sanitaria sin exclusiones por situación administrativa.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Servicios Públicos'
    },
    educacion: {
      headline: 'Red pública única, educación laica y gratuidad universal',
      summary:
        'Reivindica una escuela pública integradora desde los 0 años hasta la universidad, eliminando privilegios de la enseñanza privada.',
      measures: [
        'Asegurar la gratuidad total de la educación pública desde la etapa 0-3 años hasta los estudios universitarios.',
        'Suprimir progresivamente los conciertos con centros privados para financiar exclusivamente la red pública.',
        'Sacar la religión confesional del currículo escolar y garantizar una enseñanza científica y laica.',
        'Estabilizar al profesorado interino y reducir las ratios de alumnado por aula.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Educación'
    },
    inmigracion: {
      headline: 'Regularización amplia, acogida digna y cierre de CIEs',
      summary:
        'Aboga por garantizar derechos laborales y civiles a la población migrante, vías legales seguras y el cierre de centros de internamiento.',
      measures: [
        'Aprobar la regularización administrativa de las personas migrantes residentes y agilizar permisos de trabajo.',
        'Cerrar todos los Centros de Internamiento de Extranjeros y terminar con las devoluciones sumarias en frontera.',
        'Sustituir el enfoque policial de control migratorio por vías seguras de asilo y cooperación al desarrollo.',
        'Facilitar la reagrupación familiar y la plena igualdad de derechos sociales y laborales.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Migración'
    },
    seguridad: {
      headline: 'Derogación de la Ley Mordaza y seguridad basada en cohesión social',
      summary:
        'Rechaza leyes restrictivas de derechos de protesta y plantea políticas de prevención comunitaria y refuerzo de medios frente a violencia.',
      measures: [
        'Derogar la Ley Mordaza y reformar el Código Penal para evitar la criminalización de la protesta social.',
        'Invertir en cohesión de barrios y servicios públicos como base real de la seguridad ciudadana.',
        'Reforzar las unidades especializadas contra violencia machista, delitos de odio y delincuencia económica.',
        'Garantizar el control democrático y rendición de cuentas de las fuerzas y cuerpos de seguridad.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Libertades y Seguridad'
    },
    modelo_estado: {
      headline: 'República Federal, laica y solidaria con respeto a la diversidad territorial',
      summary:
        'Defiende un proceso constituyente hacia una República federal que reconozca la plurinacionalidad y asegure solidaridad interterritorial.',
      measures: [
        'Impulsar una República federal y solidaria como modelo de convivencia entre los pueblos de España.',
        'Garantizar un suelo común de ingresos y servicios públicos en todas las comunidades autónomas.',
        'Reconocer los derechos culturales y lingüísticos de todas las lenguas propias del Estado.',
        'Someter a referéndum ciudadano el modelo de Jefatura del Estado.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Modelo Federal'
    },
    energia_campo: {
      headline: 'Renovables bajo control público, soberanía alimentaria y protección hídrica',
      summary:
        'Combina el control público de las energías renovables con el apoyo al mundo rural, los agricultores familiares y la gestión pública del agua.',
      measures: [
        'Desplegar energías renovables bajo planificación y titularidad pública evitando la especulación de oligopolios.',
        'Garantizar la gestión 100% pública del ciclo del agua y frenar el acaparamiento de acuíferos.',
        'Apoyar al mundo rural con precios justos en origen y fomento de la agroecología y soberanía alimentaria.',
        'Acelerar el cierre de las centrales nucleares y proteger la biodiversidad.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: Transición Ecológica'
    },
    exterior_ue: {
      headline: 'No a la guerra, salida de la OTAN y Europa de los pueblos frente al BCE',
      summary:
        'Mantiene un firme compromiso antimilitarista, proponiendo abandonar la OTAN, reducir el gasto militar y reformar el modelo económico europeo.',
      measures: [
        'Promover la salida de España de la OTAN y el desmantelamiento de bases militares extranjeras.',
        'Reducir drásticamente el gasto militar y oponerse a la economía de guerra en la Unión Europea.',
        'Cuestionar el mandato ortodoxo del BCE para orientar el crédito europeo hacia inversiones sociales y ecológicas.',
        'Defender una política exterior basada en la cooperación internacional, el desarme y el respeto a los derechos humanos.'
      ],
      sourceRef: 'Programa Electoral Izquierda Unida 2026: No a la guerra y UE'
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
      sourceRef: 'Tesis Programáticas del Partido Comunista de España (PCE)'
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
      headline: 'Fiscalidad progresiva, consolidación de impuestos a banca y fondos europeos',
      summary:
        'Defiende compatibilizar el crecimiento económico y la disciplina fiscal europea con gravámenes reforzados a grandes corporaciones y patrimonios.',
      measures: [
        'Consolidar gravámenes específicos sobre beneficios extraordinarios de grandes bancos y compañías energéticas.',
        'Establecer una tributación mínima efectiva del 15% en el Impuesto de Sociedades para grandes multinacionales.',
        'Combatir la competencia fiscal desleal entre comunidades autónomas mediante armonización en Patrimonio y Sucesiones.',
        'Ejecutar las inversiones en reindustrialización tecnológica, digitalización y leyes de apoyo a empresas emergentes.',
        'Mantener la senda gradual de reducción del déficit bajo el 3% y de la deuda pública en relación al PIB conforme a las reglas fiscales europeas.'
      ],
      sourceRef: 'Programa Electoral PSOE 2026: La fuerza de seguir avanzando'
    },
    vivienda: {
      headline: 'Préstamos ICO sin intereses hasta 50.000 €, control de alquiler y vivienda protegida',
      summary:
        'Combina el desarrollo de la Ley de Vivienda en zonas tensionadas con avales públicos, préstamos ICO para jóvenes y regulación de pisos temporales.',
      measures: [
        'Ofrecer préstamos ICO sin intereses de hasta 50.000 euros para ayudar a jóvenes a pagar la entrada de su primera vivienda.',
        'Regular los alquileres de temporada y por habitaciones e implantar prórrogas obligatorias para inquilinos cumplidores.',
        'Desplegar el índice de contención de precios del alquiler en zonas tensionadas y bonificar fiscalmente a caseros que rebajen rentas.',
        'Movilizar suelo público y activos de la SAREB para ampliar de forma sostenida el parque estatal de alquiler asequible.'
      ],
      sourceRef: 'Bloque de Vivienda del PSOE 2026'
    },
    empleo: {
      headline: 'SMI al 60% del salario medio por ley y jornada de 37,5 horas por diálogo social',
      summary:
        'Prioriza la estabilidad contractual, la concertación social con sindicatos y patronal y políticas activas de inserción juvenil.',
      measures: [
        'Blindar por ley que el Salario Mínimo Interprofesional (SMI) equivalga siempre como mínimo al 60% del salario medio.',
        'Reducir progresivamente la jornada laboral máxima semanal hacia las 37,5 horas mediante diálogo social.',
        'Reforzar políticas activas de empleo enfocadas en jóvenes, mujeres y parados de larga duración.',
        'Consolidar la contratación indefinida y la adaptación del Estatuto de los Trabajadores al empleo digital.'
      ],
      sourceRef: 'Bloque de Empleo y Salarios del PSOE 2026'
    },
    pensiones: {
      headline: 'Revalorización legal conforme al IPC y refuerzo de la hucha de pensiones',
      summary:
        'Defiende el Pacto de Toledo, la actualización anual automática con la inflación y la dotación sostenida del Fondo de Reserva.',
      measures: [
        'Mantener por ley la revalorización anual de todas las pensiones contributivas y no contributivas conforme al IPC.',
        'Seguir nutriendo el Fondo de Reserva de la Seguridad Social mediante el Mecanismo de Equidad Intergeneracional.',
        'Mejorar de forma gradual las pensiones mínimas y de viudedad para reducir la brecha de género.',
        'Incentivar la jubilación demorada voluntaria y compatible parcialmente con el empleo.'
      ],
      sourceRef: 'Bloque de Pensiones y Pacto de Toledo del PSOE 2026'
    },
    regeneracion_justicia: {
      headline: 'Renovación constitucional de órganos, digitalización judicial y transparencia',
      summary:
        'Propone agilizar los juzgados mediante medios digitales, reformar los plazos de renovación del CGPJ y reforzar la transparencia pública.',
      measures: [
        'Reformar los mecanismos legales para evitar el bloqueo en la renovación del Consejo General del Poder Judicial.',
        'Digitalizar los juzgados y ampliar tribunales de instancia para reducir la congestión procesal.',
        'Consolidar la ley de protección al informante y crear una oficina independiente de prevención de conflictos de interés.',
        'Regular la transparencia en la publicidad institucional y los contratos públicos.'
      ],
      sourceRef: 'Instituciones y Justicia del PSOE 2026'
    },
    sanidad: {
      headline: 'Refuerzo de la atención primaria, salud mental y reducción de listas de espera',
      summary:
        'Defiende la sanidad pública universal frente a privatizaciones masivas, aumentando plazas MIR y mejorando la coordinación interterritorial.',
      measures: [
        'Ampliar la financiación finalista para reducir las listas de espera quirúrgicas y diagnósticas.',
        'Incrementar la oferta de plazas de Formación Sanitaria Especializada (MIR y EIR) para paliar el déficit de profesionales.',
        'Consolidar la Ley de Equidad y Universalidad del Sistema Nacional de Salud limitando nuevas privatizaciones.',
        'Desplegar un plan nacional de salud mental con refuerzo de psiquiatría y psicología en atención primaria.'
      ],
      sourceRef: 'Sanidad y Estado del Bienestar del PSOE 2026'
    },
    educacion: {
      headline: 'Universalización de 0-3 años, nueva FP dual y récord histórico en becas',
      summary:
        'Mantiene la convivencia de red pública y concertada priorizando la inversión en la red pública y la ampliación de plazas de Formación Profesional.',
      measures: [
        'Crear nuevas plazas públicas gratuitas en la etapa de educación infantil de 0 a 3 años.',
        'Consolidar la red de Formación Profesional dual ligada a las demandas industriales y tecnológicas.',
        'Mantener partidas récord en becas universitarias y reducir el coste de las primeras matrículas.',
        'Fomentar programas de refuerzo escolar en matemáticas y comprensión lectora y coordinación técnica en la PAU.'
      ],
      sourceRef: 'Educación, Ciencia y Universidades del PSOE 2026'
    },
    inmigracion: {
      headline: 'Migración regular vinculada al empleo y cooperación con países de origen',
      summary:
        'Plantea vías ordenadas de integración y arraigo laboral junto a acuerdos de control migratorio con países de origen y tránsito.',
      measures: [
        'Facilitar vías de regularización por arraigo laboral y formación en sectores con falta de mano de obra.',
        'Reforzar acuerdos de cooperación económica y retorno ordenado con países de origen y tránsito.',
        'Rechazar bloqueos militares marítimos y garantizar el respeto a los procedimientos de asilo.',
        'Aplicar el Pacto Europeo de Migración y Asilo con solidaridad entre Estados miembros.'
      ],
      sourceRef: 'Política Migratoria del PSOE 2026'
    },
    seguridad: {
      headline: 'Más plantillas de Policía y Guardia Civil y lucha contra crimen y ciberdelitos',
      summary:
        'Apuesta por ampliar efectivos y medios tecnológicos policiales para combatir el narcotráfico, ciberdelincuencia y violencia de género.',
      measures: [
        'Ampliar las plantillas y equipamientos de Policía Nacional y Guardia Civil con oferta récord de plazas.',
        'Reforzar los planes de seguridad en el Campo de Gibraltar y costas frente a redes de narcotráfico.',
        'Potenciar unidades especializadas en ciberseguridad, estafas digitales y protección de menores en red.',
        'Consolidar el sistema VioGén y la coordinación policial contra delitos de odio y multirreincidencia.'
      ],
      sourceRef: 'Seguridad Ciudadana del PSOE 2026'
    },
    modelo_estado: {
      headline: 'Estado autonómico cooperativo, cogobernanza federal y diálogo territorial',
      summary:
        'Defiende la España de las Autonomías como modelo de éxito constitucional, impulsando conferencias sectoriales y reforma de financiación.',
      measures: [
        'Aprobar un nuevo sistema de financiación autonómica que garantice la igualdad en servicios básicos y atienda singularidades.',
        'Institucionalizar la Conferencia de Presidentes como órgano estable de cogobernanza.',
        'Promover el reconocimiento y protección práctica de las lenguas cooficiales en las instituciones del Estado.',
        'Rechazar tanto la recentralización autonómica como los referéndums unilaterales de independencia.'
      ],
      sourceRef: 'Cohesión Territorial del PSOE 2026'
    },
    energia_campo: {
      headline: 'Transición verde, cierre nuclear programado y apoyo a modernización agraria',
      summary:
        'Apuesta por energías renovables, hidrógeno verde, cumplimiento del calendario nuclear y ayudas a la digitalización y regadío eficiente en el campo.',
      measures: [
        'Mantener el calendario acordado de cierre escalonado de las centrales nucleares entre 2027 y 2035.',
        'Alcanzar más del 80% de generación eléctrica renovable en 2030 e impulsar el almacenamiento y el hidrógeno verde.',
        'Invertir en modernización de regadíos sostenibles y seguros agrarios frente a sequías extremas.',
        'Defender los objetivos del Pacto Verde Europeo con medidas de flexibilidad transitoria para agricultores y ganaderos.'
      ],
      sourceRef: 'Transición Ecológica y Mundo Rural del PSOE 2026'
    },
    exterior_ue: {
      headline: 'Europeísmo federalizante, compromiso con la OTAN y política exterior multilateral',
      summary:
        'Defiende una Europa más integrada fiscal y geopolíticamente, el cumplimiento del compromiso defensivo aliado y la solución de dos Estados en Oriente Próximo.',
      measures: [
        'Impulsar en la Unión Europea mecanismos permanentes de deuda común para financiar defensa, clima e industria.',
        'Mantener los compromisos de España en la OTAN y alcanzar progresivamente el objetivo del 2% del PIB en defensa.',
        'Fortalecer la presencia diplomática y comercial en Iberoamérica y la vecindad mediterránea con estabilidad.',
        'Defender el multilateralismo, el derecho internacional humanitario y la cooperación al desarrollo.'
      ],
      sourceRef: 'Europa y Política Exterior del PSOE 2026'
    }
  },

  cs: {
    economia: {
      headline: 'Simplificación fiscal, eliminación de trabas a pymes y economía digital',
      summary:
        'Propone aliviar la carga burocrática y tributaria sobre clases medias, autónomos y empresas innovadoras manteniendo el equilibrio presupuestario.',
      measures: [
        'Reducir trámites regulatorios y licencias para la creación de empresas en 24 horas.',
        'Rebajar el IRPF a las clases medias y suprimir el Impuesto sobre Sucesiones y Donaciones en todo el Estado.',
        'Evaluar la eficiencia de todas las subvenciones y gastos públicos eliminando partidas improductivas.',
        'Fomentar la atracción de inversión tecnológica y el mercado único español sin barreras autonómicas.',
        'Cumplir la senda europea de reducción de deuda y déficit mediante contención del gasto político y crecimiento productivo.'
      ],
      sourceRef: 'La España que merecemos: Bloque Económico (Cs / Coalición D21 2026)'
    },
    vivienda: {
      headline: 'Supresión de impuestos a menores de 35 años y fondo europeo de vivienda',
      summary:
        'Combina la eliminación de tributos en la compra de vivienda joven con un plan plurianual de rehabilitación de barrios y seguridad jurídica.',
      measures: [
        'Suprimir los impuestos ligados a la compra de primera vivienda para menores de 35 años.',
        'Movilizar 10.000 millones de euros de fondos europeos no ejecutados para construir vivienda protegida y asequible.',
        'Garantizar un plan de barrios plurianual con seguridad jurídica a diez años para atraer oferta de alquiler.',
        'Agilizar desalojos en casos de ocupación ilegal de viviendas.'
      ],
      sourceRef: 'La España que merecemos: España Resuelve (Cs 2026)'
    },
    empleo: {
      headline: 'Contrato único indefinido, mochila austriaca y tarifa cero a autónomos',
      summary:
        'Plantea eliminar la dualidad entre contratos fijos y temporales, simplificar trámites de autónomos y bonificar contratación indefinida.',
      measures: [
        'Implantar un contrato único indefinido con indemnización creciente por antigüedad y mochila austriaca portátil.',
        'Establecer tarifa cero para nuevos autónomos que no alcancen el SMI y simplificar declaraciones trimestrales.',
        'Bonificar cotizaciones a empresas que formen y contraten de forma estable a jóvenes y mayores de 50 años.',
        'Modernizar los servicios de empleo con itinerarios digitales de recualificación ligados a demanda real.'
      ],
      sourceRef: 'Propuestas Laborales de Ciudadanos'
    },
    pensiones: {
      headline: 'Sostenibilidad ligada al empleo, cuentas nocionales y ahorro complementario',
      summary:
        'Propone transparencia actuarial con cuentas individuales informativas, incentivo al empleo sénior y sistemas complementarios de ahorro laboral.',
      measures: [
        'Vincular la evolución de las pensiones a la productividad, el empleo y la esperanza de vida.',
        'Impulsar un modelo mixto que sume al sistema público planes complementarios de empleo tipo mochila austriaca.',
        'Introducir cartas informativas anuales transparentes basadas en cuentas individuales nocionales.',
        'Facilitar la compatibilidad voluntaria del 100% de la pensión con el trabajo activo para autónomos y profesionales.'
      ],
      sourceRef: 'Reforma de Pensiones de Ciudadanos'
    },
    regeneracion_justicia: {
      headline: 'Listas abiertas, fin de aforamientos, juzgados anticorrupción y CGPJ independiente',
      summary:
        'Eje prioritario de su acuerdo electoral 2026: reforma profunda del sistema de elección judicial y recorte de cargos de confianza.',
      measures: [
        'Reformar la Ley Electoral para sustituir las listas cerradas de partido por listas abiertas y desbloqueadas.',
        'Permitir que los jueces elijan directamente a los vocales del CGPJ y que el Fiscal General sea validado en terna por el Congreso.',
        'Suprimir los aforamientos políticos, tipificar el delito de enchufismo y crear juzgados anticorrupción con delitos imprescriptibles.',
        'Reducir en un 90% los cargos de confianza y asesores a dedo en la administración pública.'
      ],
      sourceRef: 'La España que merecemos: España Limpia (Cs 2026)'
    },
    sanidad: {
      headline: 'Tarjeta sanitaria única real, coordinación digital y reducción de esperas',
      summary:
        'Defiende la igualdad de acceso sanitario en cualquier comunidad autónoma mediante interoperabilidad plena y gestión profesionalizada.',
      measures: [
        'Implantar la tarjeta sanitaria única interoperable y el historial clínico digital único en las 17 comunidades.',
        'Centralizar la compra nacional de medicamentos y tecnología sanitaria para lograr ahorros de escala.',
        'Despolitizar las gerencias hospitalarias seleccionando directivos por mérito y concurso público.',
        'Garantizar tiempos máximos de espera en especialidades apoyándose en conciertos cuando falte capacidad pública.'
      ],
      sourceRef: 'Sanidad Nacional en el Programa de Ciudadanos'
    },
    educacion: {
      headline: 'Pacto educativo nacional, EBAU única, bilingüismo y libertad de elección',
      summary:
        'Reivindica una prueba de acceso universitaria común, el derecho a estudiar en castellano en todo el país y apoyo a la concertada.',
      measures: [
        'Implantar una EBAU única en toda España para garantizar igualdad de acceso a la universidad.',
        'Garantizar la educación bilingüe y el derecho efectivo a escolarizarse en castellano junto a las lenguas cooficiales.',
        'Defender la convivencia entre red pública y concertada y universalizar la etapa gratuita de 0 a 3 años.',
        'Fomentar becas por mérito y renta y mejorar el inglés en toda la educación pública.'
      ],
      sourceRef: 'Educación e Igualdad de Oportunidades (Cs)'
    },
    inmigracion: {
      headline: 'Inmigración ordenada por puntos, cualificación laboral e integración cívica',
      summary:
        'Propone una inmigración legal ligada a cualificación y demanda laboral, refuerzo común europeo de visados y retorno efectivo de irregulares.',
      measures: [
        'Establecer un sistema ordenado de visados por puntos y cualificación según necesidades del mercado laboral.',
        'Reforzar las fronteras exteriores europeas a través de Frontex y acuerdos bilaterales de retorno.',
        'Promover la integración lingüística y cívica constitucional para la obtención de residencia permanente.',
        'Agilizar permisos de residencia para talento tecnológico, investigadores y emprendedores.'
      ],
      sourceRef: 'Política Migratoria Liberal de Ciudadanos'
    },
    seguridad: {
      headline: 'Equiparación salarial policial, refuerzo de medios y ley antimultirreincidencia',
      summary:
        'Defiende respaldar material y salarialmente a las Fuerzas y Cuerpos de Seguridad del Estado y endurecer la respuesta frente a la multirreincidencia.',
      measures: [
        'Equiparar salarialmente y mejorar los medios materiales de Policía Nacional y Guardia Civil.',
        'Endurecer la respuesta legal contra la delincuencia multirreincidente y los delitos de usurpación de vivienda.',
        'Reforzar la cooperación policial europea (Europol) frente al terrorismo, narcotráfico y crimen organizado.',
        'Garantizar asistencia jurídica y protección institucional a los agentes en ejercicio de sus funciones.'
      ],
      sourceRef: 'Seguridad y Estado de Derecho — Ciudadanos'
    },
    modelo_estado: {
      headline: 'Constitucionalismo liberal, fin de privilegios forales y unidad de mercado',
      summary:
        'Defiende el marco constitucional de 1978, la supresión de diputaciones duplicadas y la igualdad fiscal de todos los ciudadanos.',
      measures: [
        'Eliminar las diputaciones provinciales transfiriendo competencias de gestión a municipios agrupados y autonomías.',
        'Reforzar la Ley de Garantía de la Unidad de Mercado para suprimir barreras regulatorias entre regiones.',
        'Aprobar un sistema de financiación autonómica transparente basado en población ajustada y coste real de servicios.',
        'Oponerse a cualquier privilegio singular o consulta secesionista fuera de la Constitución.'
      ],
      sourceRef: 'Modelo Constitucional de Ciudadanos'
    },
    energia_campo: {
      headline: 'Neutralidad tecnológica, extensión nuclear y Pacto Nacional del Agua',
      summary:
        'Aboga por combinar renovables con prórroga de centrales nucleares para abaratar la electricidad industrial y un plan hídrico estatal.',
      measures: [
        'Extender la vida útil de las centrales nucleares existentes bajo criterios técnicos de seguridad.',
        'Aprobar un Pacto Nacional del Agua con interconexión de cuencas y modernización de regadíos.',
        'Acelerar permisos ambientales para proyectos renovables y redes de interconexión eléctrica con Francia.',
        'Apoyar al sector agrario reduciendo burocracia excesiva en la aplicación de la PAC.'
      ],
      sourceRef: 'Energía y Sostenibilidad Económica de Ciudadanos'
    },
    exterior_ue: {
      headline: 'Europeísmo federal avanzado, mercado único y alianza atlántica',
      summary:
        'Apuesta por unos Estados Unidos de Europa con mayor peso en política exterior y defensa común dentro de la OTAN.',
      measures: [
        'Avanzar hacia una política exterior, fiscal y de defensa común en el seno de la Unión Europea.',
        'Cumplir con el compromiso del 2% del PIB en defensa y consolidar el vínculo estratégico con la OTAN.',
        'Defender activamente los derechos humanos y la democracia en América Latina.',
        'Impulsar tratados comerciales abiertos basados en reglas y reciprocidad.'
      ],
      sourceRef: 'Visión Europea de Ciudadanos'
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
      headline: 'Deflactación del IRPF, bajada del IVA energético y reducción del gasto político',
      summary:
        'Centra su programa económico en aliviar la presión fiscal sobre familias y empresas, derogar gravámenes sectoriales y reducir la deuda pública.',
      measures: [
        'Duplicar el mínimo exento del IRPF por el primer hijo (de 2.400 a 4.800 euros) y deflactar la tarifa a rentas medias.',
        'Rebajar el IVA de la energía del 21% al 10% y aplicar un IVA del 0% a alimentos básicos.',
        'Derogar los impuestos extraordinarios a banca y energéticas y bonificar el Impuesto de Patrimonio y Sucesiones.',
        'Simplificar licencias administrativas reduciendo el número de ministerios y organismos públicos duplicados.',
        'Reducir la deuda pública bajo reglas fiscales europeas prohibiendo aprobar nuevo gasto sin financiación garantizada y ampliando el control de la AIReF.'
      ],
      sourceRef: 'Contrato con España: Programa de Gobierno PP 2026'
    },
    vivienda: {
      headline: 'Construcción de 1 millón de viviendas, derogación de topes y desalojo en 48 horas',
      summary:
        'Rechaza la intervención de precios del alquiler, apostando por aumentar la oferta de suelo, rebajar impuestos a jóvenes y endurecer la ley contra ocupas.',
      measures: [
        'Derogar la Ley de Vivienda suprimiendo las zonas tensionadas y el índice de control de alquileres.',
        'Impulsar la construcción de un millón de viviendas en cuatro años mediante liberalización y agilización de suelo.',
        'Reducir del 10% al 4% el IVA de la primera vivienda para menores de 40 años.',
        'Reformar la ley para ejecutar desalojos policiales exprés de ocupantes ilegales en un máximo de 48 horas.'
      ],
      sourceRef: 'Plan de Vivienda del Partido Popular 2026'
    },
    empleo: {
      headline: 'Tarifa cero para nuevos autónomos, flexibilidad laboral y mochila individual',
      summary:
        'Defiende reducir cotizaciones para fomentar la contratación indefinida, apoyar a pymes y autónomos y rechazar rigideces legales de jornada.',
      measures: [
        'Implantar la tarifa cero de cotización durante el primer año para nuevos trabajadores autónomos.',
        'Flexibilizar la negociación colectiva por empresa rechazando imposiciones rígidas sobre la jornada laboral.',
        'Implementar una mochila individual de formación y protección laboral que acompañe al trabajador.',
        'Bonificar la contratación indefinida de jóvenes, mayores de 50 años y parados de larga duración.'
      ],
      sourceRef: 'Programa Electoral PP 2026: Empleo y Autónomos'
    },
    pensiones: {
      headline: 'Revalorización garantizada, caja única de cotizaciones y empleo sénior',
      summary:
        'Asegura la actualización de las pensiones junto al crecimiento económico, mantiene la caja única de la Seguridad Social y fomenta el retiro flexible.',
      measures: [
        'Garantizar por ley la revalorización de las pensiones sosteniendo el sistema mediante creación de empleo.',
        'Blindar la caja única de la Seguridad Social rechazando cualquier traspaso fragmentado de la gestión económica.',
        'Incentivar la prolongación voluntaria de la vida laboral compatibilizando trabajo y pensión al 100%.',
        'Fomentar planes complementarios de empleo y ahorro individual sin penalizaciones tributarias.'
      ],
      sourceRef: 'Programa Electoral PP 2026: Pensiones'
    },
    regeneracion_justicia: {
      headline: 'Elección directa del CGPJ por los jueces, independencia fiscal y control del gasto',
      summary:
        'Plantea recuperar la separación de poderes modificando el sistema de elección judicial y limitando el uso abusivo del decreto-ley.',
      measures: [
        'Reformar la Ley Orgánica del Poder Judicial para que la mayoría de vocales del CGPJ sean elegidos directamente por jueces.',
        'Exigir requisitos estrictos de independencia profesional para el Fiscal General del Estado, impidiendo exministros.',
        'Reducir el uso de reales decretos-leyes y someter los proyectos normativos a informes preceptivos del Consejo de Estado.',
        'Endurecer los delitos contra la administración pública recuperando las penas previas de malversación.'
      ],
      sourceRef: 'Plan de Calidad Institucional del PP 2026'
    },
    sanidad: {
      headline: 'Ampliación de plazas médicas, colaboración público-privada y plan de espera',
      summary:
        'Combina el refuerzo de la sanidad pública con conciertos sanitarios para reducir listas de espera y mejorar la libertad de elección.',
      measures: [
        'Convocar 1.000 plazas MIR adicionales de Medicina de Familia para cubrir jubilaciones y déficits rurales.',
        'Mantener la colaboración público-privada y los conciertos para reducir las listas de espera diagnósticas y quirúrgicas.',
        'Implantar una EBAU sanitaria o marco común para compartir historiales y tarjetas de forma fluida entre comunidades.',
        'Desarrollar un plan específico para el cáncer, enfermedades raras y salud mental infantojuvenil.'
      ],
      sourceRef: 'Sanidad en el Programa del PP 2026'
    },
    educacion: {
      headline: 'EBAU común en toda España, libertad de centro y blindaje de la concertada',
      summary:
        'Defiende la libertad de las familias para elegir colegio público o concertado, una prueba de acceso universitaria idéntica y refuerzo de excelencia.',
      measures: [
        'Implantar una EBAU común en fechas, contenidos y criterios de corrección en toda España.',
        'Proteger la financiación pública de la enseñanza concertada y la educación especial.',
        'Garantizar el derecho a estudiar en castellano junto a las lenguas cooficiales en todas las comunidades.',
        'Extender la gratuidad de la educación infantil de 0 a 3 años mediante colaboración con centros públicos y privados.'
      ],
      sourceRef: 'Educación, Mérito y Libertad del PP 2026'
    },
    inmigracion: {
      headline: 'Inmigración ligada a contrato en origen, visados por puntos y control fronterizo',
      summary:
        'Se opone a regularizaciones extraordinarias masivas, vincula la inmigración a empleo previo en origen y coopera con la UE en retornos.',
      measures: [
        'Rechazar regularizaciones extraordinarias masivas y vincular la inmigración legal a contratos de trabajo en origen.',
        'Aumentar el despliegue de vigilancia marítima y colaboración con Frontex frente a mafias de tráfico de personas.',
        'Agilizar la expulsión de extranjeros condenados por delitos graves o de sangre sin dilación por causas pendientes.',
        'Impulsar convenios de migración circular y formación profesional regulada en países socios.'
      ],
      sourceRef: 'Programa Electoral PP 2026: Política Migratoria'
    },
    seguridad: {
      headline: 'Agravante penal de multirreincidencia, protección policial y orden público',
      summary:
        'Endurece el Código Penal contra la delincuencia multirreincidente, recupera delitos de desórdenes graves y refuerza a Policía y Guardia Civil.',
      measures: [
        'Recuperar y agravar en el Código Penal el castigo a la multirreincidencia delictiva y hurtos reiterados.',
        'Reforzar las penas frente a desórdenes públicos graves, sedición adaptada y agresiones a agentes.',
        'Equiparar salarialmente, reconocer como profesión de riesgo y dotar de medios a Policía Nacional y Guardia Civil.',
        'Acelerar los juicios rápidos contra el crimen organizado, narcotráfico y bandas violentas.'
      ],
      sourceRef: 'Programa Electoral PP 2026: Seguridad y Código Penal'
    },
    modelo_estado: {
      headline: 'Defensa de la Constitución de 1978, unidad nacional y financiación multilateral',
      summary:
        'Defiende el Estado de las Autonomías constitucional rechazando concesiones bilaterales, cupos singulares o amnistías.',
      measures: [
        'Rechazar cualquier financiación singular o concierto asimétrico fuera del régimen común LOFCA.',
        'Negociar un nuevo sistema de financiación autonómica de forma multilateral entre todas las comunidades.',
        'Suprimir el delito de sedición revertido y tipificar la convocatoria ilegal de referéndums.',
        'Garantizar la unidad de mercado y coordinación administrativa entre el Gobierno central y las regiones.'
      ],
      sourceRef: 'Modelo Territorial y Constitucional del PP 2026'
    },
    energia_campo: {
      headline: 'Prórroga de centrales nucleares, apoyo al campo y plan nacional del agua',
      summary:
        'Propone alargar la vida útil de las centrales nucleares, eliminar el impuesto eléctrico y flexibilizar exigencias ecológicas al sector primario.',
      measures: [
        'Prolongar la vida útil de los reactores nucleares españoles y suprimir el impuesto a la generación eléctrica.',
        'Aprobar un Plan Nacional del Agua con inversiones en infraestructuras hidráulicas, regadíos y balsas.',
        'Exigir moratorias y flexibilización en las normas de la PAC y del Pacto Verde que restan competitividad agraria.',
        'Rebajar impuestos al gasóleo agrícola y proteger al sector pesquero y ganadero.'
      ],
      sourceRef: 'Energía y Sector Primario del PP 2026'
    },
    exterior_ue: {
      headline: 'Alianza atlántica firme, liderazgo europeo moderado y seguridad vecinal',
      summary:
        'Reafirma la lealtad con la OTAN y el cumplimiento del 2% del PIB en defensa, junto a una política europea orientada a competitividad.',
      measures: [
        'Acelerar el cumplimiento del objetivo del 2% del PIB en gasto de defensa dentro de la OTAN.',
        'Defender en el Consejo Europeo las interconexiones energéticas con Francia y la reindustrialización europea.',
        'Restablecer una relación equilibrada y transparente con Argelia y Marruecos salvaguardando Ceuta, Melilla y Canarias.',
        'Estrechar vínculos políticos, culturales y comerciales con Iberoamérica frente a regímenes autoritarios.'
      ],
      sourceRef: 'Política Exterior y Defensa del PP 2026'
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
      headline: 'Tipo dual de IRPF, rebaja general de impuestos y recorte del gasto político',
      summary:
        'Plantea una reducción masiva de impuestos, la supresión del gasto autonómico duplicado y el apoyo a pymes, familias y autónomos.',
      measures: [
        'Simplificar el IRPF en dos tramos (15% hasta 70.000 euros y 25% en adelante) con deducciones por hijos.',
        'Suprimir el Impuesto sobre el Patrimonio, Sucesiones, Donaciones y Plusvalía municipal en toda España.',
        'Reducir el IVA en productos básicos, suministros energéticos del hogar y medicamentos.',
        'Eliminar subvenciones públicas a partidos, sindicatos, patronales y organismos políticos autonómicos.',
        'Reducir la deuda pública y el déficit ejecutando recortes drásticos en estructuras autonómicas duplicadas y gasto político.'
      ],
      sourceRef: 'Programa Electoral VOX 2026: Es sentido común'
    },
    vivienda: {
      headline: 'Liberalización total del suelo, desalojo inmediato de okupas y rebaja fiscal',
      summary:
        'Propone construir masivamente mediante liberación de suelo urbanizable, eliminar impuestos en vivienda habitual y endurecer penas contra la ocupación.',
      measures: [
        'Liberalizar todo el suelo que no esté sujeto a especial protección ambiental para incrementar la oferta residencial.',
        'Suprimir el IVA e ITP en la adquisición de primera vivienda habitual para familias españolas.',
        'Ejecutar desalojos policiales inmediatos de ocupantes ilegales sin dilación judicial y retirarles toda ayuda pública.',
        'Derogar las limitaciones intervencionistas de precios del alquiler recogidas en la Ley de Vivienda.'
      ],
      sourceRef: 'Bloque de Vivienda y Propiedad — VOX 2026'
    },
    empleo: {
      headline: 'Cuota cero a autónomos por debajo del SMI, rebaja de cotizaciones y prioridad nacional',
      summary:
        'Defiende aliviar los costes laborales y burocráticos sobre autónomos y empresas españolas y priorizar a trabajadores nacionales en políticas activas.',
      measures: [
        'Implantar cuota cero de autónomos para quienes ingresen por debajo del Salario Mínimo Interprofesional.',
        'Reducir las cotizaciones sociales empresariales a cambio de contratación indefinida de jóvenes y parados.',
        'Establecer prioridad nacional en el acceso a ayudas sociales y formación para el empleo.',
        'Suprimir las subvenciones públicas a sindicatos y patronales sustituyéndolas por negociación directa.'
      ],
      sourceRef: 'Bloque de Empleo y Autónomos — VOX 2026'
    },
    pensiones: {
      headline: 'Garantía de pensiones con recorte del gasto político y fomento de la natalidad',
      summary:
        'Asegura la revalorización y viabilidad de las pensiones públicas eliminando el gasto autonómico improductivo e impulsando la natalidad española.',
      measures: [
        'Garantizar las pensiones reduciendo el despilfarro político autonómico, ministerios y organismos duplicados.',
        'Fomentar la natalidad y apoyo familiar como base demográfica indispensable del sistema de reparto.',
        'Eximir de tributación por IRPF a las pensiones públicas de jubilación y viudedad más bajas.',
        'Crear una cuenta individual informativa de cotizaciones junto a incentivos fiscales al ahorro voluntario.'
      ],
      sourceRef: 'Pensiones y Familia — VOX 2026'
    },
    regeneracion_justicia: {
      headline: 'Reforma de elección judicial por jueces, cadena perpetua y fin de aforamientos',
      summary:
        'Propone aumentar la dotación judicial, suprimir privilegios parlamentarios, endurecer las penas en el Código Penal e ilegalizar el separatismo.',
      measures: [
        'Reformar el CGPJ para que la totalidad de los vocales judiciales sean elegidos directamente por los jueces.',
        'Suprimir los aforamientos de cargos públicos y recortar el número de diputados y altos cargos.',
        'Ampliar la prisión permanente revisable y reducir la edad penal en supuestos violentos graves.',
        'Promover la ilegalización de partidos y organizaciones que atenten contra la unidad constitucional de España.'
      ],
      sourceRef: 'Justicia y Estado — VOX 2026'
    },
    sanidad: {
      headline: 'Devolución de la Sanidad al Estado y tarjeta única sanitaria nacional',
      summary:
        'Defiende recentralizar el Sistema Nacional de Salud bajo un solo ministerio para suprimir las 17 administraciones sanitarias regionales.',
      measures: [
        'Devolver la gestión sanitaria al Estado central garantizando una cartera única y tarjeta sanitaria nacional.',
        'Suprimir el acceso gratuito a sanidad no urgente para inmigrantes en situación irregular.',
        'Centralizar la compra nacional de medicamentos y equipamiento tecnológico eliminando duplicidades.',
        'Mantener la colaboración con centros privados para descongestionar listas de espera.'
      ],
      sourceRef: 'Sanidad Única Nacional — VOX 2026'
    },
    educacion: {
      headline: 'Cheque escolar, castellano en toda España y pin parental en centros',
      summary:
        'Propugna la devolución de las competencias educativas al Estado, la implantación del cheque escolar y el derecho de los padres a autorizar contenidos.',
      measures: [
        'Implantar un cheque escolar universal para que las familias elijan centro público, concertado o privado.',
        'Garantizar la enseñanza en castellano como lengua vehicular en todo el territorio nacional y examen de acceso único.',
        'Recuperar las competencias educativas para el Estado estableciendo un currículo común nacional.',
        'Establecer autorización parental expresa ante actividades extracurriculares de contenido moral o afectivo-sexual.'
      ],
      sourceRef: 'Educación y Libertad de las Familias — VOX 2026'
    },
    inmigracion: {
      headline: 'Deportación de ilegales, veto a regularizaciones y prioridad nacional',
      summary:
        'Prohíbe cualquier regularización extraordinaria de inmigrantes en situación ilegal, exigiendo repatriaciones inmediatas y prioridad nacional.',
      measures: [
        'Prohibir cualquier regularización extraordinaria de inmigrantes en situación ilegal.',
        'Deportar de forma inmediata a todos los inmigrantes irregulares y a extranjeros que cometan delitos graves o reiterados.',
        'Suprimir subvenciones a ONG que colaboren con redes migratorias irregulares y cerrar centros de acogida en barrios.',
        'Reservar ayudas sociales y acceso a nacionalidad bajo estricta integración y prioridad nacional.'
      ],
      sourceRef: 'Política Migratoria — VOX 2026'
    },
    seguridad: {
      headline: 'Militarización de fronteras, cadena perpetua y endurecimiento del Código Penal',
      summary:
        'Propone desplegar a las Fuerzas Armadas en Ceuta y Melilla, ampliar la prisión permanente revisable y blindar la autoridad policial.',
      measures: [
        'Desplegar a las Fuerzas Armadas en Ceuta, Melilla y vigilancia marítima frente al tráfico ilegal.',
        'Ampliar la prisión permanente revisable y reducir la edad penal en supuestos violentos muy graves.',
        'Reforzar la legítima defensa en el hogar y proteger legal y salarialmente a Policía Nacional y Guardia Civil.',
        'Suprimir policías autonómicas duplicadas integrando sus efectivos en los cuerpos estatales.'
      ],
      sourceRef: 'Seguridad y Defensa Fronteriza — VOX 2026'
    },
    modelo_estado: {
      headline: 'Estado unitario sin autonomías ni privilegios fiscales territoriales',
      summary:
        'Propone transformar el Estado autonómico en un Estado unitario administrativamente descentralizado devolviendo Sanidad, Educación, Justicia y Seguridad.',
      measures: [
        'Sustituir los 17 parlamentos y gobiernos autonómicos por un Estado unitario con un único Gobierno y Parlamento.',
        'Recuperar de inmediato las competencias de Educación, Sanidad, Justicia e Interior para el Estado.',
        'Suprimir las policías autonómicas duplicadas integrando sus efectivos en Policía Nacional y Guardia Civil.',
        'Garantizar la unidad de mercado suprimiendo trabas normativas regionales.'
      ],
      sourceRef: 'Unidad Nacional — VOX 2026'
    },
    energia_campo: {
      headline: 'Derogación del Pacto Verde Europeo, soberanía nuclear y defensa del campo',
      summary:
        'Rechaza la Agenda 2030 y las restricciones climáticas europeas, exigiendo prorrogar centrales nucleares y proteger al sector primario.',
      measures: [
        'Derogar la Ley de Cambio Climático, el Pacto Verde Europeo y las exigencias ambientales que encarecen al campo.',
        'Prolongar la vida útil de las centrales nucleares existentes y construir nuevos reactores para abaratar la luz.',
        'Aprobar un Plan Hidrológico Nacional con trasvases entre cuencas excedentarias y deficitarias.',
        'Exigir cláusulas espejo y aranceles estrictos frente a productos agrícolas extracomunitarios.'
      ],
      sourceRef: 'Energía, Agua y Sector Primario — VOX 2026'
    },
    exterior_ue: {
      headline: 'Soberanía nacional sobre Bruselas, Hispanidad y OTAN condicionada',
      summary:
        'Defiende la primacía de la Constitución española sobre el derecho de la UE y condiciona los compromisos aliados a la defensa de Ceuta y Melilla.',
      measures: [
        'Reformar los tratados europeos para crear una Europa de naciones soberanas sin primacía burocrática de Bruselas.',
        'Exigir la cobertura expresa del tratado de la OTAN sobre Ceuta y Melilla y firmeza frente a Marruecos.',
        'Consolidar una alianza cultural, diplomática y comercial estratégica con las naciones de la Iberosfera.',
        'Oponerse a la cesión de soberanía en política fiscal, migratoria o agraria ante organismos supranacionales.'
      ],
      sourceRef: 'Soberanía y Política Exterior — VOX 2026'
    }
  },

  salf: {
    economia: {
      headline: 'Exención de IRPF hasta 35.000 euros, recorte de ministerios y choque fiscal',
      summary:
        'Propone eximir de tributación por IRPF a las rentas medias y bajas, reducir drásticamente ministerios y cortar subvenciones políticas.',
      measures: [
        'Eximir totalmente del pago de IRPF a las rentas del trabajo de hasta 35.000 euros anuales.',
        'Reducir el tamaño de la administración central pasando de 22 a 10 ministerios y suprimir duplicidades autonómicas.',
        'Bajar el IVA de productos básicos, energía y vivienda y reducir la cuña fiscal del trabajo del 41% al 29%.',
        'Suprimir toda subvención estatal a partidos políticos, sindicatos, patronales y entidades ideológicas.',
        'Contener la deuda pública y la carga de intereses eliminando gasto ministerial y duplicidades regionales en lugar de subir impuestos.'
      ],
      sourceRef: 'Contrato Electoral SALF (119 medidas): Economía y Fiscalidad'
    },
    vivienda: {
      headline: 'Cero impuestos a primera vivienda, veto a fondos y desalojo en 48 horas',
      summary:
        'Combina exenciones fiscales totales en primera vivienda y créditos a menores de 45 años con prohibición de compra a fondos y desalojo exprés.',
      measures: [
        'Eliminar todos los impuestos ligados a la compra de primera vivienda (ITP, AJD e IVA reducido).',
        'Prohibir que grandes fondos de inversión extranjeros compren vivienda residencial urbana en España.',
        'Facilitar líneas de crédito hipotecario garantizadas para menores de 45 años y liberalizar el suelo urbano.',
        'Ejecutar el desalojo policial de ocupantes ilegales en menos de 48 horas tipificando el allanamiento agravado.'
      ],
      sourceRef: 'Contrato Electoral SALF: Vivienda'
    },
    empleo: {
      headline: 'Supresión de la cuota de autónomos, contrato único y mochila austriaca',
      summary:
        'Propugna abolir la cuota fija de autónomos, instaurar un contrato único con mochila austriaca y bajar cotizaciones empresariales.',
      measures: [
        'Eliminar la cuota mensual de autónomos sustituyéndola por tributación vinculada exclusivamente al beneficio neto real.',
        'Implantar un contrato único con mochila austriaca para facilitar la movilidad laboral sin pérdida de derechos.',
        'Reducir la cuña fiscal y cotizaciones sobre la contratación del 41% al 29% para elevar el salario neto.',
        'Suprimir toda subvención pública a sindicatos mayoritarios y patronales.'
      ],
      sourceRef: 'Contrato Electoral SALF: Empleo y Autónomos'
    },
    pensiones: {
      headline: 'Auditoría de la Seguridad Social y garantía de pensiones sin gasto político',
      summary:
        'Plantea sostener las pensiones eliminando duplicidades estatales, fomentando la natalidad nacional y reforzando el ahorro individual.',
      measures: [
        'Garantizar las pensiones públicas eliminando el gasto político improductivo y las pensiones vitalicias de cargos.',
        'Fomentar políticas intensivas de natalidad y empleo formal para equilibrar la pirámide de cotizantes.',
        'Realizar una auditoría independiente integral de las cuentas de la Seguridad Social.',
        'Permitir compatibilizar voluntariamente la pensión de jubilación con el trabajo autónomo o profesional.'
      ],
      sourceRef: 'Contrato Electoral SALF: Pensiones'
    },
    regeneracion_justicia: {
      headline: 'Corrupción imprescriptible, triple devolución, incentivo del 15% y penalización salarial',
      summary:
        'Eje central de SALF: penas imprescriptibles, premio al denunciante, macrocárcel para corruptos y bloqueo del sueldo del político si incumple.',
      measures: [
        'Declarar imprescriptibles los delitos de corrupción política y obligar al condenado a devolver el triple de lo sustraído.',
        'Recompensar al denunciante de corrupción con el 15% del capital público recuperado.',
        'Construir una macrocárcel de máxima seguridad sin beneficios penitenciarios ni tercer grado para corruptos y criminales violentos.',
        'Bloquear el 100% del sueldo público de los cargos electos en el Banco de España condicionado al cumplimiento del contrato electoral.'
      ],
      sourceRef: 'Contrato Electoral SALF: Corrupción y Cláusula de Penalización'
    },
    sanidad: {
      headline: 'Central única de compras, plazo máximo de 60 días y equiparación salarial',
      summary:
        'Defiende centralizar compras médicas para ahorrar costes, limitar esperas quirúrgicas a 60 días y retener al personal sanitario.',
      measures: [
        'Establecer una central única nacional de compras sanitarias evitando sobrecostes en 17 servicios regionales.',
        'Garantizar por ley un plazo máximo de 60 días para intervenciones quirúrgicas.',
        'Equiparar los salarios de médicos y enfermeros españoles con la media de Europa occidental.',
        'Digitalizar plenamente la historia clínica única e impedir el turismo sanitario fraudulento.'
      ],
      sourceRef: 'Contrato Electoral SALF: Sanidad'
    },
    educacion: {
      headline: 'Ley educativa a 20 años, cheque escolar y castellano garantizado en España',
      summary:
        'Propone sacar la educación del vaivén partidista mediante un marco estable de 20 años, cheque escolar y defensa del castellano.',
      measures: [
        'Aprobar una ley educativa estable con vigencia mínima de 20 años centrada en mérito y conocimiento.',
        'Implantar un cheque escolar ("el dinero sigue al alumno") para que las familias elijan centro libremente.',
        'Garantizar la escolarización en castellano en todo el territorio nacional sin exclusiones lingüísticas.',
        'Reforzar las carreras técnicas, matemáticas y formación profesional práctica.'
      ],
      sourceRef: 'Contrato Electoral SALF: Educación'
    },
    inmigracion: {
      headline: 'Expulsión en 48 horas de irregulares y bloqueo a países sin repatriación',
      summary:
        'Defiende restringir la entrada exclusivamente a inmigración legal y ejecutar expulsiones rápidas de irregulares y delincuentes extranjeros.',
      measures: [
        'Ejecutar la expulsión en 48 horas de inmigrantes en situación irregular o condenados por delito.',
        'Suspender visados, ayudas y acuerdos con países que rechacen repatriar a sus nacionales en situación ilegal.',
        'Permitir únicamente inmigración legal con contrato y verificación de antecedentes penales.',
        'Retirar subvenciones públicas a organizaciones dedicadas a la acogida irregular.'
      ],
      sourceRef: 'Contrato Electoral SALF: Inmigración'
    },
    seguridad: {
      headline: 'Macrocárcel de máxima seguridad, legítima defensa y Armada en el Estrecho',
      summary:
        'Adopta medidas punitivas de seguridad máxima, cumplimiento íntegro de penas sin tercer grado y despliegue militar marítimo contra el narco.',
      measures: [
        'Construir una macrocárcel de máxima seguridad sin tercer grado para violadores, asesinos, corruptos y multirreincidentes.',
        'Desplegar de forma permanente a la Armada y Ejército del Aire en el Estrecho contra el narcotráfico y mafias.',
        'Reforzar la presunción legal de legítima defensa armada dentro del hogar o negocio ante asaltos violentos.',
        'Impulsar una ley antiterrorista de máximos contra redes extremistas violentas.'
      ],
      sourceRef: 'Contrato Electoral SALF: Seguridad y Justicia'
    },
    modelo_estado: {
      headline: 'Centralización de competencias clave y recorte radical de estructuras regionales',
      summary:
        'Aboga por revertir duplicidades autonómicas hacia un Estado más centralizado, reduciendo parlamentos, asesores y entes públicos.',
      measures: [
        'Recentralizar competencias de Sanidad, Educación, Justicia y Compras Públicas para garantizar igualdad nacional.',
        'Recortar de forma drástica asesores, entes públicos, diputaciones y agencias autonómicas duplicadas.',
        'Suprimir la financiación pública a partidos y reducir el número de parlamentarios.',
        'Garantizar la igualdad de trato fiscal y administrativo en las 52 provincias españolas.'
      ],
      sourceRef: 'Contrato Electoral SALF: Reducción del Estado'
    },
    energia_campo: {
      headline: 'Revisión del Pacto Verde, soberanía energética y protección frente a importaciones',
      summary:
        'Cuestiona las imposiciones climáticas que encarecen el campo y la energía, apostando por energía nuclear y defensa del productor nacional.',
      measures: [
        'Suspender restricciones de la Agenda 2030 que penalicen a agricultores, ganaderos y transportistas españoles.',
        'Mantener y potenciar la energía nuclear para garantizar electricidad barata y estable a la industria.',
        'Imponer controles estrictos y reciprocidad arancelaria frente a importaciones agrarias extracomunitarias.',
        'Ejecutar infraestructuras hidráulicas nacionales contra la sequía sin trabas ideológicas.'
      ],
      sourceRef: 'Contrato Electoral SALF: Energía y Campo'
    },
    exterior_ue: {
      headline: 'Referéndum de renegociación con la UE y firmeza comercial frente a Marruecos',
      summary:
        'Propone renegociar los tratados de integración en la Unión Europea mediante referéndum y aplicar reciprocidad dura en política exterior.',
      measures: [
        'Convocar un referéndum vinculante para renegociar las condiciones de pertenencia de España a la Unión Europea.',
        'Aplicar bloqueos comerciales inmediatos a Marruecos ante presiones migratorias o bloqueos aduaneros en Ceuta y Melilla.',
        'Impulsar una ley antiterrorista de máximos contra organizaciones islamistas radicales.',
        'Defender la soberanía jurídica española frente a sentencias de tribunales supranacionales.'
      ],
      sourceRef: 'Contrato Electoral SALF: Geopolítica y UE'
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
      headline: 'Control estricto migratorio, defensa del trabajo nacional y repatriación ilegal',
      summary:
        'Rechaza la inmigración masiva desordenada por degradar salarios y cohesión nacional, exigiendo repatriación de irregulares.',
      measures: [
        'Establecer el cierre estricto frente a la inmigración irregular y ejecutar su repatriación inmediata.',
        'Limitar la residencia laboral extranjera a necesidades estrictas sin desplazar al trabajador español.',
        'Rechazar acuerdos internacionales que impongan cuotas obligatorias de reparto de inmigrantes.',
        'Priorizar la relación cultural e histórica ordenada con naciones hermanas de Hispanoamérica.'
      ],
      sourceRef: 'Programa Electoral FE de las JONS 29N-2026: Inmigración'
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
      headline: 'Reducción de jornada para conciliación y transición hacia empleos verdes',
      summary:
        'Apoya la reducción gradual de la jornada laboral, la reconversión laboral hacia empleos sostenibles y la prevención de riesgos laborales.',
      measures: [
        'Reducir la jornada laboral semanal para favorecer la conciliación familiar, personal y el cuidado.',
        'Crear programas de reconversión laboral hacia empleos verdes para trabajadores de sectores contaminantes o taurinos.',
        'Mejorar la prevención de riesgos laborales y la protección frente al acoso laboral garantizando salarios dignos.',
        'Impulsar el empleo joven en conservación ambiental, sanidad pública y economía circular.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026: Empleo y Transición Laboral'
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
      headline: 'Derechos humanos, vías legales de acogida y cierre de los CIEs',
      summary:
        'Defiende políticas de acogida humanitaria, la regularización digna de personas residentes y vías legales seguras de asilo y refugio.',
      measures: [
        'Garantizar el derecho de asilo, vías legales seguras y regularización administrativa de personas migrantes residentes.',
        'Cerrar los Centros de Internamiento de Extranjeros y respetar los derechos humanos en frontera.',
        'Promover el reconocimiento de refugiados climáticos ante desastres ambientales en países de origen.',
        'Facilitar la inclusión social, lingüística y laboral sin discriminación de origen.'
      ],
      sourceRef: 'Programa Electoral PACMA 29N-2026: Derechos Humanos y Migración'
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
      headline: 'Revolución Pyme, auditoría de gasto público y rebaja fiscal sostenible',
      summary:
        'Propone evaluar cada programa de gasto público por eficacia y coste, reducir burocracia a pymes y bajar impuestos sin desmantelar servicios esenciales.',
      measures: [
        'Someter todos los programas de gasto público a auditorías independientes de impacto y eficacia para decidir su continuidad.',
        'Reducir radicalmente la carga burocrática y regulatoria para pequeñas empresas y emprendedores ("Revolución Pyme").',
        'Disminuir la presión fiscal general de forma responsable garantizando la financiación de sanidad y educación.',
        'Fomentar la digitalización administrativa y las políticas de crecimiento orientadas al mérito y productividad.',
        'Reducir el déficit y la deuda pública combinando evaluación ex post de la AIReF sobre grandes obras y trato proporcionado a la deuda en la Ley de Segunda Oportunidad.'
      ],
      sourceRef: 'Programa Marco Democracia 21 (D21): Revolución Pyme y Economía 2026'
    },
    vivienda: {
      headline: 'Eliminación de impuestos en vivienda a menores de 35 años y seguridad jurídica',
      summary:
        'Aborda la crisis habitacional eliminando carga fiscal al acceso juvenil y movilizando suelo y fondos europeos con seguridad jurídica a diez años.',
      measures: [
        'Suprimir los impuestos ligados a la compra y acceso a la primera vivienda para menores de 35 años.',
        'Movilizar hasta 10.000 millones de euros en fondos europeos no ejecutados para vivienda asequible y rehabilitación.',
        'Establecer un plan de barrios plurianual con seguridad jurídica a diez años para ampliar el parque de alquiler.',
        'Evitar bloqueos urbanísticos que encarecen la construcción en grandes áreas metropolitanas.'
      ],
      sourceRef: 'Programa Marco Democracia 21 (D21): Vivienda y Emancipación 2026'
    },
    empleo: {
      headline: 'Salarios ligados a productividad, relevo en pymes y alivio a autónomos',
      summary:
        'Defiende impulsar subidas salariales sostenibles haciendo crecer el tejido pyme, facilitando el relevo generacional de negocios y aliviando a autónomos.',
      measures: [
        'Promover subidas salariales sostenibles apoyando el crecimiento en tamaño y productividad de las pymes españolas.',
        'Simplificar las obligaciones administrativas, fiscales y de cotización de los trabajadores autónomos.',
        'Aprobar medidas para que negocios rentables no cierren por jubilación del titular facilitando su traspaso laboral.',
        'Modernizar la formación continua para adaptar el empleo a la economía digital e inteligencia artificial.'
      ],
      sourceRef: 'Programa Democracia 21 (2026): Empleo y Revolución Pyme'
    },
    pensiones: {
      headline: 'Sostenibilidad actuarial, ahorro para el futuro y lucha contra soledad mayor',
      summary:
        'Aboga por asegurar las pensiones de hoy y del futuro con mayor tasa de actividad, cuentas transparentes, incentivos al ahorro y atención a mayores.',
      measures: [
        'Garantizar las pensiones públicas presentes y futuras elevando la tasa de empleo formal y la productividad.',
        'Informar con transparencia anual de la situación actuarial del sistema y favorecer el ahorro complementario juvenil.',
        'Eliminar obstáculos y cargas fiscales para atraer y retener ahorro e inversión previsional.',
        'Desplegar un plan nacional para garantizar una vida larga, plena y sin soledad no deseada para jubilados.'
      ],
      sourceRef: 'Programa Democracia 21 (2026): Pensiones y Mayores'
    },
    regeneracion_justicia: {
      headline: 'IGAE con IA y mandato blindado, cese sin presupuestos y juzgados anticorrupción',
      summary:
        'Eje central de Democracia 21 ("España Limpia"): control tecnológico previo del gasto, cese automático si no hay PGE y despolitización judicial.',
      measures: [
        'Dotar a la Intervención General (IGAE) de herramientas de IA y cruce de datos con un interventor blindado por 6 años.',
        'Suspender el sueldo al Gobierno si no presenta Presupuestos Generales y cesarlo automáticamente tras un año de prórroga.',
        'Crear juzgados especializados en corrupción, suprimir aforamientos, limitar a 2 mandatos y tipificar el delito de enchufismo.',
        'Desbloquear las listas electorales, recortar el 90% de asesores a dedo y reformar la elección del CGPJ por los jueces.'
      ],
      sourceRef: 'Documento España Limpia — Democracia 21 (2026)'
    },
    sanidad: {
      headline: 'Evaluación de resultados sanitarios, gestión profesionalizada y salud digital',
      summary:
        'Propone blindar la calidad de la sanidad pública mediante gerencias profesionales basadas en mérito, interoperabilidad digital y compra eficiente.',
      measures: [
        'Evaluar con indicadores transparentes las listas de espera y resultados clínicos de cada hospital público.',
        'Despolitizar los cargos directivos sanitarios mediante selección por concurso de méritos.',
        'Implantar la historia clínica digital plenamente interoperable en todo el Sistema Nacional de Salud.',
        'Sostener presupuestariamente la sanidad pública eliminando el gasto político improductivo.'
      ],
      sourceRef: 'Servicios Públicos Eficientes — Democracia 21 (2026)'
    },
    educacion: {
      headline: 'Digitalización educativa, bilingüismo real, FP tecnológica y meritocracia',
      summary:
        'Apuesta por modernizar los contenidos hacia competencias digitales, idiomas y formación técnica evaluando los resultados del sistema educativo.',
      measures: [
        'Evaluar periódicamente el rendimiento escolar para combatir el abandono y reforzar matemáticas y lectura.',
        'Impulsar la Formación Profesional tecnológica en estrecha colaboración con empresas innovadoras.',
        'Asegurar el dominio real del inglés y lenguas cooficiales garantizando el derecho a estudiar en castellano.',
        'Ampliar becas basadas en renta y esfuerzo académico para garantizar la igualdad de oportunidades.'
      ],
      sourceRef: 'Educación e Innovación — Democracia 21 (2026)'
    },
    inmigracion: {
      headline: 'Migración legal ordenada por demanda laboral y atracción de talento',
      summary:
        'Defiende vías ordenadas y ágiles de inmigración cualificada y laboral vinculadas a integración y legalidad europea.',
      measures: [
        'Agilizar visados legales de talento internacional y trabajadores necesarios en sectores con déficit.',
        'Garantizar el cumplimiento estricto de la ley frente a la inmigración irregular en coordinación con la UE.',
        'Agilizar la homologación digital transparente de títulos universitarios y profesionales extranjeros.',
        'Vincular la residencia estable a formación laboral e integración cívica constitucional.'
      ],
      sourceRef: 'Programa Democracia 21 (2026): Migración Ordenada'
    },
    seguridad: {
      headline: 'Respaldo real a las fuerzas de seguridad, agilidad judicial y ciberseguridad',
      summary:
        'Plantea modernizar medios policiales y judiciales frente a ciberdelincuencia, ocupaciones y delitos reiterados dando respaldo a los agentes.',
      measures: [
        'Dotar de medios tecnológicos modernos y respaldo institucional real a Policía Nacional y Guardia Civil.',
        'Asegurar agilidad judicial efectiva frente a ocupaciones ilegales y delincuencia multirreincidente.',
        'Preparar las capacidades de seguridad nacional frente a amenazas híbridas, ciberataques y crimen organizado.',
        'Evaluar con datos objetivos la eficacia de las políticas de prevención y seguridad en cada territorio.'
      ],
      sourceRef: 'Programa Democracia 21 (2026): Seguridad y Respaldo Policial'
    },
    modelo_estado: {
      headline: 'Constitucionalismo reformista, lealtad institucional y fin de polarización',
      summary:
        'Rechaza la política de bloques y los privilegios territoriales, apostando por coordinación administrativa eficaz dentro de la Constitución.',
      measures: [
        'Garantizar la igualdad de derechos de todos los ciudadanos españoles sin privilegios territoriales asimétricos.',
        'Eliminar duplicidades administrativas entre Estado, comunidades autónomas y diputaciones mediante auditorías.',
        'Modernizar las instituciones constitucionales reforzando contrapesos frente a mayorías coyunturales.',
        'Defender un modelo de financiación autonómica transparente basado en coste real de servicios.'
      ],
      sourceRef: 'Programa Marco Democracia 21 (2026)'
    },
    energia_campo: {
      headline: 'Transición energética competitiva basada en evidencia técnica e innovación',
      summary:
        'Aboga por garantizar energía asequible y descarbonizada para la industria combinando renovables, redes inteligentes y criterio técnico sobre nuclear.',
      measures: [
        'Priorizar la seguridad de suministro eléctrico a bajo coste para evitar la desindustrialización.',
        'Combinar el despliegue ágil de renovables y almacenamiento con evaluación técnica racional de las nucleares.',
        'Apoyar la modernización tecnológica del sector agrario reduciendo papeleo administrativo.',
        'Evaluar con rigor coste-beneficio las políticas climáticas para maximizar su eficacia.'
      ],
      sourceRef: 'Energía y Modernización — Democracia 21 (2026)'
    },
    exterior_ue: {
      headline: 'Europeísmo reformista pro-competitividad, Estado de derecho y apertura global',
      summary:
        'Plantea una España influyente y constructiva en el núcleo de la Unión Europea, comprometida con el mercado único, innovación y seguridad atlántica.',
      measures: [
        'Impulsar el mercado único europeo de capitales, tecnología e innovación para competir globalmente.',
        'Cumplir con responsabilidad los compromisos europeos y atlánticos de seguridad y defensa común.',
        'Defender el Estado de derecho y las libertades democráticas en las instituciones internacionales.',
        'Promover acuerdos comerciales abiertos que favorezcan a las empresas exportadoras españolas.'
      ],
      sourceRef: 'Visión Europea de Democracia 21 (2026)'
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
      headline: 'España decide y controla: freno a inmigración ilegal y expulsión de delincuentes',
      summary:
        'Exige soberanía nacional en política migratoria frente a cuotas europeas y la expulsión efectiva de entrada ilegal y delincuentes extranjeros.',
      measures: [
        'Implantar un control estricto de fronteras nacionales evitando la entrada irregular y redes de tráfico.',
        'Ejecutar expulsiones efectivas ante entrada ilegal o comisión de delitos graves.',
        'Rechazar repartos obligatorios de inmigrantes impuestos por la Unión Europea sin consentimiento nacional.',
        'Vincular la residencia legal al respeto estricto de las leyes y derechos fundamentales constitucionales.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Inmigración'
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
      headline: 'Crítica a imposiciones de la Agenda 2030 y defensa del sector primario nacional',
      summary:
        'Se opone a normativas supranacionales que perjudican a agricultores y ganaderos españoles, defendiendo soberanía alimentaria y energía asequible.',
      measures: [
        'Rechazar restricciones climáticas de la Agenda 2030 impuestas sin consulta democrática que arruinan al campo.',
        'Defender la agricultura, ganadería y pesca españolas frente a competencia desleal de terceros países.',
        'Garantizar un suministro energético barato y estable para familias y pymes sin impuestos verdes abusivos.',
        'Auditar el uso de fondos europeos ecológicos para evitar fraudes y sobrecostes.'
      ],
      sourceRef: 'Contrato Electoral Iustitia Europa: Agenda 2030 y Campo'
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

