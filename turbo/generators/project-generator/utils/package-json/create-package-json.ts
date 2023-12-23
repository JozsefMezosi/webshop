import { writeFileSync } from "fs";
import { join } from "path";
import { generateBasePackageJson } from "./generate-base-package-json";
import { Answers } from "../../model/answers.model";

interface CreatePackageJsonProps {
  projectPath: string;
  answers: Answers;
}

export const createPackageJson = ({
  answers,
  projectPath,
}: CreatePackageJsonProps) => {
  const basePackageJson = JSON.stringify(
    generateBasePackageJson(answers),
    null,
    2
  );

  const packageJsonPath = join(projectPath, "package.json");
  writeFileSync(packageJsonPath, basePackageJson);
};
