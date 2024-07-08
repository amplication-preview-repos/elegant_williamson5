export type CloudScan = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  accessKey: string | null;
  secretKey: string | null;
  scanResult: string | null;
  uniqueId: string | null;
};
