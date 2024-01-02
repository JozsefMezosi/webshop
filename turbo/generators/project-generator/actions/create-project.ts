import { PlopTypes } from "@turbo/gen";
import { mkdirSync } from "fs";
import { Answers } from "../model/answers.model";
import { getNewProjectPathName } from "../utils/generate-project-path-name";
import { createPackageJson } from "../utils/package-json/create-package-json";
import { addProjectToWebApp } from "../utils/add-project-to-web-app/add-project-to-web-app";
import { join } from "path";
import { execSync } from "child_process";
import { createIndexFile } from "../utils/create-index-file/create-index-file";
import { addThirdPartyDependencies } from "../utils/add-thrid-party-dependencies";
import { createConfigFiles } from "../utils/create-configs";

export const createProject: PlopTypes.CustomActionFunction = async (
  _answers
) => {
  const answers = _answers as Answers;

  const type = answers.type;

  const projectPath = getNewProjectPathName(answers);

  mkdirSync(projectPath);
  mkdirSync(join(projectPath, "src"));

  createPackageJson({ answers, projectPath });

  createConfigFiles({
    projectPath,
    type,
    isNextJs: answers.isNextJs,
    isTailwind: answers.isTailwind,
  });

  addProjectToWebApp(answers);

  createIndexFile(projectPath, type);

  console.log("Running pnpm install...");

  addThirdPartyDependencies({ projectPath, ...answers });
  execSync(`pnpm install`);
  return "Project created successfully!";
};
