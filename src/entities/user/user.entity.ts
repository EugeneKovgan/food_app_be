/* eslint-disable @typescript-eslint/typedef */
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { Avatar } from '@entities/avatars';
import { BaseEntity } from '@entities/common';

import { Config } from '../../core/config/config';

import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity extends BaseEntity {
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

  @Column({ nullable: true, default: null })
  address: string;

  @OneToOne(() => Avatar, (avatar) => avatar.id)
  @JoinColumn()
  avatar: Avatar;

  @Column('simple-array', { nullable: true, default: null })
  cardNumber: string[];

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, Config.get.hashSaltFroBcrypt);
  }
}
