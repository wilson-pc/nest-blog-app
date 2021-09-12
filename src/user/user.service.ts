import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/user-create-dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);
    return this.prisma.user.create({
      data: createUserDto,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        updatedAt: true,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        updatedAt: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        updatedAt: true,
        posts: { where: { published: true } },
      },
    });
  }

  update(id: string, updateUserDto: any) {
    console.log(id, updateUserDto);
    return this.prisma.user.update({
      where: { id: id },
      data: updateUserDto,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        updatedAt: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id: id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        updatedAt: true,
      },
    });
  }
}
