import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TransactionsTitle } from "../transactions/TransactionsTitle";
import { UserTitle } from "../user/UserTitle";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
        <TextInput label="type" source="typeField" />
        <ReferenceInput source="userId.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
