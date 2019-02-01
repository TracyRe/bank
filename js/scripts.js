// ** BUSINESS LOGIC

function BankAccount() {
  this.name = name;
  this.balance = 0;
  // this.deposit = deposit; //** I don't think these really need to be properties of a bank account object
  // this.withdrawal = withdrawal; //** I don't think these really need to be properties of a bank account object
  // ** when I comment these out, I get undefined function for the deposit prototype when I console log it, which is better than error: newBankAccount.deposit is not a function when these were part of the constructor
}

BankAccount.prototype.deposit = function(balance, deposit) {
this.balance += deposit;
return this.balance;
}

BankAccount.prototype.withdrawal = function(balance, withdrawal) {
  this.balance -= withdrawal;
  return this.balance;
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
    console.log(newBankAccount.balance);
    $(".account-balance").text(initialDeposit);

  });

  $("#deposit-funds").submit(function(event){
    event.preventDefault();
    // debugger;
    var depositAmount = parseFloat($("#deposit").val());
    // var currentBalance = parseInt($(".account-balance").val()); //** no good - can't get value from .account-balance
    var currentBalance = newBankAccount.balance; //** Am finally getting newBankAccount.balance stored in var currentBalance
    console.log(currentBalance);
    // this.deposit = depositAmount; //** this is meaningless -- this.deposit is not a thing, does not refer back to BankAccount object
    currentBalance = newBankAccount.deposit(currentBalance, depositAmount);

    console.log(currentBalance);
    $("input#deposit").val("");
    $(".account-balance").text(currentBalance);

    // console.log(newBankAccount.deposit(currentBalance, depositAmount)); //**newBankAccount.deposit is not a function. How am I supposed to use prototypes?
    // console.log($(".account-balance").val()); // no good, can't get value from .account-balance
    // console.log(parseInt($(".account-balance").val()));
    // console.log(newBankAccount.balance);
  });


  $("#withdraw-funds").submit(function(event){
    event.preventDefault();

    var withdrawalAmount = parseFloat($("#withdrawal").val());
    var currentBalance = newBankAccount.balance;
    console.log(currentBalance);

    currentBalance = newBankAccount.withdrawal(currentBalance, withdrawalAmount);

    console.log(currentBalance);
    $(".account-balance").text(currentBalance);
    $("input#withdrawal").val("");

  });
});
