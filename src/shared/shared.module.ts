import { DynamicModule, Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Config } from '@core/config';
import { ENTITIES } from '@entities/index';

import { UserSharedModule } from './user-shared/user-shared.module';
import { JwtStrategy } from './user-shared';

@Global()
@Module({})
export class SharedModule {
  static share(): DynamicModule {
    const sharedModules = [
      JwtModule.register({ secret: Config.get.hashKeyForJwtToken }),
      TypeOrmModule.forRoot(Config.get.typeORMOptions),
      TypeOrmModule.forFeature(ENTITIES),
      UserSharedModule.forRoot(),
    ];

    return {
      module: SharedModule,
      imports: sharedModules,
      exports: sharedModules,
      providers: [JwtStrategy],
    };
  }
}
