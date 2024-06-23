import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TransactionsTitle } from "../transactions/TransactionsTitle";
import { UserTitle } from "../user/UserTitle";

export const WalletCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="color" source="color" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="icon" source="icon" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="transactionsItems"
          reference="Transactions"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="userId.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
