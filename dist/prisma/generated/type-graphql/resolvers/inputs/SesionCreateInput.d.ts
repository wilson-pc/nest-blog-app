import { UserCreateNestedOneWithoutSesionsInput } from "../inputs/UserCreateNestedOneWithoutSesionsInput";
export declare class SesionCreateInput {
    id?: string | undefined;
    token: string;
    state?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutSesionsInput | undefined;
}
