import { MembershipPlan as TMembershipPlan } from "../api/membershipPlan/MembershipPlan";

export const MEMBERSHIPPLAN_TITLE_FIELD = "name";

export const MembershipPlanTitle = (record: TMembershipPlan): string => {
  return record.name?.toString() || String(record.id);
};
