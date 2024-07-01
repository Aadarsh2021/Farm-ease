import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PurchaseUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  purchaseDate?: Date | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
