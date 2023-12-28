import { moveOrderToNextStatusQuery } from "./move-order-to-next-status.query";
import { validateRoles } from "../../utils/validate-roles";
import { UserRoles } from "user-model";

export const MoveOrderToNextStatus = async (
  _: never,
  args: { orderId: string },
  context: { jwt: { roles: UserRoles[] } }
) => {
  validateRoles({
    requiredRoles: [UserRoles.admin],
    userRoles: context.jwt.roles,
  });

  return moveOrderToNextStatusQuery(args.orderId);
};
