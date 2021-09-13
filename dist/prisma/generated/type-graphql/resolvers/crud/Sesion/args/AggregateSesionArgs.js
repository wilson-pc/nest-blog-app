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
exports.AggregateSesionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SesionOrderByWithRelationInput_1 = require("../../../inputs/SesionOrderByWithRelationInput");
const SesionWhereInput_1 = require("../../../inputs/SesionWhereInput");
const SesionWhereUniqueInput_1 = require("../../../inputs/SesionWhereUniqueInput");
let AggregateSesionArgs = class AggregateSesionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SesionWhereInput_1.SesionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SesionWhereInput_1.SesionWhereInput)
], AggregateSesionArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SesionOrderByWithRelationInput_1.SesionOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AggregateSesionArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionWhereUniqueInput_1.SesionWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SesionWhereUniqueInput_1.SesionWhereUniqueInput)
], AggregateSesionArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateSesionArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateSesionArgs.prototype, "skip", void 0);
AggregateSesionArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateSesionArgs);
exports.AggregateSesionArgs = AggregateSesionArgs;
//# sourceMappingURL=AggregateSesionArgs.js.map