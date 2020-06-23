import { Favorite } from './../favorite/favorite.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne} from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @Column({default:'this is description'})
    description : string;

    @Column()
    price : number;

    @Column()
    status : boolean;
    
    @OneToMany(type => Favorite, favorite => favorite.product)
    favorite : Favorite
    
}
