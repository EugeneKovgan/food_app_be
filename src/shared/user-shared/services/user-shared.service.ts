import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/user';
import { ApiAuthResponseModel, UserResponseInterface } from '@modules/user/models';

import { JwtResponseInterface } from '../models';

@Injectable()
export class UserShareService {
  constructor(
    private readonly _jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  async findById(inputId: string): Promise<UserEntity> {
    const user = this._userRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.email', 'user.userName'])
      .leftJoinAndSelect('user.avatar', 'avatar')
      .where('user.id = :id', { id: inputId })
      .getOne();

    return user;
  }

  buildTokenResponse(user: any): ApiAuthResponseModel {
    return {
      token: this.generateJwt(user),
    };
  }

  buildUserResponse(user: any): UserResponseInterface {
    return {
      user: { ...user, token: this.generateJwt(user) },
    };
  }

  generateJwt(user: UserEntity): string {
    const payload: JwtResponseInterface = {
      id: user.id,
      email: user.email,
      userName: user.userName,
    };

    return this._jwtService.sign(payload);
  }
}
