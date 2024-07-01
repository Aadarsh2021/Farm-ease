import { OrderCreateNestedManyWithoutFarmersInput } from "./OrderCreateNestedManyWithoutFarmersInput";
import { ProfileCreateNestedManyWithoutFarmersInput } from "./ProfileCreateNestedManyWithoutFarmersInput";
import { SalesCreateNestedManyWithoutFarmersInput } from "./SalesCreateNestedManyWithoutFarmersInput";

export type FarmerCreateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutFarmersInput;
  phone?: string | null;
  profiles?: ProfileCreateNestedManyWithoutFarmersInput;
  salesItems?: SalesCreateNestedManyWithoutFarmersInput;
};
