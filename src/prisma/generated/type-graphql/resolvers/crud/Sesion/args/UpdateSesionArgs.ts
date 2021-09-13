import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SesionUpdateInput } from "../../../inputs/SesionUpdateInput";
import { SesionWhereUniqueInput } from "../../../inputs/SesionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSesionArgs {
  @TypeGraphQL.Field(_type => SesionUpdateInput, {
    nullable: false
  })
  data!: SesionUpdateInput;

  @TypeGraphQL.Field(_type => SesionWhereUniqueInput, {
    nullable: false
  })
  where!: SesionWhereUniqueInput;
}
