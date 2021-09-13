import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SesionCreateManyUserInputEnvelope } from "../inputs/SesionCreateManyUserInputEnvelope";
import { SesionCreateOrConnectWithoutUserInput } from "../inputs/SesionCreateOrConnectWithoutUserInput";
import { SesionCreateWithoutUserInput } from "../inputs/SesionCreateWithoutUserInput";
import { SesionScalarWhereInput } from "../inputs/SesionScalarWhereInput";
import { SesionUpdateManyWithWhereWithoutUserInput } from "../inputs/SesionUpdateManyWithWhereWithoutUserInput";
import { SesionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SesionUpdateWithWhereUniqueWithoutUserInput";
import { SesionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SesionUpsertWithWhereUniqueWithoutUserInput";
import { SesionWhereUniqueInput } from "../inputs/SesionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SesionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SesionCreateWithoutUserInput], {
    nullable: true
  })
  create?: SesionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SesionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SesionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SesionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SesionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SesionWhereUniqueInput], {
    nullable: true
  })
  connect?: SesionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionWhereUniqueInput], {
    nullable: true
  })
  set?: SesionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SesionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionWhereUniqueInput], {
    nullable: true
  })
  delete?: SesionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SesionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SesionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SesionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SesionScalarWhereInput[] | undefined;
}
