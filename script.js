const numbers = Array.from(document.querySelectorAll(".number"));
const twist = Array.from(document.querySelectorAll(".twist"));
const hand = document.getElementById("minute-hand");

for(let n in numbers){
    let x = 30 * n;
    numbers[n].style.transform = `rotate(`+x+`deg)`;
    twist[n].style.transform = `rotate(-`+x+`deg)`;
}

setInterval(turnSecond, 1000);

let counter = 0;
function turnSecond(){
    let counterPlus = counter++;
    let counterThird = counterPlus * 6;
    hand.style.transform = `rotate(`+counterThird+`deg)`;
}