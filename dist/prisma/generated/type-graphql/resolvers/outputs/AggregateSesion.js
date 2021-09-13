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
exports.AggregateSesion = void 0;
const TypeGraphQL = require("type-graphql");
const SesionCountAggregate_1 = require("../outputs/SesionCountAggregate");
const SesionMaxAggregate_1 = require("../outputs/SesionMaxAggregate");
const SesionMinAggregate_1 = require("../outputs/SesionMinAggregate");
let AggregateSesion = class AggregateSesion {
};
__decorate([
    TypeGraphQL.Field(_type => SesionCountAggregate_1.SesionCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", SesionCountAggregate_1.SesionCountAggregate)
], AggregateSesion.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionMinAggregate_1.SesionMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", SesionMinAggregate_1.SesionMinAggregate)
], AggregateSesion.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionMaxAggregate_1.SesionMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", SesionMaxAggregate_1.SesionMaxAggregate)
], AggregateSesion.prototype, "_max", void 0);
AggregateSesion = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateSesion);
exports.AggregateSesion = AggregateSesion;
//# sourceMappingURL=AggregateSesion.js.map