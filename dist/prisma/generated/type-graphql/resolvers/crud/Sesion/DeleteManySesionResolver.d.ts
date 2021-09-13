import { GraphQLResolveInfo } from "graphql";
import { DeleteManySesionArgs } from "./args/DeleteManySesionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySesionResolver {
    deleteManySesion(ctx: any, info: GraphQLResolveInfo, args: DeleteManySesionArgs): Promise<AffectedRowsOutput>;
}
