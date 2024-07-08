import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CloudScanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accessKey" source="accessKey" />
        <TextInput label="secretKey" source="secretKey" />
        <TextInput label="scanResult" multiline source="scanResult" />
        <TextInput label="uniqueId" source="uniqueId" />
      </SimpleForm>
    </Create>
  );
};
