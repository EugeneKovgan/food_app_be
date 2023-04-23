import { Body, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { OrderEntity } from '@entities/order';
import { ApiAuthResponseModel } from '@modules/user/models';

import { Order_Controller as Controller } from '../decorators';
import { OrderService } from '../services';

@Controller()
export class Order_Controller {
  constructor(private readonly _orderService: OrderService) {}

  @Post('create/:id')
  @ApiResponse({ type: ApiAuthResponseModel })
  async createOrder(@Param('id', ParseUUIDPipe) id: string, @Body() order: any): Promise<OrderEntity> {
    return this._orderService.createOrder(id, order);
  }

  @Get('get/:id')
  @ApiResponse({ type: ApiAuthResponseModel })
  async getOrders(@Param('id', ParseUUIDPipe) id: string): Promise<OrderEntity> {
    return this._orderService.getOrders(id);
  }

  @Get()
  async getAllOrders(): Promise<OrderEntity[]> {
    return this._orderService.getAllOrders();
  }
}
