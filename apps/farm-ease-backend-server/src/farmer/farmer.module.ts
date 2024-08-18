import { Module } from "@nestjs/common";
import { FarmerModuleBase } from "./base/farmer.module.base";
import { FarmerService } from "./farmer.service";
import { FarmerController } from "./farmer.controller";
import { FarmerResolver } from "./farmer.resolver";

@Module({
  imports: [FarmerModuleBase],
  controllers: [FarmerController],
  providers: [FarmerService, FarmerResolver],
  exports: [FarmerService],
})
export class FarmerModule {}
