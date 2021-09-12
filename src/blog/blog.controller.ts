import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import * as FormData from 'form-data';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Payload } from 'src/payload';
import { BlogService } from './blog.service';
import { HttpService } from '@nestjs/axios';
import { CreatePostDto } from './dto/post-create-dto';
import { lastValueFrom } from 'rxjs';
import { PostUpateDto } from './dto/post-update-dto';

@ApiTags('Post')
@Controller({ path: 'post', version: '1' })
export class BlogController {
  constructor(
    private readonly blogService: BlogService,
    private axios: HttpService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'create post' })
  @Post()
  async create(@Body() createBlogDto: CreatePostDto, @Request() req) {
    const user: Payload = req.user;
    if (createBlogDto.image) {
      try {
        const buff = Buffer.from(
          createBlogDto.image.split(';base64,').pop(),
          'base64',
        );
        console.log(buff);
        const form = new FormData();
        form.append('file', buff, 'gato.jpg');
        const instance = this.axios.post('https://telegra.ph/upload', form, {
          headers: { ...form.getHeaders() },
        });
        const { data } = await lastValueFrom(instance);
        const [{ src }] = data;
        createBlogDto.image = 'https://telegra.ph' + src;
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }

    return this.blogService.create(createBlogDto, user);
  }

  @ApiQuery({ required: false, name: 'userId' })
  @Get()
  @ApiOperation({ summary: 'get all posts' })
  findAll(@Query('userId') userId: string) {
    let params: Prisma.PostWhereInput = {};
    if (userId) {
      params = { authorId: userId, published: true };
    } else {
      params = { published: true };
    }
    return this.blogService.findAll(params);
  }

  @ApiOperation({ summary: 'get post by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'update post' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBlogDto: PostUpateDto,
    @Request() req,
  ) {
    const user: Payload = req.user;
    if (updateBlogDto.image && !updateBlogDto.image.includes('telegra.ph/')) {
      try {
        const buff = Buffer.from(
          updateBlogDto.image.split(';base64,').pop(),
          'base64',
        );
        console.log(buff);
        const form = new FormData();
        form.append('file', buff, 'gato.jpg');
        const instance = this.axios.post('https://telegra.ph/upload', form, {
          headers: { ...form.getHeaders() },
        });
        const { data } = await lastValueFrom(instance);
        const [{ src }] = data;
        updateBlogDto.image = 'https://telegra.ph' + src;
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
    return this.blogService.update(id, updateBlogDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'delete post' })
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    const user: Payload = req.user;
    return this.blogService.remove(id, user);
  }
}
