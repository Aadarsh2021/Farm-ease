import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { ProductTitle } from "../product/ProductTitle";

export const PurchaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <DateTimeInput label="PurchaseDate" source="purchaseDate" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="TotalPrice" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
