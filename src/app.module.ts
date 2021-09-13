import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PrismaClient } from '@prisma/client';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeGraphQLModule } from './typegraphql';
import { Context } from './ context';
import { authChecker } from './auth/auth-checker';

const prisma = new PrismaClient();
@Module({
  imports: [
    UserModule,
    BlogModule,
    AuthModule,
    PrismaModule,
    TypeGraphQLModule.forRoot({
      playground: true,
      introspection: true,
      authChecker: authChecker,
      emitSchemaFile: true,
      validate: false,
      context: ({ req }): Context => ({ prisma, req }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
