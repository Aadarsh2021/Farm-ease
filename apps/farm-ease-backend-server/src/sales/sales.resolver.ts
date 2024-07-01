import * as graphql from "@nestjs/graphql";
import { SalesResolverBase } from "./base/sales.resolver.base";
import { Sales } from "./base/Sales";
import { SalesService } from "./sales.service";

@graphql.Resolver(() => Sales)
export class SalesResolver extends SalesResolverBase {
  constructor(protected readonly service: SalesService) {
    super(service);
  }
}
