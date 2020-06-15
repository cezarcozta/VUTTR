/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
  JoinColumn,
} from 'typeorm';

import Tags from '../../../../tags/infra/typeorm/entities/Tags';

@Entity('tools')
class Tools {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => Tags, tags => tags.tools)
  @JoinColumn({ name: 'tags_id' })
  tags: Tags[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Tools;
