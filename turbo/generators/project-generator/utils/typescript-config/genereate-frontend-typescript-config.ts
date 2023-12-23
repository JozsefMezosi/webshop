export const generateFrontendTypescriptConfig = () => ({
  extends: "@repo/typescript-config/react-library.json",
  compilerOptions: {
    outDir: "dist",
  },
  include: ["src"],
  exclude: ["node_modules", "dist"],
});
