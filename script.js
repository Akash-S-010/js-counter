let number = document.getElementById('counter-number');
let min = document.getElementById('min');
let add = document.getElementById('add');
let limitPara = document.getElementById('limit-para');

let displayNum = 0
let limit =20

add.addEventListener('click',()=>{
    displayNum++;
    if(displayNum>0){
        number.style.color = "green"
    }
    if(displayNum>=limit){
        displayNum=limit;
        limitPara.innerHTML = "Sorry the limit is 20"
        limitPara.style.fontWeight = "800"
    }
    number.innerHTML = displayNum;
});

min.addEventListener('click',()=>{
    displayNum--
    if(displayNum<0){
        number.style.color = "red"
    }
    number.innerHTML = displayNum
    limitPara.innerHTML = ""
})

