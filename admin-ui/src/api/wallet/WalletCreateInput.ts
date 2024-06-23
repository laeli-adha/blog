import { TransactionsCreateNestedManyWithoutWalletsInput } from "./TransactionsCreateNestedManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  amount: number;
  color?: string | null;
  description?: string | null;
  icon?: string | null;
  name: string;
  transactionsItems?: TransactionsCreateNestedManyWithoutWalletsInput;
  userId: UserWhereUniqueInput;
};
