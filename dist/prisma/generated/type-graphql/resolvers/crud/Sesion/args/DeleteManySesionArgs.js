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
exports.DeleteManySesionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SesionWhereInput_1 = require("../../../inputs/SesionWhereInput");
let DeleteManySesionArgs = class DeleteManySesionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SesionWhereInput_1.SesionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SesionWhereInput_1.SesionWhereInput)
], DeleteManySesionArgs.prototype, "where", void 0);
DeleteManySesionArgs = __decorate([
    TypeGraphQL.ArgsType()
], DeleteManySesionArgs);
exports.DeleteManySesionArgs = DeleteManySesionArgs;
//# sourceMappingURL=DeleteManySesionArgs.js.map