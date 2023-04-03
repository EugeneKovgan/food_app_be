import { Module } from '@nestjs/common';

import { AVATAR_CONTROLLERS } from './controllers';
import { AVATAR_SERVICES } from './services';

@Module({
  providers: [...AVATAR_SERVICES],
  controllers: [...AVATAR_CONTROLLERS],
})
export class AvatarModule {}
