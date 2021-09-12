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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const FormData = require("form-data");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const payload_1 = require("../payload");
const blog_service_1 = require("./blog.service");
const axios_1 = require("@nestjs/axios");
const post_create_dto_1 = require("./dto/post-create-dto");
const rxjs_1 = require("rxjs");
const post_update_dto_1 = require("./dto/post-update-dto");
let BlogController = class BlogController {
    constructor(blogService, axios) {
        this.blogService = blogService;
        this.axios = axios;
    }
    async create(createBlogDto, req) {
        const user = req.user;
        if (createBlogDto.image) {
            try {
                const buff = Buffer.from(createBlogDto.image.split(';base64,').pop(), 'base64');
                console.log(buff);
                const form = new FormData();
                form.append('file', buff, 'gato.jpg');
                const instance = this.axios.post('https://telegra.ph/upload', form, {
                    headers: Object.assign({}, form.getHeaders()),
                });
                const { data } = await (0, rxjs_1.lastValueFrom)(instance);
                const [{ src }] = data;
                createBlogDto.image = 'https://telegra.ph' + src;
            }
            catch (error) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        return this.blogService.create(createBlogDto, user);
    }
    findAll(userId) {
        let params = {};
        if (userId) {
            params = { authorId: userId, published: true };
        }
        else {
            params = { published: true };
        }
        return this.blogService.findAll(params);
    }
    findOne(id) {
        return this.blogService.findOne(id);
    }
    async update(id, updateBlogDto, req) {
        const user = req.user;
        if (updateBlogDto.image && !updateBlogDto.image.includes('telegra.ph/')) {
            try {
                const buff = Buffer.from(updateBlogDto.image.split(';base64,').pop(), 'base64');
                console.log(buff);
                const form = new FormData();
                form.append('file', buff, 'gato.jpg');
                const instance = this.axios.post('https://telegra.ph/upload', form, {
                    headers: Object.assign({}, form.getHeaders()),
                });
                const { data } = await (0, rxjs_1.lastValueFrom)(instance);
                const [{ src }] = data;
                updateBlogDto.image = 'https://telegra.ph' + src;
            }
            catch (error) {
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        return this.blogService.update(id, updateBlogDto, user);
    }
    remove(id, req) {
        const user = req.user;
        return this.blogService.remove(id, user);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'create post' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_create_dto_1.CreatePostDto, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({ required: false, name: 'userId' }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'get all posts' }),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get post by id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'update post' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, post_update_dto_1.PostUpateDto, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'delete post' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "remove", null);
BlogController = __decorate([
    (0, swagger_1.ApiTags)('Post'),
    (0, common_1.Controller)({ path: 'post', version: '1' }),
    __metadata("design:paramtypes", [blog_service_1.BlogService,
        axios_1.HttpService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map