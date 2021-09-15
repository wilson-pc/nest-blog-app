import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '.prisma/client';
import { Payload } from 'src/payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email: email } });
    console.log(user);

    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: User) {
    const payload: Payload = { email: user.email, sub: user.id };
    return {
      user: payload,
      access_token: this.jwtService.sign(payload),
      type: 'Bearer',
    };
  }

  async getProfile(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
      select: {
        email: true,
        image: true,
        id: true,
        updatedAt: true,
        name: true,
        createdAt: true,
      },
    });
  }
}
