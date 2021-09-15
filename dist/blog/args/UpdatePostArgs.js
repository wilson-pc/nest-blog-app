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
exports.UpdatePostArgs = void 0;
const type_graphql_1 = require("../../prisma/generated/type-graphql");
const TypeGraphQL = require("type-graphql");
const PostUpdateInput_1 = require("../entities/PostUpdateInput");
let UpdatePostArgs = class UpdatePostArgs {
};
__decorate([
    TypeGraphQL.Field((_type) => PostUpdateInput_1.PostUpdateInput, {
        nullable: false,
    }),
    __metadata("design:type", PostUpdateInput_1.PostUpdateInput)
], UpdatePostArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field((_type) => type_graphql_1.PostWhereUniqueInput, {
        nullable: false,
    }),
    __metadata("design:type", type_graphql_1.PostWhereUniqueInput)
], UpdatePostArgs.prototype, "where", void 0);
UpdatePostArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdatePostArgs);
exports.UpdatePostArgs = UpdatePostArgs;
//# sourceMappingURL=UpdatePostArgs.js.map