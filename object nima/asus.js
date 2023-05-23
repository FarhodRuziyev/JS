// console.log("hello");

// let user = {
//   name: "Jon",
//   surname: "Doe",
//   age: 45,
//   address: {
//     street: "labzak",
//     home: "2",
//   },
//   sayHi() {
//     console.log("hi");
//   },
// };
// console.log(user.surname);
// user.sayHi();
// console.log(user);

// const user = {};
// user.name = "Jon";
// user.age = 30;
// console.log(user);

// let user = {
//   name: "Jon",
//   age: 30,
// };
// // delete user.age;
// console.log(user);

// let user = {
//   name: "Jon",
//   age: 30,
// };
// let ism = "name";

// let userName = user[ism];
// console.log(userName);

// let user = {
//   name: "Jon",
//   age: 30,
//   language: "uzb",
// };

// console.log(user?.["language"]);
// let k = Object.keys(user);
// let v = Object.values(user);
// console.log(k);
// console.log(v);
// let i = Object.entries(user);
// console.log(i);

// let user = {
//   age: 30,
//   name: "Jon",
//   language: "uzb",
// };
// let user2 = user;

// let user3 = { ...user };
// user2.age = 40;
// user.name = "Changed";

// console.log(user, "user");
// console.log(user2, "user2");
// console.log(user3, "user3");
// let animals = ["lion", "rabbit", "bear"];
// let myanimals = [...animals, "tovuq"];
// console.log(animals);
// console.log(myanimals);

// function example(a, ...lorem) {
//   console.log("a", a);
//   console.log(...lorem);
//   return;
// }
// example(2, 3, 5, 6);
// example(2);
// example(2, 3, 5, "lorem", true);

// ===

// let myObj = (obj, ...keys) => {};

// let a = {
//   name: "Jon",
//   age: "22",
//   lang: "uzb",
//   address: "Tashkent",
// };

// myObj(a, "name", "lang"); // {name: 'Jon', lang: 'uzb'}
// myObj(a, "address", "age"); // {age: "22",  address: "Tashkent"}

// let user = {
//   name: "Usera",
//   age: 24,
//   language: "uzbek",
//   address: "Tashkent",
//   isMarried: false,
// };

// let n = "name";
// let oldobj = {
//   name: "asad",
// };
// let newobj = {};
// newobj[n] = oldobj[n];

// let myObj = (obj, ...props) => {
//   let sortedObj = {};
//   for (i of props) {
//     sortedObj[i] = obj[i];
//   }
//   console.log(sortedObj);
// };

// myObj(user, "age", "address", "isMarried");

// let o = {
//   for: "asdfg",
//   in: "nmaidr",
//   3244: "asdad",
//   name: "asad",
//   "full name": "lorem ipsum",
// };
