let button = document.querySelector(".btn");
let btnClear = document.querySelector(".clear");
let input = document.querySelector(".form-control");
let ul = document.querySelector(".list-group");
let del = document.querySelector(".del");

button.addEventListener("click", addList);

function addList() {
  if (input.value.trim() ==='') return
  let localItems = JSON.parse(localStorage.getItem("massiv"));

  if (localItems === null) {
    arr = [] 
  } else {
    arr = localItems;
  }

  arr.push(input.value);
  console.log(arr);
  localStorage.setItem("massiv", JSON.stringify(arr));
  input.value = "";

  draw()
}

function draw() {
    let sumList = ''
    let localItems = JSON.parse(localStorage.getItem("massiv"));
    if (localItems === null) {
      arr = []
    } else {
      arr = localItems;
    }

    arr.forEach((value, index) => {
      sumList += `<li class="list-group-item d-flex justify-content-between">
          ${value} <span class="del" onclick='removeItem(${index})'>delet</span></li>`
    })
    ul.innerHTML = sumList

}
draw()

function removeItem(num) {
  let localItems = JSON.parse(localStorage.getItem("massiv"));
    if (localItems === null) {
      arr = []
    } else {
      arr = localItems;
    }
    arr.splice(num, 1)
    localStorage.setItem("massiv", JSON.stringify(arr));
    draw()
  }


  btnClear.addEventListener('click', ()=>{
    localStorage.clear()
    draw()
  })


