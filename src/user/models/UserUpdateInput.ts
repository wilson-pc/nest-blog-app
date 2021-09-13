import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { IsEmail, IsString } from 'class-validator';

@TypeGraphQL.InputType({
  isAbstract: true,
})
export class UserUpdateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  @IsString()
  @IsEmail()
  email?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  @IsString()
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  @IsString()
  image?: string | undefined;
}
