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
exports.CreateSesionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SesionCreateInput_1 = require("../../../inputs/SesionCreateInput");
let CreateSesionArgs = class CreateSesionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SesionCreateInput_1.SesionCreateInput, {
        nullable: false
    }),
    __metadata("design:type", SesionCreateInput_1.SesionCreateInput)
], CreateSesionArgs.prototype, "data", void 0);
CreateSesionArgs = __decorate([
    TypeGraphQL.ArgsType()
], CreateSesionArgs);
exports.CreateSesionArgs = CreateSesionArgs;
//# sourceMappingURL=CreateSesionArgs.js.map