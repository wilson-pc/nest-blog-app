import { HttpService } from '@nestjs/axios';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from 'src/ context';
import { DeletePostArgs, FindFirstPostArgs, FindManyPostArgs, Post } from 'src/prisma/generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';
import { CreatePostArgs } from './args/CreatePostArgs';
import { UpdatePostArgs } from './args/UpdatePostArgs';
import { Message } from './entities/message';
export declare class BlogResolver {
    private axios;
    constructor(axios: HttpService);
    post(ctx: any, info: GraphQLResolveInfo, args: FindFirstPostArgs): Promise<Post | null>;
    posts(ctx: any, info: GraphQLResolveInfo, args: FindManyPostArgs): Promise<Post[]>;
    createPost({ prisma, req }: Context, info: GraphQLResolveInfo, args: CreatePostArgs): Promise<Post>;
    deletePost({ prisma, req }: Context, info: GraphQLResolveInfo, args: DeletePostArgs): Promise<Post | null>;
    updatePost({ prisma, req }: Context, info: GraphQLResolveInfo, args: UpdatePostArgs): Promise<Post | null>;
    sendMessage(ctx: any, info: GraphQLResolveInfo, pubSub: TypeGraphQL.PubSubEngine, login: string): Promise<Message>;
    newNotification(notificationPayload: string): Message;
}
