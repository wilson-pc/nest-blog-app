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
    update(id: string, updateBlogDto: PostUpateDto, user: Payload): Promise<import(".prisma/client").Post>;
    remove(id: string, user: Payload): import(".prisma/client").PrismaPromise<Prisma.BatchPayload>;
}
