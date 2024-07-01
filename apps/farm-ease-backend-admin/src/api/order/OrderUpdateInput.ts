import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { PurchaseUpdateManyWithoutOrdersInput } from "./PurchaseUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  farmer?: FarmerWhereUniqueInput | null;
  orderDate?: Date | null;
  purchases?: PurchaseUpdateManyWithoutOrdersInput;
  totalAmount?: number | null;
};
