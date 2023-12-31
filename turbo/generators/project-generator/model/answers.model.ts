import { ProjectType } from "./project-type.model";

export interface Answers {
  type: ProjectType;
  projectName: string;
  database?: boolean;
  isNextJs?: boolean;
  logger?: boolean;
  addToApp?: boolean;
  isTailwind?: boolean;
  turbo: {
    paths: {
      root: string;
    };
  };
}
