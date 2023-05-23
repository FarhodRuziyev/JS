// ==========================uyishi ikki kishilik don don uyini======================
// function don() {
//     let f1 = prompt('soz kiriting');
//     let f2 = prompt('soz kiriting');
//     // let f3 = prompt('soz kiriting');

//     if(f1 == 'qogoz' && f2 == 'qaychi' || f2 == 'qogoz' && f1 == 'qaychi') {
//         alert('qaychi yutdi');
//     }
//     else if(f1 == 'qogoz' && f2 == 'quduq' || f2 == 'qogoz' && f1 == 'quduq'){
//         alert('qogoz yutdi')
//     }
//     else if(f1 == 'quduq' && f2 == 'qaychi' || f2 == 'quduq' && f1 == 'qaychi'){
//         alert('quduq yutdi');
//     }
//     else if(f1 == 'qogoz' && f2 == 'qogoz' || f1 == 'quduq' && f2 == 'quduq' || f1 == 'qaychi' && f2 == 'qaychi'){
//         alert('durrang')
//     }
//     else{
//         alert('bunday shart yoq')
//     }
// }
// don()
// ==========================uyishi uch kishilik don don uyini======================
// function name() {
//     let a1 = prompt('soz kiriting');
//     let a2 = prompt('soz kiriting');
//     let a3 = prompt('soz kiriting');

