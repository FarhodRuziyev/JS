//!
//? 1 function 3ta son qabul qiladi, yigindisi katta bugan 2tasini qaytaradi,

// function namber(a, b, c) {
//     if(a < b && a < c){
//         console.log(b, c);
//     }
//     else if(b < a && b < c){
//         console.log(a, c);
//     }
//     else {
//         console.log(b, a);
//     }
// }
// namber(10, 23, 45); ////////// ishlandi  
//!
//?1 function ga oyning tartib raqami kiritiladi, qaysi faslga tegishliligi aniqlansin
// let oy = prompt('Qaysi oyligini kiriting');
// function month(a) {
//     if(a == 1 || a == 2 || a == 12){
//         console.log("Qish fasliga tegishli", a);
//     }else if(a == 3 || a == 4 || a == 5){
//       console.log('Bahor fasliga tegishli', a)
//     }else if(a == 6 || a == 7 || a == 8){
//         console.log('Yoz fasliga tegishli', a);
//     }else if(a == 9 || a == 10 || a == 11){
//         console.log('Kuz fasliga tegishli', a);
//     }else{
//       console.log('Bunaqa oy yoq ', a)
//     }
// }
// month(oy); //////////////////// ishlandi

//?2 function ga 1---7 gacga son kiritiladi, haftaning qaysi kunligin aniqlansin
// let kun = prompt('hafta kunini kiriting')
// function hafta(a) {
//     if(a == 1){
//       console.log('Dushanba', a)
//     }else if(a == 2){
//       console.log('Seshanba', a)
//     }else if(a == 3){
//         console.log('Chorshanba', a)
//     }else if(a == 4){
//         console.log('Payshanba', a)
//     }else if(a == 5){
//         console.log('Juma', a)
//     }else if(a == 6){
//         console.log('Shanba', a)
//     }else if(a == 7){
//         console.log('Yakshanba', a)
//     }else{
//       console.log('Bunaqa hafta kuni yoq', a)
//     }
// }
// hafta(kun);

//?3 10dan 30gacha son kiritilganda sozda qaytaruvchi function yozilsin
// let son = prompt('son kiriting');
// function namber(num) {
//     let a = 1;      let on = 10;
//     let b = 2;      let yigirma = 20;
//     let d = 3;      let ottiz = 30;
//     let e = 4;      let qirq = 40;
//     let f = 5;      let ellik = 50;
//     let g = 6;      let oltmish = 60;
//     let h = 7;      let yetmish = 70;
//     let i = 8;      let sakson = 80;
//     let j = 9;      let toqson = 90;
//                     let yuz = 100;
//     if(0 < num && 10 > num){
//         if(num == a){
//         console.log('bir');
//         }else if(num == b){
//         console.log('ikki');
//         }else if(num == d){
//             console.log('uch');
//         }else if(num == e){
//             console.log('tort');
//         }else if(num == f){
//             console.log('besh');
//         }else if(num == g){
//             console.log('olti');
//         }else if(num == h){
//             console.log('yetti');
//         }else if(num == i){
//             console.log('sakkiz');
//         }else if(num == j){
//             console.log('toqqiz');
//         }
//     }else if(num > 9 && num < 21){
//         if(num == on){
//             console.log('o\'n');
//         }else if(num == on + a){
//           console.log('o\'n bir')
//         }else if(num == on + b){
//             console.log('o\'n ikki')
//         }else if(num == on + d){
//             console.log('o\'n uch')
//         }else if(num == on + e){
//             console.log('o\'n tort')
//         }else if(num == on + f){
//             console.log('o\'n besh')
//         }else if(num == on + g){
//             console.log('o\'n olti')
//         }else if(num == on + h){
//             console.log('o\'n yetti')
//         }else if(num == on + i){
//             console.log('o\'n sakkiz')
//         }else if(num == on + j){
//             console.log('o\'n to\'qqiz')
//         }else if(num == yigirma){
//             console.log('Yigirma')
//         }
//     }else if(num > 20 && num < 31){
//         if(num == yigirma + a){
//           console.log('Yigirma bir')
//         }else if(num == yigirma + b){
//             console.log('Yigirma ikki')
//         }else if(num == yigirma + d){
//             console.log('Yigirma uch')
//         }else if(num == yigirma + e){
//             console.log('Yigirma to\'rt')
//         }else if(num == yigirma + f){
//             console.log('Yigirma besh')
//         }else if(num == yigirma + g){
//             console.log('Yigirma olti')
//         }else if(num == yigirma + h){
//             console.log('Yigirma yetti')
//         }else if(num == yigirma + i){
//             console.log('Yigirma sakkiz')
//         }else if(num == yigirma + j){
//             console.log('Yigirma to\'qqiz')
//         }else if(num == ottiz){
//             console.log('o\'ttiz');
//         }
//     }else if(num > 30 && num < 41){

