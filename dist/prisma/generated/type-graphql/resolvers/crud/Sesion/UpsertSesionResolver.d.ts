import { GraphQLResolveInfo } from "graphql";
import { UpsertSesionArgs } from "./args/UpsertSesionArgs";
import { Sesion } from "../../../models/Sesion";
export declare class UpsertSesionResolver {
    upsertSesion(ctx: any, info: GraphQLResolveInfo, args: UpsertSesionArgs): Promise<Sesion>;
}
