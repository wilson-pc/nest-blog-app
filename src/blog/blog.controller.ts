import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { Prisma } from 'prisma/generated';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBlogDto: any) {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  findAll(@Query('userId') userId: string) {
    let params: Prisma.PostWhereInput = {};
    if (userId) {
      params = { authorId: userId };
    }
    return this.blogService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: any) {
    return this.blogService.update(id, updateBlogDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(id);
  }
}
