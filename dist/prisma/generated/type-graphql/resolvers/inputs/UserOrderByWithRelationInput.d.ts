import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { SesionOrderByRelationAggregateInput } from "../inputs/SesionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    email?: "asc" | "desc" | undefined;
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
    sesions?: SesionOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
