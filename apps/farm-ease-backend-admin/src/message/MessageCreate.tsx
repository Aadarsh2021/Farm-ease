import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="ReceiverId" source="receiverId" />
        <TextInput label="SenderId" source="senderId" />
        <DateTimeInput label="SentAt" source="sentAt" />
      </SimpleForm>
    </Create>
  );
};
