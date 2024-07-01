import * as graphql from "@nestjs/graphql";
import { CropResolverBase } from "./base/crop.resolver.base";
import { Crop } from "./base/Crop";
import { CropService } from "./crop.service";

@graphql.Resolver(() => Crop)
export class CropResolver extends CropResolverBase {
  constructor(protected readonly service: CropService) {
    super(service);
  }
}
