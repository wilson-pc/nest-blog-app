import { PostOrderByWithRelationInput } from "../../../inputs/PostOrderByWithRelationInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
export declare class FindManyPostArgs {
    where?: PostWhereInput | undefined;
    orderBy?: PostOrderByWithRelationInput[] | undefined;
    cursor?: PostWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "authorId" | "content" | "published" | "title" | "image" | "createdAt" | "updatedAt"> | undefined;
}
