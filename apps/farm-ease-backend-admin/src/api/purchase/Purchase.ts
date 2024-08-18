import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type Purchase = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  product?: Product | null;
  purchaseDate: Date | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
