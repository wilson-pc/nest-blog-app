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
exports.SesionCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateSesionArgs_1 = require("./args/AggregateSesionArgs");
const CreateManySesionArgs_1 = require("./args/CreateManySesionArgs");
const CreateSesionArgs_1 = require("./args/CreateSesionArgs");
const DeleteManySesionArgs_1 = require("./args/DeleteManySesionArgs");
const DeleteSesionArgs_1 = require("./args/DeleteSesionArgs");
const FindFirstSesionArgs_1 = require("./args/FindFirstSesionArgs");
const FindManySesionArgs_1 = require("./args/FindManySesionArgs");
const FindUniqueSesionArgs_1 = require("./args/FindUniqueSesionArgs");
const GroupBySesionArgs_1 = require("./args/GroupBySesionArgs");
const UpdateManySesionArgs_1 = require("./args/UpdateManySesionArgs");
const UpdateSesionArgs_1 = require("./args/UpdateSesionArgs");
const UpsertSesionArgs_1 = require("./args/UpsertSesionArgs");
const helpers_1 = require("../../../helpers");
const Sesion_1 = require("../../../models/Sesion");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSesion_1 = require("../../outputs/AggregateSesion");
const SesionGroupBy_1 = require("../../outputs/SesionGroupBy");
let SesionCrudResolver = class SesionCrudResolver {
    async sesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstSesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async sesions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createSesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createManySesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteSesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateSesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManySesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateManySesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertSesion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async aggregateSesion(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
    }
    async groupBySesion(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).sesion.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Sesion_1.Sesion, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSesionArgs_1.FindUniqueSesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "sesion", null);
__decorate([
    TypeGraphQL.Query(_returns => Sesion_1.Sesion, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSesionArgs_1.FindFirstSesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "findFirstSesion", null);
__decorate([
    TypeGraphQL.Query(_returns => [Sesion_1.Sesion], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySesionArgs_1.FindManySesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "sesions", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Sesion_1.Sesion, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateSesionArgs_1.CreateSesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "createSesion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManySesionArgs_1.CreateManySesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "createManySesion", null);
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
], SesionCrudResolver.prototype, "deleteSesion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Sesion_1.Sesion, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateSesionArgs_1.UpdateSesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "updateSesion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySesionArgs_1.DeleteManySesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "deleteManySesion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySesionArgs_1.UpdateManySesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "updateManySesion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Sesion_1.Sesion, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertSesionArgs_1.UpsertSesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "upsertSesion", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSesion_1.AggregateSesion, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSesionArgs_1.AggregateSesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "aggregateSesion", null);
__decorate([
    TypeGraphQL.Query(_returns => [SesionGroupBy_1.SesionGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySesionArgs_1.GroupBySesionArgs]),
    __metadata("design:returntype", Promise)
], SesionCrudResolver.prototype, "groupBySesion", null);
SesionCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Sesion_1.Sesion)
], SesionCrudResolver);
exports.SesionCrudResolver = SesionCrudResolver;
//# sourceMappingURL=SesionCrudResolver.js.map