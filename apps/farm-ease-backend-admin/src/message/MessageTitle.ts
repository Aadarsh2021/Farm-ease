import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "receiverId";

export const MessageTitle = (record: TMessage): string => {
  return record.receiverId?.toString() || String(record.id);
};
