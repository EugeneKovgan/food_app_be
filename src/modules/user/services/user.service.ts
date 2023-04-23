import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/user';
import { UserShareService } from '@shared/user-shared';

import { ApiAuthResponseModel, CreateUserDto, UserFavoriteProductDto, UserUpdateDto } from '../models';
import { LoginUserDto } from '../models/user-login.dto';

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

    const lastUserId = await this._getLastUserId(this._userRepository);
    const userId = `${+lastUserId + 1}`;

    const user = this._userRepository.create(createUserDto);

    const createdUser = await this._userRepository.save({ ...user, userId });

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

  async updateUser(id: string, { avatar, ...userData }: UserUpdateDto) {
    await this._userRepository.update(id, { ...userData, avatar: { id: avatar.id } });
  }

  async updateFavoriteList(id: string, { productId }: UserFavoriteProductDto) {
    const user = await this._userShareService.findById(id);

    let updatedFavoritesProducts: string[] = [];

    if (user.favoritesProducts === null) {
      user.favoritesProducts = [];
    }

    if (user.favoritesProducts.includes(productId)) {
      updatedFavoritesProducts = user.favoritesProducts.filter((item: string) => {
        return item !== productId;
      });
    } else {
      updatedFavoritesProducts = [...user.favoritesProducts, productId];
    }

    await this._userRepository.update(id, { ...user, favoritesProducts: updatedFavoritesProducts });
  }

  async removeUser(id: string) {
    await this._userRepository.delete(id);
  }

  private async _getLastUserId(repository: Repository<UserEntity>): Promise<string> {
    const queryBuilder = repository
      .createQueryBuilder('user')
      .withDeleted()
      .addOrderBy('user.createdAt', 'DESC')
      .select(['user.userId']);
    const { userId } = await queryBuilder.getOne();

    return userId;
  }
}
