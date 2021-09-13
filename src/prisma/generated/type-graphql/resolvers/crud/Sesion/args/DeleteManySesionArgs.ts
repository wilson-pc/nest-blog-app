import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SesionWhereInput } from "../../../inputs/SesionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySesionArgs {
  @TypeGraphQL.Field(_type => SesionWhereInput, {
    nullable: true
  })
  where?: SesionWhereInput | undefined;
}
