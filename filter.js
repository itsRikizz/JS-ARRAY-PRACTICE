// const people = [
//   {
//     Name: "Sanmay",
//     age: 25,
//   },
//   {
//     Name: "Subha",
//     age: 23,
//   },
//   {
//     Name: "Rahul",
//     age: 15,
//   },
//   {
//     Name: "Shouvik",
//     age: 17,
//   },
// ];

// const adults = people.filter(adult);

// function adult(val) {
//   return val.age >= 18;
// }

// console.log(adults);

/* Remove duplicates */

const numbers = [1, 2, 2, 4, 5, 6, 7, 1, 7, 4];

const nums = numbers.filter((items, idx, arr) => {
  return arr.indexOf(items) === idx;
});

console.log(nums);
