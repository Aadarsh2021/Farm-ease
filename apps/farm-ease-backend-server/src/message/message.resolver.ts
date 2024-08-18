import * as graphql from "@nestjs/graphql";
import { MessageResolverBase } from "./base/message.resolver.base";
import { Message } from "./base/Message";
import { MessageService } from "./message.service";

@graphql.Resolver(() => Message)
export class MessageResolver extends MessageResolverBase {
  constructor(protected readonly service: MessageService) {
    super(service);
  }
}
