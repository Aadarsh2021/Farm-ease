import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";

export type OrderCreateInput = {
  farmer?: FarmerWhereUniqueInput | null;
  orderDate?: Date | null;
  totalAmount?: number | null;
};
