import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionCreateWithoutUserInput } from "../inputs/SesionCreateWithoutUserInput";
import { SesionUpdateWithoutUserInput } from "../inputs/SesionUpdateWithoutUserInput";
import { SesionWhereUniqueInput } from "../inputs/SesionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SesionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SesionWhereUniqueInput, {
    nullable: false
  })
  where!: SesionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SesionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SesionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SesionCreateWithoutUserInput, {
    nullable: false
  })
  create!: SesionCreateWithoutUserInput;
}
