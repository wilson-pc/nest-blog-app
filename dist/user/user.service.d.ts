import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user-create-dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        image: string;
        updatedAt: Date;
        email: string;
        name: string;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<{
        id: string;
        image: string;
        updatedAt: Date;
        email: string;
        name: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        image: string;
        updatedAt: Date;
        email: string;
        name: string;
        posts: import(".prisma/client").Post[];
    }>;
    update(id: string, updateUserDto: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        image: string;
        updatedAt: Date;
        email: string;
        name: string;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        image: string;
        updatedAt: Date;
        email: string;
        name: string;
    }>;
}
