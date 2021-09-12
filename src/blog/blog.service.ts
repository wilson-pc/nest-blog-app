import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Payload } from 'src/payload';

import { PrismaService } from 'src/prisma/prisma.service';
import { PostUpateDto } from './dto/post-update-dto';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBlogDto: any, user: Payload) {
    return this.prisma.post.create({
      data: { ...createBlogDto, authorId: user.sub },
    });
  }

  findAll(query: Prisma.PostWhereInput) {
    return this.prisma.post.findMany({
      where: query,
      select: {
        author: { select: { id: true, name: true, email: true } },
        content: true,
        id: true,
        createdAt: true,
        title: true,
        image: true,
        published: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: { id: id },
      select: {
        author: { select: { id: true, name: true, email: true } },
        content: true,
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        image: true,
        published: true,
      },
    });
  }

  async update(id: string, updateBlogDto: PostUpateDto, user: Payload) {
    const post = await this.prisma.post.findFirst({
      where: { id: id, authorId: user.sub },
      select: { id: true },
    });
    if (post) {
      return this.prisma.post.update({
        where: { id: id },
        data: updateBlogDto,
      });
    } else {
      throw new HttpException('action not allowed', HttpStatus.UNAUTHORIZED);
    }
  }

  remove(id: string, user: Payload) {
    return this.prisma.post.deleteMany({
      where: { id: id, authorId: user.sub },
    });
  }
}
