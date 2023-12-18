const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/server.ts"],
    outfile: "./dist/server.js",
    format: "js",
    platform: "node",
    minify: true,
    bundle: true,
  })
  .catch(() => process.exit(1));
