import { HttpService } from '@nestjs/axios';
import { CreateUserDto } from './dto/user-create-dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update-dto';
export declare class UserController {
    private readonly userService;
    private axios;
    constructor(userService: UserService, axios: HttpService);
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
    update(id: string, updateUserDto: UpdateUserDto, req: any): Promise<{
        email: string;
        id: string;
        name: string;
        image: string;
        updatedAt: Date;
    }>;
    remove(id: string, req: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        id: string;
        name: string;
        image: string;
        updatedAt: Date;
    }>;
}
