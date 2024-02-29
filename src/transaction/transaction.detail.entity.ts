import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class TransactionDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  transaction_id: number;

  @Column({ type: 'int' })
  product_variant_id: number;

  @Column({ type: 'int' })
  qty: number;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  subtotal: number;

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
