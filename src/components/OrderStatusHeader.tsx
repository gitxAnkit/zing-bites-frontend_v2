import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDeliveryTime = () => {
    const created = new Date(order.createdAt);
    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    return created.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const { label, progressValue } =
    ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
          Order Status: <span className="text-red-600">{label}</span>
        </h1>
        <p className="text-lg font-medium text-gray-600">
          Expected Delivery By:{" "}
          <span className="text-green-600 font-semibold">
            {getExpectedDeliveryTime()}
          </span>
        </p>
      </div>
      <Progress
        className="animate-pulse"
        value={progressValue}
      />
    </div>
  );
};

export default OrderStatusHeader;
