import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionCountAggregate } from "../outputs/SesionCountAggregate";
import { SesionMaxAggregate } from "../outputs/SesionMaxAggregate";
import { SesionMinAggregate } from "../outputs/SesionMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class SesionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  state!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => SesionCountAggregate, {
    nullable: true
  })
  _count!: SesionCountAggregate | null;

  @TypeGraphQL.Field(_type => SesionMinAggregate, {
    nullable: true
  })
  _min!: SesionMinAggregate | null;

  @TypeGraphQL.Field(_type => SesionMaxAggregate, {
    nullable: true
  })
  _max!: SesionMaxAggregate | null;
}
