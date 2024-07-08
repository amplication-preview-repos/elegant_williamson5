import { WebScanWhereInput } from "./WebScanWhereInput";
import { WebScanOrderByInput } from "./WebScanOrderByInput";

export type WebScanFindManyArgs = {
  where?: WebScanWhereInput;
  orderBy?: Array<WebScanOrderByInput>;
  skip?: number;
  take?: number;
};
