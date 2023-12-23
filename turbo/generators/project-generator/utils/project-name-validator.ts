import { existsSync } from "fs";
import { join } from "path";
import { Answers } from "../model/answers.model";
import { getNewProjectPathName } from "./generate-project-path-name";

export const projectNameValidator = (
  input: string,
  answers: Omit<Answers, "turbo">
) => {
  if (input.includes(".")) {
    return "file name cannot include an extension";
  }
  if (input.includes(" ")) {
    return "file name cannot include spaces";
  }
  if (!input) {
    return "file name is required";
  }

  if (!answers || !("type" in answers)) {
    return "Type is not provided!";
  }

  const type = answers.type;

  const projectName = input;

  const newProjectPath = getNewProjectPathName({
    type,
    projectName,
    turbo: { paths: { root: join(__dirname, "..", "..", "..") } },
  });
  if (existsSync(newProjectPath)) {
    return `Project with this name already exists in this path: ${newProjectPath}`;
  }

  return true;
};
