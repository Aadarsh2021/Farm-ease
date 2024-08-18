import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FarmerServiceBase } from "./base/farmer.service.base";

@Injectable()
export class FarmerService extends FarmerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
