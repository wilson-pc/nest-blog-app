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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const type_graphql_1 = require("type-graphql");
const constants_1 = require("./constants");
const prepare_options_service_1 = require("./prepare-options.service");
let TypeGraphQLOptionsFactory = class TypeGraphQLOptionsFactory {
    constructor(rootModuleOptions, optionsPreparatorService) {
        this.rootModuleOptions = rootModuleOptions;
        this.optionsPreparatorService = optionsPreparatorService;
    }
    async createGqlOptions() {
        const { globalMiddlewares } = this.rootModuleOptions;
        const { resolversClasses, container, orphanedTypes } = this.optionsPreparatorService.prepareOptions(constants_1.TYPEGRAPHQL_FEATURE_MODULE_OPTIONS, globalMiddlewares);
        const schema = await (0, type_graphql_1.buildSchema)(Object.assign(Object.assign({}, this.rootModuleOptions), { resolvers: resolversClasses, orphanedTypes,
            container }));
        return Object.assign(Object.assign({}, this.rootModuleOptions), { schema });
    }
};
TypeGraphQLOptionsFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.TYPEGRAPHQL_ROOT_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object, prepare_options_service_1.default])
], TypeGraphQLOptionsFactory);
exports.default = TypeGraphQLOptionsFactory;
//# sourceMappingURL=typegraphql-options.factory.js.map