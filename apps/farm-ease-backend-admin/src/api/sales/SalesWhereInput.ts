import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SalesWhereInput = {
  amount?: FloatNullableFilter;
  farmer?: FarmerWhereUniqueInput;
  id?: StringFilter;
  quantity?: IntNullableFilter;
  saleDate?: DateTimeNullableFilter;
};
