import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '@entities/product';
import { UserEntity } from '@entities/user';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly _productsRepository: Repository<ProductEntity>,
    @InjectRepository(ProductEntity)
    private readonly _userRepository: Repository<UserEntity>,
  ) {}

  async getAllProducts(query: any): Promise<ProductEntity[]> {
    const product = this._productsRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.picture', 'picture');

    product.orderBy('productCategory', 'ASC');

    if (query.limit) {
      product.limit(query.limit);
    }

    if (query.offset) {
      product.offset(query.offset);
    }

    const products = await product.getMany();

    return products;
  }

  // async getAllProducts(): Promise<ProductEntity[]> {
  //   return this._productsRepository.find({
  //     order: {
  //       createdAt: 'asc',
  //     },
  //   });
  // }
}
