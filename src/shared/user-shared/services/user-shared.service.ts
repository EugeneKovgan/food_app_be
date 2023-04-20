import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/user';
import { ApiAuthResponseModel, UserResponseInterface, UserUpdateDto } from '@modules/user/models';

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
      .select([
        'user.id',
        'user.userId',
        'user.email',
        'user.userName',
        'user.name',
        'user.surname',
        'user.phoneNumber',
        'user.favoritesProducts',
        'user.address',
        'user.cardNumber',
      ])
      .leftJoinAndSelect('user.avatar', 'avatar')
      .where('user.id = :id', { id: inputId })
      .getOne();

    console.log(user);

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

  async update(id: string, { avatar, ...userData }: UserUpdateDto) {
    await this._userRepository.update(id, { ...userData, avatar: { id: avatar.id } });
  }

  async remove(id: string) {
    await this._userRepository.softDelete(id);
  }

  generateJwt(user: UserEntity): string {
    const payload: JwtResponseInterface = {
      id: user.id,
      email: user.email,
      userName: user.userName,
    };

    return this._jwtService.sign(payload);
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
