import { Module } from "@nestjs/common";
import { CropModuleBase } from "./base/crop.module.base";
import { CropService } from "./crop.service";
import { CropController } from "./crop.controller";
import { CropResolver } from "./crop.resolver";

@Module({
  imports: [CropModuleBase],
  controllers: [CropController],
  providers: [CropService, CropResolver],
  exports: [CropService],
})
export class CropModule {}
