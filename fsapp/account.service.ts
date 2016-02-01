import {Account} from './account';
import {ACCOUNTS} from './mock-accounts';
import {Injectable} from 'angular2/core';

@Injectable()
export class AccountService {
    getAccounts() {
        return Promise.resolve(ACCOUNTS);
    }
}