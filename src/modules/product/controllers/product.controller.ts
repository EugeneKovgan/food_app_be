import { Controller, Get, Query } from '@nestjs/common';

import { ProductEntity } from '@entities/product';

import { ProductService } from '../services';

@Controller('products')
export class ProductController {
  constructor(private _productService: ProductService) {}

  @Get()
  async getAllProducts(@Query() query: any): Promise<ProductEntity[]> {
    return await this._productService.getAllProducts(query);
  }
}
