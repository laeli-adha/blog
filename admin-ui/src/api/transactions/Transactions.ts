import { Category } from "../category/Category";
import { User } from "../user/User";
import { Wallet } from "../wallet/Wallet";

export type Transactions = {
  amount: number;
  categoryId?: Category;
  createdAt: Date;
  date: Date;
  description: string | null;
  id: string;
  updatedAt: Date;
  userId?: User | null;
  walletId?: Wallet;
};
