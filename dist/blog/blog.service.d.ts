import { Prisma } from 'prisma/generated';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BlogService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createBlogDto: any): Promise<import(".prisma/client").Post>;
    findAll(query: Prisma.PostWhereInput): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    }>;
    update(id: string, updateBlogDto: any): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
}
