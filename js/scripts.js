// ** BUSINESS LOGIC

function BankAccount(name, balance, deposit, withdrawal) {
  this.name = name;
  this.balance = balance;
  this.deposit = deposit; //** I don't think these really need to be properties of a bank account object
  this.withdrawal = withdrawal; //** I don't think these really need to be properties of a bank account object
}

BankAccount.prototype.deposit = function(balance, deposit) {
  return this.balance = this.balance + this.deposit;
}

BankAccount.prototype.withdrawal = function(balance, withdrawal) {
  return this.balance = this.balance - this.withdrawal;
}


// ** UI LOGIC
var newBankAccount = new BankAccount(name); //** Why does this work when I put name as the single parameter in the parens and no other parameter?

$(document).ready(function() {
  $("#create-account").submit(function(event){
    event.preventDefault();
    // debugger;
    var name = $("#name").val();
    var initialDeposit = parseFloat($("#initialDeposit").val());
    var newBankAccount = new BankAccount(name,initialDeposit, 0, 0);
    // var newBalance = newBankAccount.balance;
    console.log(newBankAccount);
    $(".account-balance").text(initialDeposit);
  });

  $("#manage-account").submit(function(event){
    event.preventDefault();
    var depositAmount = parseFloat($("#depositAmount").val());
    var withdrawalAmount = parseFloat($("#withdrawalAmount").val());
    var currentBalance = parseFloat($(".accountBalance").val()); //** I don't think this would do anything
    // var currentBalance = newBankAccount.this.balance; //** Cannot read property of balance - how do I get this.balance? What good is it as a property of the object if I can't get it?
    var updateBalance = newBankAccount.deposit(currentBalance, depositAmount); //**newBankAccount.deposit is not a function. How am I supposed to use prototypes?
    console.log(updateBalance);
  });
});
