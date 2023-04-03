import { AvatarEntity } from '@entities/avatars';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { AVATAR_FIXTURES } from '@fixtures/dev/data/avatars';
import { EnvironmentType } from '@models/enum';

export class AvatarLoader extends AbstractLoader<AvatarEntity> {
  entity: new () => AvatarEntity = AvatarEntity;
  data: Partial<AvatarEntity>[] = AVATAR_FIXTURES;
  environments: EnvironmentType[] = [EnvironmentType.Development];
  relations: IRelationsOptions[] = [];
}
