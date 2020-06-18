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
import { Exclude } from 'class-transformer';
import Tools from './Tools';
import Tags from '../../../../tags/infra/typeorm/entities/Tag';

@Entity('tools_tags')
class ToolsTags {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @ManyToOne(() => Tools)
  @JoinColumn({ name: 'tool_id' })
  tool: Tools;

  @ManyToOne(() => Tags)
  @JoinColumn({ name: 'tag_id' })
  tag: Tags;

  @Column()
  @Exclude()
  tool_id: string;

  @Column()
  @Exclude()
  tag_id: string;

  @Column()
  tag_title: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}
export default ToolsTags;
