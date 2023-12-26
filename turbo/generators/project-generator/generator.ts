import { PlopTypes } from "@turbo/gen";
import { isTypeValidation } from "./utils/is-type-validation";
import { createProject } from "./actions/create-project";
import { projectTypes } from "./model/project-type.model";
import { projectNameValidator } from "./utils/project-name-validator";

export const projectGenerator = (plop: PlopTypes.NodePlopAPI) =>
  plop.setGenerator("project", {
    description:
      "Project generator that can generate backend or frontend projects",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Do you want to create a fronted or a backend project?",
        choices: ["frontend", "backend"],
      },
      {
        type: "confirm",
        name: "addToApp",
        message: "Do you want to add this project into the web app?",
        when: isTypeValidation(projectTypes.frontend),
      },
      {
        type: "confirm",
        name: "database",
        message: "Do you want to add database to the project?",
        when: isTypeValidation(projectTypes.backend),
      },
      {
        type: "confirm",
        name: "logger",
        message: "Do you want to add logger to the project?",
        when: isTypeValidation(projectTypes.backend),
      },
      {
        type: "confirm",
        name: "isNextJs",
        message: "Do you want to add nextjs to the project?",
        when: isTypeValidation(projectTypes.frontend),
      },
      {
        type: "input",
        name: "projectName",
        message: "What is the name of the new project to create?",
        validate: projectNameValidator,
      },
    ],
    actions: [createProject],
  });
