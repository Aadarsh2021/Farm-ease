import { Purchase as TPurchase } from "../api/purchase/Purchase";

export const PURCHASE_TITLE_FIELD = "id";

export const PurchaseTitle = (record: TPurchase): string => {
  return record.id?.toString() || String(record.id);
};
