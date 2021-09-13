import { Prisma } from '@prisma/client';
import { Payload } from 'src/payload';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostUpateDto } from './dto/post-update-dto';
export declare class BlogService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createBlogDto: any, user: Payload): Promise<import(".prisma/client").Post>;
    findAll(query: Prisma.PostWhereInput): import(".prisma/client").PrismaPromise<{
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
    update(id: string, updateBlogDto: PostUpateDto, user: Payload): Promise<import(".prisma/client").Post>;
    remove(id: string, user: Payload): import(".prisma/client").PrismaPromise<Prisma.BatchPayload>;
}
