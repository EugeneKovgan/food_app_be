import { Body, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Request } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UserEntity } from '@entities/user';
import { IsAuthenticated, UserShareService } from '@shared/user-shared';

import { UserAuthController as Controller } from '../decorators';
import { ApiAuthResponseModel, LoginUserDto, UserResponseInterface, UserUpdateDto } from '../models';
import { UserService } from '../services';

@Controller()
export class UserAuthController {
  constructor(private readonly _userService: UserService, private readonly _serShareService: UserShareService) {}

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

  @Delete('remove/:id')
  async removeUser(@Param('id', ParseUUIDPipe) id: string) {
    console.log(id);

    return this._serShareService.remove(id);
  }

  // @IsAuthenticated()
  // @Put('profile')
  // async updateCurrentUser(
  //   @Request() req: any,
  //   @Body('user') userUpdateDto: UserUpdateDto,
  // ): Promise<ApiAuthResponseModel> {
  //   const currentUserId = req.user.id;
  //   const user = await this._userService.updateUser(currentUserId, userUpdateDto);

  //   return this._serShareService.buildTokenResponse(user);
  // }

  @Patch('update:id')
  @ApiResponse({
    status: HttpStatus.OK,
  })
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() user: UserUpdateDto) {
    return this._userService.updateUser(id, user);
  }
}
