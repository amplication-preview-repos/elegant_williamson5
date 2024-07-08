import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CloudScanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="accessKey" source="accessKey" />
        <TextField label="secretKey" source="secretKey" />
        <TextField label="scanResult" source="scanResult" />
        <TextField label="uniqueId" source="uniqueId" />
      </SimpleShowLayout>
    </Show>
  );
};
