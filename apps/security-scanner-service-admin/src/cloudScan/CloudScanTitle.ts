import { CloudScan as TCloudScan } from "../api/cloudScan/CloudScan";

export const CLOUDSCAN_TITLE_FIELD = "accessKey";

export const CloudScanTitle = (record: TCloudScan): string => {
  return record.accessKey?.toString() || String(record.id);
};
