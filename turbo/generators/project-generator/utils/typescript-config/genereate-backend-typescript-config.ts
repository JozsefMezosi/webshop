export const generateBackendTypescriptConfig = () => ({
  extends: "@repo/typescript-config/backend-base.json",
  include: ["**/*"],
  exclude: ["node_modules"],
});
