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
exports.AuthResolver = void 0;
const _context_1 = require("../ context");
const type_graphql_1 = require("../prisma/generated/type-graphql");
const type_graphql_2 = require("type-graphql");
const bcrypt = require("bcrypt");
const TypeGraphQL = require("type-graphql");
const login_type_1 = require("./dto/login-type");
const jwt_1 = require("@nestjs/jwt");
const payload_1 = require("../payload");
const jwt_payload_1 = require("./entities/jwt-payload");
const common_1 = require("@nestjs/common");
const helpers_1 = require("../prisma/generated/type-graphql/helpers");
let AuthResolver = class AuthResolver {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    sayHello() {
        return 'Hello World!';
    }
    async login(login, { prisma }) {
        const user = await prisma.user.findUnique({
            where: { email: login.email },
        });
        if (user && bcrypt.compareSync(login.password, user.password)) {
            const payload = { email: user.email, sub: user.id };
            return {
                user: payload,
                access_token: this.jwtService.sign(payload),
                type: 'Bearer',
            };
        }
        else {
            console.log('llega y se exepcion');
            throw new common_1.HttpException('user or password is not valid', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    profile({ prisma, req }, info) {
        const user = req.user;
        const input = {
            where: { id: user.sub },
        };
        return (0, helpers_1.getPrismaFromContext)({ prisma, req }).user.findUnique(Object.assign({}, input));
    }
};
__decorate([
    TypeGraphQL.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AuthResolver.prototype, "sayHello", null);
__decorate([
    TypeGraphQL.Mutation((returns) => jwt_payload_1.JwtPayload),
    __param(0, TypeGraphQL.Arg('login')),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_type_1.LoginInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    TypeGraphQL.Query(() => type_graphql_1.User),
    (0, type_graphql_2.Authorized)(),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "profile", null);
AuthResolver = __decorate([
    TypeGraphQL.Resolver((of) => type_graphql_1.User),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map