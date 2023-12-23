import { join } from "path";
import { Answers } from "../model/answers.model";

export const getNewProjectPathName = ({
  type,
  projectName,
  turbo,
}: Answers) => {
  const { root } = turbo.paths;

  return join(root, "packages", type, projectName);
};
