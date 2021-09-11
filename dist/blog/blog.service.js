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
const generated_1 = require("../../prisma/generated");
const prisma_service_1 = require("../prisma/prisma.service");
let BlogService = class BlogService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBlogDto) {
        return this.prisma.post.create({ data: createBlogDto });
    }
    findAll(query) {
        return this.prisma.post.findMany({ where: query });
    }
    findOne(id) {
        return this.prisma.post.findUnique({
            where: { id: id },
            include: { author: true },
        });
    }
    update(id, updateBlogDto) {
        return this.prisma.post.update({ where: { id: id }, data: updateBlogDto });
    }
    remove(id) {
        return this.prisma.post.delete({ where: { id: id } });
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map