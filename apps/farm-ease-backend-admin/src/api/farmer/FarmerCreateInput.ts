import { OrderCreateNestedManyWithoutFarmersInput } from "./OrderCreateNestedManyWithoutFarmersInput";
import { SalesCreateNestedManyWithoutFarmersInput } from "./SalesCreateNestedManyWithoutFarmersInput";

export type FarmerCreateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutFarmersInput;
  phone?: string | null;
  salesItems?: SalesCreateNestedManyWithoutFarmersInput;
};
