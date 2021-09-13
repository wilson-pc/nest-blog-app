import { User } from "../models/User";
export declare class Sesion {
    id: string;
    token: string;
    state: boolean;
    User?: User | null;
    userId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
