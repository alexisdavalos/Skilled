//Rework the following code using pure functions as much as possible.

let balance = 1000;

function takeMoneyOut(amount, balance) {
  let newBalance = balance - amount;
  console.log("You have: ", newBalance);
  return newBalance;
}

takeMoneyOut(500, balance);

function addMoney(amount, balance) {
  let newBalance = balance + amount;
  console.log("You have: ", newBalance);
  return newBalance;
}

addMoney(500, balance);

function isEnough(balance) {
  if (balance > 1500) {
    return console.log("You have enough for the trip!");
  } else {
    return console.log("You do not have enough for the trip!");
  }
}

isEnough(balance);

// No side effects produced by functions
console.log("Origin balance unchanged:", balance);
