const numbers = Array.from(document.querySelectorAll(".number"));
const twist = Array.from(document.querySelectorAll(".twist"));
const secondhand = document.getElementById("second-hand");
const minutehand = document.getElementById("minute-hand")

for(let n in numbers){
    let x = 30 * n;
    numbers[n].style.transform = `rotate(`+x+`deg)`;
    twist[n].style.transform = `rotate(-`+x+`deg)`;
}

setInterval(turnSecond, 1000);
setInterval(turnMinute, 60000);

let counter = 1;
function turnSecond(){
    let counterPlus = counter++;
    let counterThird = counterPlus * 6;
    secondhand.style.transform = `rotate(`+counterThird+`deg)`;
}

function turnMinute(){
    let counterPlus = counter++;
    let counterThird = counterPlus * 6;
    minutehand.style.transform = `rotate(`+counterThird+`deg)`;
}