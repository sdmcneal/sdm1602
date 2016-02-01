import {Account} from './account';

export var ACCOUNTS: Account[] = [
    { "id": 11, "name": "Checking", "type": "Liquid", "isbalancesheet": "Yes", "balance": 1000.0, "balancedate": new Date() },
    { "id": 12, "name": "Savings", "type": "Liquid", "isbalancesheet": "Yes", "balance": 20000.0, "balancedate": new Date() },
    { "id": 13, "name": "Brokerage", "type": "Liquid", "isbalancesheet": "Yes", "balance": 5000.0, "balancedate": new Date() }
];