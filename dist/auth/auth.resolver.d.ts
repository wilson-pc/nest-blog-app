import { Context } from 'src/ context';
import { User } from 'src/prisma/generated/type-graphql';
import { LoginInput } from './dto/login-type';
import { JwtService } from '@nestjs/jwt';
import { Payload } from 'src/payload';
import { GraphQLResolveInfo } from 'graphql';
export declare class AuthResolver {
    private jwtService;
    constructor(jwtService: JwtService);
    sayHello(): string;
    login(login: LoginInput, { prisma }: Context): Promise<{
        user: Payload;
        access_token: string;
        type: string;
    }>;
    profile({ prisma, req }: Context, info: GraphQLResolveInfo): Promise<User>;
}
