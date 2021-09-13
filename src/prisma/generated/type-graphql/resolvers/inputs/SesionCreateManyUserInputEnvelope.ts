import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionCreateManyUserInput } from "../inputs/SesionCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SesionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SesionCreateManyUserInput], {
    nullable: false
  })
  data!: SesionCreateManyUserInput[];
}
