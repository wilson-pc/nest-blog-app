import { UserCreateOrConnectWithoutSesionsInput } from "../inputs/UserCreateOrConnectWithoutSesionsInput";
import { UserCreateWithoutSesionsInput } from "../inputs/UserCreateWithoutSesionsInput";
import { UserUpdateWithoutSesionsInput } from "../inputs/UserUpdateWithoutSesionsInput";
import { UserUpsertWithoutSesionsInput } from "../inputs/UserUpsertWithoutSesionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutSesionsInput {
    create?: UserCreateWithoutSesionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSesionsInput | undefined;
    upsert?: UserUpsertWithoutSesionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: UserUpdateWithoutSesionsInput | undefined;
}
