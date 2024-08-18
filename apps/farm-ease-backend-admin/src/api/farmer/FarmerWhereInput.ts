import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { SalesListRelationFilter } from "../sales/SalesListRelationFilter";

export type FarmerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
  profiles?: ProfileListRelationFilter;
  salesItems?: SalesListRelationFilter;
};
