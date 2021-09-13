import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSesionsInput } from "../inputs/UserCreateOrConnectWithoutSesionsInput";
import { UserCreateWithoutSesionsInput } from "../inputs/UserCreateWithoutSesionsInput";
import { UserUpdateWithoutSesionsInput } from "../inputs/UserUpdateWithoutSesionsInput";
import { UserUpsertWithoutSesionsInput } from "../inputs/UserUpsertWithoutSesionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutSesionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSesionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSesionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSesionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSesionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSesionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSesionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSesionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSesionsInput | undefined;
}
