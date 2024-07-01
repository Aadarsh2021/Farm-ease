import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PurchaseWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  purchaseDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
};
