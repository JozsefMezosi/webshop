import { join } from "path";
import { AddProjectToAppProps } from "../../model/add-project-to-web-app.model";
import { readFileSync, writeFileSync } from "fs";
import { generateProjectName } from "../generate-project-name";

export const addProjectToWebAppDependencies = ({
  projectName,
  type,
  webAppPath,
}: AddProjectToAppProps) => {
  const packageJsonPath = join(webAppPath, "package.json");
  const packageJson: { dependencies: Record<string, string> } = JSON.parse(
    readFileSync(packageJsonPath, "utf-8")
  );
  const newProjectName = generateProjectName({ projectName, type });
  packageJson.dependencies = {
    ...packageJson.dependencies,
    [newProjectName]: "workspace:*",
  };

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
};
