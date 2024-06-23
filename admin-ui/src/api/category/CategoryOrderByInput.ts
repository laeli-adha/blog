import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  icon?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
