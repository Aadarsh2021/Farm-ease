/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SalesWhereInput } from "./SalesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SalesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SalesWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesWhereInput)
  @IsOptional()
  @Field(() => SalesWhereInput, {
    nullable: true,
  })
  every?: SalesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesWhereInput)
  @IsOptional()
  @Field(() => SalesWhereInput, {
    nullable: true,
  })
  some?: SalesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalesWhereInput,
  })
  @ValidateNested()
  @Type(() => SalesWhereInput)
  @IsOptional()
  @Field(() => SalesWhereInput, {
    nullable: true,
  })
  none?: SalesWhereInput;
}
export { SalesListRelationFilter as SalesListRelationFilter };