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
import { ProfileService } from "../profile.service";
import { ProfileCreateInput } from "./ProfileCreateInput";
import { Profile } from "./Profile";
import { ProfileFindManyArgs } from "./ProfileFindManyArgs";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";
import { ProfileUpdateInput } from "./ProfileUpdateInput";

export class ProfileControllerBase {
  constructor(protected readonly service: ProfileService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Profile })
  async createProfile(
    @common.Body() data: ProfileCreateInput
  ): Promise<Profile> {
    return await this.service.createProfile({
      data: {
        ...data,

        farmer: data.farmer
          ? {
              connect: data.farmer,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Profile] })
  @ApiNestedQuery(ProfileFindManyArgs)
  async profiles(@common.Req() request: Request): Promise<Profile[]> {
    const args = plainToClass(ProfileFindManyArgs, request.query);
    return this.service.profiles({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async profile(
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Profile | null> {
    const result = await this.service.profile({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProfile(
    @common.Param() params: ProfileWhereUniqueInput,
    @common.Body() data: ProfileUpdateInput
  ): Promise<Profile | null> {
    try {
      return await this.service.updateProfile({
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
  @swagger.ApiOkResponse({ type: Profile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProfile(
    @common.Param() params: ProfileWhereUniqueInput
  ): Promise<Profile | null> {
    try {
      return await this.service.deleteProfile({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
