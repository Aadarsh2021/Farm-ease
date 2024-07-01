import { CropWhereUniqueInput } from "../crop/CropWhereUniqueInput";
import { PurchaseCreateNestedManyWithoutProductsInput } from "./PurchaseCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  crop?: CropWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  purchases?: PurchaseCreateNestedManyWithoutProductsInput;
  stock?: number | null;
};
