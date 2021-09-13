import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SesionScalarWhereWithAggregatesInput {
    AND?: SesionScalarWhereWithAggregatesInput[] | undefined;
    OR?: SesionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SesionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    token?: StringWithAggregatesFilter | undefined;
    state?: BoolWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
