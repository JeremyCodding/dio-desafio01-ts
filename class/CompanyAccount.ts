import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()) {
      this.deposit(value)
      console.log(`Empréstimo de ${value}, feito pela empresa ${this.getName()}`);
      console.log(`O saldo atual é de ${this.getBalance()}`);
    }
  }
}
