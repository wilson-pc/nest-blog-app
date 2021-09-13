import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSesionsInput } from "../inputs/UserCreateOrConnectWithoutSesionsInput";
import { UserCreateWithoutSesionsInput } from "../inputs/UserCreateWithoutSesionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutSesionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSesionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSesionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSesionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSesionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
