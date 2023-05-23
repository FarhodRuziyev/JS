let parent = document.querySelector('.parent');
let btn = document.querySelectorAll('button');


    newBtn = document.createElement("button");  
    newBtn.classList.add('butn')
    // newBtn.textContent = '6'        
    parent.insertAdjacentHTML('beforeend', '<button class="butn">6</button>');
 
let btns = btn.forEach((item) => {
    console.log(item);
    item.addEventListener('click', (event) => {
        event.target.style.cssText = 'background:red; padding:1rem 2rem; color: black; font-size: 1.5rem; border-radius: 50%'
    }) 
    
});

