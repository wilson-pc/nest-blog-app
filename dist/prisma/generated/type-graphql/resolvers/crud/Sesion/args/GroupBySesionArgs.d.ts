import { SesionOrderByWithAggregationInput } from "../../../inputs/SesionOrderByWithAggregationInput";
import { SesionScalarWhereWithAggregatesInput } from "../../../inputs/SesionScalarWhereWithAggregatesInput";
import { SesionWhereInput } from "../../../inputs/SesionWhereInput";
export declare class GroupBySesionArgs {
    where?: SesionWhereInput | undefined;
    orderBy?: SesionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "token" | "state" | "userId" | "createdAt" | "updatedAt">;
    having?: SesionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
