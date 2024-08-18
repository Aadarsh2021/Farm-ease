import { ProductCreateNestedManyWithoutCropsInput } from "./ProductCreateNestedManyWithoutCropsInput";

export type CropCreateInput = {
  harvestDate?: Date | null;
  name?: string | null;
  plantingDate?: Date | null;
  products?: ProductCreateNestedManyWithoutCropsInput;
  typeField?: string | null;
};
