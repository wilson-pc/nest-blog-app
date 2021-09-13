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
exports.SesionUpsertWithWhereUniqueWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const SesionCreateWithoutUserInput_1 = require("../inputs/SesionCreateWithoutUserInput");
const SesionUpdateWithoutUserInput_1 = require("../inputs/SesionUpdateWithoutUserInput");
const SesionWhereUniqueInput_1 = require("../inputs/SesionWhereUniqueInput");
let SesionUpsertWithWhereUniqueWithoutUserInput = class SesionUpsertWithWhereUniqueWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => SesionWhereUniqueInput_1.SesionWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", SesionWhereUniqueInput_1.SesionWhereUniqueInput)
], SesionUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionUpdateWithoutUserInput_1.SesionUpdateWithoutUserInput, {
        nullable: false
    }),
    __metadata("design:type", SesionUpdateWithoutUserInput_1.SesionUpdateWithoutUserInput)
], SesionUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionCreateWithoutUserInput_1.SesionCreateWithoutUserInput, {
        nullable: false
    }),
    __metadata("design:type", SesionCreateWithoutUserInput_1.SesionCreateWithoutUserInput)
], SesionUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
SesionUpsertWithWhereUniqueWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SesionUpsertWithWhereUniqueWithoutUserInput);
exports.SesionUpsertWithWhereUniqueWithoutUserInput = SesionUpsertWithWhereUniqueWithoutUserInput;
//# sourceMappingURL=SesionUpsertWithWhereUniqueWithoutUserInput.js.map