"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = require("./resolvers/crud/resolvers-crud.index");
const actionResolvers = require("./resolvers/crud/resolvers-actions.index");
const relationResolvers = require("./resolvers/relations/resolvers.index");
const models = require("./models");
const outputTypes = require("./resolvers/outputs");
const inputTypes = require("./resolvers/inputs");
const argsTypes = require("./resolvers/crud/args.index");
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Post: crudResolvers.PostCrudResolver,
    Sesion: crudResolvers.SesionCrudResolver
};
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Post: relationResolvers.PostRelationsResolver,
    Sesion: relationResolvers.SesionRelationsResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    Post: {
        post: actionResolvers.FindUniquePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        posts: actionResolvers.FindManyPostResolver,
        createPost: actionResolvers.CreatePostResolver,
        createManyPost: actionResolvers.CreateManyPostResolver,
        deletePost: actionResolvers.DeletePostResolver,
        updatePost: actionResolvers.UpdatePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        upsertPost: actionResolvers.UpsertPostResolver,
        aggregatePost: actionResolvers.AggregatePostResolver,
        groupByPost: actionResolvers.GroupByPostResolver
    },
    Sesion: {
        sesion: actionResolvers.FindUniqueSesionResolver,
        findFirstSesion: actionResolvers.FindFirstSesionResolver,
        sesions: actionResolvers.FindManySesionResolver,
        createSesion: actionResolvers.CreateSesionResolver,
        createManySesion: actionResolvers.CreateManySesionResolver,
        deleteSesion: actionResolvers.DeleteSesionResolver,
        updateSesion: actionResolvers.UpdateSesionResolver,
        deleteManySesion: actionResolvers.DeleteManySesionResolver,
        updateManySesion: actionResolvers.UpdateManySesionResolver,
        upsertSesion: actionResolvers.UpsertSesionResolver,
        aggregateSesion: actionResolvers.AggregateSesionResolver,
        groupBySesion: actionResolvers.GroupBySesionResolver
    }
};
const resolversInfo = {
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
    Sesion: ["sesion", "findFirstSesion", "sesions", "createSesion", "createManySesion", "deleteSesion", "updateSesion", "deleteManySesion", "updateManySesion", "upsertSesion", "aggregateSesion", "groupBySesion"]
};
const relationResolversInfo = {
    User: ["posts", "sesions"],
    Post: ["author"],
    Sesion: ["User"]
};
const modelsInfo = {
    User: ["email", "id", "name", "image", "password", "createdAt", "updatedAt"],
    Post: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt"],
    Sesion: ["id", "token", "state", "userId", "createdAt", "updatedAt"]
};
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "email", "id", "name", "image", "password", "posts", "sesions", "createdAt", "updatedAt"],
    UserOrderByWithRelationInput: ["email", "id", "name", "image", "password", "posts", "sesions", "createdAt", "updatedAt"],
    UserWhereUniqueInput: ["email", "id"],
    UserOrderByWithAggregationInput: ["email", "id", "name", "image", "password", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "email", "id", "name", "image", "password", "createdAt", "updatedAt"],
    PostWhereInput: ["AND", "OR", "NOT", "id", "authorId", "content", "published", "title", "author", "image", "createdAt", "updatedAt"],
    PostOrderByWithRelationInput: ["id", "authorId", "content", "published", "title", "author", "image", "createdAt", "updatedAt"],
    PostWhereUniqueInput: ["id"],
    PostOrderByWithAggregationInput: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt", "_count", "_max", "_min"],
    PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt"],
    SesionWhereInput: ["AND", "OR", "NOT", "id", "token", "state", "User", "userId", "createdAt", "updatedAt"],
    SesionOrderByWithRelationInput: ["id", "token", "state", "User", "userId", "createdAt", "updatedAt"],
    SesionWhereUniqueInput: ["id"],
    SesionOrderByWithAggregationInput: ["id", "token", "state", "userId", "createdAt", "updatedAt", "_count", "_max", "_min"],
    SesionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "token", "state", "userId", "createdAt", "updatedAt"],
    UserCreateInput: ["email", "id", "name", "image", "password", "createdAt", "updatedAt", "posts", "sesions"],
    UserUpdateInput: ["email", "name", "image", "password", "createdAt", "updatedAt", "posts", "sesions"],
    UserCreateManyInput: ["email", "id", "name", "image", "password", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["email", "name", "image", "password", "createdAt", "updatedAt"],
    PostCreateInput: ["id", "content", "published", "title", "image", "createdAt", "updatedAt", "author"],
    PostUpdateInput: ["content", "published", "title", "image", "createdAt", "updatedAt", "author"],
    PostCreateManyInput: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt"],
    PostUpdateManyMutationInput: ["content", "published", "title", "image", "createdAt", "updatedAt"],
    SesionCreateInput: ["id", "token", "state", "createdAt", "updatedAt", "User"],
    SesionUpdateInput: ["token", "state", "createdAt", "updatedAt", "User"],
    SesionCreateManyInput: ["id", "token", "state", "userId", "createdAt", "updatedAt"],
    SesionUpdateManyMutationInput: ["token", "state", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    PostListRelationFilter: ["every", "some", "none"],
    SesionListRelationFilter: ["every", "some", "none"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PostOrderByRelationAggregateInput: ["_count"],
    SesionOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["email", "id", "name", "image", "password", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["email", "id", "name", "image", "password", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["email", "id", "name", "image", "password", "createdAt", "updatedAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    BoolFilter: ["equals", "not"],
    UserRelationFilter: ["is", "isNot"],
    PostCountOrderByAggregateInput: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt"],
    PostMaxOrderByAggregateInput: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt"],
    PostMinOrderByAggregateInput: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    SesionCountOrderByAggregateInput: ["id", "token", "state", "userId", "createdAt", "updatedAt"],
    SesionMaxOrderByAggregateInput: ["id", "token", "state", "userId", "createdAt", "updatedAt"],
    SesionMinOrderByAggregateInput: ["id", "token", "state", "userId", "createdAt", "updatedAt"],
    PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    SesionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    SesionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    UserCreateNestedOneWithoutSesionsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneWithoutSesionsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolFilter: ["equals", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    PostCreateWithoutAuthorInput: ["id", "content", "published", "title", "image", "createdAt", "updatedAt"],
    PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
    PostCreateManyAuthorInputEnvelope: ["data"],
    SesionCreateWithoutUserInput: ["id", "token", "state", "createdAt", "updatedAt"],
    SesionCreateOrConnectWithoutUserInput: ["where", "create"],
    SesionCreateManyUserInputEnvelope: ["data"],
    PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    PostScalarWhereInput: ["AND", "OR", "NOT", "id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt"],
    SesionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SesionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SesionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SesionScalarWhereInput: ["AND", "OR", "NOT", "id", "token", "state", "userId", "createdAt", "updatedAt"],
    UserCreateWithoutPostsInput: ["email", "id", "name", "image", "password", "createdAt", "updatedAt", "sesions"],
    UserCreateOrConnectWithoutPostsInput: ["where", "create"],
    UserUpsertWithoutPostsInput: ["update", "create"],
    UserUpdateWithoutPostsInput: ["email", "name", "image", "password", "createdAt", "updatedAt", "sesions"],
    UserCreateWithoutSesionsInput: ["email", "id", "name", "image", "password", "createdAt", "updatedAt", "posts"],
    UserCreateOrConnectWithoutSesionsInput: ["where", "create"],
    UserUpsertWithoutSesionsInput: ["update", "create"],
    UserUpdateWithoutSesionsInput: ["email", "name", "image", "password", "createdAt", "updatedAt", "posts"],
    PostCreateManyAuthorInput: ["id", "content", "published", "title", "image", "createdAt", "updatedAt"],
    SesionCreateManyUserInput: ["id", "token", "state", "createdAt", "updatedAt"],
    PostUpdateWithoutAuthorInput: ["content", "published", "title", "image", "createdAt", "updatedAt"],
    SesionUpdateWithoutUserInput: ["token", "state", "createdAt", "updatedAt"]
};
const outputsInfo = {
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["email", "id", "name", "image", "password", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregatePost: ["_count", "_min", "_max"],
    PostGroupBy: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateSesion: ["_count", "_min", "_max"],
    SesionGroupBy: ["id", "token", "state", "userId", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["posts", "sesions"],
    UserCountAggregate: ["email", "id", "name", "image", "password", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["email", "id", "name", "image", "password", "createdAt", "updatedAt"],
    UserMaxAggregate: ["email", "id", "name", "image", "password", "createdAt", "updatedAt"],
    PostCountAggregate: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt", "_all"],
    PostMinAggregate: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt"],
    PostMaxAggregate: ["id", "authorId", "content", "published", "title", "image", "createdAt", "updatedAt"],
    SesionCountAggregate: ["id", "token", "state", "userId", "createdAt", "updatedAt", "_all"],
    SesionMinAggregate: ["id", "token", "state", "userId", "createdAt", "updatedAt"],
    SesionMaxAggregate: ["id", "token", "state", "userId", "createdAt", "updatedAt"]
};
const argsInfo = {
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniquePostArgs: ["where"],
    FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreatePostArgs: ["data"],
    CreateManyPostArgs: ["data"],
    DeletePostArgs: ["where"],
    UpdatePostArgs: ["data", "where"],
    DeleteManyPostArgs: ["where"],
    UpdateManyPostArgs: ["data", "where"],
    UpsertPostArgs: ["where", "create", "update"],
    AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSesionArgs: ["where"],
    FindFirstSesionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySesionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSesionArgs: ["data"],
    CreateManySesionArgs: ["data"],
    DeleteSesionArgs: ["where"],
    UpdateSesionArgs: ["data", "where"],
    DeleteManySesionArgs: ["where"],
    UpdateManySesionArgs: ["data", "where"],
    UpsertSesionArgs: ["where", "create", "update"],
    AggregateSesionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySesionArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
//# sourceMappingURL=enhance.js.map