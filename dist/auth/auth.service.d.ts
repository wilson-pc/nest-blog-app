import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '.prisma/client';
import { Payload } from 'src/payload';
export declare class AuthService {
    private readonly prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: User): Promise<{
        user: Payload;
        access_token: string;
        type: string;
    }>;
    getProfile(id: string): Promise<{
        email: string;
        id: string;
        name: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
