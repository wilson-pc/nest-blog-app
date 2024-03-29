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
var NestedBoolFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolFilter = void 0;
const TypeGraphQL = require("type-graphql");
let NestedBoolFilter = NestedBoolFilter_1 = class NestedBoolFilter {
};
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], NestedBoolFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedBoolFilter_1, {
        nullable: true
    }),
    __metadata("design:type", NestedBoolFilter)
], NestedBoolFilter.prototype, "not", void 0);
NestedBoolFilter = NestedBoolFilter_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NestedBoolFilter);
exports.NestedBoolFilter = NestedBoolFilter;
//# sourceMappingURL=NestedBoolFilter.js.map