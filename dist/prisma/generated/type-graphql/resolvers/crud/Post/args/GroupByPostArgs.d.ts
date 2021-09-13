import { PostOrderByWithAggregationInput } from "../../../inputs/PostOrderByWithAggregationInput";
import { PostScalarWhereWithAggregatesInput } from "../../../inputs/PostScalarWhereWithAggregatesInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
export declare class GroupByPostArgs {
    where?: PostWhereInput | undefined;
    orderBy?: PostOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "authorId" | "content" | "published" | "title" | "image" | "createdAt" | "updatedAt">;
    having?: PostScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
