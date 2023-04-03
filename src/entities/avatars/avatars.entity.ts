import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@entities/common';

@Entity('avatar')
export class Avatar extends BaseEntity {
  @Column({ unique: true })
  id: string;

  @Column()
  avatarPath: string;
}
