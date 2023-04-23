/* eslint-disable @typescript-eslint/typedef */
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AddressEntity, BaseEntity, OrderProductListEntity } from '@entities/common';
import { UserEntity } from '@entities/user';

@Entity('order')
export class OrderEntity extends BaseEntity {
  @Column({ unique: true })
  orderId: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.orderList)
  @JoinColumn()
  userId: UserEntity;

  @Column()
  data: string;

  @Column('simple-json', { nullable: true, default: null })
  orderInformation: OrderProductListEntity[];

  @Column()
  courierId: string;

  @Column()
  deliveryTime: string;

  @Column()
  phoneNumber: string;

  @Column('simple-json', { nullable: true, default: null })
  address: AddressEntity;
}
