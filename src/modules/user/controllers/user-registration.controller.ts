import { Body, Post } from '@nestjs/common';

import { UserRegistrationController as Controller } from '../decorators';
import { ApiAuthResponseModel, CreateUserDto } from '../models';
import { UserService } from '../services';

@Controller()
export class UserRegistrationController {
  constructor(private readonly _userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<ApiAuthResponseModel> {
    return this._userService.createUser(createUserDto);
  }
}
