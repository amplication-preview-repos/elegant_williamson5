import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CloudScanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CloudScans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="accessKey" source="accessKey" />
        <TextField label="secretKey" source="secretKey" />
        <TextField label="scanResult" source="scanResult" />
        <TextField label="uniqueId" source="uniqueId" />
      </Datagrid>
    </List>
  );
};
