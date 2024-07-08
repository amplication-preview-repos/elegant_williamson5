import { SortOrder } from "../../util/SortOrder";

export type CloudScanOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  accessKey?: SortOrder;
  secretKey?: SortOrder;
  scanResult?: SortOrder;
  uniqueId?: SortOrder;
};
