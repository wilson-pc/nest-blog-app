import { UserCreateNestedOneWithoutPostsInput } from 'src/prisma/generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType({
  isAbstract: true,
})
export class PostCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  published?: boolean | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image?: string | undefined;

  author?: UserCreateNestedOneWithoutPostsInput | undefined;
}
