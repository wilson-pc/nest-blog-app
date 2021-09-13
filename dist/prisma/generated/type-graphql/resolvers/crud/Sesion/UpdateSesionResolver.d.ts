import { GraphQLResolveInfo } from "graphql";
import { UpdateSesionArgs } from "./args/UpdateSesionArgs";
import { Sesion } from "../../../models/Sesion";
export declare class UpdateSesionResolver {
    updateSesion(ctx: any, info: GraphQLResolveInfo, args: UpdateSesionArgs): Promise<Sesion | null>;
}
