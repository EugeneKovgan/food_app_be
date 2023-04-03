import { OmitType } from '@nestjs/swagger';

import { UserEntity } from '@entities/user';

export class UserUpdateDto extends OmitType(UserEntity, ['id', 'password', 'hashPassword', 'email']) {}
