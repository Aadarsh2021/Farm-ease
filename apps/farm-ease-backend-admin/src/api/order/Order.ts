import { Farmer } from "../farmer/Farmer";

export type Order = {
  createdAt: Date;
  farmer?: Farmer | null;
  id: string;
  orderDate: Date | null;
  totalAmount: number | null;
  updatedAt: Date;
};
