/* eslint-disable @typescript-eslint/typedef */
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { ProductImgEntity } from '@entities/product-img';

@Entity('product')
export class ProductEntity extends BaseEntity {
  @Column({ nullable: true, default: null })
  productName: string;

  @Column({ default: 0 })
  productPrice: number;

  @Column({ nullable: true, default: null, length: 400 })
  productDescription: string;

  @Column({ nullable: true, default: null })
  productCategory: string;

  @Column({ nullable: true, default: null })
  productCookingTime: number;

  @Column({ default: 0 })
  productFavoritesCounter: number;

  @OneToOne(() => ProductImgEntity, (prod) => prod.id)
  @JoinColumn()
  picture: ProductImgEntity;
}
