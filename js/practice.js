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

// function iBeforeE (str){
//     return str.replaceAll('ei', 'ie')
// }
// console.log(iBeforeE('hieght'))


// ================================= WARM UP
// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// console.log(filterList([1,2,"a","b"])) // returns [1,2]
// console.log(filterList([1,"a","b",0,15])) // returns [1,0,15]
// console.log(filterList([1,2,"aasf","1","123",123])) // returns [1,2,123]

// let input1 = [];
//
// function filterList(input){
// let result = input1.filter("string")
//         return result;
// }

// function filterList(input){
//         return input.filter( str => typeof str !== "string")
// }

// ================================= WARM UP
//
// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.


//
// function zipArrays(first, second){
//     let output = [];
//     if (first.length ===0 ){
//         return output;
//     }
//     for (let i=0; i< first.length; i+= 1){
//         output.push(first[i]);
//         output.push(second[i]);
//     }
//     return output;
// }
//
// console.log(zipArrays([], [])) // returns []
// console.log(zipArrays([1], [2])) // returns [1, 2]
// console.log(zipArrays(['a', 'b'], ['c', 'd'])) // returns... ['a', 'c', 'b', 'd']
// console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25])) // returns...

// [
// 1,
//     'bob',
//     2,
//     null,
//     'a',
//     'sally',
//     'b',
//     25
// ]

//
// ================================= WARM UP
//
// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.

// function getUserCredentials(obj){
//     let list = []
//        for(let i=0; i<obj.length; i++){
//            list.push({username: users[i].username, password: users[i].password});
//        }
//        return list;
// }
//
//     const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]
//
// console.log(getUserCredentials(users)) // returns...

/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/


// This loop should print the numbers from 0 through 9 in the console

// for (let i = 0; i < 10; i++) {
//     console.log("The value of i is " + i);
// }

// desired output : 0, 1 ,2,  3, 4, 5, 6, 7, 8, 9


// ================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// example data...
//
// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 6},
//         {name: "High School", rating: 8}
//     ]
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 9},
//         {name: "Middle School", rating: 9},
//         {name: "High School", rating: 9}
//     ]
// }
//
// function fn(hood) {
//     let schoolRatingTotal = 0;
//     let homePrice =  Number(hood.medianHomePrice) < 300000
//     let crime = hood.crimeRate.toLowerCase() === `low`
//     hood.schools.forEach(function (school) {
//         schoolRatingTotal = schoolRatingTotal + school.rating;
//     })
//     return homePrice && crime && schoolRatingTotal >= 24;
// }
//
// console.log(fn(neighborhood1)) // returns false due to school rating
// console.log(fn(neighborhood2)) // returns false due to crime rate
// console.log(fn(neighborhood3)) // returns true
// console.log(fn(neighborhood4)) // returns false due to median home price

// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// function encodeStr(input) {
//        return input
//            .replace(/a/gi, "@")
//            .replace(/i/gi, "1")
//            .replace(/s/gi, "$")
//
// }
//
// // ‘a’ or ‘A’ becomes ‘@’
// // ‘i’ or ‘I’ becomes ‘1’
// // ‘s’ or ‘S’ becomes ‘$’
// //
// console.log(encodeStr('apple')) // returns ‘@pple’
// console.log(encodeStr('codeup')) // returns ‘codeup’
// console.log(encodeStr('SASS')) // returns ‘$@$$’
// console.log(encodeStr('bike')) // returns ‘b1ke’

// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.

// function reverseStrings(strs) {
//     for(let i=0; i<strs.length; i++){
//      strs[i].str = strs[i].str.split("").reverse().join("")
//     }
//     return strs
// }
//
//
//     const strs = [
//     {
//         id: 1,
//         str: 'hello'
//     },
//     {
//         id: 2,
//         str: 'world'
//     },
//     {
//         id: 3,
//         str: 'codeup'
//     },
//     {
//         id: 4,
//         str: 'x'
//     }
// ]
//
// console.log(reverseStrings(strs)) // returns...
    //
    // [
    // {
    //     id: 1,
    //     str: 'olleh'
    // },
    //     {
    //         id: 2,
    //         str: 'dlrow'
    //     },
    //     {
    //         id: 3,
    //         str: 'puedoc'
    //     },
    //     {
    //         id: 4,
    //         str: 'x'
    //     }
    // ]
foods = [ "apple", "orange", "plum"]

function logFoods(input){
    foods.forEach((input) => {
        console.log(`Here's a food I like: ${input} `)
    })
}
logFoods(foods)