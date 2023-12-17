import { UserData } from "database-core";
import Joi from "joi";
import { userExists } from "../../queries/user-exists";

export const validateUserRegisterDataSchema = Joi.object<UserData>({
  email: Joi.string()
    .max(256)
    .email()
    .required()
    .external(async (email, { message }) => {
      const isUserAlreadyExists = await userExists(email);
      if (isUserAlreadyExists) {
        return message({ external: "Email is already in use!" });
      }

      return email;
    })
    .trim(),
  password: Joi.string()
    .min(8)
    .max(256)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    .required()
    .trim(),
  firstName: Joi.string().max(128).required().trim(),
  lastName: Joi.string().max(128).required().trim(),
});
