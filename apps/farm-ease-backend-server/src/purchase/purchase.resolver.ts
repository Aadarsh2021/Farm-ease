import * as graphql from "@nestjs/graphql";
import { PurchaseResolverBase } from "./base/purchase.resolver.base";
import { Purchase } from "./base/Purchase";
import { PurchaseService } from "./purchase.service";

@graphql.Resolver(() => Purchase)
export class PurchaseResolver extends PurchaseResolverBase {
  constructor(protected readonly service: PurchaseService) {
    super(service);
  }
}
