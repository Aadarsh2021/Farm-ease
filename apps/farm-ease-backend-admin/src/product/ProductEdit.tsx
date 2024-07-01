import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CropTitle } from "../crop/CropTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="crop.id" reference="Crop" label="Crop">
          <SelectInput optionText={CropTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <ReferenceArrayInput
          source="purchases"
          reference="Purchase"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Stock" source="stock" />
      </SimpleForm>
    </Edit>
  );
};
