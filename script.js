const hours = Array.from(document.querySelectorAll('[data-hour]'));
const third = 100/3;

console.log(third);

for(let i = 0; i<4; i++){
    let x = third * i;
    console.log(x);
}