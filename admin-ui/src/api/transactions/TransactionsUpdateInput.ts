import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionsUpdateInput = {
  amount?: number;
  categoryId?: CategoryWhereUniqueInput;
  date?: Date;
  description?: string | null;
  userId?: UserWhereUniqueInput | null;
  walletId?: WalletWhereUniqueInput;
};
