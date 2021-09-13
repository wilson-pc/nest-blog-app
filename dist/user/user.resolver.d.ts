import { GraphQLResolveInfo } from 'graphql';
import { DeleteUserArgs, FindFirstUserArgs, FindManyUserArgs, User } from 'src/prisma/generated/type-graphql';
import { CreateUserArgs } from './args/CreateUserArgs';
import { HttpService } from '@nestjs/axios';
import { Context } from 'src/ context';
import { UpdateUserArgs } from './args/UpdateUserArgs';
export declare class UserResolver {
    private axios;
    constructor(axios: HttpService);
    createUser(ctx: any, info: GraphQLResolveInfo, args: CreateUserArgs): Promise<User>;
    users(ctx: any, info: GraphQLResolveInfo, args: FindManyUserArgs): Promise<User[]>;
    user(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserArgs): Promise<User | null>;
    deleteUser({ prisma, req }: Context, info: GraphQLResolveInfo, args: DeleteUserArgs): Promise<User | null>;
    updateUser({ prisma, req }: Context, info: GraphQLResolveInfo, args: UpdateUserArgs): Promise<User | null>;
}
