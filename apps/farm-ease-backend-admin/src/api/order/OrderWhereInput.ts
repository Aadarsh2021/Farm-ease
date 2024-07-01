import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  farmer?: FarmerWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  totalAmount?: FloatNullableFilter;
};
