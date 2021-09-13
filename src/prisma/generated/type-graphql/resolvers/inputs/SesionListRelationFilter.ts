import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionWhereInput } from "../inputs/SesionWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SesionListRelationFilter {
  @TypeGraphQL.Field(_type => SesionWhereInput, {
    nullable: true
  })
  every?: SesionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SesionWhereInput, {
    nullable: true
  })
  some?: SesionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SesionWhereInput, {
    nullable: true
  })
  none?: SesionWhereInput | undefined;
}
