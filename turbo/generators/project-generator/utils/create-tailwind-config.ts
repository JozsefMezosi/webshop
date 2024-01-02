import { writeFileSync } from "fs";
import { join } from "path";

const config = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {},
  plugins: [],
};
`;
export const createTailwindConfig = (projectPath: string) => {
  const configPath = join(projectPath, `tailwind.config.js`);

  writeFileSync(configPath, config);
};
