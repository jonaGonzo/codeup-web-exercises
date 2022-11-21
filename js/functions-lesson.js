(function () {
    let userName = prompt("What is your name");

let message = myFunction("Jona");
console.log(message);

function myFunction(name){
    return "Thank you, " + name  + " you ran my function.";
}
myFunction();

let person1 = "Billy Idol Ocean Smith James Seth Alexander II";
let person2 = "Bob";
fight(person1, person2);
function fight(person1, person2){
    console.log(person1 + " punched " + person2 + " right in the kisser.");
}

let x = isEven(23343);

console.log(x);
let y = isEven(43654);
console.log(y);
let broken = isEven(true);
console.log(broken);
function isEven(num){
    //* GET THEW PIECES OF THE PUZZLE!!!
    //* Put the pieces of the puzzle into variables.
    let number = num;
    let answer = (number % 2 == 0);
    //* Finally return the answer.
    return answer;
    console.log("you cannot see me.")
}

})();