//     }else if(num > 40 && num < 51){
        
//     }else if(num > 50 && num < 61){
        
//     }else if(num > 60 && num < 71){
        
//     }else if(num > 70 && num < 81){
        
//     }else if(num > 80 && num < 91){
        
//     }else if(num > 90 && num < 101){
        
//     }
// }
// namber(son);



// let son = prompt('son kiriting');
// let berilgan = son;
// let kiritgan = son;
// let birlik = '';
// let onlik = '';
// let yuzlik = '';
// function number(nomer) {
//     switch (Math.floor(nomer / 10)) {
//     // case 0: 
//     // onlik = 'nol';
//     // break;
//     case 1: 
//     onlik = 'O\'n';
//         break;
//     case 2: 
//     onlik = 'Yigirma';
//         break;
//     case 3: 
//     onlik = 'O\'ttiz';
//         break;
//     case 4: 
//     onlik = 'Qirq';
//         break
//     case 5: 
//     onlik = 'Ellik';
//         break;
//     case 6: 
//     onlik = 'Oltmish';
//         break;
//     case 7: 
//     onlik = 'Yetmish';
//         break;
//     case 8: 
//     onlik = 'Sakson';
//         break;
//     case 9: 
//     onlik = 'To\'qson';
//         break;
//     default:
//         console.log('Qayta kiriting');
//         break;
// }
//     switch (nomer % 10) {
//         case 0: 
//         birlik = '';
//             break;
//         case 1: 
//         birlik = 'bir';
//             break;
//         case 2: 
//         birlik = 'ikki';
//             break;
//         case 3: 
//         birlik = 'uch';
//             break;
//         case 4: 
//         birlik = 'to\'rt';
//             break
//         case 5: 
//         birlik = 'besh';
//             break;
//         case 6: 
//         birlik = 'olti';
//             break;
//         case 7: 
//         birlik = 'yetti';
//             break;
//         case 8: 
//         birlik = 'sakkiz';
//             break;
//         case 9: 
//         birlik = 'toqqiz';
//             break;
//         default:
//             // console.log('nol');
//             break;
//     }
//     return onlik + ' ' + birlik;
// }

// function sonlar(num) {
//     let ikkiFun = number(num)
//     switch (Math.floor(num / 100)) {
//     case 1: 
//    yuzlik = 'Bir yuz';                                              
//         break;
//     case 2: 
//    yuzlik = 'Ikki yuz';
//         break;
//     case 3: 
//    yuzlik = 'Uch yuz';
//         break;
//     case 4: 
//    yuzlik = 'To\rt yuz';
//         break
//     case 5: 
//    yuzlik = 'besh yuz';
//         break;
//     case 6: 
//    yuzlik = 'Olti yuz';
//         break;
//     case 7: 
//    yuzlik = 'Yetti yuz';
//         break;
//     case 8: 
//    yuzlik = 'Sakkiz yuz';
//         break;
//     case 9: 
//    yuzlik = 'To\'qqiz yuz';
//         break;
//     case 10: 
//    yuzlik = 'Bir ming';
//         break;
//     default:
//         // console.log('Qayta kiriting');
//         break;
// }
//     console.log(yuzlik + ikkiFun);
// }
// sonlar(berilgan); ///////////// ishlandi yuzgacha
// !
//?1 functionga 2ta son kiritilgan  shu sonlar orasidagi toq sonlarini kvadratlarini yigindisini hisoblovchi function yozilsin
// let num = prompt('ikkita son kiriting');
// let namb = prompt('ikkita son kiriting');
// function sonlar(a, b) {
//     let result = 0;
//     for(let i = a; i < b; i++){
//         if(i % 2){
//            result += i * i
//         }
//     }console.log(result);
// }
// sonlar(num, namb); ////////////// ishlandi 100%

