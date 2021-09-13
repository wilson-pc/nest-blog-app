"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TypeGraphQLModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeGraphQLModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const constants_1 = require("./constants");
const prepare_options_service_1 = require("./prepare-options.service");
const typegraphql_options_factory_1 = require("./typegraphql-options.factory");
let TypeGraphQLModule = TypeGraphQLModule_1 = class TypeGraphQLModule {
    static forFeature(options = {}) {
        const token = `${constants_1.TYPEGRAPHQL_FEATURE_MODULE_OPTIONS}_${this
            .forFeatureIndex++}`;
        return {
            module: TypeGraphQLModule_1,
            providers: [{ provide: token, useValue: options }],
            exports: [token],
        };
    }
    static forRoot(options = {}) {
        const dynamicGraphQLModule = graphql_1.GraphQLModule.forRootAsync({
            useClass: typegraphql_options_factory_1.default,
        });
        return Object.assign(Object.assign({}, dynamicGraphQLModule), { providers: [
                ...dynamicGraphQLModule.providers,
                prepare_options_service_1.default,
                {
                    provide: constants_1.TYPEGRAPHQL_ROOT_MODULE_OPTIONS,
                    useValue: options,
                },
            ] });
    }
    static forRootAsync(options) {
        const dynamicGraphQLModule = graphql_1.GraphQLModule.forRootAsync({
            imports: options.imports,
            useClass: typegraphql_options_factory_1.default,
        });
        return Object.assign(Object.assign({}, dynamicGraphQLModule), { providers: [
                ...dynamicGraphQLModule.providers,
                prepare_options_service_1.default,
                {
                    inject: options.inject,
                    provide: constants_1.TYPEGRAPHQL_ROOT_MODULE_OPTIONS,
                    useFactory: options.useFactory,
                },
            ] });
    }
};
TypeGraphQLModule.forFeatureIndex = 1;
TypeGraphQLModule = TypeGraphQLModule_1 = __decorate([
    (0, common_1.Module)({})
], TypeGraphQLModule);
exports.TypeGraphQLModule = TypeGraphQLModule;
//# sourceMappingURL=typegraphql.module.js.map