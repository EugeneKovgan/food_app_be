import { Body, Delete, Get, Param, ParseUUIDPipe, Post, Request } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UserEntity } from '@entities/user';
import { IsAuthenticated } from '@shared/user-shared';

import { UserAuthController as Controller } from '../decorators';
import { ApiAuthResponseModel, UserResponseInterface } from '../models';
import { LoginUserDto } from '../models/user-login.dto';
import { UserService } from '../services';

@Controller()
export class UserAuthController {
  constructor(private readonly _userService: UserService) {}

  @ApiResponse({ type: ApiAuthResponseModel })
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<ApiAuthResponseModel> {
    return this._userService.login(loginUserDto);
  }

  @Get('users')
  async getAllUsers(): Promise<UserEntity[]> {
    return this._userService.getAllUsers();
  }

  @IsAuthenticated()
  @Get('profile')
  async currentUser(@Request() req: UserResponseInterface) {
    return req.user;
  }

  @Delete('remove/:id')
  async removeUser(@Param('id', ParseUUIDPipe) id: string) {
    return this._userService.removeUser(id);
  }
}
