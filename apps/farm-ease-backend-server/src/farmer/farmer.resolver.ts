import * as graphql from "@nestjs/graphql";
import { FarmerResolverBase } from "./base/farmer.resolver.base";
import { Farmer } from "./base/Farmer";
import { FarmerService } from "./farmer.service";

@graphql.Resolver(() => Farmer)
export class FarmerResolver extends FarmerResolverBase {
  constructor(protected readonly service: FarmerService) {
    super(service);
  }
}
