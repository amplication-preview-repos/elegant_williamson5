import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WebScanWhereInput = {
  id?: StringFilter;
  url1?: StringNullableFilter;
  url2?: StringNullableFilter;
  scanResult?: StringNullableFilter;
  uniqueId?: StringNullableFilter;
  url3?: StringNullableFilter;
};
