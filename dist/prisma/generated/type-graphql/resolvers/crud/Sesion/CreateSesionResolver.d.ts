import { GraphQLResolveInfo } from "graphql";
import { CreateSesionArgs } from "./args/CreateSesionArgs";
import { Sesion } from "../../../models/Sesion";
export declare class CreateSesionResolver {
    createSesion(ctx: any, info: GraphQLResolveInfo, args: CreateSesionArgs): Promise<Sesion>;
}
