import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SesionScalarWhereInput {
    AND?: SesionScalarWhereInput[] | undefined;
    OR?: SesionScalarWhereInput[] | undefined;
    NOT?: SesionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    token?: StringFilter | undefined;
    state?: BoolFilter | undefined;
    userId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
