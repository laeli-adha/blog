import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionsListRelationFilter } from "../transactions/TransactionsListRelationFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  categories?: CategoryListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  transactionsItems?: TransactionsListRelationFilter;
  username?: StringFilter;
  wallets?: WalletListRelationFilter;
};
