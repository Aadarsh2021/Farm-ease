import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CropWhereInput = {
  harvestDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  plantingDate?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
};
