import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WebScanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WebScans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url1" source="url1" />
        <TextField label="url2" source="url2" />
        <TextField label="scanResult" source="scanResult" />
        <TextField label="uniqueId" source="uniqueId" />
        <TextField label="url3" source="url3" />
      </Datagrid>
    </List>
  );
};
