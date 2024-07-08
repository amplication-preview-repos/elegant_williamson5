import { WebScan as TWebScan } from "../api/webScan/WebScan";

export const WEBSCAN_TITLE_FIELD = "url1";

export const WebScanTitle = (record: TWebScan): string => {
  return record.url1?.toString() || String(record.id);
};
