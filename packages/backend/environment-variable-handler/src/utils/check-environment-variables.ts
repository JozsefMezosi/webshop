import { config } from "dotenv";
import { ZodError, ZodObject, ZodRawShape } from "zod";
export { config } from "dotenv";
config();

export const checkEnvironmentVariables = <T extends ZodRawShape>(
  environmentVariables: ZodObject<T>
) => {
  try {
    return environmentVariables.parse(process.env);
  } catch (err) {
    if (err instanceof ZodError) {
      const { fieldErrors } = err.flatten();
      const errorMessage = Object.entries(fieldErrors)
        .map(([field, errors]) =>
          errors ? `${field}: ${errors.join(", ")}` : field
        )
        .join("\n  ");
      throw new Error(`Missing environment variables:\n  ${errorMessage}`);
    }
  }

  return {} as T;
};
