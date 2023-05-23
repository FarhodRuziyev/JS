window.addEventListener('DOMContentLoaded',() => {
    let container = document.querySelector('.container'),
    contactForm = document.querySelector('.contactForm'),
    imya = document.querySelector('.name'),
    familya = document.querySelector('.famil'),
    number = document.querySelector('.number'),
    mail = document.querySelector('.mail'),
    massag = document.querySelector('#massag');

    console.log(familya);
    imya.addEventListener('input', function() {
        massag.value = `Meni ismim ${imya.value} va men xoxlayman:`
    })

    familya.addEventListener('input', function () {
        massag.value = `Mening familiyam ${familya.value} va men xoxlayman:`
    })

    number.addEventListener('input', function () {
        massag.value = `Mening tel: ${number.value} nomerim`
    })
})