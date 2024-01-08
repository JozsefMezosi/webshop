import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { generateProjectName } from "../generate-project-name";
import { AddProjectToAppProps } from "../../model/add-project-to-web-app.model";

const fileBeginning =
  "/** @type {import('next').NextConfig} */\nmodule.exports = ";

export const addProjectToNextConfig = ({
  projectName,
  type,
  webAppPath,
}: AddProjectToAppProps) => {
  const nextConfigPath = join(webAppPath, "next.config.js");
  // make config parse compatible

  const nextConfigAsString = readFileSync(nextConfigPath, {
    encoding: "utf8",
  })
    .replaceAll("\n", "")
    .replaceAll(";", "")
    .replaceAll(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ')
    .replaceAll(/,(?!\s*?[{["'\w])/g, "");

  const nextConfig: { transpilePackages: string[] } = JSON.parse(
    nextConfigAsString
      .slice(fileBeginning.replaceAll("\n", "").length)
      .replaceAll(" ", "")
      .replaceAll(",]", "]")
  );

  const transpilePackages = [
    ...nextConfig.transpilePackages,
    generateProjectName({ projectName, type }),
  ];

  const newNextConfig = JSON.stringify(
    { ...nextConfig, transpilePackages },
    null,
    2
  );

  const newNextJsConfig = `${fileBeginning}${newNextConfig}`;

  writeFileSync(nextConfigPath, newNextJsConfig);
};
