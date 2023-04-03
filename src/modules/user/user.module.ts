import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

import { Config } from '@core/config';
import { UserEntity } from '@entities/user';

import { JwtStrategy } from './models/jwt.strategy';
import { UserService } from './services/user.service';
import { USER_CONTROLLERS } from './controllers';

@Module({
  imports: [JwtModule.register({ secret: Config.get.hashKeyForJwtToken }), TypeOrmModule.forFeature([UserEntity])],
  controllers: [...USER_CONTROLLERS],
  providers: [UserService, JwtStrategy, Repository],
  exports: [UserService],
})
export class UserModule {}
