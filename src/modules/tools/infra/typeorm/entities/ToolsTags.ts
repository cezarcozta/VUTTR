/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity('tools_tags')
class Tools {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  tool_id: string;

  @Column('uuid')
  tag_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Tools;
