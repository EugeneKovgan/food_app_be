/* eslint-disable @typescript-eslint/typedef */
import { Column, Entity } from 'typeorm';

import { AddressEntity, BaseEntity, OrderProductListEntity } from '@entities/common';

@Entity('order')
export class OrderEntity extends BaseEntity {
  @Column({ unique: true })
  orderId: string;

  @Column()
  userId: string;

  @Column()
  data: string;

  @Column('simple-json', { nullable: true, default: null })
  orderInformation: OrderProductListEntity[];

  @Column()
  phoneNumber: string;

  @Column('simple-json', { nullable: true, default: null })
  address: AddressEntity;
}
