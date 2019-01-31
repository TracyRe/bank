// ** BUSINESS LOGIC

function BankAccount() {
  this.name = name;
  this.balance = 0;
  // this.deposit = deposit; //** I don't think these really need to be properties of a bank account object
  // this.withdrawal = withdrawal; //** I don't think these really need to be properties of a bank account object
  // ** when I comment these out, I get undefined function for the deposit prototype when I console log it, which is better than eror: newBankAccount.deposit is not a function when these were part of the constructor
}

BankAccount.prototype.deposit = function(balance, deposit) {
  return this.balance = this.balance + this.deposit;
}

BankAccount.prototype.withdrawal = function(balance, withdrawal) {
  return this.balance = this.balance - this.withdrawal;
}


// ** UI LOGIC
// var newBankAccount = new BankAccount(name); //** Why does this work when I put name as the single parameter in the parens and no other parameter?

$(document).ready(function() {
  var newBankAccount = new BankAccount();

  $("#create-account").submit(function(event){
    event.preventDefault();
    // debugger;
    var name = $("#name").val();
    var initialDeposit = parseFloat($("#initialDeposit").val());
    newBankAccount.name = name;
    newBankAccount.balance = initialDeposit;
    console.log(newBankAccount);
    $(".account-balance").text(initialDeposit);

  });

  $("#manage-account").submit(function(event){
    event.preventDefault();
    var depositAmount = parseFloat($("#depositAmount").val());
    var withdrawalAmount = parseFloat($("#withdrawalAmount").val());
    var currentBalance = parseFloat($(".account-balance").val()); //** I don't think this would do anything
    // var currentBalance = newBankAccount.this.balance; //** Cannot read property of balance - how do I get this.balance? What good is it as a property of the object if I can't get it?
    // balance = currentBalance; //** this did not help when I used it to replace 'currentBalance' as the argument in the line below
    console.log(newBankAccount.deposit(currentBalance, depositAmount)); //**newBankAccount.deposit is not a function. How am I supposed to use prototypes?
    console.log(currentBalance);
    console.log(newBankAccount.balance);
  });
});
