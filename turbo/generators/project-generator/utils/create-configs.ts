import { createEslintConfig } from "./eslint/create-eslint-config";
import { createTypescriptConfig } from "./typescript-config/create-typescript-config";
import { CreateConfig } from "../model/create-config.model";
import { projectTypes } from "../model/project-type.model";
import { createTailwindConfig } from "./create-tailwind-config";
import { createPostCssConfig } from "./create-post-css-config";

export const createConfigFiles = ({
  projectPath,
  type,
  isNextJs,
}: CreateConfig) => {
  createEslintConfig({ projectPath, type, isNextJs });

  createTypescriptConfig({ projectPath, type });

  if (type === projectTypes.frontend) {
    createTailwindConfig(projectPath);
    createPostCssConfig(projectPath);
  }
};
