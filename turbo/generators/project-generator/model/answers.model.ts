import { ProjectType } from "./project-type.model";

export interface Answers {
  type: ProjectType;
  projectName: string;
  database?: boolean;
  logger?: boolean;
  addToApp?: boolean;
  turbo: {
    paths: {
      root: string;
    };
  };
}
