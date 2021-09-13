import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSesionArgs } from "./args/FindUniqueSesionArgs";
import { Sesion } from "../../../models/Sesion";
export declare class FindUniqueSesionResolver {
    sesion(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSesionArgs): Promise<Sesion | null>;
}
