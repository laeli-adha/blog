import { CategoryCreateNestedManyWithoutUsersInput } from "./CategoryCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionsCreateNestedManyWithoutUsersInput } from "./TransactionsCreateNestedManyWithoutUsersInput";
import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  categories?: CategoryCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  transactionsItems?: TransactionsCreateNestedManyWithoutUsersInput;
  username: string;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
