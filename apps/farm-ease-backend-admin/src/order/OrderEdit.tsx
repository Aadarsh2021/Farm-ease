import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { FarmerTitle } from "../farmer/FarmerTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="farmer.id" reference="Farmer" label="Farmer">
          <SelectInput optionText={FarmerTitle} />
        </ReferenceInput>
        <DateTimeInput label="OrderDate" source="orderDate" />
        <ReferenceArrayInput
          source="purchases"
          reference="Purchase"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PurchaseTitle} />
        </ReferenceArrayInput>
        <NumberInput label="TotalAmount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
