import { join } from "path";
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

  const configPath = join(projectPath, `.eslintrc.json`);
  writeFileSync(configPath, baseEslintJson);
};
