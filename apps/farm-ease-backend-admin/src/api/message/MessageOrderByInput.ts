import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
