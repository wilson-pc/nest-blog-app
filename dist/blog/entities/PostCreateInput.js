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
exports.PostCreateInput = void 0;
const type_graphql_1 = require("../../prisma/generated/type-graphql");
const TypeGraphQL = require("type-graphql");
let PostCreateInput = class PostCreateInput {
};
__decorate([
    TypeGraphQL.Field((_type) => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], PostCreateInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field((_type) => Boolean, {
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], PostCreateInput.prototype, "published", void 0);
__decorate([
    TypeGraphQL.Field((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], PostCreateInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field((_type) => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], PostCreateInput.prototype, "image", void 0);
PostCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
    })
], PostCreateInput);
exports.PostCreateInput = PostCreateInput;
//# sourceMappingURL=PostCreateInput.js.map