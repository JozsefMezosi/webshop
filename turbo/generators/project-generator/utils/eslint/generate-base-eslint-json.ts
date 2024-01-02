import { ProjectType, projectTypes } from "../../model/project-type.model";

export const generateBaseEslintJson = (
  type: ProjectType,
  isNextJs?: boolean
) => {
  if (type === projectTypes.backend) {
    return {
      root: true,
      extends: ["@config/eslint-config/backend.js"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
    };
  }

  return {
    root: true,
    extends: [
      isNextJs
        ? "@config/eslint-config/next.js"
        : "@config/eslint-config/react-internal.js",
    ],
    parser: "@typescript-eslint/parser",
  };
};
