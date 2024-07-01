import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="ReceiverId" source="receiverId" />
        <TextInput label="SenderId" source="senderId" />
        <DateTimeInput label="SentAt" source="sentAt" />
      </SimpleForm>
    </Edit>
  );
};
