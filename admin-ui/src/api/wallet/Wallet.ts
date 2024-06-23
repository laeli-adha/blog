import { Transactions } from "../transactions/Transactions";
import { User } from "../user/User";

export type Wallet = {
  amount: number;
  color: string | null;
  createdAt: Date;
  description: string | null;
  icon: string | null;
  id: string;
  name: string;
  transactionsItems?: Array<Transactions>;
  updatedAt: Date;
  userId?: User;
};
