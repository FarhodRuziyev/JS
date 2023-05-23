// let data = new Date();

// console.log(data.toTimeString());
// console.log(data.toDateString());
// let obj = [8, 11,  15,  18,  20];

// let myorder = (order) =>{
    
//     console.log(s);

// }
// myorder(17);
// myorder(9);
// myorder(6);

// let numberOfSeries;

// function startApp() {
//     numberOfSeries = +prompt('Nechta serial kordingiz?', '');

//     while( numberOfSeries === '' ||  numberOfSeries === null || isNaN(numberOfSeries)){
//         numberOfSeries = +prompt('Nechta serial kordingiz?', '');
//     }
// }
// startApp();

// let seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     privat: false,
// }
// function rememberMySeries() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('Oxirgi korgan serialingiz?');
//         let b = prompt('Nechi baxo berasiz?')
    
//         if(a != null && b != null && a != '' && b != '') {
//             seriesDB.series[a] = b; 
//             console.log('done');
//         }
//         else {
//             console.log('error');
//             i--;
//         }
//     };
// }
// rememberMySeries();

// function showDB(hidden) {
//     if (!hidden) {
//         console.log(seriesDB);
//     }
// }
// showDB(seriesDB.privat);


// function writeGenres() {
//     for (let i = 0; i < 2; i++) {
//         seriesDB.genres[i] = prompt(`Yaxshi korgan janiringiz ${i + 1}`);
//     }
// }
// writeGenres();
////////////////////// while yordamida ishlangan masala /////////////////////
// let start = 0;

// while(start < 2) {
//     let a = prompt('Oxirgi korgan serialingiz?');
//     let b = prompt('Nechi baxo berasiz?');
//     if(a != null && b != null && a != '' && b != '') {
//         seriesDB.series[a] = b; 
//         console.log('done');
//     }
//     else {
//         console.log('error');
//         i--;
//     }
//     start++;
// };

//////////////////// do while yordamida ishlangan masala //////////////////////
// let start = 0;
// do{
//     let a = prompt('Oxirgi korgan serialingiz?');
//     let b = prompt('Nechi baxo berasiz?');
//     if(a != null && b != null && a != '' && b != '') {
//         seriesDB.series[a] = b; 
//         console.log('done');
//     }
//     else {
//         console.log('error');
//         i--;
//     }
//     console.log(start);
//     start++;
// }while(start < 2);

// function detectLevelSeries() {
//     if(seriesDB.count < 5){
//         console.log('Kam serial koripsiz');
//     }else if(seriesDB.count >= 5 && seriesDB.count < 10){
//         console.log('Siz kilassik tomoshbinsiz');
//     }else if(seriesDB.count >= 10){
//         console.log('Siz serialchi zvezda ekansiz');
//     }else{
//         console.log('error');
//     }
    
// }
// detectLevelSeries();

// console.log(numberOfSeries);
// console.log(seriesDB);


// const abyekt = {
//     fristName: 'Farhod',
//     lastName: 'Ruziyev',
//     age: '28',
//     height: '1.75',
//     weight:  '75',
//     myProfession: {
//         master: 'domstroitel',
//         mastera: 'kravtira',
//         adelka: 'kraschik',
//         myXobbi:{
//             staj: '15',
//             haydovchi: 'sedan',
//             shafyor: 'isuzu',
//             yoqqani: 'poyga',
//             suzish: 'basseynda'
//         }
      
//     }
// }
//////////////////////bu usul desctruptizatsiya deyiladi ///////////////////////
// const {myProfession, myXobbi} = abyekt;
// console.log(myProfession);
// console.log(myXobbi);

// const {shafyor, haydovchi, staj, yoqqani} = abyekt.myProfession.myXobbi;
// console.log(shafyor);
// console.log(haydovchi);
// console.log(staj);
// console.log(yoqqani);

///////////////////// Spread operatori ////
let realMadrid = [
    'Ronaldo',
    'Benzema',
    'Marsello',
];

let barselona = [
    'Messi',
    'Inesta',
    'Xavi',
];

let universal = [...barselona, ...realMadrid];
console.log(universal);