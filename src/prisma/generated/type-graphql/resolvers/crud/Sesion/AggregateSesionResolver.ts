import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSesionArgs } from "./args/AggregateSesionArgs";
import { Sesion } from "../../../models/Sesion";
import { AggregateSesion } from "../../outputs/AggregateSesion";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sesion)
export class AggregateSesionResolver {
  @TypeGraphQL.Query(_returns => AggregateSesion, {
    nullable: false
  })
  async aggregateSesion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSesionArgs): Promise<AggregateSesion> {
    return getPrismaFromContext(ctx).sesion.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
