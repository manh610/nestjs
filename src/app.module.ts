import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [
    AccountModule, 
    ProductModule,
    FavoriteModule,
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : 'localhost',
      port : 3306,
      username : 'root',
      password : '',
      database : 'myapp',
      entities : [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize : true,
      autoLoadEntities : true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
