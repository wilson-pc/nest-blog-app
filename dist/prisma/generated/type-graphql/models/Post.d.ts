import { User } from "../models/User";
export declare class Post {
    id: string;
    authorId?: string | null;
    content?: string | null;
    published: boolean;
    title: string;
    author?: User | null;
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
