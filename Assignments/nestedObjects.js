// Write a function called ‘contains' that searches for a value in a nested object. It returns true if the object contains that value.
// Example:
// 
// var spaceXLaunch = { 
//     launch: { 
//       rocket: { 
//         stage: { 
//           core: {
//             coreSerial: ‘B1056',
//             payload: 'CRS-17',
//           }
//         }
//       }
//     }
// }
// 
function contains(obj, value) {
 // your code here

}

contains(spaceXLaunch, ‘B1056’); //true
contains(spaceXLaunch, ‘CRS-17’); //true
contains(spaceXLaunch, ‘abc’); //false
