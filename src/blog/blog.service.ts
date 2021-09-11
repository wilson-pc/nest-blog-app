import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBlogDto: any) {
    return this.prisma.post.create({ data: createBlogDto });
  }

  findAll(query: Prisma.PostWhereInput) {
    return this.prisma.post.findMany({ where: query });
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: { id: id },
      include: { author: true },
    });
  }

  update(id: string, updateBlogDto: any) {
    return this.prisma.post.update({ where: { id: id }, data: updateBlogDto });
  }

  remove(id: string) {
    return this.prisma.post.delete({ where: { id: id } });
  }
}
