import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType({
  isAbstract: true,
})
export class Message {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  text: string;
}
