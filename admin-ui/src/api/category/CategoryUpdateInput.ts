import { TransactionsUpdateManyWithoutCategoriesInput } from "./TransactionsUpdateManyWithoutCategoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CategoryUpdateInput = {
  color?: string | null;
  description?: string | null;
  icon?: string | null;
  name?: string | null;
  transactionsItems?: TransactionsUpdateManyWithoutCategoriesInput;
  typeField?: string | null;
  userId?: UserWhereUniqueInput | null;
};
