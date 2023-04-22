import { Body, Get, Post, Request } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { ApiAuthResponseModel, UserResponseInterface } from '@modules/user/models';

import { Order_Controller as Controller } from '../decorators';
import { OrderService } from '../services';

@Controller()
export class Order_Controller {
  constructor(private readonly _orderService: OrderService) {}

  @Post('create')
  @ApiResponse({ type: ApiAuthResponseModel })
  async createOrder(@Request() req: UserResponseInterface, @Body() data: any) {
    return this._orderService.createOrder(req, { ...data });
  }

  @Get('get')
  @ApiResponse({ type: ApiAuthResponseModel })
  async getOrders(@Request() req: UserResponseInterface): Promise<any> {
    return this._orderService.getOrders(req);
  }
}
