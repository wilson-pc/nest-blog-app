import { Post } from '../models/Post';
import { Sesion } from '../models/Sesion';
import { UserCount } from '../resolvers/outputs/UserCount';
export declare class User {
    email: string;
    id: string;
    name?: string | null;
    image?: string | null;
    password: string;
    posts?: Post[];
    sesions?: Sesion[];
    createdAt: Date;
    updatedAt: Date;
    _count?: UserCount | null;
}
