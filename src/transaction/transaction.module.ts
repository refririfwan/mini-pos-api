import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { TransactionDetail } from './transaction.detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, TransactionDetail])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
