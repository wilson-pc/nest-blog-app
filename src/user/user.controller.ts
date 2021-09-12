import { HttpService } from '@nestjs/axios';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Request,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { lastValueFrom } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import * as FormData from 'form-data';
import { CreateUserDto } from './dto/user-create-dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update-dto';
import { Payload } from 'src/payload';
@ApiTags('User')
@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(
    private readonly userService: UserService,
    private axios: HttpService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create User' })
  async create(@Body() createUserDto: CreateUserDto) {
    if (createUserDto.image) {
      try {
        const buff = Buffer.from(
          createUserDto.image.split(';base64,').pop(),
          'base64',
        );

        const form = new FormData();
        form.append('file', buff, 'gato.jpg');
        const instance = this.axios.post('https://telegra.ph/upload', form, {
          headers: { ...form.getHeaders() },
        });
        const { data } = await lastValueFrom(instance);
        const [{ src }] = data;
        createUserDto.image = 'https://telegra.ph' + src;
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get users' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update user' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ) {
    const user: Payload = req.user;

    if (id == user.sub) {
      if (updateUserDto.image && !updateUserDto.image.includes('telegra.ph/')) {
        try {
          const buff = Buffer.from(
            updateUserDto.image.split(';base64,').pop(),
            'base64',
          );

          const form = new FormData();
          form.append('file', buff, 'gato.jpg');
          const instance = this.axios.post('https://telegra.ph/upload', form, {
            headers: { ...form.getHeaders() },
          });

          const { data } = await lastValueFrom(instance);

          const [{ src }] = data;
          updateUserDto.image = 'https://telegra.ph' + src;
        } catch (error) {
          throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
      }

      return this.userService.update(id, updateUserDto);
    } else {
      throw new HttpException('action not allowed', HttpStatus.UNAUTHORIZED);
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    const user: Payload = req.user;
    if (id == user.sub) {
      return this.userService.remove(id);
    } else {
      throw new HttpException('action not allowed', HttpStatus.UNAUTHORIZED);
    }
  }
}
