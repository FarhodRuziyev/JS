// console.log("hello world");

// Array metodlari

// let myList = [true, false, "asdf",];

// console.log(myList.length);

//=========== push ==================
// push arrayga oxiridan qo'shadi
// myList.push("newItem");

// console.log(myList);

// ========== unshift=================
// boshidan qo'shadi
// myList.unshift("nimadir");
// console.log(myList);

// ========== pop ===================
// oxiridan o'chirib tashlaydi
// console.clear();
// myList.pop();
// console.log(myList);

// =============== shift ===============
// boshidan o'chirib tashlaydi
// myList.shift();
// console.log(myList);

//================ indexOf==============
// index bo'yicha izlaydi va indexni qaytaradi topa olmasa -1 qaytaradi
// console.log(myList.indexOf('asdf'));


// ==============includes==========
// qiymatni izlaydi boolean qaytaradi
// console.log(myList.includes(false));

// ===============slice ===========

// let myList3 = [0,1,2,3,4,5,6];

// console.log(myList3.slice(1,2));

// ==============splice==============
// 1-argument start 2-argument nechta o'chirish kkligi, 3-argument nima qo'shish kk

// let newList = myList3.splice(1,0,[1,2,3]);
// console.log(myList3);
//============================ Splice =======================
// const months = ["jan", "fevral", "mart", "aprel", "may"]
// const oylar = months.splice(0, 2);
// console.log(oylar);






// ========= forEach ===============
// forEach bu arrayni aylanib chiqish uchun ishlatiladi
// let myList2 = [1,2,3,4,5];
// myList2.forEach((item)=>{
//     console.log(item);
// })

// ============= map ================
// map berilgan arrayni har bitta qiymatini ustida biron amal bajarib, hammasini yangi arrayga qo'shib yangi arrayni qaytaradi
// let myList4 = [0,1,2,3,4,5,6,7,"asdfg"];
// let newList4 = myList4.map((lyuboy)=>{
//     return lyuboy + 5;
// })
// console.log(myList4);
// console.log(newList4);
// ===========================MAPda ISHLASH==========================
// const food = ["olma", "sabzi","nok","baqalajon","banan","apelsin", "kartoshka"]
// const banan = food.map((item) => item + item.toUpperCase() );
// console.log(banan);

//=============== filter ==============

// let myStr = ["as","bs","asd"];

// let newFilter = myStr.filter((item)=>{
//     return item.includes("s");
// })
// // console.log(myList4);
// console.log(newFilter);



// indexOf

// console.log([1,2,3,4].indexOf(3));
// console.clear();
// let n = 12


// function myIndexOf(arr, value){
//     for (const i in arr) {
        
//        if (arr[i] == value) {
//         return i
//        }
//     }
//     return -1
// }

// console.log(myIndexOf([1,2,3,4], 3));

//============================FILTERDA ISHLASH =====================
// const food = ["olma", "sabzi","nok","baqalajon","banan","apelsin", "kartoshka"]
// const fruits = food.filter((item) => item.type === "fruit");
// console.log(fruits);

// ============ some =============


// let myList5 = [1,2,3,4,5,6];

// let mySome = myList5.some((item)=>{
//     return item > 2
// });
// console.log(mySome);

// ============= every =============
// let myEvery = myList5.every((item)=>{
//     return item > 0
// });
// console.log(myEvery);

// let nimadir = [1,2,3,4, "12"];
// // some
// console.clear();

// let newNimadir = nimadir.some((item)=>{
//     // return typeof(item) === typeof("asdfgh"); bu to'g'ri yo'l
//     // return isNaN(item); 
// })
// console.log(newNimadir);

// console.clear();

// let myList6 = [12,3,4,5,6,[1,2,4,[2,3,[3,4]]]];
// console.log(myList6.flat(Infinity));
// console.log(...myList6.flat(Infinity));
// spread oparatori
// console.log(Math.max(...myList6.flat(Infinity)));
// console.log(Math.max(1,2,3,4,5));



// function myMax(...numbers){
//     console.log(numbers);
//     let max = numbers[0];
//     for (const i in numbers) {
//         if (numbers[i] > max) max = numbers[i]
//     }
//     return max
// }
// console.log(myMax(-2,-3,-5));

// function isPalindrome(str){
//     return str === str.split("").reverse().join("");
// }

// function mySplit(str){
//     let newArr = [];
//     for (const i in str) {
//         newArr.push(str[i]);
//     }
//     return newArr;
// }
// console.log(mySplit("Aaaabbbb"));

// console.log("qwer".split("").reverse().join(""));

// console.log(isPalindrome("aaaaaaaaaaaaa"));

// let arr = [1,2,3,4];
// let a = 12;
// a=13
// arr[2] = "o'chib ketti";
// let newarr = [1,2,3,...arr]
// console.log(newarr);

//=========================== from =====================
// const str = "12345";
// const numbers = Array.from(str); 
// console.log(numbers);

// const numbers = Array.from(str, (element) => Number(element));
// console.log(numbers);

//============================entries====================
// const food = ["olma", "sabzi","nok","baqalajon","banan","apelsin", "kartoshka"]
// const foodEntries = food.entries()

// for(let i of foodEntries){
//     console.log(i);
// };
