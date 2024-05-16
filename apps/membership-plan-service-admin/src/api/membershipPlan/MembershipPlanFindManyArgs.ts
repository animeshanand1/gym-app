import { MembershipPlanWhereInput } from "./MembershipPlanWhereInput";
import { MembershipPlanOrderByInput } from "./MembershipPlanOrderByInput";

export type MembershipPlanFindManyArgs = {
  where?: MembershipPlanWhereInput;
  orderBy?: Array<MembershipPlanOrderByInput>;
  skip?: number;
  take?: number;
};
