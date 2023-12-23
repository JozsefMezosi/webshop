import { join } from "path";
import { Answers } from "../../model/answers.model";
import { addProjectToNextConfig } from "./add-project-to-next-config";
import { addProjectToWebAppDependencies } from "./add-project-to-web-app-dependencies";

export const addProjectToWebApp = (answers: Answers) => {
  const { addToApp, turbo } = answers;
  if (!addToApp) {
    return;
  }

  const { root } = turbo.paths;

  const webAppPath = join(root, "apps", "web");

  addProjectToNextConfig({ ...answers, webAppPath });
  addProjectToWebAppDependencies({ ...answers, webAppPath });
};