//?2 functionga 2ta son kiritilgan  shu sonlar orasidagi juft sonlarini kopaymasini hisoblovchi function yozilsin
// let num = prompt('ikkita son kiriting');
// let namb = prompt('ikkita son kiriting');
// function sonlar(a, b) {
//     let result = 0;
//     for(let i = a; i < b; i++){
//         if(i % 2 == 0){
//            result += i / 2  
//         }  
//     }console.log(result);
// }
// sonlar(num, namb); ////////////// ishlandi 100%

//?3 n soni berilgan, n gacha bolgan sonlarining 2-chi darajasini aniqlovchi functioin yozilsin
// let son = prompt('son kiriting')
// function myfunc(n) {
//     let resault = 0;
//     for(let i = 0; i < n; i++){
//         resault += i * i
//     }
//     console.log(resault);
// }
// myfunc(son); ////// ishlandi 100%

//?4 n soni berilgan, n gacha bolgan sonlarining n-chi darajasini aniqlovchi functioin yozilsin
// let num = prompt('sonni kiriting');
// function myfunc(n) {
//     let resault = 0;
//     for(let i = 0; i < n; i++){
//         resault = Math.pow(i, n);
//         console.log(resault);
//     }
// }
// myfunc(num); ///////// ishlandi 100% daraja degani oziniziga n soni-4 bolsa yulboy bir sonni darajasini topish unun 4matr 2*2*2*2 & 2*2=4, 4*4=16, 16*16=256, 256*256=65536 shu korinishda ishlanadi
// let num = prompt('sonni kiriting');
// function myfunc(n) {
//     for(let i = 1; i <= n; i++){
//         let resault = 1;
//        for(let j = 1; j <= n; j++){
//         resault *= i;
//        }
//        console.log(resault);
//     }
// }
// myfunc(num); /// ikkinchi usuli ishlandi 100% for ichida for bn darajani aniqlash

//?5 a va b sonlarini berilgan a dan b gacha bolgan sonlar uzining qiymaticha chiqarilsin
// let namber = prompt('ikkita son kiriting 1kichik 2katta son');
// let nam = prompt('son kiriting');
// function func(a, b) {
//     let result = 1;
//     for(let i = a; i < b; i++){
//         for(let j = 1; j <= i; j++)
//         console.log(i);
//     }
// }
// func(namber, nam); //// ishlandi 100%

// ?6 a va b sonlari berilgan, a soni 1 marta, a + 1 soni 2 marta ............. chiqariluvchi function yozilsin
// let son = prompt('son kiriting');
// let sonla = prompt('son kiriting');
// function number(a, b) {
//     for(let i = a; i <= b; i++){
//         let qiymat = [];
//         for(let j = 1; j <= i; j++){
          
//             console.log(i);
//         }
//     }
// }
// number(son, sonla); /// ishlandi ///////////////////////////////////////

// ! function
//?1 sonning kvadratini topuvchi function
// function number(son) {
//     let kvadrati = son ** 2
//     console.log(kvadrati);
// }
// number(5); //// ishlandi ///////////////////////////////////////

//?2 sonning kubini topuvchi function
    // function number(son) {
    //     let kvadrati = son ** 3
    //     console.log(kvadrati);
    // }
    // number(3);//// ishlandi  /////////////////////////////////////////

