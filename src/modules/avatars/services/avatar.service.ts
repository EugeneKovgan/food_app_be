import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AvatarEntity } from '@entities/avatars';

@Injectable()
export class AvatarService {
  constructor(
    @InjectRepository(AvatarEntity)
    private _avatarRepository: Repository<AvatarEntity>,
  ) {}

  async getAvatars(): Promise<any> {
    const avatars = await this._avatarRepository
      .createQueryBuilder('avatar')
      .select(['avatar.id', 'avatar.avatarPath']);

    return avatars.getMany();
  }
}
