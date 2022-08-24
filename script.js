const numbers = Array.from(document.querySelectorAll(".number"));
const twist = Array.from(document.querySelectorAll(".twist"));
const secondhand = document.getElementById("second-hand");
const minutehand = document.getElementById("minute-hand")
const hourhand = document.getElementById("hour-hand");
const digitalclock = document.getElementById("digital-clock");

for(let n in numbers){
    let x = 30 * n;
    numbers[n].style.transform = `rotate(`+x+`deg)`;
    twist[n].style.transform = `rotate(-`+x+`deg)`;
}

let startdate = new Date(new Date().toLocaleString("en-US", {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
}));
let startseconds = startdate.getSeconds();
let startminutes = startdate.getMinutes();
let starthours = startdate.getHours();
let starthourformat = starthours % 12 || 12;

secondhand.style.transform = `rotate(${startseconds * 6}deg)`
minutehand.style.transform = `rotate(${startminutes * 6}deg)`
hourhand.style.transform = `rotate(${starthours* 30}deg)`
digitalclock.innerText= `${starthourformat < 10 ? '0'+starthourformat : starthourformat}:${startminutes < 10 ?'0'+startminutes : startminutes}:${startseconds < 10 ? '0'+startseconds : startseconds}`

console.log(starthours)

setInterval(turnSecond, 1000);

function turnSecond(){
  let date = new Date(new Date().toLocaleString("en-US", {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
}));
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let hourformat = hours % 12 || 12;
    let secondThird = seconds * 6;
    let minuteThird = minutes * 6;
    let hourThird = hours * 30;
    secondhand.style.transform = `rotate(`+secondThird+`deg)`;
    minutehand.style.transform = `rotate(`+minuteThird+`deg)`;
    hourhand.style.transform = `rotate(`+hourThird+`deg)`;

  digitalclock.innerText= `${hourformat < 10 ? '0'+hourformat : hourformat}:${minutes < 10 ?'0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`
}

