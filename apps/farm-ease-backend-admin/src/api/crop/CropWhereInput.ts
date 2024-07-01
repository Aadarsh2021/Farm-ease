import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CropWhereInput = {
  harvestDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  plantingDate?: DateTimeNullableFilter;
  products?: ProductListRelationFilter;
  typeField?: StringNullableFilter;
};
