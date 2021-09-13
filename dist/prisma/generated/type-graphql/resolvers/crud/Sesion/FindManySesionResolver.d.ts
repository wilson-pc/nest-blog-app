import { GraphQLResolveInfo } from "graphql";
import { FindManySesionArgs } from "./args/FindManySesionArgs";
import { Sesion } from "../../../models/Sesion";
export declare class FindManySesionResolver {
    sesions(ctx: any, info: GraphQLResolveInfo, args: FindManySesionArgs): Promise<Sesion[]>;
}
