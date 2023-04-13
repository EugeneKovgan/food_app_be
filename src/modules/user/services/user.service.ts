import { Injectable, UnprocessableEntityException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/user';
import { UserShareService } from '@shared/user-shared';

import { ApiAuthResponseModel, CreateUserDto, LoginUserDto, UserUpdateDto } from '../models';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
    private readonly _userShareService: UserShareService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<ApiAuthResponseModel> {
    const existsUser = await this._userRepository.findOne({
      where: [{ userName: createUserDto.userName }, { email: createUserDto.email }],
    });

    if (existsUser) {
      throw new UnprocessableEntityException('Email or user name are exist');
    }

    const user = this._userRepository.create(createUserDto);

    const createdUser = await this._userRepository.save(user);

    return this._userShareService.buildTokenResponse(createdUser);
  }

  async login(loginUserDto: LoginUserDto): Promise<any> {
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

    return this._userShareService.buildTokenResponse(user);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const user = this._userRepository.createQueryBuilder('user').leftJoinAndSelect('user.avatar', 'avatar');
    const users = await user.getMany();

    return users;
  }

  async updateUser(currentUserId: string, userUpdateDto: UserUpdateDto): Promise<UserEntity> {
    const user = await this._userShareService.findById(currentUserId);

    Object.assign(user, userUpdateDto);

    return await this._userRepository.save(user);
  }
}
