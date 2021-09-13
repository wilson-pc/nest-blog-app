import { UserWhereUniqueInput } from 'src/prisma/generated/type-graphql';
import { UserUpdateInput } from '../models/UserUpdateInput';
export declare class UpdateUserArgs {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
}
