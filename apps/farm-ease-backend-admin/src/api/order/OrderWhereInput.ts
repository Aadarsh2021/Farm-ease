import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  farmer?: FarmerWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  purchases?: PurchaseListRelationFilter;
  totalAmount?: FloatNullableFilter;
};
