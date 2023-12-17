import { z } from "zod";
import { environmentVariablesModel } from "./model/environment-variables";

type EnvSchemaType = z.infer<typeof environmentVariablesModel>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchemaType {}
  }
}
