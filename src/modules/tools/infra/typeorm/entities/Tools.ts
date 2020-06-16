/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import Tags from '../../../../tags/infra/typeorm/entities/Tag';

@Entity('tools')
class Tools {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @ManyToMany(() => Tags)
  @JoinTable()
  tags: Tags[];

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Tools;
