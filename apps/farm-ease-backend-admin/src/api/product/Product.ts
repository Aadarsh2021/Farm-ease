import { Crop } from "../crop/Crop";
import { Purchase } from "../purchase/Purchase";

export type Product = {
  createdAt: Date;
  crop?: Crop | null;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  purchases?: Array<Purchase>;
  stock: number | null;
  updatedAt: Date;
};
