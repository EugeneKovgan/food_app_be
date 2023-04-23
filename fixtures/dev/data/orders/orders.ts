import { DeepPartial } from 'typeorm';

import { OrderEntity } from '@entities/order';

export const ORDERS_FIXTURES: DeepPartial<OrderEntity>[] = [
  {
    orderId: '1',
    userId: '7',
    address: { city: 'Minsk', street: 'Yakuba Kolosa 10 - 5' },
    phoneNumber: '+375298999788',
    data: '4/23/2023, 10:15 AM',
    orderInformation: [
      { productName: 'Coca-Cola', quantity: 3 },
      { productName: 'Water', quantity: 3 },
      { productName: 'Fanta', quantity: 2 },
      { productName: 'Sprite', quantity: 2 },
    ],
  },
];
