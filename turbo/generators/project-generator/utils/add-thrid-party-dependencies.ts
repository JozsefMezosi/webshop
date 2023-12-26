import { execSync } from "child_process";
import { Answers } from "../model/answers.model";
import { projectTypes } from "../model/project-type.model";

const frontendDependencies: string[] = ["react", "react-dom"] as const;
const frontendDevDependencies: string[] = [
  "@types/node",
  "@types/react",
  "@types/react-dom",
  "autoprefixer",
  "postcss",
  "sass",
  "tailwind",
] as const;
type AddThirdPartyDependenciesProps = Answers & {
  projectPath: string;
};
export const addThirdPartyDependencies = ({
  projectPath,
  database,
  isNextJs: nextjs,
  type,
}: AddThirdPartyDependenciesProps) => {
  let devDependencies: string[] = [];
  let dependencies: string[] = [];
  if (type === projectTypes.backend) {
    if (database) {
      dependencies.push("neo4j-driver");
    }
  }

  if (type === projectTypes.frontend) {
    dependencies = [...frontendDependencies, ...dependencies];
    devDependencies = [...frontendDevDependencies, ...devDependencies];
    if (nextjs) {
      dependencies = [...dependencies, "next"];
    }
  }

  if (devDependencies.length) {
    execSync(
      `cd ${projectPath} && pnpm add ${devDependencies.join(" ")} -E -D`
    );
  }

  if (dependencies.length) {
    execSync(`cd ${projectPath} && pnpm add ${dependencies.join(" ")} -E`);
  }
};
