import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SesionCreateInput } from "../../../inputs/SesionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSesionArgs {
  @TypeGraphQL.Field(_type => SesionCreateInput, {
    nullable: false
  })
  data!: SesionCreateInput;
}
