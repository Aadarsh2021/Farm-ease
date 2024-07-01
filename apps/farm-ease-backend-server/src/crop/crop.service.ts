import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CropServiceBase } from "./base/crop.service.base";

@Injectable()
export class CropService extends CropServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
