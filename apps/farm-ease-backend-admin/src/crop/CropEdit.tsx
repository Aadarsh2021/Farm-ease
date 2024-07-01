import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CropEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="HarvestDate" source="harvestDate" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="PlantingDate" source="plantingDate" />
        <TextInput label="Type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
