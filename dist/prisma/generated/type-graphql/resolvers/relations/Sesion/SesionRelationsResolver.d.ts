import { Sesion } from "../../../models/Sesion";
import { User } from "../../../models/User";
export declare class SesionRelationsResolver {
    User(sesion: Sesion, ctx: any): Promise<User | null>;
}
