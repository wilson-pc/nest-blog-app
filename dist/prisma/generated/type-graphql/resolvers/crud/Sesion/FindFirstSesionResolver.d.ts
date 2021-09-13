import { GraphQLResolveInfo } from "graphql";
import { FindFirstSesionArgs } from "./args/FindFirstSesionArgs";
import { Sesion } from "../../../models/Sesion";
export declare class FindFirstSesionResolver {
    findFirstSesion(ctx: any, info: GraphQLResolveInfo, args: FindFirstSesionArgs): Promise<Sesion | null>;
}
