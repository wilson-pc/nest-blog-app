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
exports.UserResolver = void 0;
const type_graphql_1 = require("../prisma/generated/type-graphql");
const helpers_1 = require("../prisma/generated/type-graphql/helpers");
const TypeGraphQL = require("type-graphql");
const type_graphql_2 = require("type-graphql");
const bcrypt = require("bcrypt");
const FormData = require("form-data");
const CreateUserArgs_1 = require("./args/CreateUserArgs");
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const _context_1 = require("../ context");
const payload_1 = require("../payload");
const UpdateUserArgs_1 = require("./args/UpdateUserArgs");
let UserResolver = class UserResolver {
    constructor(axios) {
        this.axios = axios;
    }
    async createUser(ctx, info, args) {
        args.data.password = bcrypt.hashSync(args.data.password, 10);
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
        return (0, helpers_1.getPrismaFromContext)(ctx).user.create(Object.assign({}, args));
    }
    async users(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findMany(Object.assign({}, args));
    }
    async user(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findFirst(Object.assign({}, args));
    }
    async deleteUser({ prisma, req }, info, args) {
        const user = req.user;
        if (args.where.id == user.sub || args.where.email == user.email) {
            return (0, helpers_1.getPrismaFromContext)({ prisma }).user.delete(Object.assign({}, args));
        }
        else {
            throw new common_1.HttpException('action not allowed', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async updateUser({ prisma, req }, info, args) {
        const user = req.user;
        if (args.where.id == user.sub || args.where.email == user.email) {
            return (0, helpers_1.getPrismaFromContext)({ prisma }).user.update(Object.assign({}, args));
        }
        else {
            throw new common_1.HttpException('action not allowed', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
__decorate([
    TypeGraphQL.Mutation((_returns) => type_graphql_1.User, {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUserArgs_1.CreateUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    TypeGraphQL.Query((_returns) => [type_graphql_1.User], {
        nullable: false,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, type_graphql_1.FindManyUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    TypeGraphQL.Query((_returns) => type_graphql_1.User, {
        nullable: true,
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, type_graphql_1.FindFirstUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => type_graphql_1.User, {
        nullable: true,
    }),
    (0, type_graphql_2.Authorized)(),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, type_graphql_1.DeleteUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    TypeGraphQL.Mutation((_returns) => type_graphql_1.User, {
        nullable: true,
    }),
    (0, type_graphql_2.Authorized)(),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUserArgs_1.UpdateUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
UserResolver = __decorate([
    TypeGraphQL.Resolver(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map