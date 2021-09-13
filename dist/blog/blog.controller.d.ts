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
        image: string;
        createdAt: Date;
        title: string;
        content: string;
        published: boolean;
        author: {
            email: string;
            id: string;
            name: string;
        };
    }[]>;
    findOne(id: string): Prisma.Prisma__PostClient<{
        id: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string;
        published: boolean;
        author: {
            email: string;
            id: string;
            name: string;
        };
    }>;
    update(id: string, updateBlogDto: PostUpateDto, req: any): Promise<import(".prisma/client").Post>;
    remove(id: string, req: any): import(".prisma/client").PrismaPromise<Prisma.BatchPayload>;
}
