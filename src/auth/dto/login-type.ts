import * as TypeGraphQL from 'type-graphql';
import {
  IsEmail,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

@TypeGraphQL.InputType()
export class LoginInput {
  @TypeGraphQL.Field()
  @IsString()
  @IsEmail()
  email: string;

  @TypeGraphQL.Field({ nullable: true })
  @IsString()
  password?: string;
}
