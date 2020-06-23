import { Favorite } from './../favorite/favorite.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    username : string;

    @Column()
    password : string;
    
    @Column()
    email : string;

    @Column()
    deal : string;

    @OneToMany(type => Favorite, favorite => favorite.account)
    favorite : Favorite
}