import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserCreateInput } from '../models/UserCreateInput';

@TypeGraphQL.ArgsType()
export class CreateUserArgs {
  @TypeGraphQL.Field((_type) => UserCreateInput, {
    nullable: false,
  })
  data!: UserCreateInput;
}
