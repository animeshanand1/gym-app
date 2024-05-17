/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MembershipPlan as PrismaMembershipPlan } from "@prisma/client";

export class MembershipPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MembershipPlanCountArgs, "select">
  ): Promise<number> {
    return this.prisma.membershipPlan.count(args);
  }

  async membershipPlans<T extends Prisma.MembershipPlanFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipPlanFindManyArgs>
  ): Promise<PrismaMembershipPlan[]> {
    return this.prisma.membershipPlan.findMany<Prisma.MembershipPlanFindManyArgs>(
      args
    );
  }
  async membershipPlan<T extends Prisma.MembershipPlanFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipPlanFindUniqueArgs>
  ): Promise<PrismaMembershipPlan | null> {
    return this.prisma.membershipPlan.findUnique(args);
  }
  async createMembershipPlan<T extends Prisma.MembershipPlanCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipPlanCreateArgs>
  ): Promise<PrismaMembershipPlan> {
    return this.prisma.membershipPlan.create<T>(args);
  }
  async updateMembershipPlan<T extends Prisma.MembershipPlanUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipPlanUpdateArgs>
  ): Promise<PrismaMembershipPlan> {
    return this.prisma.membershipPlan.update<T>(args);
  }
  async deleteMembershipPlan<T extends Prisma.MembershipPlanDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipPlanDeleteArgs>
  ): Promise<PrismaMembershipPlan> {
    return this.prisma.membershipPlan.delete(args);
  }
}
