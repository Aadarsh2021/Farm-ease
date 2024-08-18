import { Farmer } from "../farmer/Farmer";

export type Profile = {
  address: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  farmer?: Farmer | null;
  firstName: string | null;
  gender?: "Option1" | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
