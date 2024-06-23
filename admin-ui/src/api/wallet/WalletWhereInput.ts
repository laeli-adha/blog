import { FloatFilter } from "../../util/FloatFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionsListRelationFilter } from "../transactions/TransactionsListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  amount?: FloatFilter;
  color?: StringNullableFilter;
  description?: StringNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  transactionsItems?: TransactionsListRelationFilter;
  userId?: UserWhereUniqueInput;
};
