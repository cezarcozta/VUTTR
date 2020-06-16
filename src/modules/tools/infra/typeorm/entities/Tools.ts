/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';

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
    cascade: true,
    eager: true,
  })
  tools_tags: ToolsTags[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Tools;
