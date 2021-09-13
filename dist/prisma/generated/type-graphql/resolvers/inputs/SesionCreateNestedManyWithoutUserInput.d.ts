import { SesionCreateManyUserInputEnvelope } from "../inputs/SesionCreateManyUserInputEnvelope";
import { SesionCreateOrConnectWithoutUserInput } from "../inputs/SesionCreateOrConnectWithoutUserInput";
import { SesionCreateWithoutUserInput } from "../inputs/SesionCreateWithoutUserInput";
import { SesionWhereUniqueInput } from "../inputs/SesionWhereUniqueInput";
export declare class SesionCreateNestedManyWithoutUserInput {
    create?: SesionCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SesionCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: SesionCreateManyUserInputEnvelope | undefined;
    connect?: SesionWhereUniqueInput[] | undefined;
}
