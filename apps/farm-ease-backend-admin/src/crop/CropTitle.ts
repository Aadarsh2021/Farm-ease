import { Crop as TCrop } from "../api/crop/Crop";

export const CROP_TITLE_FIELD = "name";

export const CropTitle = (record: TCrop): string => {
  return record.name?.toString() || String(record.id);
};
