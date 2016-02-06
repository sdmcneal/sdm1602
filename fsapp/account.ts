export class Account {
    public id: number;
    public name: string;
    public type: string;
    public isbalancesheet: string;
    public balance: number;
    public balancedate: Date;
    
    constructor(
        _id:number,
        _name:string,
        _type:string,
        _isbalancesheet:string,
        _balance:number,
        _balancedate:Date) {
            this.id = _id;
            this.name = _name;
            this.type = _type;
            this.isbalancesheet = _isbalancesheet;
            this.balance = _balance;
            this.balancedate = _balancedate;
        }
}