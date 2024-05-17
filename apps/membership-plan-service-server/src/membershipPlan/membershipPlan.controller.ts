import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MembershipPlanService } from "./membershipPlan.service";
import { MembershipPlanControllerBase } from "./base/membershipPlan.controller.base";

@swagger.ApiTags("membershipPlans")
@common.Controller("membershipPlans")
export class MembershipPlanController extends MembershipPlanControllerBase {
  constructor(protected readonly service: MembershipPlanService) {
    super(service);
  }
}
