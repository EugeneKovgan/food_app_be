import { Controller, Get } from '@nestjs/common';

import { ProductEntity } from '@entities/product';

import { ProductService } from '../services';

@Controller('products')
export class ProductController {
  constructor(private _productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<ProductEntity[]> {
    return await this._productService.getAllProducts();
  }
}
