import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CloudScanWhereInput = {
  id?: StringFilter;
  accessKey?: StringNullableFilter;
  secretKey?: StringNullableFilter;
  scanResult?: StringNullableFilter;
  uniqueId?: StringNullableFilter;
};
