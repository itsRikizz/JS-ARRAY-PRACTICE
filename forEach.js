const number = [9, 6, 8, 10, 12];

// method 1 to print array

// number.forEach(Array);

// function Array() {
//   console.log(number);
// }

// method 2 to print array (inline)

// number.forEach((item) => {
//   console.log(item);
// });

// excercise

// sum of all odd number using forEach

// var sumOfOdd = 0;
// number.forEach((item) => {
//   if (item % 2 != 0) {
//     sumOfOdd += item;
//   }
// });
// console.log(` sumOfOddis ${sumOfOdd}`);

/* Remove the First Odd Number in an Array with forEach()*/

let odd = false;
number.forEach((item, index) => {
  if (item % 2 != 0 && !odd) {
    number.splice(index, 1);
    odd = true;
  }
});
console.log(number);
