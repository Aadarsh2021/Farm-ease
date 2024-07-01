import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MessageService } from "./message.service";
import { MessageControllerBase } from "./base/message.controller.base";

@swagger.ApiTags("messages")
@common.Controller("messages")
export class MessageController extends MessageControllerBase {
  constructor(protected readonly service: MessageService) {
    super(service);
  }
}
