import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserRole } from './user/user.role.entity';
import { Product } from './product/product.entity';
import { ProductVariant } from './product/pruduct.variant.entity';
import { Category } from './category/category.entity';
import { Transaction } from './transaction/transaction.entity';
import { TransactionDetail } from './transaction/transaction.detail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'database',
      port: 3306,
      username: 'mini_pos_api',
      password: 'mini_pos_api',
      database: 'mini_pos',
      entities: [
        User,
        UserRole,
        Product,
        ProductVariant,
        Category,
        Transaction,
        TransactionDetail,
      ],
      synchronize: true,
    }),
    UserModule,
    CategoryModule,
    ProductModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
