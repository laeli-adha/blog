import { Transactions } from "../transactions/Transactions";
import { User } from "../user/User";

export type Category = {
  color: string | null;
  createdAt: Date;
  description: string | null;
  icon: string | null;
  id: string;
  name: string | null;
  transactionsItems?: Array<Transactions>;
  typeField: string | null;
  updatedAt: Date;
  userId?: User | null;
};
