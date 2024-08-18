import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  farmerId?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
