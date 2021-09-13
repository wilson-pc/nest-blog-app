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
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const request_constants_1 = require("@nestjs/core/router/request/request-constants");
const type_graphql_1 = require("type-graphql");
let OptionsPreparatorService = class OptionsPreparatorService {
    constructor(moduleRef, modulesContainer) {
        this.moduleRef = moduleRef;
        this.modulesContainer = modulesContainer;
    }
    prepareOptions(featureModuleToken, globalMiddlewares = []) {
        const globalResolvers = (0, type_graphql_1.getMetadataStorage)().resolverClasses.map((metadata) => metadata.target);
        const globalMiddlewareClasses = globalMiddlewares.filter((it) => it.prototype);
        const featureModuleOptionsArray = [];
        const resolversClasses = [];
        const providersMetadataMap = new Map();
        for (const module of this.modulesContainer.values()) {
            for (const provider of module.providers.values()) {
                if (typeof provider.name === 'string' &&
                    provider.name.includes(featureModuleToken)) {
                    featureModuleOptionsArray.push(provider.instance);
                }
                if (globalResolvers.includes(provider.metatype)) {
                    providersMetadataMap.set(provider.metatype, provider);
                    resolversClasses.push(provider.metatype);
                }
                if (globalMiddlewareClasses.includes(provider.metatype)) {
                    providersMetadataMap.set(provider.metatype, provider);
                }
            }
        }
        const orphanedTypes = (0, common_1.flatten)(featureModuleOptionsArray.map((it) => it.orphanedTypes));
        const container = {
            get: (cls, { context }) => {
                let contextId = context[request_constants_1.REQUEST_CONTEXT_ID];
                if (!contextId) {
                    contextId = core_1.ContextIdFactory.create();
                    context[request_constants_1.REQUEST_CONTEXT_ID] = contextId;
                }
                const providerMetadata = providersMetadataMap.get(cls);
                if (providerMetadata.isDependencyTreeStatic() &&
                    !providerMetadata.isTransient) {
                    return this.moduleRef.get(cls, { strict: false });
                }
                return this.moduleRef.resolve(cls, contextId, { strict: false });
            },
        };
        return {
            resolversClasses,
            orphanedTypes,
            container,
            featureModuleOptionsArray,
        };
    }
};
OptionsPreparatorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ModuleRef,
        core_1.ModulesContainer])
], OptionsPreparatorService);
exports.default = OptionsPreparatorService;
//# sourceMappingURL=prepare-options.service.js.map