import { appendFileSync } from "fs";
import { join } from "path";
import { ProjectType, projectTypes } from "../../model/project-type.model";

const frontEndIndexFileContent =
  "export const Example = () => <div>Example component</div>";

const backIndexFileContent = "export const example = 'example'";

export const createIndexFile = (projectPath: string, type: ProjectType) => {
  const isFrontend = type === projectTypes.frontend;
  const fileName = isFrontend ? "index.tsx" : "index.ts";
  const indexPath = join(projectPath, "src", fileName);

  const indexFileContent = isFrontend
    ? frontEndIndexFileContent
    : backIndexFileContent;

  appendFileSync(indexPath, indexFileContent);
};
