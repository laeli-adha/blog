import { SortOrder } from "../../util/SortOrder";

export type TransactionsOrderByInput = {
  amount?: SortOrder;
  categoryIdId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  wallet?: SortOrder;
};
