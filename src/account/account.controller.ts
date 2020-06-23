import { Account } from './account.entity';
import { AccountService } from './account.service';
import { Controller, Param, Post, Body, Delete, Put, Get } from '@nestjs/common';

@Controller('account')
export class AccountController {
    constructor (
        private accountService : AccountService
    ) {}

    @Post()
    create(@Body() account : Account) {
        return this.accountService.create(account);
    }

    // @Get()
    // findAll(){
    //     return this.accountService.getAll();
    // }

    @Put(':id')
    update(@Param('id')id,@Body() account:Account) {
        return this.accountService.update(id, account);
    }

    @Post('login')
    login(@Body() account:Account ) {
        return this.accountService.login(account.username,account.password);
    }

    @Post('register')
    register(@Body() acount:Account) {
        return this.accountService.register(acount.username,acount.email,acount.password);
    }
}
