import { checkEnvironmentVariables } from "environment-variable-handler";
import { z } from "zod";

export const environmentVariablesModel = z.object({
  CONNECTION_STRING: z.string().min(1),
  DATABASE_USER: z.string().min(1),
  DATABASE_PASSWORD: z.string().min(1),
  PORT: z.string().min(1),
  HOST: z.string().min(1),
  JWT_SECRET: z.string().min(24),
});

checkEnvironmentVariables(environmentVariablesModel);
