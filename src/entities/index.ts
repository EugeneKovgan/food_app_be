import { UserEntity } from './user/user.entity';
import { AvatarEntity } from './avatars';
import { AddressEntity } from './common';
import { CouriersEntity } from './couriers';
import { ProductEntity } from './product';
import { ProductImgEntity } from './product-img';

export const ENTITIES = [UserEntity, AddressEntity, CouriersEntity, AvatarEntity, ProductEntity, ProductImgEntity];

export const SUBSCRIBERS = [];
