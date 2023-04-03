import { DeepPartial } from 'typeorm';

import { UserEntity } from '@entities/user';
import { DEFAULT_PASSWORD } from '@fixtures/models';

export const USERS_FIXTURES: DeepPartial<UserEntity>[] = [
  {
    id: '53ecdcb5-8abb-413d-b6a2-6ec1fd6947ca',
    userName: 'Bret',
    name: 'Leanne',
    surname: 'Graham',
    email: 'Sincere@april.biz',
    phoneNumber: '+375297653484',
    address: 'Gwenborough',
    avatar: 'c63e3ece-e06c-4c71-836e-515cb188e33b',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
  {
    id: '4fb3c988-2ff3-4c18-b3e3-bc3b4bd78c25',
    userName: 'Antonette',
    name: 'Ervin',
    surname: 'Howell',
    email: 'Shanna@melissa.tv',
    phoneNumber: '+375297653474',
    address: 'Wisokyburgh',
    avatar: 'f24ff68b-fc3f-4647-8be9-0ea4cc0d4e25',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
  {
    id: '7542839a-e305-428e-b1c1-65ff6ea17943',
    userName: 'Samantha',
    name: 'Clementine',
    surname: 'Bauch',
    email: 'Nathan@yesenia.net',
    phoneNumber: '+375295476781',
    address: 'McKenziehaven',
    avatar: 'e7009459-2bb1-45f2-bbbe-f9bb2dbd7ead',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
  {
    id: '39a0f862-01a7-4230-8d82-07b3d5c0c33f',
    userName: 'Karianne',
    name: 'Patricia',
    surname: 'Lebsack',
    email: 'Julianne.OConner@kory.org',
    phoneNumber: '+375296647217',
    address: 'South Elvis',
    avatar: 'f616020d-1543-4f29-b947-e83aaa6811ca',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
  {
    id: 'c2277a4f-9a7b-433e-9268-0aaf76775665',
    userName: 'Kamren',
    name: 'Chelsey',
    surname: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phoneNumber: '+375299693969',
    address: 'Roscoeview',
    avatar: '5780ebef-8760-4be2-b360-13cf7ee20782',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
  {
    id: '52bccf2d-3669-4535-aa20-dd2a8af1a804',
    userName: 'Leopoldo_Corkery',
    name: 'Leopoldo',
    surname: 'Corkery',
    email: 'Karley_Dach@jasper.info',
    phoneNumber: '+375293334567',
    address: 'South Christy',
    avatar: 'cb3f7a6a-de73-4ca8-926e-b37d5bdfb531',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
  {
    id: '0d5d7db9-3448-4673-9088-ca8d0761c87f',
    userName: 'Elwyn.Skiles',
    name: 'Kurtis',
    surname: 'Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    phoneNumber: '+375298999788',
    address: 'Howemouth',
    avatar: '8e19d8ec-c40d-4008-ac9c-1dd6674daa0b',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
  {
    id: '4e2b2c14-8305-454e-a08d-a9391055f2dc',
    userName: 'Maxime_Nienow',
    name: 'Nichola',
    surname: 'Runolfsdottir',
    email: 'Sherwood@rosamond.me',
    phoneNumber: '+375296768867',
    address: 'Aliyaview',
    avatar: '6565fc4b-5b66-4e03-a36f-40989a1f8788',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
  {
    id: '84ef1a6e-8cbb-411e-882c-edcff9a5a127',
    userName: 'Delphine',
    name: 'Glenna',
    surname: 'Reichert',
    email: 'Chaim_McDermott@dana.io',
    phoneNumber: '+375299809800',
    address: 'Bartholomebury',
    avatar: 'a527eab2-9dea-4c9c-a991-1377f5d66a17',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
  {
    id: '4e7fada0-3ee3-48d2-a6d0-058e709944ad',
    userName: 'Moriah.Stanton',
    name: 'Clementina',
    surname: 'DuBuque',
    email: 'Rey.Padberg@karina.biz',
    phoneNumber: '+375293340044',
    address: 'Lebsackbury',
    avatar: '1723b058-c217-4949-88b6-f98eb82be186',
    cardNumber: ['1234123412341234'],
    password: DEFAULT_PASSWORD,
  },
];