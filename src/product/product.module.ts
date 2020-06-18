import { Products } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [TypeOrmModule]
})
export class ProductModule {}
