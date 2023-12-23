import { appendFileSync } from "fs";
import { join } from "path";

const indexFileContent = "export const example = 'example'";
export const createIndexFile = (projectPath: string) => {
  const indexPath = join(projectPath, "src", "index.ts");
  appendFileSync(indexPath, indexFileContent);
};
