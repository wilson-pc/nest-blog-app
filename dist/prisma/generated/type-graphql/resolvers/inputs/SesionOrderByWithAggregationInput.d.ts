import { SesionCountOrderByAggregateInput } from "../inputs/SesionCountOrderByAggregateInput";
import { SesionMaxOrderByAggregateInput } from "../inputs/SesionMaxOrderByAggregateInput";
import { SesionMinOrderByAggregateInput } from "../inputs/SesionMinOrderByAggregateInput";
export declare class SesionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SesionCountOrderByAggregateInput | undefined;
    _max?: SesionMaxOrderByAggregateInput | undefined;
    _min?: SesionMinOrderByAggregateInput | undefined;
}
