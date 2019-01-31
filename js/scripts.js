// ** BUSINESS LOGIC

function BankAccount(name, balance, deposit, withdrawal) {
  this.name = name;
  this.balance = balance;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

BankAccount.prototype.deposit = function(balance, deposit) {
  return this.balance = this.balance + this.deposit;
}

BankAccount.prototype.withdrawal = function(balance, withdrawal) {
  return this.balance = this.balance - this.withdrawal;
}


// ** UI LOGIC
var newBankAccount = new BankAccount();

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
    var currentBalance = parseFloat($(".accountBalance").val());
    var updateBalance = newBankAccount.deposit(currentBalance, depositAmount);
    console.log(updateBalance);
  });
});
