import { GraphQLResolveInfo } from 'graphql';
import {
  DeleteUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  User,
} from 'src/prisma/generated/type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from 'src/prisma/generated/type-graphql/helpers';
import * as TypeGraphQL from 'type-graphql';
import { Authorized } from 'type-graphql';
import * as bcrypt from 'bcrypt';
import * as FormData from 'form-data';
import { CreateUserArgs } from './args/CreateUserArgs';
import { HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import graphqlFields from 'graphql-fields';
import { Context } from 'src/ context';
import { Payload } from 'src/payload';
import { UpdateUserArgs } from './args/UpdateUserArgs';

@TypeGraphQL.Resolver()
export class UserResolver {
  constructor(private axios: HttpService) {}

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: false,
  })
  async createUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateUserArgs,
  ): Promise<User> {
    args.data.password = bcrypt.hashSync(args.data.password, 10);
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
    return getPrismaFromContext(ctx).user.create({
      ...args,
    });
  }

  @TypeGraphQL.Query((_returns) => [User], {
    nullable: false,
  })
  async users(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyUserArgs,
  ): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findMany({
      ...args,
    });
  }

  @TypeGraphQL.Query((_returns) => User, {
    nullable: true,
  })
  async user(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstUserArgs,
  ): Promise<User | null> {
    return getPrismaFromContext(ctx).user.findFirst({
      ...args,
    });
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: true,
  })
  @Authorized()
  async deleteUser(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteUserArgs,
  ): Promise<User | null> {
    const user = req.user as Payload;

    if (args.where.id == user.sub || args.where.email == user.email) {
      return getPrismaFromContext({ prisma }).user.delete({
        ...args,
      });
    } else {
      throw new HttpException('action not allowed', HttpStatus.UNAUTHORIZED);
    }
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: true,
  })
  @Authorized()
  async updateUser(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateUserArgs,
  ): Promise<User | null> {
    const user = req.user as Payload;
    if (args.where.id == user.sub || args.where.email == user.email) {
      return getPrismaFromContext({ prisma }).user.update({
        ...args,
      });
    } else {
      throw new HttpException('action not allowed', HttpStatus.UNAUTHORIZED);
    }
  }
}
