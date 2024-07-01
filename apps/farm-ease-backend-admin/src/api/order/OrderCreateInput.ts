import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { PurchaseCreateNestedManyWithoutOrdersInput } from "./PurchaseCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  farmer?: FarmerWhereUniqueInput | null;
  orderDate?: Date | null;
  purchases?: PurchaseCreateNestedManyWithoutOrdersInput;
  totalAmount?: number | null;
};
