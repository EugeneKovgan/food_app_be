import { DeepPartial } from 'typeorm';

import { CouriersEntity } from '@entities/couriers';

export const COURIERS_FIXTURES: DeepPartial<CouriersEntity>[] = [
  {
    id: 'bee4c87a-0745-47e5-b05a-566a14144713',
    couriersId: '78A6767',
    name: 'Budi',
    surname: 'Sanjaya',
    email: 'lee@gmail.com',
    phoneNumber: '+375291540044',
    courierCity: 'Brest',
    deliveryTime: '45',
    avatar: {
      id: 'ht88c9a2-11f9-181g-8681-523c5e663e64',
    },
  },
  {
    id: 'e9db95a2-5be0-4e90-9995-1be3da9b32ba',
    couriersId: '87B5757',
    name: 'Andi',
    surname: 'Hermansyah',
    email: 'lee@gmail.com',
    phoneNumber: '+375297840044',
    courierCity: 'Minsk',
    deliveryTime: '50',
    avatar: {
      id: 'ju1e2552-4nc3-4ta8-a16c-7b1c44af107c',
    },
  },
  {
    id: 'de519f7a-a712-4390-9ad2-26b1b0184f25',
    couriersId: '95C8686',
    name: 'Agung',
    surname: 'Prasetya',
    email: 'lee@gmail.com',
    phoneNumber: '+375296840044',
    courierCity: 'Minsk',
    deliveryTime: '40',
    avatar: {
      id: 'ly1e2533-4zc1-4fh8-o26c-7b1c45ad187c',
    },
  },

  {
    id: 'feb9ae8f-e40d-4397-9982-5078a086f40e',
    couriersId: '25C8626',
    name: 'Achmad',
    surname: 'Qomarudin',
    email: 'lee@gmail.com',
    phoneNumber: '+375295640044',
    courierCity: 'Brest',
    deliveryTime: '55',
    avatar: {
      id: 'ki1e9852-8gc3-4ta3-p17c-7b1c22af199a',
    },
  },
];
