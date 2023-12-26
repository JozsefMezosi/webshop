import { writeFileSync } from "fs";
import { join } from "path";
import { CreateConfig } from "../../model/create-config.model";
import { projectTypes } from "../../model/project-type.model";
import { generateBackendTypescriptConfig } from "./genereate-backend-typescript-config";
import { generateFrontendTypescriptConfig } from "./genereate-frontend-typescript-config";

export const createTypescriptConfig = ({ projectPath, type }: CreateConfig) => {
  const config =
    type === projectTypes.backend
      ? generateBackendTypescriptConfig()
      : generateFrontendTypescriptConfig();

  const tsconfig = JSON.stringify(config, null, 2);
  const configPath = join(projectPath, `tsconfig.json`);

  writeFileSync(configPath, tsconfig);
};
