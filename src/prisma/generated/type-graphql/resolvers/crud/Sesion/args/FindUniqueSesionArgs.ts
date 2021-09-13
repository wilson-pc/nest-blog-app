import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SesionWhereUniqueInput } from "../../../inputs/SesionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSesionArgs {
  @TypeGraphQL.Field(_type => SesionWhereUniqueInput, {
    nullable: false
  })
  where!: SesionWhereUniqueInput;
}
