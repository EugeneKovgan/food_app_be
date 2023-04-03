import { Avatar } from '@entities/avatars';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { AVATAR_FIXTURES } from '@fixtures/dev/data/avatars';
import { EnvironmentType } from '@models/enum';

export class AvatarLoader extends AbstractLoader<Avatar> {
  entity: new () => Avatar = Avatar;
  data: Partial<Avatar>[] = AVATAR_FIXTURES;
  environments: EnvironmentType[] = [EnvironmentType.Development];
  relations: IRelationsOptions[] = [];
}
