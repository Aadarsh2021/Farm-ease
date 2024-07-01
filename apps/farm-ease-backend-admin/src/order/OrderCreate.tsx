import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { FarmerTitle } from "../farmer/FarmerTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
