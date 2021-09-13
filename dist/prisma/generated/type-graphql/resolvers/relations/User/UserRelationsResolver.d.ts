import { Post } from "../../../models/Post";
import { Sesion } from "../../../models/Sesion";
import { User } from "../../../models/User";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserSesionsArgs } from "./args/UserSesionsArgs";
export declare class UserRelationsResolver {
    posts(user: User, ctx: any, args: UserPostsArgs): Promise<Post[]>;
    sesions(user: User, ctx: any, args: UserSesionsArgs): Promise<Sesion[]>;
}
