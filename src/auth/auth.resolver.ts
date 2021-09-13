import { Context } from 'src/ context';
import { FindUniqueUserArgs, User } from 'src/prisma/generated/type-graphql';
import { Authorized } from 'type-graphql';
import * as bcrypt from 'bcrypt';
import * as TypeGraphQL from 'type-graphql';
import { LoginInput } from './dto/login-type';
import { JwtService } from '@nestjs/jwt';
import { Payload } from 'src/payload';
import { JwtPayload } from './entities/jwt-payload';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth-guard';
import { CurrentUser } from './current-user';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from 'src/prisma/generated/type-graphql/helpers';
import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';

@TypeGraphQL.Resolver((of) => User)
export class AuthResolver {
  constructor(private jwtService: JwtService) {}

  @TypeGraphQL.Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
  @TypeGraphQL.Mutation((returns) => JwtPayload)
  async Login(
    @TypeGraphQL.Arg('login') login: LoginInput,
    @TypeGraphQL.Ctx() { prisma }: Context,
  ) {
    const user = await prisma.user.findUnique({
      where: { email: login.email },
    });

    if (user && bcrypt.compareSync(login.password, user.password)) {
      const payload: Payload = { email: user.email, sub: user.id };
      return {
        user: payload,
        access_token: this.jwtService.sign(payload),
      };
    } else {
      console.log('llega y se exepcion');
      throw new HttpException(
        'user or password is not valid',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  @TypeGraphQL.Query(() => User)
  @Authorized()
  profile(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<User> {
    const user = req.user as Payload;

    const input: FindUniqueUserArgs = {
      where: { id: user.sub },
    };
    return getPrismaFromContext({ prisma, req }).user.findUnique({
      ...input,
    });
    //return prisma.user.findUnique({ where: { id: user.sub } });
  }
}
