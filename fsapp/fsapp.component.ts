import {Component} from 'angular2/core';
import {Account} from './account';
import {AccountService} from './account.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'fs-app',
    template:`
  <h1>{{title}}</h1>
  <h2>My Accounts</h2>
  <ul class="heroes">
    <li *ngFor="#account of accounts"
      [class.selected]="account === selectedAccount"
      (click)="onSelect(account)">
      <span class="badge">{{account.id}}</span> {{account.name}}
    </li>
  </ul>
`,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `],
    providers: [AccountService]
})
export class FSAppComponent implements OnInit {
    public title = 'Financial Forecaster 2';
    public accounts: Account[];
    public selectedAccount: Account;
    
    onSelect(account: Account) { this.selectedAccount = account; }
    
    constructor(private _accountService: AccountService) { }

    getAccounts() {
        this._accountService.getAccounts().then(accounts => this.accounts = accounts );
    }
    ngOnInit() {
        this.getAccounts();
    }
}