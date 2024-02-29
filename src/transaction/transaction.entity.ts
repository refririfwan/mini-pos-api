import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  transaction_no: number;

  @Column({ type: 'int' })
  total_amount: number;

  @Column({ type: 'boolean' })
  active: boolean;

  @Column({ type: 'int' })
  created_user: number;

  @Column({ type: 'int' })
  updated_user: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  created_date: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  updated_date: Date;
}
