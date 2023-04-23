import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OrderProductListEntity } from '@entities/common';
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

    const productList: OrderProductListDto[] = await data.map((item: OrderProductListEntity) => {
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

    const sortCouriersByTime = chousedCouriers.sort(
      (a: CouriersEntity, b: CouriersEntity) => +a.deliveryTime - +b.deliveryTime,
    );

    lastOrderId = `${+lastOrderId + 1}`;

    const newOrder = {
      orderId: lastOrderId,
      userId: user,
      address: user.address,
      phoneNumber: user.phoneNumber,
      data: currentData,
      courierId: sortCouriersByTime[0].couriersId,
      deliveryTime: sortCouriersByTime[0].deliveryTime,
      orderInformation: productList,
    };

    const order = this._orderRepository.create(newOrder);

    return await this._orderRepository.save(order);
  }

  async getAllOrders(): Promise<OrderEntity[]> {
    const order = this._orderRepository.createQueryBuilder('order').leftJoinAndSelect('order.userId', 'user');

    return await order.getMany();
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
