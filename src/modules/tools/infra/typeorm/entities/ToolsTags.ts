/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Tools from './Tools';
import Tags from '../../../../tags/infra/typeorm/entities/Tag';

@Entity('tools_tags')
class ToolsTags {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Tools)
  @JoinColumn({ name: 'tool_id' })
  tool: Tools;

  @ManyToOne(() => Tags)
  @JoinColumn({ name: 'tag_id' })
  tag: Tags;

  @Column()
  tool_id: string;

  @Column()
  tag_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default ToolsTags;
