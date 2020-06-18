import { FavoriteService } from './favorite.service';
import { Favorite } from './favorite.entity';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('favorite')
export class FavoriteController {
    constructor(
        private favoriteService : FavoriteService
    ){}
    
    @Get(':id')
    getByAcc(@Param() params) {
        return this.favoriteService.getByAcc(params.id);
    }
    
    @Post('add')
    create(@Body() favorite : Favorite) {
        return this.favoriteService.create(favorite);
    }


}
