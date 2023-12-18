import { RegisterUserDto } from "../model/user.model";
import { runQuery } from "../../utils/run-query";

export const createUser = async (userData: RegisterUserDto) => {
  runQuery(
    "CREATE (u:User {roles: ['user'], password: $password, lastName: $lastName, firstName: $firstName, email: $email, addresses: []})",
    userData
  );
};
