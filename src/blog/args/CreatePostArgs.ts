import * as TypeGraphQL from 'type-graphql';
import { PostCreateInput } from '../entities/PostCreateInput';

@TypeGraphQL.ArgsType()
export class CreatePostArgs {
  @TypeGraphQL.Field((_type) => PostCreateInput, {
    nullable: false,
  })
  data!: PostCreateInput;
}
