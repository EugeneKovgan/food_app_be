import { AvatarModule } from './avatars/avatar.module';
import { CouriersModule } from './couriers/couriers.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

export const APP_MODULES = [UserModule, AvatarModule, ProductModule, CouriersModule, OrderModule];
