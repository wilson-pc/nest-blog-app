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
exports.GroupBySesionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SesionOrderByWithAggregationInput_1 = require("../../../inputs/SesionOrderByWithAggregationInput");
const SesionScalarWhereWithAggregatesInput_1 = require("../../../inputs/SesionScalarWhereWithAggregatesInput");
const SesionWhereInput_1 = require("../../../inputs/SesionWhereInput");
const SesionScalarFieldEnum_1 = require("../../../../enums/SesionScalarFieldEnum");
let GroupBySesionArgs = class GroupBySesionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SesionWhereInput_1.SesionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SesionWhereInput_1.SesionWhereInput)
], GroupBySesionArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SesionOrderByWithAggregationInput_1.SesionOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupBySesionArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SesionScalarFieldEnum_1.SesionScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupBySesionArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionScalarWhereWithAggregatesInput_1.SesionScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", SesionScalarWhereWithAggregatesInput_1.SesionScalarWhereWithAggregatesInput)
], GroupBySesionArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySesionArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySesionArgs.prototype, "skip", void 0);
GroupBySesionArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupBySesionArgs);
exports.GroupBySesionArgs = GroupBySesionArgs;
//# sourceMappingURL=GroupBySesionArgs.js.map