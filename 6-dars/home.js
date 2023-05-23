// let palindrom = (str) => {
//   let a = 0;
//   let s = str.length;
//   for (let i = 0; i < s; i++) {
//     if (str[i] !== str[s - i - 1]) {
//       a = 1;
//       break;
//     }
//     if (a) {
//       console.log(str, "not palindrom");
//       return false;
//     } else {
//       console.log(str, "palindrom");
//       return true;
//     }
//   }
// };
// palindrom("aziza");
// palindrom("non");
// palindrom("asad");
// palindrom("lorem");

// let isPalindrom = (str) => {
//   let teskari = "";
//   for (i of str) {
//     teskari = i + teskari;
//   }
//   if (teskari == str) {
//     console.log(str, "palindrom");
//   } else {
//     console.log(str, "not palindrom");
//   }
// };

// isPalindrom("asdf");
// isPalindrom("aziza");
// isPalindrom("azia");
// isPalindrom("laziza");
// isPalindrom("non");

// let fizzBazz = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (!(i % 3) && !(i % 5)) {
//       console.log(`${i} fizzbazz`);
//     } else if (!(i % 3)) {
//       console.log(`${i} fizz`);
//     } else if (!(i % 5)) {
//       console.log(`${i} bazz`);
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBazz(6);
// fizzBazz(3);
// fizzBazz(9);
// fizzBazz(15);
// fizzBazz(45);
// fizzBazz(99);
// fizzBazz(100);

// function unli(str) {
//   for (i of str) {
//     if (
//       i == "o" ||
//       i == "i" ||
//       i == "e" ||
//       i == "a" ||
//       i == "u" ||
//       i == "O" ||
//       i == "I" ||
//       i == "E" ||
//       i == "A" ||
//       i == "U"
//     ) {
//       console.log(`${i} unli `);
//     } else if (i == " ") {
//       console.log(`${i}  space `);
//     } else {
//       console.log(`${i} undosh `);
//     }
//   }
// }
// unli("lorem ipsum");

// =====
// function findMax(a) {
//   let maxWord = "";
//   for (i of a) {
//     if (i.length > maxWord.length) {
//       maxWord = i;
//     }
//   }
//   console.log(maxWord);
// }
// let arr = ["lorem", "ipsum", "hello", "boshqa jahon uzb", "world", "uzb = uzb"];
// findMax(arr);
