import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@entities/user';
import { UserShareService } from '@shared/user-shared';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
    private readonly _userShareService: UserShareService,
  ) {}

  async createOrder(req: any, { data }: any): Promise<any> {
    console.log(req);
    console.log(data);

    return req;
  }

  async getOrders(req: any): Promise<any> {
    console.log(req);

    return req;
  }
}
