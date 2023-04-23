import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CouriersEntity } from '@entities/couriers';
import { OrderEntity } from '@entities/order';
import { UserEntity } from '@entities/user';
import { UserShareService } from '@shared/user-shared';

import { OrderProductListDto } from '../models';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepository: Repository<UserEntity>,
    private readonly _userShareService: UserShareService,
    @InjectRepository(OrderEntity)
    private readonly _orderRepository: Repository<OrderEntity>,
    @InjectRepository(CouriersEntity)
    private readonly _couriersRepository: Repository<CouriersEntity>,
  ) {}

  async createOrder(id: string, { data }: any): Promise<OrderEntity> {
    const user = await this._userShareService.findById(id);

    const productList: OrderProductListDto[] = await data.map((item: OrderProductListDto) => {
      return {
        productName: item.productName,
        quantity: item.quantity,
      };
    });

    let lastOrderId = await this._getLastOrderId(this._orderRepository);
    const currentData = new Date().toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric' });
    const couriers = await this._couriersRepository
      .createQueryBuilder('courier')
      .select(['courier.couriersId', 'courier.courierCity', 'courier.deliveryTime'])
      .getMany();

    const chousedCouriers = couriers.filter((courier: CouriersEntity) => courier.courierCity === user.address.city);

    lastOrderId = `${+lastOrderId + 1}`;

    console.log(chousedCouriers);

    const newOrder = {
      orderId: lastOrderId,
      userId: user.userId,
      address: user.address,
      phoneNumber: user.phoneNumber,
      data: currentData,
      courierId: chousedCouriers[0].couriersId,
      deliveryTime: chousedCouriers[0].deliveryTime,
      orderInformation: productList,
    };

    const order = this._orderRepository.create(newOrder);

    return await this._orderRepository.save(order);
  }

  async getAllOrders(): Promise<OrderEntity[]> {
    const order = this._orderRepository.createQueryBuilder('order');

    return await order.getMany();
  }

  async getOrders(req: any): Promise<any> {
    console.log(req);

    return req;
  }

  private async _getLastOrderId(repository: Repository<OrderEntity>): Promise<string> {
    const queryBuilder = repository
      .createQueryBuilder('order')
      .withDeleted()
      .addOrderBy('Order.createdAt', 'DESC')
      .select(['order.orderId']);
    const { orderId } = await queryBuilder.getOne();

    return orderId;
  }
}

// return await this._orderRepository
//   .createQueryBuilder('order')
//   .select(['order.orderId', 'order.userId', 'order.address', 'order.phoneNumber', 'order.data', 'order.orderInformation'])
//   .where('order.orderId = :orderId', { orderId: user.userId })
//   .where('order.userId = :userId', { userId: lastOrderId })
//   .where('order.address = :address', { address: user.address })
//   .where('order.data = :data', {
//     data: currentData,
//   })
//   .where('order.orderInformation = :orderInformation', { orderInformation: productList })
//   .getOne();
