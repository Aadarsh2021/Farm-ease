import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FarmerTitle } from "../farmer/FarmerTitle";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <DateTimeInput label="DateOfBirth" source="dateOfBirth" />
        <ReferenceInput source="farmer.id" reference="Farmer" label="Farmer">
          <SelectInput optionText={FarmerTitle} />
        </ReferenceInput>
        <TextInput label="FirstName" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="LastName" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
