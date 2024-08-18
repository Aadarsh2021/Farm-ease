import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseService } from "./purchase.service";
import { PurchaseControllerBase } from "./base/purchase.controller.base";

@swagger.ApiTags("purchases")
@common.Controller("purchases")
export class PurchaseController extends PurchaseControllerBase {
  constructor(protected readonly service: PurchaseService) {
    super(service);
  }
}
