import { createEslintConfig } from "./eslint/create-eslint-config";
import { createTypescriptConfig } from "./typescript-config/create-typescript-config";
import { CreateConfig } from "../model/create-config.model";
import { createTailwindConfig } from "./create-tailwind-config";

export const createConfigFiles = ({
  projectPath,
  type,
  isNextJs,
  isTailwind,
}: CreateConfig) => {
  createEslintConfig({ projectPath, type, isNextJs });

  createTypescriptConfig({ projectPath, type });

  if (isTailwind) {
    createTailwindConfig(projectPath);
  }
};
