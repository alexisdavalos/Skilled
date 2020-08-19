// Implement your own deep comparison function for objects.
// Let’s limit objects to contain only numbers as properties.
// Hint: use Object.keys() method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//
// As with the problem above, one level deep is OK; however, if you’re feeling adventurous try nested objects.
//

function compareTwoObjects(obj1, obj2) {
  // write your code here
  if (
    Object.keys(obj1).length > Object.keys(obj2).length ||
    Object.keys(obj2).length > Object.keys(obj1).length
  ) {
    return false;
  } else {
    for (const key in obj1) {
      if (obj1[key] === obj2[key]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
}

// // Test cases to verify
// // true
const a = { a: 1, b: 2 };
const b = { a: 1, b: 2 };

console.log(compareTwoObjects(a, b));

// true
const c = { b: 2, a: 1 };
const d = { a: 1, b: 2 };

console.log(compareTwoObjects(c, d));

// false
const e = { b: 100, a: 2 };
const f = { a: 1, b: 2 };

console.log(compareTwoObjects(e, f));

// false
const g = { a: 1, b: 2, c: 3 };
const h = { a: 1, b: 2 };

console.log(compareTwoObjects(g, h));

// false
const i = { a: 1, b: 2 };
const j = { a: 1, b: 2, c: 3 };

console.log(compareTwoObjects(i, j));
