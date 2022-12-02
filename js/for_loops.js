showMultiplicationTable(7);

function showMultiplicationTable(input) {
    for (let i = 1; i < 11; i++) {
        let number = `${input} x ${i} = ${input * i}`
        console.log(number);
    }
}

getRandomNumber(20, 200);

function getRandomNumber(min, max) {
    for (let i = 0; i < 10; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let num = (Math.floor(Math.random() * (max - min) + min))
        console.log(`The number ${num} is  ${isEven(num)}`);
    }
}
function isEven(num){
    return (num % 2 === 0) ? "even" : "odd";
}

for(let i = 0; i < 10; i++){
    let numArray = [];
    for(let j= 1; j <= i; j++){
        numArray.push(i)
    }
    console.log(numArray.join(""))
}
for(let i = 100; i > 0 ; i -= 5){
    console.log(i);
}
