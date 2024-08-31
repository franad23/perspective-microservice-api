// esbuild.config.js

const esbuild = require("esbuild");
const path = require("path");

esbuild
  .build({
    entryPoints: ["src/index.js"], // Cambia a la ruta de tu archivo de entrada principal
    bundle: true,
    platform: "node", // Especifica que estás construyendo para Node.js
    target: "node20", // Ajusta esto a la versión de Node.js que estás utilizando
    outdir: "dist", // Directorio de salida para los archivos construidos
    sourcemap: false, // Opcional: Genera archivos de mapa de fuente para depuración
    minify: false, // Opcional: Minifica el código, establece en true si deseas minificar
  })
  .catch(() => process.exit(1));
