import { Get, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { Register_Controller as Controller } from '../decorators';
import { AvatarService } from '../services';

@Controller()
export class AvatarController {
  constructor(private _avatarService: AvatarService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
  })
  async getAvatars() {
    return this._avatarService.getAvatars();
  }
}
