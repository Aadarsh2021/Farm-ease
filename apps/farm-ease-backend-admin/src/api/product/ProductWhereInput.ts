import { CropWhereUniqueInput } from "../crop/CropWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  crop?: CropWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  purchases?: PurchaseListRelationFilter;
  stock?: IntNullableFilter;
};
