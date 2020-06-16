/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';

import ToolsTags from '@modules/tools/infra/typeorm/entities/ToolsTags';

@Entity('tags')
class Tools {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => ToolsTags, tools => tools.tag)
  tools_tags: ToolsTags[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Tools;
