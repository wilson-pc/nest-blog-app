import { PostWhereUniqueInput } from 'src/prisma/generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';

import { PostUpdateInput } from '../entities/PostUpdateInput';

@TypeGraphQL.ArgsType()
export class UpdatePostArgs {
  @TypeGraphQL.Field((_type) => PostUpdateInput, {
    nullable: false,
  })
  data!: PostUpdateInput;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;
}
