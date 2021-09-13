import { SesionCreateInput } from "../../../inputs/SesionCreateInput";
import { SesionUpdateInput } from "../../../inputs/SesionUpdateInput";
import { SesionWhereUniqueInput } from "../../../inputs/SesionWhereUniqueInput";
export declare class UpsertSesionArgs {
    where: SesionWhereUniqueInput;
    create: SesionCreateInput;
    update: SesionUpdateInput;
}
