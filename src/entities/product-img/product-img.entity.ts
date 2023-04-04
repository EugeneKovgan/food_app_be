import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@entities/common';

@Entity('product-img')
export class ProductImgEntity extends BaseEntity {
  @Column({ unique: true })
  id: string;

  @Column()
  path: string;
}
