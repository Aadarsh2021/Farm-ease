import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CropService } from "./crop.service";
import { CropControllerBase } from "./base/crop.controller.base";

@swagger.ApiTags("crops")
@common.Controller("crops")
export class CropController extends CropControllerBase {
  constructor(protected readonly service: CropService) {
    super(service);
  }
}
