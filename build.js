const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

// Ruta al archivo .env
const envFilePath = path.resolve(__dirname, ".env");

// Leer el archivo .env
const envConfig = fs.existsSync(envFilePath)
  ? fs.readFileSync(envFilePath, "utf8")
  : "";
const envVars = envConfig
  .split("\n")
  .filter((line) => line.trim() !== "" && !line.startsWith("#"))
  .reduce((acc, line) => {
    const [key, value] = line.split("=");
    acc[key] = value;
    return acc;
  }, {});

// Configurar variables para esbuild
const define = Object.keys(envVars).reduce((defs, key) => {
  defs[`process.env.${key}`] = JSON.stringify(envVars[key]);
  return defs;
}, {});

// Ejecutar esbuild con las variables de entorno definidas
esbuild
  .build({
    entryPoints: ["src/index.js"],
    bundle: true,
    platform: "node",
    target: "node14",
    outfile: "dist/index.js",
    sourcemap: true,
    minify: true,
    define,
  })
  .catch(() => process.exit(1));
