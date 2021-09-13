import * as TypeGraphQL from "type-graphql";
import { Sesion } from "../../../models/Sesion";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sesion)
export class SesionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async User(@TypeGraphQL.Root() sesion: Sesion, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).sesion.findUnique({
      where: {
        id: sesion.id,
      },
    }).User({});
  }
}
