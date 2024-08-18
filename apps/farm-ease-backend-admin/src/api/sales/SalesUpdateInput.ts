import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";

export type SalesUpdateInput = {
  amount?: number | null;
  farmer?: FarmerWhereUniqueInput | null;
  quantity?: number | null;
  saleDate?: Date | null;
};
