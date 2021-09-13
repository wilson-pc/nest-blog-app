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
exports.SesionGroupBy = void 0;
const TypeGraphQL = require("type-graphql");
const SesionCountAggregate_1 = require("../outputs/SesionCountAggregate");
const SesionMaxAggregate_1 = require("../outputs/SesionMaxAggregate");
const SesionMinAggregate_1 = require("../outputs/SesionMinAggregate");
let SesionGroupBy = class SesionGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SesionGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SesionGroupBy.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], SesionGroupBy.prototype, "state", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SesionGroupBy.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SesionGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SesionGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionCountAggregate_1.SesionCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", SesionCountAggregate_1.SesionCountAggregate)
], SesionGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionMinAggregate_1.SesionMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", SesionMinAggregate_1.SesionMinAggregate)
], SesionGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionMaxAggregate_1.SesionMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", SesionMaxAggregate_1.SesionMaxAggregate)
], SesionGroupBy.prototype, "_max", void 0);
SesionGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], SesionGroupBy);
exports.SesionGroupBy = SesionGroupBy;
//# sourceMappingURL=SesionGroupBy.js.map