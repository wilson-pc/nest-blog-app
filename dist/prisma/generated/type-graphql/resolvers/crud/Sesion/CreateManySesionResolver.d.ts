import { GraphQLResolveInfo } from "graphql";
import { CreateManySesionArgs } from "./args/CreateManySesionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySesionResolver {
    createManySesion(ctx: any, info: GraphQLResolveInfo, args: CreateManySesionArgs): Promise<AffectedRowsOutput>;
}
