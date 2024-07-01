import { Product } from "../product/Product";

export type Crop = {
  createdAt: Date;
  harvestDate: Date | null;
  id: string;
  name: string | null;
  plantingDate: Date | null;
  products?: Array<Product>;
  typeField: string | null;
  updatedAt: Date;
};
