import { Injectable, HttpException, Delete } from '@nestjs/common';
import { Repository, Any } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(Account)
        private readonly accountRepo : Repository<Account>,
    ){}

    async getAll() : Promise<Account[]> {
        return await this.accountRepo.find();
    }
    
    async create(account : Account) : Promise<Account> {
        console.log("account create : ",account);
        return await this.accountRepo.save(account);
    }

    async findById(uId : number) : Promise<any> {
        return await this.accountRepo.findOne({
            where: {
                id : uId
            },
        })
    }

    async update(account : Account ) : Promise<UpdateResult> {
        return await this.accountRepo.update(account.id, account);
    }

    async delete(id : number): Promise<DeleteResult> {
        return await this.accountRepo.delete(id);
    }

    async findByUsername( username : string ): Promise<Account> {
        return await this.accountRepo.findOne({
            where : {
                username : username,
            }
        });
    }

    async login( username : string, password : string ) : Promise<any>{
        return await this.findByUsername(username).then( (userInfo) =>{
            if ( userInfo==null ) {
                return null;
            }
            else if ( userInfo.password!=password ) {
                return null;
            }
            else {
                return userInfo;
            }
        })
    }
    
    async findByEmail( email : string ) : Promise<Account> {
        return await this.accountRepo.findOne({
            where : {
                email : email,
            }
        });
    }

    async register(username : string, email : string, password : string ) : Promise<any | number> {
        return await this.findByUsername(username).then(async (userInfo)=> {
            if ( userInfo ) {
                return 0;
            }
            else {
                return await this.findByEmail(email).then( async (acountEmail) => {
                    if ( acountEmail ) {
                        return 1;
                    }
                    else {
                        let acount = new Account;
                        acount.username = username;
                        acount.email = email;
                        acount.password = password;
                        return await this.create(acount);
                    }
                });
            }
        });
    }
}
