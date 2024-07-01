import { Farmer } from "../farmer/Farmer";

export type Sales = {
  amount: number | null;
  createdAt: Date;
  farmer?: Farmer | null;
  id: string;
  quantity: number | null;
  saleDate: Date | null;
  updatedAt: Date;
};
