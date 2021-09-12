import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image: string;
}
