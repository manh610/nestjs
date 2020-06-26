import { Favorite } from './favorite.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 

@Injectable()
export class FavoriteService {
    constructor(
        @InjectRepository(Favorite)
        private favoriteRepo : Repository<Favorite>,
    ) {}
    

    async create(favorite : Favorite): Promise<Favorite> {
        return this.favoriteRepo.save(favorite); 
    }


    async getByAcc(accId : number ) : Promise<any> {
        return await this.favoriteRepo.find({
            where : {
                account : accId
            },
            relations : ['product']
        });
    }

    async getAll() : Promise<any> {
        return await this.favoriteRepo.find({relations: ['account','product']});
    }

    async delete(id : number) : Promise<DeleteResult> {
        return await this.favoriteRepo.delete(id);
    }
}
