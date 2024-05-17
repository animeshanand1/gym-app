import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MembershipPlanServiceBase } from "./base/membershipPlan.service.base";

@Injectable()
export class MembershipPlanService extends MembershipPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
