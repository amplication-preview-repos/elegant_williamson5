import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CloudScanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accessKey" source="accessKey" />
        <TextInput label="secretKey" source="secretKey" />
        <TextInput label="scanResult" multiline source="scanResult" />
        <TextInput label="uniqueId" source="uniqueId" />
      </SimpleForm>
    </Edit>
  );
};
