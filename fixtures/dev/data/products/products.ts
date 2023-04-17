import { DeepPartial } from 'typeorm';

import { ProductEntity } from '@entities/product';
import { FoodCategory } from '@models/enum';

export const PRODUCTS_FIXTURES: DeepPartial<ProductEntity>[] = [
  {
    id: '7ff9c441-70f0-4635-a4b8-17e0e3503dbd',
    productName: 'Grilled Fish',
    productPrice: 9.5,
    productDescription:
      'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
    productCategory: FoodCategory.fastFood,
    productCookingTime: 15,
    picture: { id: '475b04a4-cc26-4f08-aa43-ca8dc7483a3e' },
  },
  {
    id: '017902bc-d2c8-11ed-afa1-0242ac120002',
    productName: 'Grilled Fish Second',
    productPrice: 8.5,
    productDescription:
      'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
    productCategory: FoodCategory.spicy,
    productCookingTime: 25,
    picture: { id: '394db5cc-005f-45f4-b179-a7f6239039b3' },
  },
  {
    id: '27dbc4b2-d2c8-11ed-afa1-0242ac120002',
    productName: 'Grilled Fish Third',
    productPrice: 7.5,
    productDescription:
      'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
    productCategory: FoodCategory.sour,
    productCookingTime: 35,
    picture: { id: 'd3144c68-84ac-4e27-86b1-6e625cad2b3e' },
  },
  {
    id: '394db5cc-005f-45f4-b179-a7f6239039b3',
    productName: 'Fried Chicken',
    productPrice: 6.5,
    productDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
    productCategory: FoodCategory.fastFood,
    productCookingTime: 20,
    picture: { id: '431556fa-d0a4-4b8b-a4fe-be89bc499a98' },
  },
  {
    id: '4dddb6e8-d2c8-11ed-afa1-0242ac120002',
    productName: 'Fried Chicken Second',
    productPrice: 5.5,
    productDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
    productCategory: FoodCategory.spicy,
    productCookingTime: 30,
    picture: { id: '087527c5-12b9-4fef-b0d9-13a2cd1e7589' },
  },
  {
    id: '557b4ec4-d2c8-11ed-afa1-0242ac120002',
    productName: 'Fried Chicken Third',
    productPrice: 3.5,
    productDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
    productCategory: FoodCategory.salty,
    productCookingTime: 15,
    picture: { id: 'de519f7a-a712-4390-9ad2-26b1b0184f25' },
  },
  {
    id: 'd3144c68-84ac-4e27-86b1-6e625cad2b3e',
    productName: 'Fried Noodle',
    productPrice: 4.5,
    productDescription:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
    productCategory: FoodCategory.fastFood,
    productCookingTime: 15,
    picture: { id: 'feb9ae8f-e40d-4397-9982-5078a086f40e' },
  },
  {
    id: 'b680cb4a-d2c8-11ed-afa1-0242ac120002',
    productName: 'Fried Noodle Second',
    productPrice: 6.5,
    productDescription:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
    productCategory: FoodCategory.fastFood,
    productCookingTime: 25,
    picture: { id: '7c3fee6f-e6e9-42ff-9aee-bb34280b719a' },
  },
  {
    id: 'bb81141a-d2c8-11ed-afa1-0242ac120002',
    productName: 'Fried Noodle Third',
    productPrice: 2.5,
    productDescription:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
    productCategory: FoodCategory.fastFood,
    productCookingTime: 15,
    picture: { id: 'e9db95a2-5be0-4e90-9995-1be3da9b32ba' },
  },
  {
    id: '431556fa-d0a4-4b8b-a4fe-be89bc499a98',
    productName: 'Fried Rice',
    productPrice: 4.5,
    productDescription:
      'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like',
    productCategory: FoodCategory.fastFood,
    productCookingTime: 35,
    picture: { id: 'bee4c87a-0745-47e5-b05a-566a14144713' },
  },
  {
    id: '055cc616-88d5-4ea1-ba6e-23c3aa9769fb',
    productName: 'Fried Rice Second',
    productPrice: 4.5,
    productDescription:
      'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like',
    productCategory: FoodCategory.vegetarian,
    productCookingTime: 35,
    picture: { id: '53ecdcb5-8abb-413d-b6a2-6ec1fd6947ca' },
  },
  {
    id: 'c6ccf9c4-95dc-43b0-bf88-8a9f9fc43ea6',
    productName: 'Fried Rice Third',
    productPrice: 4.5,
    productDescription:
      'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like',
    productCategory: FoodCategory.vegetarian,
    productCookingTime: 45,
    picture: { id: '4fb3c988-2ff3-4c18-b3e3-bc3b4bd78c25' },
  },
  {
    id: '087527c5-12b9-4fef-b0d9-13a2cd1e7589',
    productName: 'Grilled Pork',
    productPrice: 11.5,
    productDescription:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    productCategory: FoodCategory.fastFood,
    productCookingTime: 15,
    picture: { id: '7542839a-e305-428e-b1c1-65ff6ea17943' },
  },
  {
    id: 'bb798a4e-0e81-42d3-a994-fb9e4e4885e9',
    productName: 'Grilled Pork Second',
    productPrice: 11.5,
    productDescription:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    productCategory: FoodCategory.salty,
    productCookingTime: 25,
    picture: { id: '39a0f862-01a7-4230-8d82-07b3d5c0c33f' },
  },
  {
    id: '475b04a4-cc26-4f08-aa43-ca8dc7483a3e',
    productName: 'Grilled Pork Third',
    productPrice: 11.5,
    productDescription:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    productCategory: FoodCategory.spicy,
    productCookingTime: 45,
    picture: { id: 'c537cab6-a867-4c63-8af1-8e1d15f77992' },
  },

  {
    id: '1e0477e5-40fb-417f-b7ee-e112c449bc52',
    productName: 'Coca-Cola',
    productPrice: 2.5,
    productDescription: '0.5 L',
    productCategory: FoodCategory.drink,
    productCookingTime: 0,
    picture: { id: 'ec833a94-e5de-4ba7-ab0b-dd8293fb64d2' },
  },
  {
    id: 'a42910c9-048c-4429-ac8c-e6f454ecf442',
    productName: 'Fanta',
    productPrice: 2.5,
    productDescription: '0.5 L',
    productCategory: FoodCategory.drink,
    productCookingTime: 0,
    picture: { id: 'f0d3e7c5-9b34-4b2c-8d88-989ea714b3fd' },
  },
  {
    id: '69db3484-d84e-45e6-81b9-4cf84cbff6e4',
    productName: 'Sprite',
    productPrice: 2.5,
    productDescription: '0.5 L',
    productCategory: FoodCategory.drink,
    productCookingTime: 0,
    picture: { id: 'd8e42496-af4c-47d4-8602-765d30010b79' },
  },
  {
    id: '32595c6d-5dad-4998-bb3f-827b19c18ee5',
    productName: 'Water',
    productPrice: 1.5,
    productDescription: '0.5 L',
    productCategory: FoodCategory.drink,
    productCookingTime: 0,
    picture: { id: '769a57d4-837a-4493-8b20-f723bd16e807' },
  },
];
