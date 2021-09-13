import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SesionOrderByWithRelationInput } from "../../../inputs/SesionOrderByWithRelationInput";
import { SesionWhereInput } from "../../../inputs/SesionWhereInput";
import { SesionWhereUniqueInput } from "../../../inputs/SesionWhereUniqueInput";
import { SesionScalarFieldEnum } from "../../../../enums/SesionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserSesionsArgs {
  @TypeGraphQL.Field(_type => SesionWhereInput, {
    nullable: true
  })
  where?: SesionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SesionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SesionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SesionWhereUniqueInput, {
    nullable: true
  })
  cursor?: SesionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SesionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "token" | "state" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
