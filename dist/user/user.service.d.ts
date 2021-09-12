import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user-create-dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        id: string;
        name: string;
        image: string;
        updatedAt: Date;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<{
        email: string;
        id: string;
        name: string;
        image: string;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        id: string;
        name: string;
        image: string;
        updatedAt: Date;
        posts: import(".prisma/client").Post[];
    }>;
    update(id: string, updateUserDto: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        id: string;
        name: string;
        image: string;
        updatedAt: Date;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        id: string;
        name: string;
        image: string;
        updatedAt: Date;
    }>;
}
