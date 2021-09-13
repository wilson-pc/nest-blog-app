import { UserCreateOrConnectWithoutSesionsInput } from "../inputs/UserCreateOrConnectWithoutSesionsInput";
import { UserCreateWithoutSesionsInput } from "../inputs/UserCreateWithoutSesionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSesionsInput {
    create?: UserCreateWithoutSesionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSesionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
