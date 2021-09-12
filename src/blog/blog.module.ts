import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
