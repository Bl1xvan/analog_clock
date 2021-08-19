const numbers = Array.from(document.querySelectorAll(".number"));
const twist = Array.from(document.querySelectorAll(".twist"));

for(let n in numbers){
    let x = 30 * n;
    numbers[n].style.transform = `rotate(`+x+`deg)`;
    twist[n].style.transform = `rotate(-`+x+`deg)`;
}
