import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CouriersEntity } from '@entities/couriers';

@Injectable()
export class CouriersService {
  constructor(
    @InjectRepository(CouriersEntity)
    private readonly _couriersRepository: Repository<CouriersEntity>,
  ) {}

  async getAllCouriers(): Promise<CouriersEntity[]> {
    const courier = this._couriersRepository
      .createQueryBuilder('courier')
      .leftJoinAndSelect('courier.avatar', 'avatar');
    const couriers = await courier.getMany();

    return couriers;
  }
}
