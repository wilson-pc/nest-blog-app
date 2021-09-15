import { UserCreateNestedOneWithoutPostsInput } from 'src/prisma/generated/type-graphql';
export declare class PostCreateInput {
    content?: string | undefined;
    published?: boolean | undefined;
    title: string;
    image?: string | undefined;
    author?: UserCreateNestedOneWithoutPostsInput | undefined;
}
