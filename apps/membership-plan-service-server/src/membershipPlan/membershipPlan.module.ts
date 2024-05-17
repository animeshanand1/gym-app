import { Module } from "@nestjs/common";
import { MembershipPlanModuleBase } from "./base/membershipPlan.module.base";
import { MembershipPlanService } from "./membershipPlan.service";
import { MembershipPlanController } from "./membershipPlan.controller";
import { MembershipPlanResolver } from "./membershipPlan.resolver";

@Module({
  imports: [MembershipPlanModuleBase],
  controllers: [MembershipPlanController],
  providers: [MembershipPlanService, MembershipPlanResolver],
  exports: [MembershipPlanService],
})
export class MembershipPlanModule {}
