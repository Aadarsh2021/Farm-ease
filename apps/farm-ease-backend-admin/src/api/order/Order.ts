import { Farmer } from "../farmer/Farmer";
import { Purchase } from "../purchase/Purchase";

export type Order = {
  createdAt: Date;
  farmer?: Farmer | null;
  id: string;
  orderDate: Date | null;
  purchases?: Array<Purchase>;
  totalAmount: number | null;
  updatedAt: Date;
};
