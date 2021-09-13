import { GraphQLResolveInfo } from "graphql";
import { UpdateManySesionArgs } from "./args/UpdateManySesionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySesionResolver {
    updateManySesion(ctx: any, info: GraphQLResolveInfo, args: UpdateManySesionArgs): Promise<AffectedRowsOutput>;
}
