import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@entities/common';

@Entity('productlist')
export class OrderProductListEntity extends BaseEntity {
  @Column({ nullable: true, default: '' })
  productName: string;

  @Column({ nullable: true, default: '' })
  quantity: number;
}
