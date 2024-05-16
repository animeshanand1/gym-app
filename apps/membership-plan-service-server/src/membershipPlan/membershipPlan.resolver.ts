import * as graphql from "@nestjs/graphql";
import { MembershipPlanResolverBase } from "./base/membershipPlan.resolver.base";
import { MembershipPlan } from "./base/MembershipPlan";
import { MembershipPlanService } from "./membershipPlan.service";

@graphql.Resolver(() => MembershipPlan)
export class MembershipPlanResolver extends MembershipPlanResolverBase {
  constructor(protected readonly service: MembershipPlanService) {
    super(service);
  }
}
