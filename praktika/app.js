
//  number 

//! Math 

// Math.floor = 14.1, 14.9 gacha bo'lgan sonlani butun 14 qilib oladi
// Math.ceil = 14.1, 14.9 gacha bo'lgan sonlani butun 15 qilib oladi
// Math.round = 14.1dan 14.4.9 gacha 14qilib yaxlitlaydi agar 14.5dan 14.9gacha 15 qilib yaxlitlaydi
// Math.random = o bn 1 ortasidagi sonlarni qaytaradi.
// Math.min =
// Math.max =

// let nam = Math.random(1) * 10;
// console.log(nam);
// let namber = Math.round(nam);
// console.log(namber);



//  array methodlar

// 1 arr.length
// 2 console.error('arr',arr)

/////////// arr ichidan stringgini topish ///////////////////////
// const myarr = [[false, true], [1, 2], 95, "hellow" ]
// myarr.forEach((item, i) => {
//     if(typeof item == "string"){
//         console.log(i);
//     }
// }); 

///////////arr ichida kelgan elementlarni ichidan arrlarini terib yangi arrga olish////////////  
// const myarry = [[1, 2, 3], "qizil", [4, 5, 6], true, false]
// let newArr = [];
// myarry.forEach((item) => {
//     const res = Array.isArray(item);
//     if(res){
//         item.forEach((num) =>{
//             newArr.push(num);
//         })
//     }
// })
// console.log(newArr);

////////// arrni ichidan false qiymatlari ajratib yangi arrga otkazish /////////////////
// const mydata = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsey = []
// mydata.forEach((item)=>{
//     if(!item){
//     falsey.push(item);
// }
// })
// console.log(falsey);

///////////berilgan qiymat: 'Samarqand' shuni teskari qilib consolga chuqoramiz//////////////
// let str = 'Samarqand';
// const newStr = str.split('').reverse();
// let newWord = '';
// newStr.forEach((item)=>{
//         newWord += item;
// })
// console.log(newWord);
//////////////////////////// 2 - usuli //////////////////////////////
// let str = 'Samarqand';
// const newStr = str.split('');
// let newWord = '';
// for(i = newStr.length -1; i > 0; i--){
//     newWord += newStr[i]
// }console.log(newWord);

////////////bu stringlarni bosh harifini kichik qilib qolganlarini katta qilish//////////////
// const soz = 'AsSsalomu AlAyKUM Yaxshimisiz';
// const sozlar = soz.split(' ');
// let  newSoz = '';
// sozlar.forEach((item) => {
//     const boshi = item.charAt().toLowerCase()
//     const davomi = item.slice(1).toUpperCase()
//     newSoz += ' ' + boshi + davomi
// }); console.log(newSoz);

/////// shular ichidan natural sonlani topib va ularni yigindisini topish /////////////////
// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
// let newNum = 0;
//     numbers.forEach((num) => {
//     if(num >= 0.0 && Math.round(num) === num && num !== Infinity && num !== 0){
//         newNum += num
//     }
// });console.log(newNum);

//////////////berilgan sozlar ichida nechta a qatnashganini topish ///////////////////////
// let str = "qalaysiz yaxshimisiz?, ishalaringiz yaxshimi? A";
// let newSplit = str.split('');
// let counter = 0;
// newSplit.forEach((nom) => {
//     if(nom == 'a' || nom == 'A'){
//         counter++
//     }
// });console.log(`soralayotgan harf: ${counter} marta ishtirok etgan` );

//////arrlarni typeni aniqlab yangi errga oling//////////
////////natija [ 'namber', 'string', 'string', 'objekt', 'objekt', 'boolean', 'namber']////////
// const taypes = [ 21.1, "Roziya", "array", ["I am array"], null, true, 214 ]
// let newarr = [];
// taypes.forEach((typ) => {
//     newarr.push(typeof typ);
// });console.log(newarr);

///kiritilgan stringni elementlar yigindisini lengthdan foydalanmasdan topish////////////
// let str = "Uzbekistan";
// console.log(str.lastIndexOf(str.slice(-1))+1);

//////////////berilgan namberga ozini indexsini qoshib yangi arrda chiqarish//////////////
// const namber = [1, 2, 3, 4, 5, 6]
// let result = [];
// namber.forEach((num, i) => {
//     result.push(num + i)
// });console.log(result);

////kiritilgan sonlar yigindisini toping masalan 10kiritilsa natija 55 bolishi kerak/////////
// const namber = 2;
// let result = 0;
// for(let i = 1; i <= namber; i++){
//    result += i
// } 
  
// console.log(result);

//////berilgan sonni n ga kopaytrib 1ni qishadigan cod yozing ///////////////////
// let number = 9;
// for(let i = 1; i <= 10; i++){
//     let result = number * i + 1
//     console.log(result);
// } 

// let users  = [
//     {name:"lorem", address:"Chorsu", age:20, group:"D"},
//     {name:"ipsum", address:"Sergeli", age:22, group:"C"},
//     {name:"dolor", address:"Yunosobod", age:34, group:"B"},
//     {name:"sit", address:"Yunsobod", age:22, group:"A"},
//     {name:"Amet", address:"Sergeli", age:20, group:"A"}
// ]

// function lorem(obj) {
    
// }

// lorem(users);
