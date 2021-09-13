import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionCountOrderByAggregateInput } from "../inputs/SesionCountOrderByAggregateInput";
import { SesionMaxOrderByAggregateInput } from "../inputs/SesionMaxOrderByAggregateInput";
import { SesionMinOrderByAggregateInput } from "../inputs/SesionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SesionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SesionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SesionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SesionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SesionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SesionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SesionMinOrderByAggregateInput | undefined;
}
