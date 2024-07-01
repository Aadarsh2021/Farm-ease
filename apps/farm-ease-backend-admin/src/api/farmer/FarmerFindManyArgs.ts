import { FarmerWhereInput } from "./FarmerWhereInput";
import { FarmerOrderByInput } from "./FarmerOrderByInput";

export type FarmerFindManyArgs = {
  where?: FarmerWhereInput;
  orderBy?: Array<FarmerOrderByInput>;
  skip?: number;
  take?: number;
};
