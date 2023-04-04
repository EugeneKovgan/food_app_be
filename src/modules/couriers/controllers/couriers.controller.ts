import { Controller, Get } from '@nestjs/common';

import { CouriersEntity } from '@entities/couriers';

import { CouriersService } from '../services/couriers.service';

@Controller('couriers')
export class CouriersController {
  constructor(private readonly _couriersService: CouriersService) {}

  @Get()
  async getAllCouriers(): Promise<CouriersEntity[]> {
    return this._couriersService.getAllCouriers();
  }
}
