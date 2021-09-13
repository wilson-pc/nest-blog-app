import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
export declare class PostGroupBy {
    id: string;
    authorId: string | null;
    content: string | null;
    published: boolean;
    title: string;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PostCountAggregate | null;
    _min: PostMinAggregate | null;
    _max: PostMaxAggregate | null;
}
