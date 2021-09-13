import { SesionCreateManyUserInputEnvelope } from "../inputs/SesionCreateManyUserInputEnvelope";
import { SesionCreateOrConnectWithoutUserInput } from "../inputs/SesionCreateOrConnectWithoutUserInput";
import { SesionCreateWithoutUserInput } from "../inputs/SesionCreateWithoutUserInput";
import { SesionScalarWhereInput } from "../inputs/SesionScalarWhereInput";
import { SesionUpdateManyWithWhereWithoutUserInput } from "../inputs/SesionUpdateManyWithWhereWithoutUserInput";
import { SesionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SesionUpdateWithWhereUniqueWithoutUserInput";
import { SesionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SesionUpsertWithWhereUniqueWithoutUserInput";
import { SesionWhereUniqueInput } from "../inputs/SesionWhereUniqueInput";
export declare class SesionUpdateManyWithoutUserInput {
    create?: SesionCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SesionCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: SesionUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: SesionCreateManyUserInputEnvelope | undefined;
    connect?: SesionWhereUniqueInput[] | undefined;
    set?: SesionWhereUniqueInput[] | undefined;
    disconnect?: SesionWhereUniqueInput[] | undefined;
    delete?: SesionWhereUniqueInput[] | undefined;
    update?: SesionUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: SesionUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: SesionScalarWhereInput[] | undefined;
}
