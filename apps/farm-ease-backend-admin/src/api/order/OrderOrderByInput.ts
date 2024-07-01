import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  farmerId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
