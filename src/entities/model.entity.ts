import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  DeleteDateColumn,
} from 'typeorm';

export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  user_created: string;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  user_updated: string;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  user_deleted: string;
}
