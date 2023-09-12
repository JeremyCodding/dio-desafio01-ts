import { DioAccount } from "./DioAccount";

export class BiggerDepositAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    betterDeposit = (value: number) => {
        const depositedValue = value + 10
        if(this.validateStatus()) {
            this.deposit(depositedValue)
            console.log(`Depósito de ${depositedValue}, feito pela empresa ${this.getName()}`);
            console.log(`O saldo atual é de ${this.getBalance()}`);
          }
    };
}