import { writeFileSync } from "fs";
import { join } from "path";

export const createPostCssConfig = (projectPath: string) => {
  const config = 'module.exports = require("@tailwind/config/postcss.config");';
  const configPath = join(projectPath, `postcss.config.js`);

  writeFileSync(configPath, config);
};
