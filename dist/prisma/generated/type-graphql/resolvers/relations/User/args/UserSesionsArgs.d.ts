import { SesionOrderByWithRelationInput } from "../../../inputs/SesionOrderByWithRelationInput";
import { SesionWhereInput } from "../../../inputs/SesionWhereInput";
import { SesionWhereUniqueInput } from "../../../inputs/SesionWhereUniqueInput";
export declare class UserSesionsArgs {
    where?: SesionWhereInput | undefined;
    orderBy?: SesionOrderByWithRelationInput[] | undefined;
    cursor?: SesionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "token" | "state" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
