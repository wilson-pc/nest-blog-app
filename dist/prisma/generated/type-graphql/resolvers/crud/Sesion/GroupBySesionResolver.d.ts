import { GraphQLResolveInfo } from "graphql";
import { GroupBySesionArgs } from "./args/GroupBySesionArgs";
import { SesionGroupBy } from "../../outputs/SesionGroupBy";
export declare class GroupBySesionResolver {
    groupBySesion(ctx: any, info: GraphQLResolveInfo, args: GroupBySesionArgs): Promise<SesionGroupBy[]>;
}
