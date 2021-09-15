import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType({
  isAbstract: true,
})
export class userPayload {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  sub!: string;
}

@TypeGraphQL.ObjectType({
  isAbstract: true,
})
export class JwtPayload {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  access_token!: string;

  @TypeGraphQL.Field((_type) => userPayload, {
    nullable: false,
  })
  user: userPayload;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  type: userPayload;
}
