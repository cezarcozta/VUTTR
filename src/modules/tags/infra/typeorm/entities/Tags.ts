/* eslint-disable camelcase */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Tools from '../../../../tools/infra/typeorm/entities/Tools';

@Entity('tags')
class Tags {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => Tools)
  @JoinColumn({ name: 'tool_id' })
  tools: Tools;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tags;
