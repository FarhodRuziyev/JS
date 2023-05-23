/////////////////////////////// masala 1 /////////////////////
 // funksiya key boyicha gruppalab beriwi kerak

//   const array  = [
//    { nomi: "Lorem", manzil: "Chorsu", yosh: "20", guruh: "D" },
//    { nomi: "Ipsum", manzil: "Sergeli", yosh: "22", guruh: "C" },
//    { nomi: "Dolor", manzil: "Yunsobod", yosh: "34", guruh: "B" },
//    { nomi: "Sit", manzil: "Yunsobod", yosh: "22", guruh: "A" },
//    { nomi: "Amet", manzil: "Sergeli", yosh: "20", guruh: "A" },
//  ];


// ? 2 obyektlardan tashkil topgan array bor, shu arraydan 18dan katta yoshlilarni alohida, kichiklarini va yoshi yuqlarni alohida qaytarishi kk 
// let users = [
//     { name: "Lorem", address: "Chorsu", age: "18", group: "D" },
//     { name: "Ipsum", address: "Sergeli", age: "22", group: "C" },
//     { name: "Dolor", address: "Yunsobod", age: "34", group: "B" },
//     { name: "Sit", address: "Yunsobod", age: "12", group: "A" },
//     { name: "Amet", address: "Sergeli", group: "A" },
//   ];
//   const lorem = (array) => {
//     let largeAge = array.filter((item, index, array) => item.age >= 18);
//     console.log(largeAge);
//     let littleAge = array.filter((item, index, array)=> item.age < 18 || item.age == undefined);
//     console.log(littleAge);
//   }
//   lorem (users);//// ishlandi /////////////


// ? 3     array bor, Student bolganlarni va bo'lmaganlarni qaytarishi kk

//   let users = [
//   { name: "Lorem", address: "Chorsu", age: "20", group: "D", isStudent: true },
//   {
//     name: "Ipsum",
//     address: "Sergeli",
//     age: "22",
//     group: "C",
//     isStudent: false,
//   },
//   { name: "Dolor", address: "Yunsobod", age: "34", group: "B" },
//   { name: "Sit", address: "Yunsobod", age: "12", group: "A", isStudent: false },
//   { name: "Amet", address: "Sergeli", age: "10", group: "A", isStudent: true },
// ];
// const student = (array) => {
//     let Studentt = array.filter((item, index, array) => item.isStudent);
//     console.log(Studentt);
    
//     let newStudent = array.filter((item, index, array) => !item.isStudent);
//     console.log(newStudent);
// }
// student(users);/// ishlandi  ////////////////

 // ? 4  array bor, bo'sh joy bogan elementlarini qayrarish

// let arr = ["Buyuk", "ish", "qilishning", "yagona","yo'li - qilayotgan", "ishingizni",
//   "sevishdir.- Stiv Jobs",
// ];
// const ipsum = (array)=>{
//     let boshJoy = array.filter((item, index, array)=> item.includes(' '));
//     console.log(boshJoy);
// }
// ipsum(arr);///// ishlandi ///////

// ? 5  array bor,  berilgan elementlarini ichidan kiritilgan str qatnashgan elementlarini qaytarish

// let array = ["The", "best", "way", "to", "predict", "the", "future", "is", "to", "create", "it",
// ];

// const lorem = (arr, str) =>{
//     let filtered = arr.filter((item, index, array) => item.includes(str));
//     console.log(filtered);
// }
// lorem(array, 'h'); ///// ishlandi /////////////////////////////////////

// 6 masala
// let array = [[2,3], [2,4]];
// let newarray = array.flat();
// console.log(newarray);
// let massiv = [];
// function lorem(arr) {
//     let newArr = []
//    for (let i = 0; i < arr.length -1; i++) {
//         for (let j =  i + 1; j < arr.length; j++) {
//             if (arr[i] ==  arr[j]) {
//                 newArr.push(arr[j])
//             }
//         }
//    }
//    console.log(newArr);
// } 
// lorem(newarray);
























///////////////////////////////////redus bn ishlangan ///////////////////////////////////

// const numbers = [1, -3, 6, 7, 3]
// const myarr = numbers.reduce((a, b) =>{
//     return a + b;
// },0)
// console.log(myarr);

// const alfa = "a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
// let alfaBit = alfa.split(' ')
// function number(son) {
//     for(let i = 1; i < son.length; i++ ){
//         if(alfaBit.includes(str[i])){
//             let index = alfaBit.indexOf(str[i]) +1
//         }
//     }
// }
// number('a, s d');