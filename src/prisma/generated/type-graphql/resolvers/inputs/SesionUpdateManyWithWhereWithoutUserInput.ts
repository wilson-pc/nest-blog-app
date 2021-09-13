import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionScalarWhereInput } from "../inputs/SesionScalarWhereInput";
import { SesionUpdateManyMutationInput } from "../inputs/SesionUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SesionUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => SesionScalarWhereInput, {
    nullable: false
  })
  where!: SesionScalarWhereInput;

  @TypeGraphQL.Field(_type => SesionUpdateManyMutationInput, {
    nullable: false
  })
  data!: SesionUpdateManyMutationInput;
}
