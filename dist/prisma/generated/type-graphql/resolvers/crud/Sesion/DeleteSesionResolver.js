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
exports.DeleteSesionResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const DeleteSesionArgs_1 = require("./args/DeleteSesionArgs");
const Sesion_1 = require("../../../models/Sesion");
const helpers_1 = require("../../../helpers");
let DeleteSesionResolver = class DeleteSesionResolver {
    async deleteSesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
__decorate([
    TypeGraphQL.Mutation(_returns => Sesion_1.Sesion, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteSesionArgs_1.DeleteSesionArgs]),
    __metadata("design:returntype", Promise)
], DeleteSesionResolver.prototype, "deleteSesion", null);
DeleteSesionResolver = __decorate([
    TypeGraphQL.Resolver(_of => Sesion_1.Sesion)
], DeleteSesionResolver);
exports.DeleteSesionResolver = DeleteSesionResolver;
//# sourceMappingURL=DeleteSesionResolver.js.map