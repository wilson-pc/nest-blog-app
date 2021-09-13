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
exports.UserCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const class_validator_1 = require("class-validator");
let UserCreateInput = class UserCreateInput {
};
__decorate([
    TypeGraphQL.Field((_type) => String, {
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserCreateInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field((_type) => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserCreateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field((_type) => String, {
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserCreateInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field((_type) => String, {
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserCreateInput.prototype, "password", void 0);
UserCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true,
    })
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
//# sourceMappingURL=UserCreateInput.js.map