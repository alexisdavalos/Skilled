// Given a string like '3+1+2*5*3+1*10' that can only contain numbers and signs + and *, find the answer to the equation without using eval function.
// Make sure to handle error cases like '3+2*' or 3+*2

const MathEquation = (string) => {
  const operators = new Set(["+", "*"]);
  let left = "";
  let right = "";
  let multiplierNumbers = [];
  let sumNumbers = [];
  let multiplierTotal = 0;
  let sumTotal = 0;

  console.log("Original Equation:", string, "\n");
  for (let k = 0; k < string.length; k++) {
    if (validateMultiplication(string, k, operators)) {
      if (string[k] === "*") {
        right = string[k + 1];
        left = string[k - 1];
        // maybe more
        if (k > 2) {
          if (!operators.has(string[k - 2])) {
            left = left + string[k - 2];
          }
        }
        if (!operators.has(string[k + 2])) {
          right = right + string[k + 2];
        }
        console.log("left, right:", left, right);
        if (Number(left) !== multiplierNumbers[multiplierNumbers.length - 1]) {
          // Check if left is base 10
          if (left.length > 1) {
            // swap
            left = left.split("").reverse().join("");
            multiplierNumbers.push(Number(left));
          } else {
            // no need to swap
            multiplierNumbers.push(Number(left));
          }
        }
        multiplierNumbers.push(Number(right));
      } else if (string[k] === "+") {
        // substring multiplier
        multiplierTotal = multiply(multiplierNumbers, multiplierTotal);
        // reset multiplier stack
        multiplierNumbers.length = 0;
      }
    }
  }
  console.log("Multiplication array:", multiplierNumbers);
  // multiply current multiplierTotal
  multiplierTotal += multiply(multiplierNumbers, multiplierTotal);

  // reset temps
  left = "";
  right = "";

  // replace multiplier neighbors to invalidate multiplications
  let newString = string.split("");
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === "*") {
      // Check single digit neighbors
      if (newString[i + 1] !== undefined && !operators.has(newString[i + 1])) {
        newString[i + 1] = "*";
      }
      if (newString[i - 1] !== undefined && !operators.has(newString[i - 1])) {
        newString[i - 1] = "*";
      }
    }
  }
  string = newString.join("");
  console.log(`\n! -- String Modified: [${string}] -- !\n `);

  // Validate Sum

  for (let i = 0; i < string.length; i++) {
    if (validateSum(string, i, operators)) {
      if (string[i] === "+") {
        left = string[i - 1];
        right = string[i + 1];
        // maybe more
        if (i > 2) {
          if (!operators.has(string[i - 2])) {
            left = left + string[i - 2];
          }
        }
        if (!operators.has(string[i + 2])) {
          right = right + string[i + 2];
        }
        console.log("left, right:", left, right);
        if (Number(left) !== sumNumbers[sumNumbers.length - 1]) {
          sumNumbers.push(Number(left));
        }
        sumNumbers.push(Number(right));
      }
    }
  }
  sumTotal += add(sumNumbers, sumTotal);
  console.log("Addition array:", multiplierNumbers);
  // Report before exit
  console.log("\nPre-Exit Report:");
  console.log("Sums array:", sumNumbers);
  console.log("sumTotal:", sumTotal);
  console.log("Multiplication array:", multiplierNumbers);
  console.log("multiplierTotal:", multiplierTotal);
  return sumTotal + multiplierTotal;
};
const add = (array) => {
  let product = 0;
  // multiply all numbers
  for (let i = 0; i < array.length; i++) {
    product = product + array[i];
  }
  return product;
};
// multiply numbers
const multiply = (array) => {
  if (array.length > 0) {
    let product = array[0];
    // multiply all numbers
    for (let i = 1; i < array.length; i++) {
      product = product * array[i];
    }
    return product;
  } else {
    return 0;
  }
};
// validate surrounding neighbors are numbers not operators or undefined
const validateMultiplication = (string, i, operators) => {
  console.log(
    `validating multiplication... { index:${i}, value:${string[i]} }`
  );
  if (
    !operators.has(string[i - 1]) &&
    !operators.has(string[i + 1]) &&
    string[i + 1] !== undefined &&
    string[i - 1] !== undefined &&
    string[i + 1] !== "#" &&
    string[i - 1] !== "#"
  ) {
    return true;
  } else {
    return false;
  }
};
const validateSum = (string, i, operators) => {
  console.log(`validating sum... { index:${i}, value:${string[i]} }`);
  if (
    string[i - 1] !== "*" &&
    string[i + 1] !== "*" &&
    string[i + 1] !== undefined &&
    string[i - 1] !== undefined
  ) {
    return true;
  } else {
    return false;
  }
};

console.log("\nEquation Returned:", MathEquation("3+2*"));

// Test cases:

// console.log(MathEquation("1+21")); // '1+21' -> 22

// console.log(MathEquation("3*12")); // '3*12' -> 36

// console.log(MathEquation("3+1+2*5*3+1*10")); // '3+1+2*5*3+1*10' -> 44

// console.log(MathEquation("1+21*5*2+7")); // '1+21*5*2+7' -> 218

// console.log(MathEquation("3**12")); // '3**12' -> invalid input

// console.log(MathEquation("1+21")); // '3*12+' -> invalid input

// console.log(MathEquation("1+21")); // '3+2*' -> invalid input
