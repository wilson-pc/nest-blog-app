import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionCreateWithoutUserInput } from "../inputs/SesionCreateWithoutUserInput";
import { SesionWhereUniqueInput } from "../inputs/SesionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SesionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SesionWhereUniqueInput, {
    nullable: false
  })
  where!: SesionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SesionCreateWithoutUserInput, {
    nullable: false
  })
  create!: SesionCreateWithoutUserInput;
}
