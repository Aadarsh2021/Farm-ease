import { Farmer as TFarmer } from "../api/farmer/Farmer";

export const FARMER_TITLE_FIELD = "name";

export const FarmerTitle = (record: TFarmer): string => {
  return record.name?.toString() || String(record.id);
};
