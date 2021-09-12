import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;
}
