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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TweetWhereUniqueInput } from "../../tweet/base/TweetWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CommentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;

  @ApiProperty({
    required: false,
    type: () => TweetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TweetWhereUniqueInput)
  @IsOptional()
  @Field(() => TweetWhereUniqueInput, {
    nullable: true,
  })
  tweet?: TweetWhereUniqueInput | null;
}

export { CommentUpdateInput as CommentUpdateInput };
