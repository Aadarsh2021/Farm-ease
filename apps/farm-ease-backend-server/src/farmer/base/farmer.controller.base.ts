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
import { FarmerService } from "../farmer.service";
import { FarmerCreateInput } from "./FarmerCreateInput";
import { Farmer } from "./Farmer";
import { FarmerFindManyArgs } from "./FarmerFindManyArgs";
import { FarmerWhereUniqueInput } from "./FarmerWhereUniqueInput";
import { FarmerUpdateInput } from "./FarmerUpdateInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ProfileFindManyArgs } from "../../profile/base/ProfileFindManyArgs";
import { Profile } from "../../profile/base/Profile";
import { ProfileWhereUniqueInput } from "../../profile/base/ProfileWhereUniqueInput";
import { SalesFindManyArgs } from "../../sales/base/SalesFindManyArgs";
import { Sales } from "../../sales/base/Sales";
import { SalesWhereUniqueInput } from "../../sales/base/SalesWhereUniqueInput";

export class FarmerControllerBase {
  constructor(protected readonly service: FarmerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Farmer })
  async createFarmer(@common.Body() data: FarmerCreateInput): Promise<Farmer> {
    return await this.service.createFarmer({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Farmer] })
  @ApiNestedQuery(FarmerFindManyArgs)
  async farmers(@common.Req() request: Request): Promise<Farmer[]> {
    const args = plainToClass(FarmerFindManyArgs, request.query);
    return this.service.farmers({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Farmer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async farmer(
    @common.Param() params: FarmerWhereUniqueInput
  ): Promise<Farmer | null> {
    const result = await this.service.farmer({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
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
  @swagger.ApiOkResponse({ type: Farmer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFarmer(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() data: FarmerUpdateInput
  ): Promise<Farmer | null> {
    try {
      return await this.service.updateFarmer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phone: true,
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
  @swagger.ApiOkResponse({ type: Farmer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFarmer(
    @common.Param() params: FarmerWhereUniqueInput
  ): Promise<Farmer | null> {
    try {
      return await this.service.deleteFarmer({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phone: true,
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

  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  async findOrders(
    @common.Req() request: Request,
    @common.Param() params: FarmerWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orders")
  async connectOrders(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.updateFarmer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  async updateOrders(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.updateFarmer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  async disconnectOrders(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.updateFarmer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/profiles")
  @ApiNestedQuery(ProfileFindManyArgs)
  async findProfiles(
    @common.Req() request: Request,
    @common.Param() params: FarmerWhereUniqueInput
  ): Promise<Profile[]> {
    const query = plainToClass(ProfileFindManyArgs, request.query);
    const results = await this.service.findProfiles(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        dateOfBirth: true,

        farmer: {
          select: {
            id: true,
          },
        },

        firstName: true,
        gender: true,
        id: true,
        lastName: true,
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

  @common.Post("/:id/profiles")
  async connectProfiles(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() body: ProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      profiles: {
        connect: body,
      },
    };
    await this.service.updateFarmer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/profiles")
  async updateProfiles(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() body: ProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      profiles: {
        set: body,
      },
    };
    await this.service.updateFarmer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/profiles")
  async disconnectProfiles(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() body: ProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      profiles: {
        disconnect: body,
      },
    };
    await this.service.updateFarmer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/salesItems")
  @ApiNestedQuery(SalesFindManyArgs)
  async findSalesItems(
    @common.Req() request: Request,
    @common.Param() params: FarmerWhereUniqueInput
  ): Promise<Sales[]> {
    const query = plainToClass(SalesFindManyArgs, request.query);
    const results = await this.service.findSalesItems(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,

        farmer: {
          select: {
            id: true,
          },
        },

        id: true,
        quantity: true,
        saleDate: true,
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

  @common.Post("/:id/salesItems")
  async connectSalesItems(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() body: SalesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salesItems: {
        connect: body,
      },
    };
    await this.service.updateFarmer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/salesItems")
  async updateSalesItems(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() body: SalesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salesItems: {
        set: body,
      },
    };
    await this.service.updateFarmer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/salesItems")
  async disconnectSalesItems(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() body: SalesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salesItems: {
        disconnect: body,
      },
    };
    await this.service.updateFarmer({
      where: params,
      data,
      select: { id: true },
    });
  }
}
