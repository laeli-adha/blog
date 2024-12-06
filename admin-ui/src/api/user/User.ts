import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Transactions } from "../transactions/Transactions";
import { Wallet } from "../wallet/Wallet";

export type User = {
  categories?: Array<Category>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  transactionsItems?: Array<Transactions>;
  updatedAt: Date;
  username: string;
  wallets?: Array<Wallet>;
};
