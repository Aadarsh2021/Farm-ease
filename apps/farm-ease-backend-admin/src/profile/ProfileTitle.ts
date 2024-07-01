import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "firstName";

export const ProfileTitle = (record: TProfile): string => {
  return record.firstName?.toString() || String(record.id);
};
