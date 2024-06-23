import { TransactionsUpdateManyWithoutWalletsInput } from "./TransactionsUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  amount?: number;
  color?: string | null;
  description?: string | null;
  icon?: string | null;
  name?: string;
  transactionsItems?: TransactionsUpdateManyWithoutWalletsInput;
  userId?: UserWhereUniqueInput;
};
