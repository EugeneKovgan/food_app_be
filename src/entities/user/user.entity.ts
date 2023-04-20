/* eslint-disable @typescript-eslint/typedef */
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { AvatarEntity } from '@entities/avatars';
import { AddressEntity, BaseEntity } from '@entities/common';

import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  userId: string;

  @Column()
  userName: string;

  @Column({ nullable: true, default: null })
  name: string;

  @Column({ nullable: true, default: null })
  surname: string;

  @Column()
  email: string;

  @Column({
    unique: true,
    nullable: true,
    default: null,
  })
  phoneNumber: string;

  @Column('simple-json', { nullable: true, default: null })
  address: AddressEntity;

  @OneToOne(() => AvatarEntity, (avatar) => avatar.id)
  @JoinColumn()
  avatar: AvatarEntity;

  @Column('simple-array', { nullable: true, default: null })
  cardNumber: string[];

  @Column('simple-array', { nullable: true, default: null })
  favoritesProducts: string[];

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    // this.password = await bcrypt.hash(this.password, Config.get.hashSaltFroBcrypt); //circular dependency entities/index.ts > entities/user/user.entity.ts > core/config/config.ts
    this.password = await bcrypt.hash(this.password, 5);
  }
}
