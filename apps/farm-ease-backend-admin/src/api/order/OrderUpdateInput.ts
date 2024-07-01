import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";

export type OrderUpdateInput = {
  farmer?: FarmerWhereUniqueInput | null;
  orderDate?: Date | null;
  totalAmount?: number | null;
};
