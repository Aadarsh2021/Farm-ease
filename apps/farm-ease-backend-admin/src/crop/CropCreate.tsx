import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CropCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="HarvestDate" source="harvestDate" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="PlantingDate" source="plantingDate" />
        <TextInput label="Type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
