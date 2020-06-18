/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';

import { Exclude } from 'class-transformer';
import ToolsTags from './ToolsTags';

@Entity('tools')
class Tools {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  description: string;

  @OneToMany(() => ToolsTags, tool => tool.tool, {
    eager: true,
    cascade: true,
  })
  tags: ToolsTags[];

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}
export default Tools;
