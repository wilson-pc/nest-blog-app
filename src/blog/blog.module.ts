import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';
import { BlogResolver } from './blog.resolver';
import { PostRelationsResolver } from 'src/prisma/generated/type-graphql';
@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [BlogController],
  providers: [BlogService, BlogResolver, PostRelationsResolver],
})
export class BlogModule {}
