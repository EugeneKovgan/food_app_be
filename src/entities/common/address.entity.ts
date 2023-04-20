import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity('address')
export class AddressEntity extends BaseEntity {
  @Column({ nullable: true, default: '' })
  city: string;

  @Column({ nullable: true, default: '' })
  street: string;
}
