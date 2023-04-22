import { Body, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UserUpdateController as Controller } from '../decorators';
import { ApiAuthResponseModel, UserFavoriteProductDto, UserUpdateDto } from '../models';
import { UserService } from '../services';

@Controller()
export class UserUpdateController {
  constructor(private readonly _userService: UserService) {}

  @Patch('user/:id')
  @ApiResponse({ type: ApiAuthResponseModel })
  async updateUser(@Param('id', ParseUUIDPipe) id: string, @Body() user: UserUpdateDto) {
    return this._userService.updateUser(id, user);
  }

  @Patch('likes/:id')
  @ApiResponse({ type: ApiAuthResponseModel })
  async updateFavoriteList(@Param('id', ParseUUIDPipe) id: string, @Body() productId: UserFavoriteProductDto) {
    return this._userService.updateFavoriteList(id, productId);
  }
}
