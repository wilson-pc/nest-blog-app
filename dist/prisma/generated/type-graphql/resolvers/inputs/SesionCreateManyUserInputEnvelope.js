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
exports.SesionCreateManyUserInputEnvelope = void 0;
const TypeGraphQL = require("type-graphql");
const SesionCreateManyUserInput_1 = require("../inputs/SesionCreateManyUserInput");
let SesionCreateManyUserInputEnvelope = class SesionCreateManyUserInputEnvelope {
};
__decorate([
    TypeGraphQL.Field(_type => [SesionCreateManyUserInput_1.SesionCreateManyUserInput], {
        nullable: false
    }),
    __metadata("design:type", Array)
], SesionCreateManyUserInputEnvelope.prototype, "data", void 0);
SesionCreateManyUserInputEnvelope = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SesionCreateManyUserInputEnvelope);
exports.SesionCreateManyUserInputEnvelope = SesionCreateManyUserInputEnvelope;
//# sourceMappingURL=SesionCreateManyUserInputEnvelope.js.map