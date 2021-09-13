import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SesionCreateManyInput } from "../../../inputs/SesionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySesionArgs {
  @TypeGraphQL.Field(_type => [SesionCreateManyInput], {
    nullable: false
  })
  data!: SesionCreateManyInput[];
}
