import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FarmerService } from "./farmer.service";
import { FarmerControllerBase } from "./base/farmer.controller.base";

@swagger.ApiTags("farmers")
@common.Controller("farmers")
export class FarmerController extends FarmerControllerBase {
  constructor(protected readonly service: FarmerService) {
    super(service);
  }
}
