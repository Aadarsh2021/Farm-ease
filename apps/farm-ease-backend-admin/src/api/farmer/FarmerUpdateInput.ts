import { OrderUpdateManyWithoutFarmersInput } from "./OrderUpdateManyWithoutFarmersInput";
import { SalesUpdateManyWithoutFarmersInput } from "./SalesUpdateManyWithoutFarmersInput";

export type FarmerUpdateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutFarmersInput;
  phone?: string | null;
  salesItems?: SalesUpdateManyWithoutFarmersInput;
};
