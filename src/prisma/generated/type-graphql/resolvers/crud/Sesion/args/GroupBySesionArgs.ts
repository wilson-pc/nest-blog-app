import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SesionOrderByWithAggregationInput } from "../../../inputs/SesionOrderByWithAggregationInput";
import { SesionScalarWhereWithAggregatesInput } from "../../../inputs/SesionScalarWhereWithAggregatesInput";
import { SesionWhereInput } from "../../../inputs/SesionWhereInput";
import { SesionScalarFieldEnum } from "../../../../enums/SesionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySesionArgs {
  @TypeGraphQL.Field(_type => SesionWhereInput, {
    nullable: true
  })
  where?: SesionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SesionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SesionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "token" | "state" | "userId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => SesionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SesionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
