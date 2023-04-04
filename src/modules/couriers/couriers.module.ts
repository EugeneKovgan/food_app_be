import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CouriersEntity } from '@entities/couriers';

import { CouriersController } from './controllers/couriers.controller';
import { CouriersService } from './services/couriers.service';

@Module({
  imports: [TypeOrmModule.forFeature([CouriersEntity])],
  providers: [CouriersService],
  controllers: [CouriersController],
})
export class CouriersModule {}
