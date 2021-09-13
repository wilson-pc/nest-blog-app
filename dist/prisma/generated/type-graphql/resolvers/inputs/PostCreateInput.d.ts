import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    id?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
    title: string;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    author?: UserCreateNestedOneWithoutPostsInput | undefined;
}
