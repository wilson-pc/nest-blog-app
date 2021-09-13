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
exports.UpdateManySesionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SesionUpdateManyMutationInput_1 = require("../../../inputs/SesionUpdateManyMutationInput");
const SesionWhereInput_1 = require("../../../inputs/SesionWhereInput");
let UpdateManySesionArgs = class UpdateManySesionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SesionUpdateManyMutationInput_1.SesionUpdateManyMutationInput, {
        nullable: false
    }),
    __metadata("design:type", SesionUpdateManyMutationInput_1.SesionUpdateManyMutationInput)
], UpdateManySesionArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => SesionWhereInput_1.SesionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SesionWhereInput_1.SesionWhereInput)
], UpdateManySesionArgs.prototype, "where", void 0);
UpdateManySesionArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateManySesionArgs);
exports.UpdateManySesionArgs = UpdateManySesionArgs;
//# sourceMappingURL=UpdateManySesionArgs.js.map