import { CreateUserDto } from './dto/user-create-dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
