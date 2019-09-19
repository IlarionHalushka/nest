import { Controller, Get, Post, UseGuards, Body, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

import { AppService } from './app.service';
import { Roles } from './decorators/roles.decorator';
import { AuthService } from './auth/auth.service';
import { LoginDTO } from './auth/dto/login.dto';
import { ConfigService } from './config-module/config-service.service';

@Controller()
export class AppController {
  private isAuthEnabled: boolean;

  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    config: ConfigService,
  ) {
    this.isAuthEnabled = config.get('IS_AUTH_ENABLED') === 'true';
  }

  @Get()
  @Roles('admin')
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    return this.authService.login(loginDTO);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  @ApiBearerAuth()
  getProfile(@Req() req) {
    return req.user;
  }
}
