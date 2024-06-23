import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionsCreateInput = {
  amount: number;
  categoryId: CategoryWhereUniqueInput;
  description?: string | null;
  userId?: UserWhereUniqueInput | null;
  walletId: WalletWhereUniqueInput;
};