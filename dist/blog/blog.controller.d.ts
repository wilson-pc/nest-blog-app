import { Prisma } from '@prisma/client';
import { BlogService } from './blog.service';
import { HttpService } from '@nestjs/axios';
import { CreatePostDto } from './dto/post-create-dto';
import { PostUpateDto } from './dto/post-update-dto';
export declare class BlogController {
    private readonly blogService;
    private axios;
    constructor(blogService: BlogService, axios: HttpService);
    create(createBlogDto: CreatePostDto, req: any): Promise<import(".prisma/client").Post>;
    findAll(userId: string): import(".prisma/client").PrismaPromise<{
        id: string;
        content: string;
        published: boolean;
        title: string;
        image: string;
        createdAt: Date;
        author: {
            id: string;
            name: string;
            email: string;
        };
    }[]>;
    findOne(id: string): Prisma.Prisma__PostClient<{
        id: string;
        content: string;
        published: boolean;
        title: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        author: {
            id: string;
            name: string;
            email: string;
        };
    }>;
    update(id: string, updateBlogDto: PostUpateDto, req: any): Promise<import(".prisma/client").Post>;
    remove(id: string, req: any): import(".prisma/client").PrismaPromise<Prisma.BatchPayload>;
}
