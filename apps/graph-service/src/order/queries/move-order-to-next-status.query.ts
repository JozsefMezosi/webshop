import { logger } from "logger";
import { getDriver } from "../../utils/get-driver.js";

export const moveOrderToNextStatusQuery = async (orderId: string) => {
  const session = (await getDriver()).session();

  try {
    const order = (
      await session.run(
        `
          MATCH (order:Order { id: $orderId}) 
          where order.status <> "DELIVERED"
          with order,
          CASE order.status
              when "NEW" then "IN_PROGRESS"
              when "IN_PROGRESS" then "UNDER_DELIVERY"
              when "UNDER_DELIVERY" then "DELIVERED"
          end as newStatus
          SET order.status = newStatus
          RETURN order`,
        { orderId: orderId }
      )
    ).records[0]?.get("order").properties;

    return order;
  } catch (error) {
    logger.error(error);
    throw error;
  } finally {
    session.close();
  }
};
