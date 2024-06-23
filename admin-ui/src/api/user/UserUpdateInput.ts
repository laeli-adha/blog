import { CategoryUpdateManyWithoutUsersInput } from "./CategoryUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionsUpdateManyWithoutUsersInput } from "./TransactionsUpdateManyWithoutUsersInput";
import { WalletUpdateManyWithoutUsersInput } from "./WalletUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  categories?: CategoryUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  transactionsItems?: TransactionsUpdateManyWithoutUsersInput;
  username?: string;
  wallets?: WalletUpdateManyWithoutUsersInput;
};
