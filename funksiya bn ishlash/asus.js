
// function nomer() {
//     let son = prompt('son kiriting');
//     let son1 = prompt('son kiriting');
//     for(let i = son; i < son1; i++){
//         if(i % 2){
//             console.log( 'ikkiga bolingan son');
//         }
        
//         else{
//             console.log('nomalum son');
//         }
//     }
// }
// nomer()
// function nomer() {
//         let som = prompt('son kiriting');
//         let som1 = prompt('son kiriting');

// }
// function findmax(a) {
//    let maxword = "";
//    for(i of a){
//     if(i.lenght > maxword.lenght){
//         maxword= i
//     }
//    }
//    console.log(maxword);
// }
// let arr = ["lorem", "ipsum", "hello", "uzb", "world", "uzb = uzb"];
// findmax(arr);




//========================== tub sonlani topish ========================


// let n = +prompt('son kiriting');
// k = 0
// for(let i = 2; i < n; i++ ){
//     if(n % i == 0){
//         k++;
//     }
// } 

// if( k == 0){
//     console.log(n, 'tub son');
// }
// else{
//     console.log(n, 'tub son emas');
// }


//=============== kubni yuzasini va hajmini aniqlash: function declaression bn ishlash =================
//myFunction(6);
// function myFunction(a) {
//     let s = a * a;
//     console.log(s, 'yuzasi');
//     let v = a * 2;
//     console.log(v, 'hajmi');
// }
// myFunction(3);
//===== bu function expression bn ishlash ======
// const kvadrat = function(son) {
//     let s = son * son;
//     console.log(s, 'yuzasi' );
//     let v = son * 2;
//     console.log(v, 'hajmi' );
// }
// kvadrat(4)
//====== bu arrow functionda ishlangan =======
// const kvadrat =(son) => {
//     let s = son * son;
//     console.log(s, 'yuzasi' );
//     let v = son * 2;
//     console.log(v, 'hajmi' );
// }
// kvadrat(3);

//========================== kvadratning peremetirini aniqlash ===========================

// function kvadrat (a){
//     let p = a * 4;
//     console.log(p, 'perimetri');
// }

// kvadrat(4);

// ====== bu arrow =======

// const kvadrat =(a) => {
//     let p = a *= 4;
//     console.log(p, 'perimetri')
// }

// kvadrat(8);
//========== expression bn ishlash ======

// const kvadrat = function(a) {
//     let p = a *= 4;
//     console.log(p, 'perimetri')
// }
// kvadrat(4)

//============================== kvadratning yuzasini aniqlash ===============================

// function kvadrat (a){
//     let s = a * a;
//     console.log(s, 'yuzasi');
// }

// kvadrat(4);

//========== expression bn ishlash ======

// const kvadrat = function(son) {
//     let s = son * son;
//     console.log(s, 'yuzasi' );
// }
// kvadrat(4)
// ======= bu arrow =======

// const kvadrat =(a) => {
//     let s = a *= a;
//     console.log(s, 'yuzasi')
// }

// kvadrat(8);

//======================= kvadratning yuzasi va perimetrini aniqlash =======================
// function myFunction (a, b) {
//     let s = a * b;
//     console.log(s, 'yuzasi');
//     let p = 2 * (a + b);
//     console.log(p, 'perimetri');
// }
// myFunction(3, 5);
// function def(yil) {
//   return 2023 - yil;
// }

// const pensiya = function (year) {
//   let yosh = def(year);
//   console.log(yosh);
// };
// pensiya("1980");

// const univer = (year) => {
//   let age = def(year);
//   console.log(age);
// };
// univer(1996);

// // -----

// function avg(a, b, c) {
//   return;
// }

// function whoWin(d1, d2, d3, di1, di2, di3, b1, b2, b3) {
//   let dasturchi = avg();
//   let dizayner = avg();
//   let bekorchi = avg();
// }

// whoWin(4, 6, 2, 8, 9, 4, 68, 88, 8);
    
// function yosh(yil) {
//     return 2023-yil;
// };

// const pensiya = function (year) {
//     let def = yosh(year);
    
// };
//     pensiya("1990");
// ======================== Uy ishi =========================
// function month(son) {
//     let cat = son / 6;
//     let fish = son / 3;
//     let whele = son / 20;
//     console.log('Mushuk ' + cat + ' yoshda');
//     console.log('Baliq ' + fish + ' yoshda');
//     console.log('Kit ' + whele + ' yoshda');
// }
// month(24);

//========================== Kurs valyutani hisobini chiqarish ======================

// let sum = prompt('Summani kiriting');
// function rubl(a) {
//     return a / 140 
// }
// function dollar(b) {
//     return b / 1133 
// }
// function evro(d) {
//     return d / 1165 
// }
// console.log(rubl(sum) + ' rulbda');
// console.log(dollar(sum) + ' Dollorda');
// console.log(evro(sum) + ' evroda');

// ================================== Uy ishi 1 ===================================

// function kurs(user, raqam) {
//     let dollor = 1133;
//     let evro = 1165;
//     let rubl = 140;
//     if('dollor' == user){
//         let xisob = (raqam / dollor);
//         // console.log(raqam / dollor);
//         console.log( xisob + ' dollorga bo\'ladi')
//     } 
//     else if('rubl' == user){ 
//         let hisob = (raqam / rubl);
//         // console.log(raqam / rubl);
//         console.log( hisob + ' rublga  bo\'ladi');
//     }
//     else if ('evro' == user){
//         let hisoob = (raqam / evro);
//         // console.log(raqam / evro);
//         console.log( hisoob + ' evroga  bo\'ladi');
//     }
//     else {
//         console.log('bu valyuta topilmadi');
//     }
// }
// kurs ('dollor', 1000000);

//===================pensiya yoshini aniqlash ========================

    // function yoshida(yil) {
    //     let NewAge = 2023;
    //     let hello = NewAge-yil;
    //     return hello;
    // }
    // function pensiya(user) { 
    //     let pgaChiqish = 55;
    //     let yashagan = yoshida(user);
    //     let qoldiq = pgaChiqish-yashagan;
    //     if (qoldiq > 1) {
    //         console.log(qoldiq +' yil bor hali pensiyaga');
    //     }
    //     else if(qoldiq < 0){
    //         console.log(qoldiq + ' yil pensiya yoshidan o\'tgansiz');
    //     }
    //     else {
    //         console.log(' pensiya yoshidasiz');
    //     }
    // }

    // pensiya(1978);