import { PlopTypes } from "@turbo/gen";
import { projectGenerator } from "./project-generator/generator";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  projectGenerator(plop);
}
