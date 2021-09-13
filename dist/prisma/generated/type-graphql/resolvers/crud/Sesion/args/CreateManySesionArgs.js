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
exports.CreateManySesionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SesionCreateManyInput_1 = require("../../../inputs/SesionCreateManyInput");
let CreateManySesionArgs = class CreateManySesionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => [SesionCreateManyInput_1.SesionCreateManyInput], {
        nullable: false
    }),
    __metadata("design:type", Array)
], CreateManySesionArgs.prototype, "data", void 0);
CreateManySesionArgs = __decorate([
    TypeGraphQL.ArgsType()
], CreateManySesionArgs);
exports.CreateManySesionArgs = CreateManySesionArgs;
//# sourceMappingURL=CreateManySesionArgs.js.map