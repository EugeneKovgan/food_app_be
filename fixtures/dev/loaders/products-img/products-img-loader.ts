import { DeepPartial } from 'typeorm';

import { ProductImgEntity } from '@entities/product-img';
import { AbstractLoader, IRelationsOptions } from '@fixtures/abstract-loader';
import { PRODUCTS_IMG_FIXTURES } from '@fixtures/dev/data/products-img';
import { EnvironmentType } from '@models/enum';

export class ProductsImgLoader extends AbstractLoader<ProductImgEntity> {
  entity: new () => ProductImgEntity = ProductImgEntity;
  data: DeepPartial<ProductImgEntity>[] = PRODUCTS_IMG_FIXTURES;
  environments: EnvironmentType[] = [EnvironmentType.Development];
  relations: IRelationsOptions[] = [];
}
