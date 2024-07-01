/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PurchaseWhereUniqueInput } from "./PurchaseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeletePurchaseArgs {
  @ApiProperty({
    required: true,
    type: () => PurchaseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseWhereUniqueInput)
  @Field(() => PurchaseWhereUniqueInput, { nullable: false })
  where!: PurchaseWhereUniqueInput;
}

export { DeletePurchaseArgs as DeletePurchaseArgs };
