import { writeFileSync } from "fs";
import { join } from "path";

export const createTailwindConfig = (projectPath: string) => {
  const config =
    'module.exports = require("@tailwind/config/tailwind.config");';
  const configPath = join(projectPath, `tailwind.config.js`);

  writeFileSync(configPath, config);
};
