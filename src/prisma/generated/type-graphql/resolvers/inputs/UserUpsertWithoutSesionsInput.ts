import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSesionsInput } from "../inputs/UserCreateWithoutSesionsInput";
import { UserUpdateWithoutSesionsInput } from "../inputs/UserUpdateWithoutSesionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutSesionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSesionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSesionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSesionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSesionsInput;
}
