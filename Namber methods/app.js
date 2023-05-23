// console.log("hello world");

// Number methods
// let x = "12";
// console.log(isNaN(x));
// let a = "12.9px12";
// console.log(a, "a");
// console.log(parseInt(a), "parseint");
// console.log(parseFloat(a), "parseFloat");
// let a = 12.4999999999;
// console.log(Math.ceil(a), "ceil");
// console.log(Math.floor(a), "floor");
// console.log(Math.round(a), "round");

// let rundomNum = Math.random() * 3;
// console.log(Math.floor(rundomNum));

/////////////////////////////////////////////////////////////////////////
// let v = ["15.5", "1a", NaN, "34.6px", 45, "3rem", "hello 9", false, {}];

// function nums(arr) {
//   for (i of arr) {
//     let b = parseFloat(i);
//     if (!isNaN(b)) {
//       console.log(b);
//     }
//   }
// }
// nums(v);
/////////////////////////////////////////////////
// qogoz = 0
// qaychi = 1
// quduq = 2
// let game = (user) => {
//   let komp = Math.floor(Math.random() * 3);
//   console.log(komp);
//   console.log(user);
//   if (
//     (user == "qaychi" && komp == 0) ||
//     (user == "qogoz" && komp == 2) ||
//     (user == "quduq" && komp == 1)
//   ) {
//     console.log("user win");
//   } else if (
//     (user == "qaychi" && komp == 1) ||
//     (user == "qogoz" && komp == 0) ||
//     (user == "quduq" && komp == 2)
//   ) {
//     console.log("tie");
//   } else {
//     console.log("komp win");
//   }
// };
// game("qaychi");
// game("qogoz");

// console.log("lorem");

// function sortUsers(arr) {
//   let a = arr.sort((x, y) => {
//     if (x.name > y.name) {
//       return 1;
//     } else if (x.name < y.name) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   console.log(a);
// }
// sortUsers(users);

// function sortUsers(arr, k) {
//   let a = arr.sort((x, y) => {
//     if (x[k] > y[k]) {
//       return 1;
//     } else if (x[k] < y[k]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   console.log(a);
// }
// sortUsers(users, "name");

// function checkEmail(str) {
//     let k = str.indexOf("@");
//     let t = str.indexOf(".");
//     if (k + 1 < t && t < str.length && k !== 0) {
//       console.log(true);
//     }
//     console.log(false);
//   }
  
  // checkEmail("lorem@gmailcom.kj");
  // checkEmail("lorem@gmail,com");
  // checkEmail("@loremgmail.com");
  // checkEmail("lorem@.gmail.com");
  // checkEmail("loremgmail.com");
  // checkEmail("lorem.ipsum@gmail.com");
//   let myArr = [3, 32, 42, 4, 543, 45, 4354, 345343, 543, 543, 23454];
//   function calcOdd(arr) {
//     let summ = 0;
//     for (i of arr) {
//       if (i % 2) {
//         summ = summ + i ** 2;
//       }
//     }
//     console.log(summ);
//     return summ;
//   }
  // calcOdd(myArr);
  
  // const users = [
  //   { name: "Ben", year: 1995, address: "Tashkent", age:23 },
  //   { name: "Jam", year: 1990, address: "Andijan" },
  //   { name: "Monica", year: 2000, address: "Samarqand" },
  //   { name: "Alex", year: 1470, address: "Berlin" },
  //   { name: "Bruno", year: 2020, address: "Dubay" },
  // ];
  
//   const objAge = (arr) => {
//     let users = [];
//     for (i of arr) {
//       users.push({ ...i, age: 2023 - i.year });
//     }
//     console.log(users);
//   };
//   objAge(users);
  
//   function longStr(str) {
//     let myArr = str.split(" ");
//     let sorted = myArr.filter((w) => w.length >= 5);
//     console.log(sorted);
//     return sorted;
//   }
//   let word = "hi Lorem ipsum dolor sit amet";
  // longStr(word);
  
//   const users = [
//     { name: "Ben", year: 1995, address: "Tashkent" },
//     { name: "Jam", year: 1990, address: "Andijan" },
//     { name: "Monica", year: 2000, address: "Samarqand" },
//     { name: "Alex", year: 1470, address: "Berlin" },
//     { name: "Bruno", year: 2020, address: "Dubay" },
//   ];
//   function oldestPrson(arr) {
//     let oldest = arr.sort((x, y) => {
//       if (x.year > y.year) {
//         return 1;
//       } else if (x.year < y.year) {
//         return -1;
//       } else {
//         return 0;
//       }
//     });
//     console.log(oldest[0].name);
//   }
//   oldestPrson(users);
