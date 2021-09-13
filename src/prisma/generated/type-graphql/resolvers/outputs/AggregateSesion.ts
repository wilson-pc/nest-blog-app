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
export class AggregateSesion {
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
