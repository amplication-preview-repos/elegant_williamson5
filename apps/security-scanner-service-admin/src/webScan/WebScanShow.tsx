import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const WebScanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url1" source="url1" />
        <TextField label="url2" source="url2" />
        <TextField label="scanResult" source="scanResult" />
        <TextField label="uniqueId" source="uniqueId" />
        <TextField label="url3" source="url3" />
      </SimpleShowLayout>
    </Show>
  );
};
