////////////////////////////  uy ishi2   //////////////////////////////

///masala1;  Berilgan massiv ichidagi massivlar sonini hisoblash uchun JavaScript dasturini yozing
// Misol:afn    

// let array = [2,8,[6],3,3,5,3,4,[5,4]]
// function func(arr) {
//     let sum = 0
//     for (let index = 0; index < arr.length; index++) {
//         if (Array.isArray(arr[index])) {
//             sum = sum + 1
//         }
//     }
//     console.log(sum);
// }
// func(array)//// ishlandi /////

//  ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
//  ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

// masala2:  Aralash ma'lumotlar turiga ega massivni oladigan JavaScript dasturini yozing va barcha raqamlar yig'indisini hisoblang.
//  Misol:
//  ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
//  ([2, 3, 0, 5, 7, 8, true, false]) -> 25



// let array1 = [2, "11", 3, "a2", "false", 5, 7, 1]
// function func1(arr) {
//     let sum = 0
//     for (let index = 0; index < arr.length; index++) {
//         if (typeof arr[index] == "number") {
//             sum += arr[index]
//         }
//     }
//     console.log(sum);
// }
// func1(array1)

// masala3: Raqamlar massivini oladigan va ikkinchi eng kichik sonni qaytaruvchi JavaScript dasturini yozing.
//  Misol:
//  (4,3,5,7,1) -> 3
//  (2,3,0,5,7,8,-2,-4) -> -2


// let array3 = [4,3,-5,-7,1];
// function myfunc(son) {
//     let number = son.sort((a,b) => a - b);
//     console.log(number[1]); 
// }
// myfunc(array3);

/////////////////////////////  uy ishi3  ////////////////////////// 

/// 1 Masala: Ob'ektni [kalit, qiymat] juftliklari ro'yxatiga aylantirish uchun JavaScript funksiyasini yozing.
// const obj = { year:1990, name: "Asad" };
// function objekt(yil) {
//     let yigindi = Object.entries(obj);
//     console.log(yigindi);
// }
// objekt(obj); ///// ishlandi //////////////////



/// 2 Masala: Ob'ekt xususiyatlarining barcha qiymatlarini olish uchun JavaScript funksiyasini yozing.
// const objk = {
//     name: 'Shohruh',
//     age: 22,
//     lastName: 'Mamadaliyev'
//   };
//   function myfunction(velue) {
//     let qiymat = Object.values(objk);
//     console.log(qiymat);
//   }
//   myfunction(objk);/// ishlandi  //////////////////
  

/// 3 Masala: JavaScript obyektidagi barcha usullarni chop etish uchun JavaScript funksiyasini yozing
/// Sinov ma'lumotlari:
///console.log(all_properties(Array));
/// ["uzunlik", "ism", "argumentlar", "chaqiruvchi", "prototip", "isArray", "kuzatish", "kuzatmaslik"]