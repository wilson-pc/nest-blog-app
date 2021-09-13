import { SesionCreateNestedManyWithoutUserInput } from "../inputs/SesionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutPostsInput {
    email: string;
    id?: string | undefined;
    name?: string | undefined;
    image?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    sesions?: SesionCreateNestedManyWithoutUserInput | undefined;
}
