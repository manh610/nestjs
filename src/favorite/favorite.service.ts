import { Favorite } from './favorite.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FavoriteService {
    constructor(
        @InjectRepository(Favorite)
        private favoriteRepo : Repository<Favorite>,
    ) {}
    
    async create(favorite : any): Promise<Favorite> {
        const a = new Favorite();
       a.accountId = favorite.accountId;
       a.productId =favorite.producId;
    return  this.favoriteRepo.save(a);
    }

    async getByAcc(accId : number ) : Promise<any> {
        return await this.favoriteRepo.findOne({
            where : {
                accountId : accId
            },
            relations : ['favorite']
        });
    }
}
 