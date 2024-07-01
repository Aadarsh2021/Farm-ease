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
import { Order } from "./Order";
import { OrderCountArgs } from "./OrderCountArgs";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderFindUniqueArgs } from "./OrderFindUniqueArgs";
import { CreateOrderArgs } from "./CreateOrderArgs";
import { UpdateOrderArgs } from "./UpdateOrderArgs";
import { DeleteOrderArgs } from "./DeleteOrderArgs";
import { Farmer } from "../../farmer/base/Farmer";
import { OrderService } from "../order.service";
@graphql.Resolver(() => Order)
export class OrderResolverBase {
  constructor(protected readonly service: OrderService) {}

  async _ordersMeta(
    @graphql.Args() args: OrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Order])
  async orders(@graphql.Args() args: OrderFindManyArgs): Promise<Order[]> {
    return this.service.orders(args);
  }

  @graphql.Query(() => Order, { nullable: true })
  async order(
    @graphql.Args() args: OrderFindUniqueArgs
  ): Promise<Order | null> {
    const result = await this.service.order(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Order)
  async createOrder(@graphql.Args() args: CreateOrderArgs): Promise<Order> {
    return await this.service.createOrder({
      ...args,
      data: {
        ...args.data,

        farmer: args.data.farmer
          ? {
              connect: args.data.farmer,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Order)
  async updateOrder(
    @graphql.Args() args: UpdateOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
        ...args,
        data: {
          ...args.data,

          farmer: args.data.farmer
            ? {
                connect: args.data.farmer,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Order)
  async deleteOrder(
    @graphql.Args() args: DeleteOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Farmer, {
    nullable: true,
    name: "farmer",
  })
  async getFarmer(@graphql.Parent() parent: Order): Promise<Farmer | null> {
    const result = await this.service.getFarmer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
