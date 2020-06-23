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
    
    async create(favorite : Favorite): Promise<Favorite> {
        return  this.favoriteRepo.save(favorite);
    }

    async getByAcc(accId : number ) : Promise<any> {
        return await this.favoriteRepo.findOne({
            where : {
                accountId : accId
            },
            relations : ['favorite']
        });
    }

    async getAll() : Promise<any> {
        return await this.favoriteRepo.find();
    }
}
