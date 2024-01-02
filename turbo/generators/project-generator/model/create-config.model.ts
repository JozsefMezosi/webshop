import { Answers } from "./answers.model";
import { ProjectType } from "./project-type.model";

export type CreateConfig = Pick<Answers, "type" | "isNextJs" | "isTailwind"> & {
  projectPath: string;
};
