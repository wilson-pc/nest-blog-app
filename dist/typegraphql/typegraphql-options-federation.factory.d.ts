import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import OptionsPreparatorService from './prepare-options.service';
import { TypeGraphQLRootFederationModuleOptions } from './types';
export default class TypeGraphQLFederationOptionsFactory implements GqlOptionsFactory {
    private readonly rootModuleOptions;
    private readonly optionsPreparatorService;
    constructor(rootModuleOptions: TypeGraphQLRootFederationModuleOptions, optionsPreparatorService: OptionsPreparatorService);
    createGqlOptions(): Promise<GqlModuleOptions>;
}
