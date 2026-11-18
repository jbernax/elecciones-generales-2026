# Elecciones Generales España 2026 — Guía de Programas y Afinidad Ciudadana

Aplicación web estática, sobria y neutral para consultar, comparar y contrastar los programas electorales de 18 partidos y coaliciones ante las Elecciones Generales de España de 2026 (29N).

## Objetivos y diseño

- **Arquitectura unificada y lectura sobria**: Interfaz de desplazamiento único en etapas diferenciadas —panorama fiscal de partida, directorio Bento asimétrico de 12 columnas, comparador lateral dividido en panel de control y matriz (`Fichas` / `Tabla`), cuestionario en pantalla dividida con marcador de afinidad en tiempo real y cajón lateral deslizable para consultar programas completos y PDFs integrados— con selector de paleta `Obsidian Carbon` y `Daylight Editorial`.
- **18 partidos y coaliciones en 6 bloques ideológicos**: Cobertura completa de `Izquierda` (`Frente Amplio`, `Sumar`, `Podemos`, `IU`, `PCE`), `Centro-izquierda` (`PSOE`), `Centro` (`Cs`, `UPyD`), `Centro-derecha` (`PP`, `UCD`), `Derecha` (`VOX`, `SALF`, `NN`, `FE de las JONS`) y `Otros` (`PACMA`, `D21`, `Iustitia Europa`, `FO`).
- **Cuestionario de medidas concretas**: En lugar de preguntas abiertas de «acuerdo o desacuerdo», cada cuestión plantea un problema público real con 4 o 5 opciones programáticas concretas y excluyentes, más ponderación de importancia por tema (`Alta (x2)`, `Normal (x1)`, `Baja (x0,5)` u `Omitir`).
- **Cero compilación para GitHub Pages**: Implementada íntegramente con HTML5, CSS3 y módulos ES6 nativos en la raíz del repositorio.

## Estructura del repositorio

```text
.
├── .gitignore
├── .nojekyll
├── DESIGN.md                 # Especificación tipográfica y estructural (restyle-modern)
├── index.html
├── restyle-tokens.css        # Sistema de diseño y rejillas asimétricas (obsidian-carbon / daylight)
├── styles.css                # Capa visual y adaptación móvil de componentes
├── package.json
├── README.md
├── pdfs/                     # Documentos PDF oficiales alojados en el repositorio
├── src/
│   ├── app.js                  # Controlador de vistas, cajón de perfil y test en tiempo real
│   ├── data/
│   │   ├── parties.js          # Definición de los 6 bloques y las 18 formaciones y coaliciones
│   │   ├── topics.js           # 12 áreas temáticas estructurales
│   │   ├── macroContext.js     # Indicadores de deuda pública, déficit y reglas fiscales (2026)
│   │   ├── programs.js         # 216 fichas programáticas (18 partidos x 12 temas)
│   │   └── questionnaire.js    # 15 cuestiones de medidas concretas
│   └── engine/
│       └── affinityEngine.js   # Cálculo de afinidad ponderada, filtrado y comparativa
└── tests/
    └── dataAndEngine.test.js   # Pruebas automatizadas con node:test
```

## Ejecución local y pruebas

No se requieren dependencias externas de `npm`; basta con tener Node.js instalado para ejecutar la batería de pruebas automatizadas y Python 3 (o cualquier servidor estático) para servir los módulos ES6 en local.

```bash
# Ejecutar pruebas de integridad de datos y motor de afinidad
npm test

# Servir la aplicación estática en http://localhost:8090
npm start
```

## Publicación en GitHub Pages

1. Cree un repositorio público en GitHub y suba la rama `main`:

```bash
git remote add origin https://github.com/<usuario>/<repositorio>.git
git push -u origin main
```

2. En GitHub, abra **Settings -> Pages**.
3. En **Build and deployment**, seleccione **Deploy from a branch**.
4. Elija la rama `main` y la carpeta `/ (root)`, y guarde los cambios.
5. El archivo `.nojekyll` incluido en la raíz garantiza que todos los módulos JavaScript se sirvan directamente sin procesamiento adicional.

## Documentos PDF locales (`pdfs/`)

La carpeta `pdfs/` aloja los programas oficiales descargables sin restricciones anti-bot (`Frente Amplio` / `Sumar` / `IU`, `PCE` estratégico 2024, `Cs`/`D21`, `PP`, `FE de las JONS`, `PACMA`, `Iustitia Europa` y `Frente Obrero`) para consultarlos o leerlos de forma integrada desde el propio dominio de GitHub Pages sin salir a sitios externos.

- Los servidores de `PSOE`, `VOX` y `SALF` bloquean descargas automatizadas (`HTTP 403` / desafío anti-bot), por lo que sus perfiles mantienen el enlace directo oficial y una nota explicativa; si descarga manualmente sus PDFs desde un navegador y los guarda en `pdfs/`, basta con asignar `localPdfPath` en `src/data/parties.js`.
- `Podemos` dispone de programa publicado en `podemos.info/programa/` (442 medidas / 141 páginas para el 29N-2026) sin espejo local estático en `pdfs/`, mientras que `UCD`, `UPyD` y `NN` carecen de programa electoral en PDF para 2026.
