import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  adminName?: SortOrder;
  adminRole?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
