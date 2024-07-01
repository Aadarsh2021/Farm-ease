import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesService } from "./sales.service";
import { SalesControllerBase } from "./base/sales.controller.base";

@swagger.ApiTags("sales")
@common.Controller("sales")
export class SalesController extends SalesControllerBase {
  constructor(protected readonly service: SalesService) {
    super(service);
  }
}
