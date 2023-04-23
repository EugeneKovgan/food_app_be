import { DeepPartial } from 'typeorm';

import { OrderEntity } from '@entities/order';

export const ORDERS_FIXTURES: DeepPartial<OrderEntity>[] = [
  {
    id: 'f3a86e09-c442-4aa2-8706-3f52c84fb112',
    orderId: '1',
    userId: { id: '0d5d7db9-3448-4673-9088-ca8d0761c87f' },
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
    id: '4c923e08-0952-456d-9ee3-4f56c0cc1977',
    orderId: '2',
    userId: { id: '4fb3c988-2ff3-4c18-b3e3-bc3b4bd78c25' },
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
    id: '73f7403c-edb6-4679-8397-e5567bb2cbcc',
    orderId: '3',
    userId: { id: '7542839a-e305-428e-b1c1-65ff6ea17943' },
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
