import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionsListRelationFilter } from "../transactions/TransactionsListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  transactionsItems?: TransactionsListRelationFilter;
  typeField?: StringNullableFilter;
  userId?: UserWhereUniqueInput;
};