//?3 FizzBuzz  function
// function number(son) {
//     // console.log(son);
//    if(son % 5 == 0 && son % 3 == 0){
//     console.log(son, 'FizzBuzz');
//    }else if(son % 5 == 0){
//     console.log(son, 'Fizz');
//    }else if (son % 3 == 0){
//     console.log(son, 'Buzz');
//    }
// }
// number(20);/// ishlandi //////////////////////////////////////////////////

//?4 2ta sondan kattasini topish function
// function sonla(a, b) {
//     if (a > b) {
//         console.log(a);
//     }else if(b > a) {
//         console.log(b);
//     }
// }
// sonla(8, 4);///////// ishlandi //////////////////////////////////////////
// const number = (a, b) => {
//     if (a > b) {
//         console.log(a);
//     }else if(b > a) {
//         console.log(b);
//     }
// }
// number(9, 18); ///// arrov functionda ishlandi ////////////////////////////

//?5 nta fibonachi son  topuvchi function yozing
// function fibonachi(n) {
//     let f1 = 0;
//     let f2 = 1;
//     for (let i = 0; i < n; i++) {
//         let f3 = f1 + f2;
//         f1 = f2;
//         f2 = f3;
//         console.log(f3);
//     }
// }
// fibonachi(50)///// ishlandi /////////////////////////////////////////////

//?6  factorial topuvchi function yozing
    // function factorial(n) {
    //     let qiymat = 1;
    //     for(let i = 1; i <= n; i++){
    //             qiymat *= i;
    //         console.log(qiymat);
    //     }
    // }
    // factorial(7); //// ishlandi ///////////////
//?7  tub sonni topuvchi function  ///////1ga va o'ziga bo'linadigan son tub son\\\\\\\\
    // function tub(son) {
    //     let qiymat = 0;
    //     for(let i = 1; i <= son; i++){
    //       if( ){

    //           console.log(qiymat, '= tub songa');
    //     }
    // }
        
    // }
    // tub(56)
//?8  palindrom so'zni tekshiruvchi function
//?9  palindrom sonni tekshiruvchi function
//?10 sonning raqamlar yig'indisini topuvchi function
//?11 sonning raqamlar sonini topuvchi function

//?12 kiritilgan son butun sonning kvadratimi yuqmi tekshiruvchi son
//?13 kiritilgan son kabisa yiliga tekshirish

// ! array
// ? array berilgan arrayda max va min elementlarini farqini topuchi dastur
// ? array berilgan arrayda max va min elementlarini indexsini farqi topuchi dastur

//?1 array berilgan toq indexlari bo'yicha elementlarini  ----- for, forin, forof
//?2 array berilgan elementlarini teskari taribda chiqarish,  --- for, forin, forof
//?3 array berilgan toq indexlari bo'yicha elementlarini teskari taribda chiqarish ---- for, forin, forof
//?4 array berilgan toq sonlarni ---------------- for, forin, forof, forEach, map, filter,
//?5 funksiya 1ta array qabul qladi va uni dublikatlarisiz qaytaradi
//?6 array berilgan o'sish tartbi bo'yicha saralaydi
//?7 array berilgan kamayish bo'yicha saralaydi
//?8 array berilgan toq elementda elementalari yangi arrayda teskari tartibda chiqsin
//?9 array berilgan juft indexdagilarini kamayuvchi tartibida chiqaruvchi massiv chiqarilsin
//?10 array toq indexdagilarini max ni topuvchi
//?11 array toq elementlarini indexsi katta bugan array elementi chiqarilsin
//?12 array berilgan 2ta elementi bor va n  soni berilgan, keyingi elemntlari oldingi elementlarini yigindisidan iborat array qaytarilsin

// advanced
//?11 2ta array berilgan 1-array toq indexdagilarini o'chirib, 2-arrayni juft indexdagilarini shu birinchi arrayga qo'shib chiqish kk

// ! string
//?1 gmailni tekshirish
//?2 stringdagi sozlar sonini
//?3  stringda raqamlar sonini sanovchi
//?4  stringda katta harflar sonini sonini sanovchi
//?5  stringda kichik harflar sonini sonini sanovchi