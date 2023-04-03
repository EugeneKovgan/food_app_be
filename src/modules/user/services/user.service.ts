import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/user';

import { CreateUserDto } from '../models';

@Injectable()
export class UserService {
  constructor(
    private readonly _jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userByEmail = await this._userRepository.findOneBy({
      email: createUserDto.email,
    });

    const userByUserName = await this._userRepository.findOneBy({
      userName: createUserDto.userName,
    });

    if (userByEmail || userByUserName) {
      throw new UnprocessableEntityException('Email or user name are exist');
    }

    const newUser = new UserEntity();

    Object.assign(newUser, createUserDto);

    return await this._userRepository.save(newUser);
  }

  buildUserResponse(user: any): any {
    return {
      user: { ...user, token: this._generateJwt(user) },
    };
  }

  private _generateJwt(user: UserEntity): string {
    const payload: any = {
      id: user.id,
      email: user.email,
      userName: user.userName,
    };

    return this._jwtService.sign(payload);
  }
}
