// Please calculate the ending daily balance, given the list of the following transactions, starting balance and dates.
// What is the complexity of your solution?
// Assume all transactions are debits (meaning you only need to subtract them).
// You only need to provide daily balance for the dates in the dates array.
// Your output should look something like this:

// 1/1/2019 - 675
// 1/2/2019 - 675
// 1/3/2019 - 605
// 1/4/2019 - 605
// 1/5/2019 - 405

const startBalance = 1000;
const dates = ["1/1/2020", "1/2/2020", "1/3/2020", "1/4/2020", "1/5/2020"];

const transactions = [
  {
    date: "1/3/2020",
    amount: 20,
  },
  {
    date: "1/1/2020",
    amount: 100,
  },
  {
    date: "1/3/2020",
    amount: 50,
  },
  {
    date: "1/1/2020",
    amount: 150,
  },
  {
    date: "1/5/2020",
    amount: 200,
  },
  {
    date: "1/1/2020",
    amount: 75,
  },
];

const dailyBalance = (balance, dates) => {
  // variable initialization
  let newBalance = balance;
  let total = {};

  // build total object keys (O(n) time | O(n) space)
  for (key in dates) {
    // initialize keys for all input dates
    if (!total[dates[key]]) {
      total[dates[key]] = 0;
    }
  }

  // loop through transactions and populate all values (O(n) time | O(1) space)
  for (let i = 0; i < transactions.length; i++) {
    // create transaction key if it doesn't exist and add amount
    if (dates.includes(transactions[i].date) && !total[transactions[i].date]) {
      total[transactions[i].date] = transactions[i].amount;
    } else {
      // add amount to existing key
      total[transactions[i].date] += transactions[i].amount;
    }
  }

  // loop through total object and print daily balance (O(n) time | O(1) space)
  for (key in total) {
    // check if money was spent
    if (total[key] > 0) {
      // subtract from balance
      newBalance -= total[key];
      // print key + balance
      console.log(`${key} - ${newBalance}`);
    } else {
      // print key + balance
      console.log(`${key} - ${newBalance}`);
    }
  }

  return newBalance;
};

dailyBalance(startBalance, dates);
