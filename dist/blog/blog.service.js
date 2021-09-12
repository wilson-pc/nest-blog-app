"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const payload_1 = require("../payload");
const prisma_service_1 = require("../prisma/prisma.service");
let BlogService = class BlogService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBlogDto, user) {
        return this.prisma.post.create({
            data: Object.assign(Object.assign({}, createBlogDto), { authorId: user.sub }),
        });
    }
    findAll(query) {
        return this.prisma.post.findMany({
            where: query,
            select: {
                author: { select: { id: true, name: true, email: true } },
                content: true,
                id: true,
                createdAt: true,
                title: true,
                image: true,
                published: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.post.findUnique({
            where: { id: id },
            select: {
                author: { select: { id: true, name: true, email: true } },
                content: true,
                id: true,
                createdAt: true,
                updatedAt: true,
                title: true,
                image: true,
                published: true,
            },
        });
    }
    async update(id, updateBlogDto, user) {
        const post = await this.prisma.post.findFirst({
            where: { id: id, authorId: user.sub },
            select: { id: true },
        });
        if (post) {
            return this.prisma.post.update({
                where: { id: id },
                data: updateBlogDto,
            });
        }
        else {
            throw new common_1.HttpException('action not allowed', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    remove(id, user) {
        return this.prisma.post.deleteMany({
            where: { id: id, authorId: user.sub },
        });
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map