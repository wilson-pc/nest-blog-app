import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SesionUpdateManyMutationInput } from "../../../inputs/SesionUpdateManyMutationInput";
import { SesionWhereInput } from "../../../inputs/SesionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySesionArgs {
  @TypeGraphQL.Field(_type => SesionUpdateManyMutationInput, {
    nullable: false
  })
  data!: SesionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SesionWhereInput, {
    nullable: true
  })
  where?: SesionWhereInput | undefined;
}
