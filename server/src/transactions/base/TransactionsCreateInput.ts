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
import {
  IsNumber,
  ValidateNested,
  IsString,
  IsOptional,
} from "class-validator";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { WalletWhereUniqueInput } from "../../wallet/base/WalletWhereUniqueInput";

@InputType()
class TransactionsCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  amount!: number;

  @ApiProperty({
    required: true,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput)
  categoryId!: CategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  userId?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => WalletWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WalletWhereUniqueInput)
  @Field(() => WalletWhereUniqueInput)
  walletId!: WalletWhereUniqueInput;
}

export { TransactionsCreateInput as TransactionsCreateInput };