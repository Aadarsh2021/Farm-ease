export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  receiverId: string | null;
  senderId: string | null;
  sentAt: Date | null;
  updatedAt: Date;
};
