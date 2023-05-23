
//============== toq va juft sonlarni topish=======================
// let nums = [1, 21, 32, 4, 17, 7, 14, 19, 8]
// for(i of nums){
//     console.log(i)
//     if(i % 2){
//         console.log(i, 'bu toq son');
//     }
//     else {
//         console.log(i, 'bu juft son');
//     }
// }
// let myNums = [1, 21, 32, 4, 17, 7, 14, 19, 8]
// for(i of myNums){
//     console.log(i)
//     if(i > 10){
//         console.log(i, 'bu 10dan katta son');
//     }
//     else if(i < 20){
//         console.log(i, 'bu 20dan kichik son');
//     }
//     else {
//         console.log( 'bu boshqa son');
//     }
// }
//=================== 10dan katta va 20dan kichik sonlarni topish============
// let myNums = [1, 21, 32, 4, 17, 7, 14, 19, 8]
// for(i of myNums){
//     console.log(i)
//     if(i > 10){
//         console.log(i, 'bu 10dan katta son');
//         if(i % 2 == 0){
//             console.log(i, 'bu juft son');
//         }
//         else{
//             console.log( 'bu toq son');
//         }
//     }
//     else if(i < 20){
//         console.log(i, 'bu 20dan kichik son');

//     }
//     else {
//         console.log( 'bu boshqa son');
//     }
// // }

//===================== qoldiq qaytarmaydigan sonlar =======================

// let nums = prompt('son kiriting');
// for ( i = 1; i <= nums; i++ )
// {
   
//     if(i % 3 == 0){
//             console.log(i, 'fizz');
//     }
//     else  if(i % 5 == 0){
//             console.log(i, 'fizz');
//     }
//     else  if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i, 'fizzbazz');
//     }
//     else{
//        console.log(i);
//     }
// }
//================= for bn unli undosh harflarni ajratib ekranga chuqorish =================

// let matn = prompt('matn kiring');
// for(i of matn) {
//     switch (i) {
//         case 'a':{
//             console.log(i, 'unli');
//         } 
//             break;
//         case 'o':{
//             console.log(i, 'unli');
//         } 
//             break;
//         case 'u':{
//             console.log(i, 'unli');
//         } 
//             break;
//         case 'i':{
//             console.log(i, 'unli');
//         } x
//         case 'e':{
//             console.log(i, 'unli');
//         } 
//             break;
//         case ' ': {
//             console.log(i, 'bo\'sh joy');
//         }
//             break;
//         default:{
//             console.log(i, 'undosh');
//         }
//             break;
//     }
// }