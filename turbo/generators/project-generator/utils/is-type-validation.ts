import { ProjectType } from "../model/project-type.model";

export const isTypeValidation =
  (targetType: ProjectType) => (answers: object) => {
    if (!answers || !("type" in answers)) {
      return false;
    }
    const type = answers.type;

    if (type !== targetType) {
      return false;
    }

    return true;
  };
