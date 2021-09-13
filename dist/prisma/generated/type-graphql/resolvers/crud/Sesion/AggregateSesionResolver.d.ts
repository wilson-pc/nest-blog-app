import { GraphQLResolveInfo } from "graphql";
import { AggregateSesionArgs } from "./args/AggregateSesionArgs";
import { AggregateSesion } from "../../outputs/AggregateSesion";
export declare class AggregateSesionResolver {
    aggregateSesion(ctx: any, info: GraphQLResolveInfo, args: AggregateSesionArgs): Promise<AggregateSesion>;
}
