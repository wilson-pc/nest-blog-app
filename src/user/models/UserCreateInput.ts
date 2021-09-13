import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { IsEmail, IsString } from 'class-validator';

@TypeGraphQL.InputType({
  isAbstract: true,
})
export class UserCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  @IsString()
  @IsEmail()
  email!: string;

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

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  @IsString()
  password!: string;
}
