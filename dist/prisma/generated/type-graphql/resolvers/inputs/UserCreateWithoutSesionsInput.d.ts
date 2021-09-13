import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
export declare class UserCreateWithoutSesionsInput {
    email: string;
    id?: string | undefined;
    name?: string | undefined;
    image?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
