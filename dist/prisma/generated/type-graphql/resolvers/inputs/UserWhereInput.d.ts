import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { SesionListRelationFilter } from "../inputs/SesionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    email?: StringFilter | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    password?: StringFilter | undefined;
    posts?: PostListRelationFilter | undefined;
    sesions?: SesionListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
