let cards = document.querySelector('.cards');

// fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(json=>{console.log(json)

//         json.forEach((item) => {
//             // console.log(item.image);
//              card.insertAdjacentHTML('beforeend',
//             ` <div class="cards">
//                 <div class="cards__img">
//                     <img src="${item.image}" alt="#">
//                 </div>
//                 <div class="cards__text">
//                     <h5>${item.title}</h5>
//                     <span>summa: ${item.price}</span>
//                     <button>Olish</button>
//                 </div>
//             </div>`
//             )
//         });
//     })


/// ikkinchi usuli////////////////////////////////

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{console.log(json)
        json.forEach(({image, title, price}) => {
            // console.log(image, title, price)
             cards.insertAdjacentHTML('beforeend',
            ` <div class="card">
                <div class="card__img">
                    <img src="${image}" alt="#">
                </div>
                <div class="card__text">
                    <h5>${title}</h5>
                    <span>summa: ${price}</span>
                    <button>Olish</button>
                </div>
            </div>`
            )
        });
    });
