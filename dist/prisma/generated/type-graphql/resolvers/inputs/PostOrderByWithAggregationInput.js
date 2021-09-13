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
exports.PostOrderByWithAggregationInput = void 0;
const TypeGraphQL = require("type-graphql");
const PostCountOrderByAggregateInput_1 = require("../inputs/PostCountOrderByAggregateInput");
const PostMaxOrderByAggregateInput_1 = require("../inputs/PostMaxOrderByAggregateInput");
const PostMinOrderByAggregateInput_1 = require("../inputs/PostMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostOrderByWithAggregationInput = class PostOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PostOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCountOrderByAggregateInput_1.PostCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PostCountOrderByAggregateInput_1.PostCountOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMaxOrderByAggregateInput_1.PostMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PostMaxOrderByAggregateInput_1.PostMaxOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostMinOrderByAggregateInput_1.PostMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PostMinOrderByAggregateInput_1.PostMinOrderByAggregateInput)
], PostOrderByWithAggregationInput.prototype, "_min", void 0);
PostOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], PostOrderByWithAggregationInput);
exports.PostOrderByWithAggregationInput = PostOrderByWithAggregationInput;
//# sourceMappingURL=PostOrderByWithAggregationInput.js.map