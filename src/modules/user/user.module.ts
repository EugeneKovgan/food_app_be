import { Module } from '@nestjs/common';

import { UserService } from './services/user.service';
import { USER_CONTROLLERS } from './controllers';

@Module({
  imports: [],
  controllers: [...USER_CONTROLLERS],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
