/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Farmer } from "./Farmer";
import { FarmerCountArgs } from "./FarmerCountArgs";
import { FarmerFindManyArgs } from "./FarmerFindManyArgs";
import { FarmerFindUniqueArgs } from "./FarmerFindUniqueArgs";
import { CreateFarmerArgs } from "./CreateFarmerArgs";
import { UpdateFarmerArgs } from "./UpdateFarmerArgs";
import { DeleteFarmerArgs } from "./DeleteFarmerArgs";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { SalesFindManyArgs } from "../../sales/base/SalesFindManyArgs";
import { Sales } from "../../sales/base/Sales";
import { FarmerService } from "../farmer.service";
@graphql.Resolver(() => Farmer)
export class FarmerResolverBase {
  constructor(protected readonly service: FarmerService) {}

  async _farmersMeta(
    @graphql.Args() args: FarmerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Farmer])
  async farmers(@graphql.Args() args: FarmerFindManyArgs): Promise<Farmer[]> {
    return this.service.farmers(args);
  }

  @graphql.Query(() => Farmer, { nullable: true })
  async farmer(
    @graphql.Args() args: FarmerFindUniqueArgs
  ): Promise<Farmer | null> {
    const result = await this.service.farmer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Farmer)
  async createFarmer(@graphql.Args() args: CreateFarmerArgs): Promise<Farmer> {
    return await this.service.createFarmer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Farmer)
  async updateFarmer(
    @graphql.Args() args: UpdateFarmerArgs
  ): Promise<Farmer | null> {
    try {
      return await this.service.updateFarmer({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Farmer)
  async deleteFarmer(
    @graphql.Args() args: DeleteFarmerArgs
  ): Promise<Farmer | null> {
    try {
      return await this.service.deleteFarmer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async findOrders(
    @graphql.Parent() parent: Farmer,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Sales], { name: "salesItems" })
  async findSalesItems(
    @graphql.Parent() parent: Farmer,
    @graphql.Args() args: SalesFindManyArgs
  ): Promise<Sales[]> {
    const results = await this.service.findSalesItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
