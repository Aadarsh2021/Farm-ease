/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OrderService } from "../order.service";
import { OrderCreateInput } from "./OrderCreateInput";
import { Order } from "./Order";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderUpdateInput } from "./OrderUpdateInput";
import { PurchaseFindManyArgs } from "../../purchase/base/PurchaseFindManyArgs";
import { Purchase } from "../../purchase/base/Purchase";
import { PurchaseWhereUniqueInput } from "../../purchase/base/PurchaseWhereUniqueInput";

export class OrderControllerBase {
  constructor(protected readonly service: OrderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Order })
  async createOrder(@common.Body() data: OrderCreateInput): Promise<Order> {
    return await this.service.createOrder({
      data: {
        ...data,

        farmer: data.farmer
          ? {
              connect: data.farmer,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        farmer: {
          select: {
            id: true,
          },
        },

        id: true,
        orderDate: true,
        totalAmount: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyArgs)
  async orders(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyArgs, request.query);
    return this.service.orders({
      ...args,
      select: {
        createdAt: true,

        farmer: {
          select: {
            id: true,
          },
        },

        id: true,
        orderDate: true,
        totalAmount: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async order(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    const result = await this.service.order({
      where: params,
      select: {
        createdAt: true,

        farmer: {
          select: {
            id: true,
          },
        },

        id: true,
        orderDate: true,
        totalAmount: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOrder(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() data: OrderUpdateInput
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
        where: params,
        data: {
          ...data,

          farmer: data.farmer
            ? {
                connect: data.farmer,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          farmer: {
            select: {
              id: true,
            },
          },

          id: true,
          orderDate: true,
          totalAmount: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOrder(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder({
        where: params,
        select: {
          createdAt: true,

          farmer: {
            select: {
              id: true,
            },
          },

          id: true,
          orderDate: true,
          totalAmount: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/purchases")
  @ApiNestedQuery(PurchaseFindManyArgs)
  async findPurchases(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Purchase[]> {
    const query = plainToClass(PurchaseFindManyArgs, request.query);
    const results = await this.service.findPurchases(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },

        purchaseDate: true,
        quantity: true,
        totalPrice: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/purchases")
  async connectPurchases(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PurchaseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchases: {
        connect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/purchases")
  async updatePurchases(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PurchaseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchases: {
        set: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/purchases")
  async disconnectPurchases(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PurchaseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      purchases: {
        disconnect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }
}