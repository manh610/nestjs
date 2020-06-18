import { Favorite } from './favorite.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteController } from './favorite.controller';
import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';

@Module({
    imports : [TypeOrmModule.forFeature([Favorite])],
    providers: [FavoriteService],
    controllers: [FavoriteController],
    exports: [TypeOrmModule]
})
export class FavoriteModule {}
