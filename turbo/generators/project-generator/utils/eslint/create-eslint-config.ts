import { join } from "path";
import { projectTypes } from "../../model/project-type.model";
import { generateBaseEslintJson } from "./generate-base-eslint-json";
import { writeFileSync } from "fs";
import { CreateConfig } from "../../model/create-config.model";

export const createEslintConfig = ({
  projectPath,
  type,
  isNextJs,
}: CreateConfig) => {
  const baseEslintJson = JSON.stringify(
    generateBaseEslintJson(type, isNextJs),
    null,
    2
  );

  if (type === projectTypes.backend) {
    const configPath = join(projectPath, `.eslintrc.json`);

    writeFileSync(configPath, baseEslintJson);
    return;
  }

  const configPath = join(projectPath, `.eslintrc.js`);

  const configFileValue = `module.exports = ${baseEslintJson}`;

  writeFileSync(configPath, configFileValue);
  return;
};
