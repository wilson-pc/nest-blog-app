import { PostWhereUniqueInput } from 'src/prisma/generated/type-graphql';
import { PostUpdateInput } from '../entities/PostUpdateInput';
export declare class UpdatePostArgs {
    data: PostUpdateInput;
    where: PostWhereUniqueInput;
}
