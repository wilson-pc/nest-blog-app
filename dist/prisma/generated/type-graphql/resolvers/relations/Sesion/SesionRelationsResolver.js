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
exports.SesionRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Sesion_1 = require("../../../models/Sesion");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let SesionRelationsResolver = class SesionRelationsResolver {
    async User(sesion, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.findUnique({
            where: {
                id: sesion.id,
            },
        }).User({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Sesion_1.Sesion, Object]),
    __metadata("design:returntype", Promise)
], SesionRelationsResolver.prototype, "User", null);
SesionRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Sesion_1.Sesion)
], SesionRelationsResolver);
exports.SesionRelationsResolver = SesionRelationsResolver;
//# sourceMappingURL=SesionRelationsResolver.js.map