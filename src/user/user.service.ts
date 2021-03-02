import { Injectable } from '@nestjs/common';
import { Console } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: any) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
      include: { posts: true },
    });
  }

  update(id: string, updateUserDto: any) {
    console.log(id, updateUserDto);
    return this.prisma.user.update({ where: { id: id }, data: updateUserDto });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id: id } });
  }
}
