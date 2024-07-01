import { Order } from "../order/Order";
import { Sales } from "../sales/Sales";

export type Farmer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phone: string | null;
  salesItems?: Array<Sales>;
  updatedAt: Date;
};
