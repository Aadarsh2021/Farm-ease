import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FARMER_TITLE_FIELD } from "./FarmerTitle";

export const FarmerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Order" target="farmerId" label="Orders">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Farmer"
              source="farmer.id"
              reference="Farmer"
            >
              <TextField source={FARMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="OrderDate" source="orderDate" />
            <TextField label="TotalAmount" source="totalAmount" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Profile"
          target="farmerId"
          label="Profiles"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateOfBirth" source="dateOfBirth" />
            <ReferenceField
              label="Farmer"
              source="farmer.id"
              reference="Farmer"
            >
              <TextField source={FARMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="FirstName" source="firstName" />
            <TextField label="Gender" source="gender" />
            <TextField label="ID" source="id" />
            <TextField label="LastName" source="lastName" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Sales"
          target="farmerId"
          label="SalesItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Farmer"
              source="farmer.id"
              reference="Farmer"
            >
              <TextField source={FARMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Quantity" source="quantity" />
            <TextField label="SaleDate" source="saleDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
