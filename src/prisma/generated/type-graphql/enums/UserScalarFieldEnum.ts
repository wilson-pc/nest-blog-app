import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  email = "email",
  id = "id",
  name = "name",
  image = "image",
  password = "password",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
