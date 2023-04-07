import { Module } from '@nestjs/common';

import { UserShareService } from './services';

@Module({
  imports: [],
  controllers: [],
  providers: [UserShareService],
  exports: [UserShareService],
})
export class UserSharedModule {}
