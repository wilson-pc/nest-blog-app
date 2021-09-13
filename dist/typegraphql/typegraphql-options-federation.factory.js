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
const federation_1 = require("@apollo/federation");
const directives_1 = require("@apollo/federation/dist/directives");
const common_1 = require("@nestjs/common");
const apollo_graphql_1 = require("apollo-graphql");
const graphql_1 = require("graphql");
const graphql_tag_1 = require("graphql-tag");
const type_graphql_1 = require("type-graphql");
const prepare_options_service_1 = require("./prepare-options.service");
const constants_1 = require("./constants");
let TypeGraphQLFederationOptionsFactory = class TypeGraphQLFederationOptionsFactory {
    constructor(rootModuleOptions, optionsPreparatorService) {
        this.rootModuleOptions = rootModuleOptions;
        this.optionsPreparatorService = optionsPreparatorService;
    }
    async createGqlOptions() {
        const { globalMiddlewares } = this.rootModuleOptions;
        const { resolversClasses, container, orphanedTypes, featureModuleOptionsArray, } = this.optionsPreparatorService.prepareOptions(constants_1.TYPEGRAPHQL_FEATURE_FEDERATION_MODULE_OPTIONS, globalMiddlewares);
        const referenceResolversArray = [...featureModuleOptionsArray].filter((it) => it.referenceResolvers);
        const referenceResolvers = referenceResolversArray.length > 0
            ? Object.fromEntries(referenceResolversArray.flatMap((it) => Object.entries(it.referenceResolvers)))
            : undefined;
        const baseSchema = await (0, type_graphql_1.buildSchema)(Object.assign(Object.assign({}, this.rootModuleOptions), { directives: [...graphql_1.specifiedDirectives, ...directives_1.default], resolvers: resolversClasses, orphanedTypes,
            container }));
        const schema = (0, federation_1.buildFederatedSchema)({
            typeDefs: (0, graphql_tag_1.default)((0, federation_1.printSchema)(baseSchema)),
            resolvers: (0, type_graphql_1.createResolversMap)(baseSchema),
        });
        if (referenceResolvers) {
            (0, apollo_graphql_1.addResolversToSchema)(schema, referenceResolvers);
        }
        return Object.assign(Object.assign({}, this.rootModuleOptions), { schema });
    }
};
TypeGraphQLFederationOptionsFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.TYPEGRAPHQL_ROOT_FEDERATION_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object, prepare_options_service_1.default])
], TypeGraphQLFederationOptionsFactory);
exports.default = TypeGraphQLFederationOptionsFactory;
//# sourceMappingURL=typegraphql-options-federation.factory.js.map