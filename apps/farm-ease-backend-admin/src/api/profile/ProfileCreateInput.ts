import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";

export type ProfileCreateInput = {
  address?: string | null;
  dateOfBirth?: Date | null;
  farmer?: FarmerWhereUniqueInput | null;
  firstName?: string | null;
  gender?: "Option1" | null;
  lastName?: string | null;
};
