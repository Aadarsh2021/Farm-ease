import { SortOrder } from "../../util/SortOrder";

export type CropOrderByInput = {
  createdAt?: SortOrder;
  harvestDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  plantingDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
