import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';

import { Authorized } from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Context } from 'src/ context';
import { Payload } from 'src/payload';
import * as FormData from 'form-data';
import {
  DeletePostArgs,
  FindFirstPostArgs,
  FindManyPostArgs,
  Post,
} from 'src/prisma/generated/type-graphql';
import { getPrismaFromContext } from 'src/prisma/generated/type-graphql/helpers';
import * as TypeGraphQL from 'type-graphql';
import { CreatePostArgs } from './args/CreatePostArgs';
import { lastValueFrom } from 'rxjs';
import { UpdatePostArgs } from './args/UpdatePostArgs';

@TypeGraphQL.Resolver((_of) => Post)
export class BlogResolver {
  constructor(private axios: HttpService) {}

  @TypeGraphQL.Query((_returns) => Post, {
    nullable: true,
  })
  async post(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstPostArgs,
  ): Promise<Post | null> {
    return getPrismaFromContext(ctx).post.findFirst({
      ...args,
    });
  }

  @TypeGraphQL.Query((_returns) => [Post], {
    nullable: false,
  })
  async posts(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyPostArgs,
  ): Promise<Post[]> {
    if (args.where) {
      args.where.published = { equals: true };
    } else {
      args.where = { published: { equals: true } };
    }

    return getPrismaFromContext(ctx).post.findMany({
      ...args,
    });
  }

  @TypeGraphQL.Mutation((_returns) => Post, {
    nullable: false,
  })
  @Authorized()
  async createPost(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreatePostArgs,
  ): Promise<Post> {
    const user = req.user as Payload;
    args.data.author = { connect: { id: user.sub } };
    if (args.data.image) {
      try {
        const buff = Buffer.from(
          args.data.image.split(';base64,').pop(),
          'base64',
        );

        const form = new FormData();
        form.append('file', buff, 'gato.jpg');
        const instance = this.axios.post('https://telegra.ph/upload', form, {
          headers: { ...form.getHeaders() },
        });
        const { data } = await lastValueFrom(instance);
        const [{ src }] = data;
        args.data.image = 'https://telegra.ph' + src;
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
    return getPrismaFromContext({ prisma }).post.create({
      ...args,
    });
  }

  @TypeGraphQL.Mutation((_returns) => Post, {
    nullable: true,
  })
  @Authorized()
  async deletePost(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeletePostArgs,
  ): Promise<Post | null> {
    const user = req.user as Payload;
    const post = await prisma.post.findFirst({
      where: { OR: { id: args.where.id, authorId: user.sub } },
    });
    if (post) {
      return getPrismaFromContext({ prisma }).post.delete({
        ...args,
      });
    } else {
      throw new HttpException('action not allowed', HttpStatus.UNAUTHORIZED);
    }
  }

  @TypeGraphQL.Mutation((_returns) => Post, {
    nullable: true,
  })
  @Authorized()
  async updatePost(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdatePostArgs,
  ): Promise<Post | null> {
    const user = req.user as Payload;
    const post = await prisma.post.findFirst({
      where: { OR: { id: args.where.id, authorId: user.sub } },
    });
    if (post) {
      if (args.data.image) {
        try {
          const buff = Buffer.from(
            args.data.image.split(';base64,').pop(),
            'base64',
          );

          const form = new FormData();
          form.append('file', buff, 'gato.jpg');
          const instance = this.axios.post('https://telegra.ph/upload', form, {
            headers: { ...form.getHeaders() },
          });
          const { data } = await lastValueFrom(instance);
          const [{ src }] = data;
          args.data.image = 'https://telegra.ph' + src;
        } catch (error) {
          throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
      }
      return getPrismaFromContext({ prisma }).post.update({
        ...args,
      });
    } else {
      throw new HttpException('action not allowed', HttpStatus.UNAUTHORIZED);
    }
  }
}
