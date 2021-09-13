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
exports.UserUpdateOneWithoutSesionsInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOrConnectWithoutSesionsInput_1 = require("../inputs/UserCreateOrConnectWithoutSesionsInput");
const UserCreateWithoutSesionsInput_1 = require("../inputs/UserCreateWithoutSesionsInput");
const UserUpdateWithoutSesionsInput_1 = require("../inputs/UserUpdateWithoutSesionsInput");
const UserUpsertWithoutSesionsInput_1 = require("../inputs/UserUpsertWithoutSesionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutSesionsInput = class UserUpdateOneWithoutSesionsInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSesionsInput_1.UserCreateWithoutSesionsInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutSesionsInput_1.UserCreateWithoutSesionsInput)
], UserUpdateOneWithoutSesionsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSesionsInput_1.UserCreateOrConnectWithoutSesionsInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutSesionsInput_1.UserCreateOrConnectWithoutSesionsInput)
], UserUpdateOneWithoutSesionsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutSesionsInput_1.UserUpsertWithoutSesionsInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpsertWithoutSesionsInput_1.UserUpsertWithoutSesionsInput)
], UserUpdateOneWithoutSesionsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutSesionsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutSesionsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutSesionsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSesionsInput_1.UserUpdateWithoutSesionsInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateWithoutSesionsInput_1.UserUpdateWithoutSesionsInput)
], UserUpdateOneWithoutSesionsInput.prototype, "update", void 0);
UserUpdateOneWithoutSesionsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateOneWithoutSesionsInput);
exports.UserUpdateOneWithoutSesionsInput = UserUpdateOneWithoutSesionsInput;
//# sourceMappingURL=UserUpdateOneWithoutSesionsInput.js.map