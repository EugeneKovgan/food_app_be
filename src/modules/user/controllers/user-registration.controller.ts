import { Body, Controller, Post } from '@nestjs/common';

import { ApiAuthResponseModel, CreateUserDto } from '../models';
import { UserService } from '../services';

@Controller('registration')
export class UserRegistrationController {
  constructor(private readonly _userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<ApiAuthResponseModel> {
    const user = await this._userService.createUser(createUserDto);

    return this._userService.buildTokenResponse(user);
  }
}
