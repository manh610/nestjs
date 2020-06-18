import { ProductService } from './product.service';
import { Controller, Get, Param, Post, Query, Put, Body } from '@nestjs/common';
import { Products } from './product.entity';

@Controller('product')
export class ProductController {
    constructor (
        private readonly productService : ProductService
    ){}

    @Get()
    getAll(): Promise<Products[]> {
        return this.productService.getAll();
    }

    @Get(':id')
    get(@Param() params ) {
        return this.productService.getOne(params.id);
    }

    @Put()
    update(@Body() product : Products) {
        return this.productService.update(product);
    }

    @Post()
    create(@Body() product : Products ) {
        return this.productService.create(product);
    }
}
