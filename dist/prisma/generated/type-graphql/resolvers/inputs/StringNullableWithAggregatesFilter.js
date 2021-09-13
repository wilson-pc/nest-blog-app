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
exports.StringNullableWithAggregatesFilter = void 0;
const TypeGraphQL = require("type-graphql");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const NestedStringNullableFilter_1 = require("../inputs/NestedStringNullableFilter");
const NestedStringNullableWithAggregatesFilter_1 = require("../inputs/NestedStringNullableWithAggregatesFilter");
const QueryMode_1 = require("../../enums/QueryMode");
let StringNullableWithAggregatesFilter = class StringNullableWithAggregatesFilter {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Array)
], StringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Array)
], StringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    TypeGraphQL.Field(_type => QueryMode_1.QueryMode, {
        nullable: true
    }),
    __metadata("design:type", String)
], StringNullableWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableWithAggregatesFilter_1.NestedStringNullableWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedStringNullableWithAggregatesFilter_1.NestedStringNullableWithAggregatesFilter)
], StringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], StringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1.NestedStringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedStringNullableFilter_1.NestedStringNullableFilter)
], StringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedStringNullableFilter_1.NestedStringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedStringNullableFilter_1.NestedStringNullableFilter)
], StringNullableWithAggregatesFilter.prototype, "_max", void 0);
StringNullableWithAggregatesFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], StringNullableWithAggregatesFilter);
exports.StringNullableWithAggregatesFilter = StringNullableWithAggregatesFilter;
//# sourceMappingURL=StringNullableWithAggregatesFilter.js.map