import { DeepPartial } from 'typeorm';

import { OrderEntity } from '@entities/order';

export const ORDERS_FIXTURES: DeepPartial<OrderEntity>[] = [
  {
    orderId: '1',
    userId: '7',
    address: { city: 'Minsk', street: 'Yakuba Kolosa 10 - 5' },
    phoneNumber: '+375298999788',
    data: '4/23/2023, 10:15 AM',
    courierId: '87B5757',
    deliveryTime: '50',
    orderInformation: [
      { productName: 'Coca-Cola', quantity: 3 },
      { productName: 'Water', quantity: 3 },
      { productName: 'Fanta', quantity: 2 },
      { productName: 'Sprite', quantity: 2 },
    ],
  },
  {
    orderId: '2',
    userId: '4',
    address: { city: 'Minsk', street: 'Nekrasova 100 - 5' },
    phoneNumber: '+375296647217',
    data: '4/23/2023, 10:15 AM',
    courierId: '87B5757',
    deliveryTime: '50',
    orderInformation: [
      { productName: 'Coca-Cola', quantity: 3 },
      { productName: 'Water', quantity: 3 },
      { productName: 'Fanta', quantity: 2 },
      { productName: 'Sprite', quantity: 2 },
    ],
  },
  {
    orderId: '3',
    userId: '8',
    address: { city: 'Minsk', street: 'Nemiha 100 - 5' },
    phoneNumber: '+375296768867',
    data: '4/23/2023, 10:15 AM',
    courierId: '95C8686',
    deliveryTime: '40',
    orderInformation: [
      { productName: 'Coca-Cola', quantity: 3 },
      { productName: 'Water', quantity: 3 },
      { productName: 'Fanta', quantity: 2 },
      { productName: 'Sprite', quantity: 2 },
    ],
  },
];
