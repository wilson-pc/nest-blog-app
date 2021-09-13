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
exports.GroupByPostArgs = void 0;
const TypeGraphQL = require("type-graphql");
const PostOrderByWithAggregationInput_1 = require("../../../inputs/PostOrderByWithAggregationInput");
const PostScalarWhereWithAggregatesInput_1 = require("../../../inputs/PostScalarWhereWithAggregatesInput");
const PostWhereInput_1 = require("../../../inputs/PostWhereInput");
const PostScalarFieldEnum_1 = require("../../../../enums/PostScalarFieldEnum");
let GroupByPostArgs = class GroupByPostArgs {
};
__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    __metadata("design:type", PostWhereInput_1.PostWhereInput)
], GroupByPostArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostOrderByWithAggregationInput_1.PostOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupByPostArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [PostScalarFieldEnum_1.PostScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByPostArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostScalarWhereWithAggregatesInput_1.PostScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", PostScalarWhereWithAggregatesInput_1.PostScalarWhereWithAggregatesInput)
], GroupByPostArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByPostArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByPostArgs.prototype, "skip", void 0);
GroupByPostArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByPostArgs);
exports.GroupByPostArgs = GroupByPostArgs;
//# sourceMappingURL=GroupByPostArgs.js.map