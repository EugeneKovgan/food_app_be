/* eslint-disable @typescript-eslint/typedef */
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { AvatarEntity } from '@entities/avatars';
import { BaseEntity } from '@entities/common';

@Entity('couriers')
export class CouriersEntity extends BaseEntity {
  @Column({ nullable: true, default: null, unique: true })
  couriersId: string;

  @Column({ nullable: true, default: null })
  name: string;

  @Column({ nullable: true, default: null })
  surname: string;

  @Column({ nullable: true, default: null })
  email: string;

  @Column({ nullable: true, default: null, unique: true })
  phoneNumber: string;

  @Column({ nullable: true, default: null })
  address: string;

  @Column({ nullable: true, default: null })
  deliveryTime: string;

  @OneToOne(() => AvatarEntity, (avatar) => avatar.id)
  @JoinColumn()
  avatar: AvatarEntity;
}
