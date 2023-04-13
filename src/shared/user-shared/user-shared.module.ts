// import { Module } from '@nestjs/common';

// import { USERS_SHARED_SERVICES } from './services';

// @Module({
//   imports: [],
//   controllers: [],
//   providers: [...USERS_SHARED_SERVICES],
//   exports: [...USERS_SHARED_SERVICES],
// })
// export class UserSharedModule {}

import { DynamicModule } from '@nestjs/common';

import { JwtStrategy } from './models/jwt.strategy';
import { USERS_SHARED_SERVICES } from './services';

export class UserSharedModule {
  static forRoot(): DynamicModule {
    const providers = [...USERS_SHARED_SERVICES, JwtStrategy];

    return {
      module: UserSharedModule,
      providers,
      exports: providers,
    };
  }
}
