import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WebScanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="url1" source="url1" />
        <TextInput label="url2" source="url2" />
        <TextInput label="scanResult" multiline source="scanResult" />
        <TextInput label="uniqueId" source="uniqueId" />
        <TextInput label="url3" source="url3" />
      </SimpleForm>
    </Create>
  );
};
