import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Account} from './account';

@Component({
    selector: 'account-form',
    templateUrl: 'fsapp/account-form.component.html'
})

export class AccountFormComponent {
    types = ['Liquid','Fixed Asset','Non-reporting'];
    
    model = new Account(99,"Account Name","Liquid","Yes",0.0,new Date());
    
    submitted = false;
    
    onSubmit() {this.submitted = true;}
    
    active = true;
    
    newAccount() {
        this.model=new Account(99,"Account Name","Liquid","Yes",0.0,new Date());
        this.active=false;
        setTimeout(()=>this.active=true,0);
    }
    get diagnostic() { return JSON.stringify(this.model) };
}