import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
  purchaseDate?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
