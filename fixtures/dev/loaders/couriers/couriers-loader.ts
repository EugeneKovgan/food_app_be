import { DeepPartial } from 'typeorm';

import { CouriersEntity } from '@entities/couriers';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { COURIERS_FIXTURES } from '@fixtures/dev/data/couriers';
import { EnvironmentType } from '@models/enum';

export class CouriersLoader extends AbstractLoader<CouriersEntity> {
  entity: new () => CouriersEntity = CouriersEntity;
  data: DeepPartial<CouriersEntity>[] = COURIERS_FIXTURES;
  environments: EnvironmentType[] = [EnvironmentType.Development];
  relations: IRelationsOptions[] = [];
}
