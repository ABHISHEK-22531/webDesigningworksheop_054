// Abstract-like BankAccount class
class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  // Deposit Method
  deposit(amount) {
    this.balance += amount;
    console.log("Amount Deposited: " + amount);
  }

  // Display Details
  displayDetails() {
    console.log("Account Number: " + this.accountNumber);
    console.log("Account Holder Name: " + this.accountHolderName);
    console.log("Balance: " + this.balance);
  }

  // Interest Method
  calculateInterest() {
    console.log("Interest calculation method");
  }
}

// Savings Account
class SavingsAccount extends BankAccount {
  calculateInterest() {
    let interest = this.balance * 0.05;
    console.log("Savings Account Interest: " + interest);
  }
}

// Current Account
class CurrentAccount extends BankAccount {
  calculateInterest() {
    let interest = this.balance * 0.02;
    console.log("Current Account Interest: " + interest);
  }
}

// Creating Objects
const sa = new SavingsAccount(101, "Rahul", 10000);

const ca = new CurrentAccount(102, "Anita", 20000);

console.log("----- Savings Account -----");

sa.deposit(2000);
sa.displayDetails();
sa.calculateInterest();

console.log();

console.log("----- Current Account -----");

ca.deposit(3000);
ca.displayDetails();
ca.calculateInterest();