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
exports.UserCreateNestedOneWithoutPostsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOrConnectWithoutPostsInput_1 = require("../inputs/UserCreateOrConnectWithoutPostsInput");
const UserCreateWithoutPostsInput_1 = require("../inputs/UserCreateWithoutPostsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutPostsInput = class UserCreateNestedOneWithoutPostsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutPostsInput_1.UserCreateWithoutPostsInput)
], UserCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostsInput_1.UserCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutPostsInput_1.UserCreateOrConnectWithoutPostsInput)
], UserCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPostsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateNestedOneWithoutPostsInput);
exports.UserCreateNestedOneWithoutPostsInput = UserCreateNestedOneWithoutPostsInput;
//# sourceMappingURL=UserCreateNestedOneWithoutPostsInput.js.map