import { Answers } from "../model/answers.model";

export const generateProjectName = ({
  projectName,
  type,
}: Pick<Answers, "projectName" | "type">) => `@${type}/${projectName}`;
