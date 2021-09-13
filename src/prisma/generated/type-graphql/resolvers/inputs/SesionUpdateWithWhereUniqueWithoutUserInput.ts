import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionUpdateWithoutUserInput } from "../inputs/SesionUpdateWithoutUserInput";
import { SesionWhereUniqueInput } from "../inputs/SesionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SesionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SesionWhereUniqueInput, {
    nullable: false
  })
  where!: SesionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SesionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SesionUpdateWithoutUserInput;
}
