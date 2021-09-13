import { UserWhereUniqueInput } from 'src/prisma/generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';
import { UserUpdateInput } from '../models/UserUpdateInput';

@TypeGraphQL.ArgsType()
export class UpdateUserArgs {
  @TypeGraphQL.Field((_type) => UserUpdateInput, {
    nullable: false,
  })
  data!: UserUpdateInput;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;
}
