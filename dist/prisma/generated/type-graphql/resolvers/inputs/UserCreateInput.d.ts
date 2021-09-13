import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { SesionCreateNestedManyWithoutUserInput } from "../inputs/SesionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    email: string;
    id?: string | undefined;
    name?: string | undefined;
    image?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    sesions?: SesionCreateNestedManyWithoutUserInput | undefined;
}
