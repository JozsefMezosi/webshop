import { ProjectType } from "./project-type.model";

export interface CreateConfig {
  type: ProjectType;
  projectPath: string;
}
