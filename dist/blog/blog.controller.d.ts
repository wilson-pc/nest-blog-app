import { Prisma } from '@prisma/client';
import { BlogService } from './blog.service';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    create(createBlogDto: any): Promise<import(".prisma/client").Post>;
    findAll(userId: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
    findOne(id: string): Prisma.Prisma__PostClient<import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    }>;
    update(id: string, updateBlogDto: any): Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    remove(id: string): Prisma.Prisma__PostClient<import(".prisma/client").Post>;
}
