import { ProductUpdateManyWithoutCropsInput } from "./ProductUpdateManyWithoutCropsInput";

export type CropUpdateInput = {
  harvestDate?: Date | null;
  name?: string | null;
  plantingDate?: Date | null;
  products?: ProductUpdateManyWithoutCropsInput;
  typeField?: string | null;
};
