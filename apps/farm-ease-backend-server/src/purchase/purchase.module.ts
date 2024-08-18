import { Module } from "@nestjs/common";
import { PurchaseModuleBase } from "./base/purchase.module.base";
import { PurchaseService } from "./purchase.service";
import { PurchaseController } from "./purchase.controller";
import { PurchaseResolver } from "./purchase.resolver";

@Module({
  imports: [PurchaseModuleBase],
  controllers: [PurchaseController],
  providers: [PurchaseService, PurchaseResolver],
  exports: [PurchaseService],
})
export class PurchaseModule {}
