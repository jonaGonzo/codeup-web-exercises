// // // 1) Make a function called returnTwo() that returns the number 2 when called
// // // ---Test this function with console.log(returnTwo())
// //
// // function returnTwo(){
// //     return 2;
// // }
// //
// // console.log(returnTwo());
// //
// // // 2) Make a function called returnName() that returns the string of your name
// // // ---Test this function with console.log(returnName())
// //
// // function returnName() {
// //     return "Jona";
// // }
// //
// // console.log(returnName());
// //
// // // 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// // // ---Test this function with console.log(addThree(5))
// //
// // function addThree(num){
// //     if (NaN){
// //         return false;
// //     }
// //     return num + 3;
// // }
// //
// // console.log(addThree(5));
// //
// // // 4) Make a function called sayString() which returns the string input passed in.
// // // ---Test this function with console.log(sayString())
// //
// // function sayString(input){
// //     if (!"string"){
// //         return false;
// //     }
// //     return "input";
// // }
// //
// // console.log(sayString())
// // // 5) Make a function called sayHowdy() which console.logs the string "Howdy!"
// // // ---Test this function by directly calling sayHowdy()
// // // ---Remember this function does not need a defined return value
// //
// // var greet = "Howdy";
// //
// // function sayHowdy(){
// //     return greet;
// // }
// //
// // console.log(sayHowdy());
//
// // ================================= WARM UP
//
// // Create a function, findAverageDogAge, that takes in an array of pet objects with age properties and returns the average age of a dog.
//
// //     const pets = [
// //     {
// //         name: 'Sparky',
// //         type: 'Fish',
// //         age: 4
// //     },
// //     {
// //         name: 'Mr. Pig',
// //         type: 'Cat',
// //         age: 4
// //     },
// //     {
// //         name: 'Bubba',
// //         type: 'Dog',
// //         age: 5
// //     },
// //     {
// //         name: 'Pickles',
// //         type: 'Dog',
// //         age: 10
// //     }
// //
// // ];
// //
// // // findAverageDogAge(pets) // returns 7.5
// //
// // function findAverageDogAge(pets){
// //     let total = 0;
// //     let dogCount = 0;
// //     pets.forEach ((pet) => {
// //         if (pet.type === 'Dog'){
// //             total += pet.age;
// //             dogCount++
// //         }
// //     });
// //     return total / dogCount
// // }
// //
// // console.log(findAverageDogAge(pets));
//
//
// // ================================= WARM UP
// //
// // Create a function, returnPetsWithNoFish, that takes in an array of pet objects and returns an array of pet objects with no pets of type 'Fish'.
//
// //     const pets = [
// //     {
// //         name: 'Sparky',
// //         type: 'Fish',
// //         age: 4
// //     },
// //     {
// //         name: 'Mr. Pig',
// //         type: 'Cat',
// //         age: 4
// //     },
// //     {
// //         name: 'Bubba',
// //         type: 'Dog',
// //         age: 5
// //     },
// //     {
// //         name: 'Beans',
// //         type: 'Dog',
// //         age: 3
// //     },
// //     {
// //         name: 'Mr. Salmon',
// //         type: 'Fish',
// //         age: 1
// //     }
// // ];
// //
// // function returnPetsWithNoFish(pets){
// //     let output = []
// //     pets.forEach((pet)=> {
// //         if (pet.type !== 'Fish'){
// //             output.push(pet)
// //         }
// //     })
// //     return output
// // }
// //
// // console.log(returnPetsWithNoFish(pets))
//
//
//
// // returnPetsWithNoFish(pets) // returns...
// //
// //     [
// //     {
// //         name: 'Mr. Pig',
// //         type: 'Cat',
// //         age: 4
// //     },
// //         {
// //             name: 'Bubba',
// //             type: 'Dog',
// //             age: 5
// //         },
// //         {
// //             name: 'Beans',
// //             type: 'Dog',
// //             age: 3
// //         }
// //     ]
// //
// // ================================= WARM UP
// //
// // Create a function, returnLongestPetName, that takes in an array of pet objects and returns a string of the longest name for a pet.
//
//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];
//
// console.log(returnLongestPetName(pets)) // returns 'Mr. Salmon'
//
// function returnLongestPetName(pet){
//     let longestName = []
//     for (let i = 0; i < pet.length; i++) {
//     if (pet[i].name.length > longestName.length){
//         longestName = pet[i].name
//     }
//     }
//     return longestName;
// }


//
// function returnLastTwoChars(input){
//     let string = '' + input
//     return string.slice(-2);
// }
// console.log(returnLastTwoChars('cat'))
//
//
//
// function returnLastCharsRevesed(input1, input2){
//     return input1.split('').reverse().slice(0, input2).join('');
// }
// console.log(returnLastCharsRevesed("mississippi", 7))

// ================================= WARM UP
// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
// iBeforeE(‘ei’) // returns ‘ie’
// iBeforeE(‘height’) // returns ‘hieght’
// iBeforeE(‘heist’) // returns ‘hiest’
// iBeforeE(‘their’) // returns ‘thier’
// iBeforeE(‘theirtheir’) // returns ‘thierthier’
// let isEI = "string"

function iBeforeE (str){
    return str.replaceAll('ei', 'ie')
}
console.log(iBeforeE('hieght'))