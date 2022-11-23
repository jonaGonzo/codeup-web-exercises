"use strict"

// let city = prompt("Where are you?");
//
// if (city === "Boston"){
//     console.log("The location is Boston.");
//     console.log("Red Sox, I guess...");
// } else if (city === "San Antonio") {
//     console.log("This is San Antonio");
//     console.log("Go Spurs.");
// } else {
//     console.log("You're lost in America.");
// }
//
// console.log(addNumbers("5"));
//
// function addNumbers(num1) {
//     if (typeof num1 == "string"){
//         return parseFloat(num1);
//     } else {
//         return "This is not a number."
//     }
// }
//
// let pizzaCost = prompt("What type of pizza do you want to order?")
// // if (pizzaCost == "Cheese"){
// //     alert("Cheese pizza - $11");
// // } else if (pizzaCost == "Mushroom") {
// //     alert("Mushroom - $13");
// // } else {
// //     alert("Call in for your total. Thank You!");
// // }
//
//
// var message;
// if  (success) {
//     message = "The opt was successful.";
// } else {
//     message = "The opt was NOT successful.";
// }
// console.log(message);
//
// let success = false;
// let message = success ? "The opt was successful." : "The opt was NOT successful.";
//
// console.log(message);
//
// switch (pizzaCost){
//     case "Cheese":
//         console.log("Cheese pizza is $11");
//         break;
//     case "Mushroom":
//         console.log("Mushroom pizza is $13")
//         break;
//     default:
//         console.log("Call in for your total. Thank You!");
//         break;
// }

let number = 2;
console.log(number);
switch (number){
    case 1:
    case 2:
        console.log("The number is 2")
        break;
    case 3:
    case 4:
        console.log("The number is less than 5");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        console.log("The number is between 5 and 8");
        break;
    default:
        console.log("The number is greater then 8")
}
