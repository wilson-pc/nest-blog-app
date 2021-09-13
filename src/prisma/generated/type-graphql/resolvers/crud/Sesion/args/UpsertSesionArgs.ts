import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SesionCreateInput } from "../../../inputs/SesionCreateInput";
import { SesionUpdateInput } from "../../../inputs/SesionUpdateInput";
import { SesionWhereUniqueInput } from "../../../inputs/SesionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSesionArgs {
  @TypeGraphQL.Field(_type => SesionWhereUniqueInput, {
    nullable: false
  })
  where!: SesionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SesionCreateInput, {
    nullable: false
  })
  create!: SesionCreateInput;

  @TypeGraphQL.Field(_type => SesionUpdateInput, {
    nullable: false
  })
  update!: SesionUpdateInput;
}
