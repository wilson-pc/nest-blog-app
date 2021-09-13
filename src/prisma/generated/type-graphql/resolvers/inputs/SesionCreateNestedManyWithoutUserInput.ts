import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionCreateManyUserInputEnvelope } from "../inputs/SesionCreateManyUserInputEnvelope";
import { SesionCreateOrConnectWithoutUserInput } from "../inputs/SesionCreateOrConnectWithoutUserInput";
import { SesionCreateWithoutUserInput } from "../inputs/SesionCreateWithoutUserInput";
import { SesionWhereUniqueInput } from "../inputs/SesionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SesionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SesionCreateWithoutUserInput], {
    nullable: true
  })
  create?: SesionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SesionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SesionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SesionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SesionWhereUniqueInput], {
    nullable: true
  })
  connect?: SesionWhereUniqueInput[] | undefined;
}
