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
exports.SesionOrderByWithAggregationInput = void 0;
const TypeGraphQL = require("type-graphql");
const SesionCountOrderByAggregateInput_1 = require("../inputs/SesionCountOrderByAggregateInput");
const SesionMaxOrderByAggregateInput_1 = require("../inputs/SesionMaxOrderByAggregateInput");
const SesionMinOrderByAggregateInput_1 = require("../inputs/SesionMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SesionOrderByWithAggregationInput = class SesionOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SesionOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SesionOrderByWithAggregationInput.prototype, "token", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SesionOrderByWithAggregationInput.prototype, "state", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SesionOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SesionOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SesionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionCountOrderByAggregateInput_1.SesionCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SesionCountOrderByAggregateInput_1.SesionCountOrderByAggregateInput)
], SesionOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionMaxOrderByAggregateInput_1.SesionMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SesionMaxOrderByAggregateInput_1.SesionMaxOrderByAggregateInput)
], SesionOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionMinOrderByAggregateInput_1.SesionMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SesionMinOrderByAggregateInput_1.SesionMinOrderByAggregateInput)
], SesionOrderByWithAggregationInput.prototype, "_min", void 0);
SesionOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SesionOrderByWithAggregationInput);
exports.SesionOrderByWithAggregationInput = SesionOrderByWithAggregationInput;
//# sourceMappingURL=SesionOrderByWithAggregationInput.js.map