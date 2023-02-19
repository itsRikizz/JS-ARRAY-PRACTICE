// const numbers = [1, 2, 3, 4, 5];

// const doubleNumber = numbers.map(double);

// function double(val, idx, arr) {
//   return val * idx;
// }

// console.log(doubleNumber);

/* Calculate the total value of each products */

const products = [
  {
    name: "Laptop",
    price: 30000,
    count: 10,
  },
  {
    name: "Tables",
    price: 10000,
    count: 15,
  },
  {
    name: "Mobile",
    price: 15000,
    count: 90,
  },
  {
    name: "Speakers",
    price: 9000,
    count: 17,
  },
];

const totalPriceOfItems = products.map((val) => {
  return {
    name: val.name,
    Totalprice: val.price * val.count,
  };
});

console.log(totalPriceOfItems);

console.log(`The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
`);
