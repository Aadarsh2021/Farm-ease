import { CropWhereInput } from "./CropWhereInput";
import { CropOrderByInput } from "./CropOrderByInput";

export type CropFindManyArgs = {
  where?: CropWhereInput;
  orderBy?: Array<CropOrderByInput>;
  skip?: number;
  take?: number;
};
