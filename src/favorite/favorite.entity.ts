import { Products } from './../product/product.entity';
import { Account } from './../account/account.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { type } from 'os';

@Entity()
export class Favorite {
    @PrimaryGeneratedColumn()
    id : number

    @OneToOne(type => Account)
    @JoinColumn()
    account : Account;
    accountId : number;

    @OneToOne( type => Products)
    @JoinColumn()
    product : Products;
    productId : number
    
}