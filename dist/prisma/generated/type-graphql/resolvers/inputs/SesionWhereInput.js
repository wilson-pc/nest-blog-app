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
var SesionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SesionWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let SesionWhereInput = SesionWhereInput_1 = class SesionWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SesionWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SesionWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SesionWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SesionWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SesionWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SesionWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SesionWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SesionWhereInput.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], SesionWhereInput.prototype, "state", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], SesionWhereInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SesionWhereInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SesionWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SesionWhereInput.prototype, "updatedAt", void 0);
SesionWhereInput = SesionWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SesionWhereInput);
exports.SesionWhereInput = SesionWhereInput;
//# sourceMappingURL=SesionWhereInput.js.map