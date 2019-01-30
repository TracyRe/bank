// ** BUSINESS LOGIC

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(deposit) {
  return this.balance = this.balance + deposit;
}

BankAccount.prototype.withdrawal = function(withdrawal) {
  return this.balance = this.balance - withdrawal;
}


// ** UI LOGIC

$(document).ready(function() {
  $("#create-account").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var initialDeposit =  parseFloat($("#initialDeposit").val());
    var depositAmount = parseFloat($("#depositAmount").val());
    var withdrawalAmount = parseFloat($("#withdrawalAmount").val());
    var newBankAccount = new BankAccount(name,initialDeposit);
    console.log(newBankAccount);
    var newBalance = newBankAccount.balance;
    $("p.account-balance").text(newBalance);
  // });
  //   $("#manage-account").click(function(event){
  //     event.preventDefault();
  });
});
