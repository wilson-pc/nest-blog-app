import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SesionWhereInput {
    AND?: SesionWhereInput[] | undefined;
    OR?: SesionWhereInput[] | undefined;
    NOT?: SesionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    token?: StringFilter | undefined;
    state?: BoolFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
