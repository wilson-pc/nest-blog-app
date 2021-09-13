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
exports.SesionCreateOrConnectWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const SesionCreateWithoutUserInput_1 = require("../inputs/SesionCreateWithoutUserInput");
const SesionWhereUniqueInput_1 = require("../inputs/SesionWhereUniqueInput");
let SesionCreateOrConnectWithoutUserInput = class SesionCreateOrConnectWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => SesionWhereUniqueInput_1.SesionWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", SesionWhereUniqueInput_1.SesionWhereUniqueInput)
], SesionCreateOrConnectWithoutUserInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionCreateWithoutUserInput_1.SesionCreateWithoutUserInput, {
        nullable: false
    }),
    __metadata("design:type", SesionCreateWithoutUserInput_1.SesionCreateWithoutUserInput)
], SesionCreateOrConnectWithoutUserInput.prototype, "create", void 0);
SesionCreateOrConnectWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SesionCreateOrConnectWithoutUserInput);
exports.SesionCreateOrConnectWithoutUserInput = SesionCreateOrConnectWithoutUserInput;
//# sourceMappingURL=SesionCreateOrConnectWithoutUserInput.js.map