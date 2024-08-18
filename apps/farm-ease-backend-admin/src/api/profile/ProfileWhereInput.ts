import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  address?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  farmer?: FarmerWhereUniqueInput;
  firstName?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
