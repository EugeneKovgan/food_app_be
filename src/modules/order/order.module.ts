import { Module } from '@nestjs/common';

import { ORDER_CONTROLLERS } from './controllers';
import { OrderService } from './services';

@Module({
  imports: [],
  controllers: [...ORDER_CONTROLLERS],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