//     if(a1 == 'qogoz' && a2 == 'quduq' &&  a3 == 'quduq' || a2 == 'qogoz' && a1 == 'quduq' &&  a3 == 'quduq' || a3 == 'qogoz' && a2 == 'quduq' &&  a3 == 'quduq') {
//         alert('qogoz yutdi va qolganla durrang')
//     }
//     else if( a1 == 'quduq' && a2 == 'qaychi' && a3 == 'qaychi' || a2 == 'quduq' && a1 == 'qaychi' && a3 == 'qaychi' || a3 == 'quduq' && a2 == 'qaychi' && a1 == 'qaychi' ){
//         alert('quduq yutdi va qolganla durrang')
//     }
//     else if( a1 == 'qaychi' && a2 == 'qogoz' && a3 == 'qogoz' || a2 == 'qaychi' && a1 == 'qogoz' && a3 == 'qogoz' || a3 == 'qaychi' && a2 == 'qogoz' && a1 == 'qogoz' ) {
//         alert('qaychi yutdi va qolganla durang')
//     }
//     else if(a1 == 'qogoz' && a2 == 'qaychi' && a3 == 'qaychi' || a2 == 'qogoz' && a1 == 'qaychi' && a3 == 'qaychi' || a3 == 'qogoz' && a2 == 'qaychi' && a1 == 'qaychi'){
//         {
//             alert('qogoz qoldi va qolganla durrang')
//             if(a1 == a2) {
//                 let a1 = prompt('ikkinchi o\'rin uchun o\'yin boshlandi');
//                 let a2 = prompt('ikkinchi o\'rin uchun o\'yin boshlandi');
//                 if(a1 == 'qogoz' && a2 == 'qaychi' ||  a2 == 'qogoz' && a1 == 'qaychi'){
//                     alert('qaychi yutdi')
//                 }
//                 else if(a1 == 'qogoz' && a2 == 'quduq' ||  a2 == 'qogoz' && a1 == 'quduq'){
//                     alert('qogoz yutdi')
//                 }
//                 else if(a1 == 'quduq' && a2 == 'qaychi' ||  a2 == 'quduq' && a1 == 'qaychi'){
//                     alert('quduq yutdi')
//                 }
//                 else if(a1 == 'qogoz' && a2 == 'qogoz' ||  a2 == 'qaychi' && a1 == 'qaychi' || a2 == 'quduq' && a1 == 'quduq' ){
//                     alert('durrang')
//                 }
//             }
//             else if(a1 == a3){
//                 let a1 = prompt('ikkinchi o\'rin uchun o\'yin boshlandi');
//                 let a3 = prompt('ikkinchi o\'rin uchun o\'yin boshlandi');
//                 if(a1 == 'qogoz' && a3 == 'qaychi' ||  a3 == 'qogoz' && a1 == 'qaychi'){
//                     alert('qaychi yutdi')
//                 }
//                 else if(a1 == 'qogoz' && a3 == 'quduq' ||  a3 == 'qogoz' && a1 == 'quduq'){
//                     alert('qogoz yutdi')
//                 }
//                 else if(a1 == 'quduq' && a3 == 'qaychi' ||  a3 == 'quduq' && a1 == 'qaychi'){
//                     alert('quduq yutdi')
//                 }
//                 else if(a1 == 'qogoz' && a3 == 'qogoz' ||  a3 == 'qaychi' && a1 == 'qaychi' || a2 == 'quduq' && a1 == 'quduq' ){
//                     alert('durrang')
//                 }
//             }
//             else if(a2 == a3){
//                 let a2 = prompt('ikkinchi o\'rin uchun o\'yin boshlandi');
//                 let a3 = prompt('ikkinchi o\'rin uchun o\'yin boshlandi');
//                 if(a2 == 'qogoz' && a3 == 'qaychi' ||  a3 == 'qogoz' && a2 == 'qaychi'){
//                     alert('qaychi yutdi')
//                 }
//                 else if(a2 == 'qogoz' && a3 == 'quduq' ||  a3 == 'qogoz' && a2 == 'quduq'){
//                     alert('qogoz yutdi')
//                 }
//                 else if(a2 == 'quduq' && a3 == 'qaychi' ||  a3 == 'quduq' && a2 == 'qaychi'){
//                     alert('quduq yutdi')
//                 }
//                 else if(a2 == 'qogoz' && a3 == 'qogoz' ||  a3 == 'qaychi' && a2 == 'qaychi' || a2 == 'quduq' && a3 == 'quduq' ){
//                     alert('durrang')
//                 }
//             }
//         }
//     }
//     else if(a1 == 'qaychi' && a2 == 'quduq' && a3 == 'quduq' || a2 == 'qaychi' && a1 == 'quduq' && a3 == 'quduq' || a3 == 'qaychi' && a2 == 'quduq' && a1 == 'quduq'){
//         alert('qaychi qoldi va qolganla durrang')
//     }
//     else if(a1 == 'quduq' && a2 == 'qogoz' && a3 == 'qogoz' || a2 == 'quduq' && a1 == 'qogoz' && a3 == 'qogoz' || a3 == 'quduq' && a2 == 'qogoz' && a1 == 'qogoz') {
//         alert('quduq  qoldi va qolganla durrang')
//     }

//     if(a1 == 'qogoz' && a2 == 'qaychi' && a3 == 'quduq' || a1 == 'qogoz' && a3 == 'qaychi' && a2 == 'quduq' || a3 == 'qogoz' && a1 == 'qaychi' && a2 == 'quduq' || a2 == 'qogoz' && a1 == 'qaychi' && a3 == 'quduq' || a3 == 'qogoz' && a2 == 'qaychi' && a1 == 'quduq' || a2 == 'qogoz' && a3 == 'qaychi' && a1 == 'quduq' || a1 == 'qogoz' && a2 == 'qogoz' && a3 == 'qogoz' || a1 == 'qaychi' && a2 == 'qaychi' && a3 == 'qaychi' || a1 == 'quduq' && a2 == 'quduq' && a3 == 'quduq' ){
//         alert('durrang o\'yinni davom ettiring')
//     }

// }

// name()

// // ====================== fibonacci sonlAR=======================
// function sonlar(son) {
//     if (son <= 0) {
//         return 0
//     }
//     if (son <= 1)  return 1
//     else  return sonlar(son - 1) + sonlar(son-2)
    
// }

// function nomi(son1) {
//     for (let i = 0; i < son1; i++) {
//         console.log(sonlar(i));
//     }
// }

// nomi(13);