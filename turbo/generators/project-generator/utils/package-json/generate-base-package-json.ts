import { Answers } from "../../model/answers.model";
import { projectTypes } from "../../model/project-type.model";
import { generateProjectName } from "../generate-project-name";

export const generateBasePackageJson = ({
  projectName,
  logger,
  type,
}: Answers) => {
  const packageJson: Record<string, unknown> = {
    name: generateProjectName({ projectName, type }),
    version: "1.0.0",

    main: "src/index.js",
    scripts: {},
    devDependencies: {
      "@repo/eslint-config": "workspace:*",
      "@repo/typescript-config": "workspace:*",
    },

    license: "ISC",
  };

  if (type === projectTypes.backend) {
    packageJson.type = "module";
    packageJson.scripts = {
      typecheck: "tsc --noEmit",
      build:
        "typecheck && esbuild src/index.ts --bundle --platform=node --outfile=dist/index.js",
      eslint: "eslint .",
    };
  }
  if (logger) {
    packageJson.dependencies = {
      logger: "workspace:*",
    };
  }

  return packageJson;
};
