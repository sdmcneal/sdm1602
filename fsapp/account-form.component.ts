import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Account} from './account';

@Component({
    selector: 'account-form',
    templateUrl: 'fsapp/account-form.component.html',
    inputs: ['account']
})

export class AccountFormComponent {
    public account: Account;
    public balanceText: string;

    types = ['Liquid','Fixed Asset','Non-reporting'];

    submitted = false;
    
    onSubmit() {this.submitted = true;}
    
    active = true;
    
    newAccount() {
        this.account=new Account(99,"Account Name","Liquid","Yes",0.0,new Date());
        this.active=false;
        setTimeout(()=>this.active=true,0);
    }
    get diagnostic() { return JSON.stringify(this.account) };
}