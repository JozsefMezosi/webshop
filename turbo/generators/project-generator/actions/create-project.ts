import { PlopTypes } from "@turbo/gen";
import { mkdirSync } from "fs";
import { Answers } from "../model/answers.model";
import { getNewProjectPathName } from "../utils/generate-project-path-name";
import { createEslintConfig } from "../utils/eslint/create-eslint-config";
import { createTypescriptConfig } from "../utils/typescript-config/create-typescript-config";
import { createPackageJson } from "../utils/package-json/create-package-json";
import { addProjectToWebApp } from "../utils/add-project-to-web-app/add-project-to-web-app";
import { join } from "path";
import { execSync } from "child_process";
import { createIndexFile } from "../utils/create-index-file";

export const createProject: PlopTypes.CustomActionFunction = async (
  _answers
) => {
  const answers = _answers as Answers;

  const type = answers.type;

  const projectPath = getNewProjectPathName(answers);

  mkdirSync(projectPath);
  mkdirSync(join(projectPath, "src"));

  createPackageJson({ answers, projectPath });

  createEslintConfig({ projectPath, type });

  createTypescriptConfig({ projectPath, type });

  addProjectToWebApp(answers);

  createIndexFile(projectPath);

  console.log("Running pnpm install...");
  execSync(`pnpm install`);
  return "Project created successfully!";
};