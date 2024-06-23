import { FloatFilter } from "../../util/FloatFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionsWhereInput = {
  amount?: FloatFilter;
  categoryId?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
  walletId?: WalletWhereUniqueInput;
};
