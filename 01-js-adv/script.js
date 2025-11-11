// --------Array

let arr = [1, 2, 3, 4, 5];

// for each loop

// arr.forEach((val) => {
//   console.log(val + " hello");
// });

//map function

// const doubled = arr.map((val) => {
//   return val * 2;
// });
// console.log(doubled);

// filter function
// const three = arr.filter((val) => {
//   if (val >= 3) {
//     return true;
//   } else return false;
// });
// console.log(three);

// find function

// const found = arr.find((val) => {
//   if (val === 2) return val;
// });
// console.log(found);

//indexOf  function

// const index = arr.indexOf(2)
// console.log(index)

//--------Object
// key-value pairs

// const obj = {
//   name: "Vipul",
//   age: 24,
//   rollNo: 18,
// };
// Object.freeze(obj);
// obj.age = 23;
// console.log(obj);

// ---------async js

const animals = async () => {
  const blob = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const result = await blob.json();
  console.log(result.title);
};
animals();
