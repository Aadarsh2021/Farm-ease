import { SortOrder } from "../../util/SortOrder";

export type SalesOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  farmerId?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  saleDate?: SortOrder;
  updatedAt?: SortOrder;
};
