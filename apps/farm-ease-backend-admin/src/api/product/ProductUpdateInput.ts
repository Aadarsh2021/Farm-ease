import { CropWhereUniqueInput } from "../crop/CropWhereUniqueInput";
import { PurchaseUpdateManyWithoutProductsInput } from "./PurchaseUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  crop?: CropWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  purchases?: PurchaseUpdateManyWithoutProductsInput;
  stock?: number | null;
};
