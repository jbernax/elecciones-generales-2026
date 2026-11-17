# Elecciones Generales España 2026 — Guía de Programas y Afinidad Ciudadana

Aplicación web estática, sobria y neutral para consultar, comparar y contrastar los programas electorales de 17 formaciones políticas ante las Elecciones Generales de España de 2026.

## Objetivos y diseño

- **Lectura clara sin ruido visual**: Diseño editorial de alto contraste sin gradientes decorativos, iconos superfluos ni ventanas modales invasivas.
- **17 formaciones en 6 bloques ideológicos**: Cobertura completa de `Izquierda` (`Sumar`, `Podemos`, `IU`, `PCE`), `Centro-izquierda` (`PSOE`), `Centro` (`Cs`, `UPyD`), `Centro-derecha` (`PP`, `UCD`), `Derecha` (`VOX`, `SALF`, `NN`, `FE de las JONS`) y `Otros` (`PACMA`, `D21`, `Iustitia Europa`, `FO`).
- **Cuestionario de medidas concretas**: En lugar de preguntas abiertas de «acuerdo o desacuerdo», cada cuestión plantea un problema público real con 4 o 5 opciones programáticas concretas y excluyentes, más ponderación de importancia por tema (`Prioritaria 2x`, `Normal 1x`, `Baja 0,5x` u `Omitir`).
- **Cero compilación para GitHub Pages**: Implementada íntegramente con HTML5, CSS3 y módulos ES6 nativos en la raíz del repositorio.

## Estructura del repositorio

```text
.
├── .gitignore
├── .nojekyll
├── index.html
├── styles.css
├── package.json
├── README.md
├── src/
│   ├── app.js                  # Controlador de vistas y enrutamiento por hash
│   ├── data/
│   │   ├── parties.js          # Definición de los 6 bloques y las 17 formaciones
│   │   ├── topics.js           # 10 áreas temáticas estructurales
│   │   ├── programs.js         # 170 fichas programáticas (17 partidos x 10 temas)
│   │   └── questionnaire.js    # 12 cuestiones de medidas concretas
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
