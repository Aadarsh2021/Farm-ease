import { OrderUpdateManyWithoutFarmersInput } from "./OrderUpdateManyWithoutFarmersInput";
import { ProfileUpdateManyWithoutFarmersInput } from "./ProfileUpdateManyWithoutFarmersInput";
import { SalesUpdateManyWithoutFarmersInput } from "./SalesUpdateManyWithoutFarmersInput";

export type FarmerUpdateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutFarmersInput;
  phone?: string | null;
  profiles?: ProfileUpdateManyWithoutFarmersInput;
  salesItems?: SalesUpdateManyWithoutFarmersInput;
};
