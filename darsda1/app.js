// ======================== bularni ichidan sonlarni butun qilib olish ====================
// let arry = ["15.5", "34.6px", "3rem", "hello 9", false, {} ]
// function son (arry){
//     for(let i of arry){
//         let raqam = parseFloat(i);
//         if(!(isNaN(raqam))){
//             console.log(Math.round(raqam));
//         }
//     }
// }

// son(arry);

// ======================== don -don ziki kompyuter bn o'ynash ================

// let player1 = prompt('tanlang qogoz, qaychi, quduq');
// let player2 = Math.floor(Math.random() * 3);
// console.log(player2);

// function aylantir (player2){
//     if(player1 == 0 && player2 == 'qogozga' || player1 == 1 && player2 == 'qaychi' || player1 == 2 && player2 == 'quduq' ){
//         alert('Durrang');
//     }
//     else if(player1 == 0 && player2 == 'quduq' || player1 == 1 && player2 == 'qogoz' || player1 == 2 && player2 == 'qaychi'){
//         alert(player1, ' siz yutdingiz');
//     }
//     else{
//         alert('siz yutdingiz');
//     }

// }
// aylantir(player1,player2);
// let arr =[1,2,3,4,6,7,8,9,0]
// function juft (namber){
//     for(let i of namber){
//         if(!(i % 2)){
//             console.log(i, ' bu juftson')
//         }
       
//     }
// }

// juft(arr)



// ! 3ta sondan kattasini topish
// let a = 1;
// let b = 2;
// let c = 9;

// function max(a,c,b){
//     if(a > b && a > c){
//         console.log('katta ',a)
//     }
//     else if(b > a && b > c){
//         console.log('katta ',b)
//     }
//     else if(a == b && a == c || b == a && b == c || c == b && c == a){
//         console.log(a, b, c, 'teng');
//     }
//     else{
//         console.log('katta',c)
//     }
// }

// max(a,c,b)

// ! yechilishi
// ! 1 ✔
// ! 2

// let a = 1;
// let b = 2;
// let c = 9;
// let max = Math.max(a,b,c)
// console.log('max',max)

// let min = Math.min(a,b,c)
// console.log('min',min)


// ! 3
// let a = 8;
// let b = 2;
// let c = 9;

// ? 2ta  sondan kattasin topish qisqa usul

// function findMax(a, b){
//     return a > b ? a : b
// }
// let max = findMax(a, b)
// console.log(max)

// const findMax =  (a,b) => a > b ? a : b
// console.log(findMax(a,b))

// ? 2ta katta sondan kattasin topish qisqa usul



// ! 2ta usul arrni max min ni topish

// ! 1
// let arr =[7,2,34,4,63,99,9,0]

// function max (son){
//     let a = arr[0]
//     for(let i of son){
//         if(i > a){
//             a = i
//         }
//     }
//     console.log(a)
      
// }


// max(arr)


//!array elementlarini ichidan kichigini topish
// let arr =[ 1,2,34,4,63,99,9, -1]

// function min (son){
//     let a = arr[0]
//     for(let i of son){
//         if(i < a){
//             a = i
//         }
//     }
//     console.log(a)
      
// }


// min(arr)


//! 2

// let arr =[ 100,2,34,4,63,99,9, -1]

// function max(nums){
//      let max = Math.max(...nums)
//      console.log('max',max)
// }

// max(arr)

// !
// let arr =[ 100,2,34,4,63,99,9, -1]

// function min(nums){
//      let max = Math.min(...nums)
//      console.log('min',min)
// }

// min(arr)


// !
// 
// let arr = [ "John", "samolyot" , "o'zbekiston"]


// function find(arr){
//     let len = arr[0].length
//     let index;
//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i].length > len){
//             index = i
//         }
//     }
//     console.log(arr[index])
// }

// find(arr)

// let arr = prompt('nechta element kirgizaseniz');
// let massiv = [];
// let a = 2;
// for(let i = 0; i < arr; i++){
//     massiv[i] = prompt(i);
//     if(i % a == 0){
//       console.log(i);
//     }
    
// }


// for(let i of massiv){
//     console.log(i);
// }

 
//==================================  darsda ===================================================

// let arr = ["apple", "banana", "banaba", "lorem", "app", "append"];

// function findstr(arr, str) {
//   for(let i = 0; i < arr.length; i++){
//     if (arr[i].startsWith(str)) {
//       console.log(arr[i]);
//     }
    
//   }
// }

// findstr(arr, "app");

// function namber(str) {
//   for(let i = 0; i < str.length; i++){
//     let as = str[i] ;
//     if(!(isNaN(as))){

//       console.log(as);
//     }
//   }
// }
// namber('lorem34');
//=====================================

// function lorem(str) {
//     let firstIndex = str.indexOf("$")
//     console.log(firstIndex);

//     let lastIndex = str.indexOf(" ", firstIndex)
//     console.log(lastIndex);

//     let number = str.slice(firstIndex + 1, lastIndex)
//     console.log(number);

// }   

// lorem("lorem $4560 ipsum dolor sit");

function lorem(str) {
    for (let i of str) {
        
        console.log(davomi);
    }


}



lorem('lorem ipsum dolor sit amet')