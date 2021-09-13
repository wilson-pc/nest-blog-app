import * as TypeGraphQL from "type-graphql";

export enum SesionScalarFieldEnum {
  id = "id",
  token = "token",
  state = "state",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SesionScalarFieldEnum, {
  name: "SesionScalarFieldEnum",
  description: undefined,
});
