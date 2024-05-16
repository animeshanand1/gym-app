import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminWhereInput = {
  adminName?: StringNullableFilter;
  adminRole?: "Option1";
  id?: StringFilter;
};
