import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @ApiOperation({ summary: 'Login User' })
  @ApiBody({ type: LoginDto })
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'get current user' })
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return this.authService.getProfile(req.user.sub);
  }
}
