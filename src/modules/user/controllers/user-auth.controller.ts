import { Body, Get, Post, Put, Request } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UserEntity } from '@entities/user';
import { IsAuthenticated } from '@shared/user/decorators';

import { UserAuthControllerDecorator as Controller } from '../decorators';
import { ApiAuthResponseModel, LoginUserDto, UserResponseInterface, UserUpdateDto } from '../models';
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
    console.log(req.user.id);

    return req.user;
  }

  @IsAuthenticated()
  @Put('profile')
  async updateCurrentUser(
    @Request() req: any,
    @Body('user') userUpdateDto: UserUpdateDto,
  ): Promise<ApiAuthResponseModel> {
    const currentUserId = req.user.id;
    const user = await this._userService.updateUser(currentUserId, userUpdateDto);

    return this._userService.buildTokenResponse(user);
  }
}
