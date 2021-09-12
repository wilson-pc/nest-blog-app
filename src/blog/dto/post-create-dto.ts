import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsOptional,
  IsEmail,
  IsBoolean,
} from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  content: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  published: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image: string;
}
