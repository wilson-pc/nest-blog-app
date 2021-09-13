import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class SesionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
