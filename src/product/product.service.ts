import { Products } from './product.entity';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Products)
        private readonly productReopo : Repository<Products>,
    ){}
    
    async getAll(): Promise<Products[]> {
        return await this.productReopo.find();
    }

    async getOne(id : number): Promise<Products> {
        return await this.productReopo.findOne(id);
    }

    async update(product : Products): Promise<UpdateResult> {
        return await this.productReopo.update(product.id,product);
    }

    async create(product: Products): Promise<Products> {    
        return await this.productReopo.save(product);
    }
}
