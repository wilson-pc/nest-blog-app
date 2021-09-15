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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogResolver = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const type_graphql_1 = require("type-graphql");
const _context_1 = require("../ context");
const payload_1 = require("../payload");
const FormData = require("form-data");
const type_graphql_2 = require("../prisma/generated/type-graphql");
const helpers_1 = require("../prisma/generated/type-graphql/helpers");
const TypeGraphQL = require("type-graphql");
const CreatePostArgs_1 = require("./args/CreatePostArgs");
const rxjs_1 = require("rxjs");
const UpdatePostArgs_1 = require("./args/UpdatePostArgs");
let BlogResolver = class BlogResolver {
    constructor(axios) {
        this.axios = axios;
    }
    async post(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findFirst(Object.assign({}, args));
    }
    async posts(ctx, info, args) {
        if (args.where) {
            args.where.published = { equals: true };
        }
        else {
            args.where = { published: { equals: true } };
        }
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findMany(Object.assign({}, args));
    }
    async createPost({ prisma, req }, info, args) {
        const user = req.user;
        args.data.author = { connect: { id: user.sub } };
        if (args.data.image) {
            try {
                const buff = Buffer.from(args.data.image.split(';base64,').pop(), 'base64');
                const form = new FormData();
                form.append('file', buff, 'gato.jpg');
                const instance = this.axios.post('https://telegra.ph/upload', form, {
                    headers: Object.assign({}, form.getHeaders()),
                });
                const { data } = await (0, rxjs_1.lastValueFrom)(instance);
                const [{ src }] = data;
                args.data.image = 'https://telegra.ph' + src;
            }
            catch (error) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        return (0, helpers_1.getPrismaFromContext)({ prisma }).post.create(Object.assign({}, args));
    }
    async deletePost({ prisma, req }, info, args) {
        const user = req.user;
        const post = await prisma.post.findFirst({
            where: { OR: { id: args.where.id, authorId: user.sub } },
        });
        if (post) {
            return (0, helpers_1.getPrismaFromContext)({ prisma }).post.delete(Object.assign({}, args));
        }
        else {
            throw new common_1.HttpException('action not allowed', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async updatePost({ prisma, req }, info, args) {
        const user = req.user;
        const post = await prisma.post.findFirst({
            where: { OR: { id: args.where.id, authorId: user.sub } },
        });
        if (post) {
            if (args.data.image) {
                try {
                    const buff = Buffer.from(args.data.image.split(';base64,').pop(), 'base64');
                    const form = new FormData();
                    form.append('file', buff, 'gato.jpg');
                    const instance = this.axios.post('https://telegra.ph/upload', form, {
                        headers: Object.assign({}, form.getHeaders()),
                    });
                    const { data } = await (0, rxjs_1.lastValueFrom)(instance);
                    const [{ src }] = data;
                    args.data.image = 'https://telegra.ph' + src;
                }
                catch (error) {
                    throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
                }
            }
            return (0, helpers_1.getPrismaFromContext)({ prisma }).post.update(Object.assign({}, args));
        }
        else {
            throw new common_1.HttpException('action not allowed', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
__decorate([
    TypeGraphQL.Query((_returns) => type_graphql_2.Post, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, type_graphql_2.FindFirstPostArgs]),
    __metadata("design:returntype", Promise)
], BlogResolver.prototype, "post", null);
__decorate([
    TypeGraphQL.Query((_returns) => [type_graphql_2.Post], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, type_graphql_2.FindManyPostArgs]),
    __metadata("design:returntype", Promise)
], BlogResolver.prototype, "posts", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => type_graphql_2.Post, {
        nullable: false,
    }),
    (0, type_graphql_1.Authorized)(),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreatePostArgs_1.CreatePostArgs]),
    __metadata("design:returntype", Promise)
], BlogResolver.prototype, "createPost", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => type_graphql_2.Post, {
        nullable: true,
    }),
    (0, type_graphql_1.Authorized)(),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, type_graphql_2.DeletePostArgs]),
    __metadata("design:returntype", Promise)
], BlogResolver.prototype, "deletePost", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => type_graphql_2.Post, {
        nullable: true,
    }),
    (0, type_graphql_1.Authorized)(),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdatePostArgs_1.UpdatePostArgs]),
    __metadata("design:returntype", Promise)
], BlogResolver.prototype, "updatePost", null);
BlogResolver = __decorate([
    TypeGraphQL.Resolver((_of) => type_graphql_2.Post),
    __metadata("design:paramtypes", [axios_1.HttpService])
], BlogResolver);
exports.BlogResolver = BlogResolver;
//# sourceMappingURL=blog.resolver.js.map