import { UserRoles } from "database-core/src/model/user.model";
import { GraphQLError } from "graphql";
interface ValidateRolesProps {
  userRoles?: UserRoles[];
  requiredRoles: UserRoles[];
}
export const validateRoles = ({
  requiredRoles,
  userRoles,
}: ValidateRolesProps) => {
  if (!userRoles || !userRoles.find((role) => requiredRoles.includes(role))) {
    throw new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }
};
