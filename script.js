let number = document.getElementById('counter-number');
let min = document.getElementById('min');
let add = document.getElementById('add');
let displayNum = 0

add.addEventListener('click',()=>{
    displayNum++;
    if(displayNum>0){
        number.style.color = "green"
    }
    number.innerHTML = displayNum;
});

min.addEventListener('click',()=>{
    displayNum--
    if(displayNum<0){
        number.style.color = "red"
    }
    number.innerHTML = displayNum
})
