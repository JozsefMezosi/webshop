import { ProjectType, projectTypes } from "../../model/project-type.model";

export const generateBaseEslintJson = (
  type: ProjectType,
  isNextJs?: boolean
) => {
  if (type === projectTypes.backend) {
    return {
      root: true,
      extends: ["@repo/eslint-config/backend.js"],
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
        ? "@repo/eslint-config/next.js"
        : "@repo/eslint-config/react-internal.js",
    ],
    parser: "@typescript-eslint/parser",
  };
};
