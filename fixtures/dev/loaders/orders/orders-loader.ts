import { DeepPartial } from 'typeorm';

import { OrderEntity } from '@entities/order';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { ORDERS_FIXTURES } from '@fixtures/dev/data/orders';
import { EnvironmentType } from '@models/enum';

export class OrdersLoader extends AbstractLoader<OrderEntity> {
  entity: new () => OrderEntity = OrderEntity;
  data: DeepPartial<OrderEntity>[] = ORDERS_FIXTURES;
  environments: EnvironmentType[] = [EnvironmentType.Development];
  relations: IRelationsOptions[] = [];
}
