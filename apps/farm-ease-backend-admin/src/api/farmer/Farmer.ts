import { Order } from "../order/Order";
import { Profile } from "../profile/Profile";
import { Sales } from "../sales/Sales";

export type Farmer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phone: string | null;
  profiles?: Array<Profile>;
  salesItems?: Array<Sales>;
  updatedAt: Date;
};
