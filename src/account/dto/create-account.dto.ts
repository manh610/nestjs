export class CreateAccountDTO {
    id : number;
    readonly username : string;
    readonly password : string;
    deal : [
        { 
            dealId : number;
            bill : number;
        }
    ];
}