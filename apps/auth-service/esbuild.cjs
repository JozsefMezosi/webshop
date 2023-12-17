const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/server.ts"],
    outfile: "./dist/server.cjs",
    external: ["bcrypt"],
    format: "cjs",
    platform: "node",
    minify: true,
    bundle: true,
  })
  .catch(() => process.exit(1));
