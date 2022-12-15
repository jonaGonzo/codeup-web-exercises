// // 1) Make a function called returnTwo() that returns the number 2 when called
// // ---Test this function with console.log(returnTwo())
//
// function returnTwo(){
//     return 2;
// }
//
// console.log(returnTwo());
//
// // 2) Make a function called returnName() that returns the string of your name
// // ---Test this function with console.log(returnName())
//
// function returnName() {
//     return "Jona";
// }
//
// console.log(returnName());
//
// // 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// // ---Test this function with console.log(addThree(5))
//
// function addThree(num){
//     if (NaN){
//         return false;
//     }
//     return num + 3;
// }
//
// console.log(addThree(5));
//
// // 4) Make a function called sayString() which returns the string input passed in.
// // ---Test this function with console.log(sayString())
//
// function sayString(input){
//     if (!"string"){
//         return false;
//     }
//     return "input";
// }
//
// console.log(sayString())
// // 5) Make a function called sayHowdy() which console.logs the string "Howdy!"
// // ---Test this function by directly calling sayHowdy()
// // ---Remember this function does not need a defined return value
//
// var greet = "Howdy";
//
// function sayHowdy(){
//     return greet;
// }
//
// console.log(sayHowdy());

// ================================= WARM UP

// Create a function, findAverageDogAge, that takes in an array of pet objects with age properties and returns the average age of a dog.

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Pickles',
        type: 'Dog',
        age: 10
    }

];
findAverageDogAge(pets);
function findAverageDogAge(pets){
let avgAge = (pets.age / pets.age.length) * pets.age.length;
    return avgAge;
}

// findAverageDogAge(pets) // returns 7.5