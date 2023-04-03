import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/user';

import {
  ApiAuthResponseModel,
  CreateUserDto,
  JwtResponseInterface,
  LoginUserDto,
  UserResponseInterface,
  UserUpdateDto,
} from '../models';

import * as bcrypt from 'bcrypt';

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

  async login(loginUserDto: LoginUserDto): Promise<ApiAuthResponseModel> {
    const user = await this._userRepository
      .createQueryBuilder('user')
      .select(['user.id', 'user.email', 'user.password'])
      .where('user.email = :email', { email: loginUserDto.email })
      .getOne();

    if (!user) {
      throw new UnprocessableEntityException(`User doesn't exist`);
    }

    const isPasswordCorrect = await bcrypt.compare(loginUserDto.password, user.password);

    if (!isPasswordCorrect) {
      throw new UnprocessableEntityException(`Check your password`);
    }

    delete user.password;

    return this.buildTokenResponse(user);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const user = this._userRepository.createQueryBuilder('user').leftJoinAndSelect('user.avatar', 'avatar');
    const users = await user.getMany();

    return users;
  }

  async findById(inputId: string): Promise<UserEntity> {
    const user = this._userRepository
      .createQueryBuilder('user')
      .select(['user.id'])
      .where('user.id = :id', { id: inputId })
      .getOne();

    return user;
  }

  async updateUser(currentUserId: string, userUpdateDto: UserUpdateDto): Promise<UserEntity> {
    const user = await this.findById(currentUserId);

    Object.assign(user, userUpdateDto);

    return await this._userRepository.save(user);
  }

  buildTokenResponse(user: any): ApiAuthResponseModel {
    return {
      token: this._generateJwt(user),
    };
  }

  buildUserResponse(user: any): UserResponseInterface {
    return {
      user: { ...user, token: this._generateJwt(user) },
    };
  }

  private _generateJwt(user: UserEntity): string {
    const payload: JwtResponseInterface = {
      id: user.id,
      email: user.email,
      userName: user.userName,
    };

    return this._jwtService.sign(payload);
  }
}
