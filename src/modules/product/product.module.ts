import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '@entities/product';
import { UserEntity } from '@entities/user';

import { ProductController } from './controllers';
import { ProductService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, UserEntity])],
  providers: [ProductService, Repository],
  controllers: [ProductController],
})
export class ProductModule {}
