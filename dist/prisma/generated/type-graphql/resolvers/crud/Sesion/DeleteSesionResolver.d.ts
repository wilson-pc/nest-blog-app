import { GraphQLResolveInfo } from "graphql";
import { DeleteSesionArgs } from "./args/DeleteSesionArgs";
import { Sesion } from "../../../models/Sesion";
export declare class DeleteSesionResolver {
    deleteSesion(ctx: any, info: GraphQLResolveInfo, args: DeleteSesionArgs): Promise<Sesion | null>;
}
