import { TransactionsCreateNestedManyWithoutCategoriesInput } from "./TransactionsCreateNestedManyWithoutCategoriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CategoryCreateInput = {
  color?: string | null;
  description?: string | null;
  icon?: string | null;
  name?: string | null;
  transactionsItems?: TransactionsCreateNestedManyWithoutCategoriesInput;
  typeField?: string | null;
  userId?: UserWhereUniqueInput | null;
};
