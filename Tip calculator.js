let bill = document.getElementById("bill")
let tip = document.getElementById("tip")
let calculate = document.getElementById("calculate")
let total = document.getElementById("total")
let billValue = bill.value
let tipValue = tip.value

function calculator(){
    let billValue = bill.value
    let tipValue = tip.value
    total.innerHTML = `${billValue * (1 + (tipValue / 100))}.00$` 
}

calculate.addEventListener("click", calculator)