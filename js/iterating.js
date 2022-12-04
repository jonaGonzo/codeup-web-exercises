(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    const names = ["Katie", "Adrian", "Oliver", "Natalya"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i += 1){
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name){
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    let colors = ["Green", "Red", "Orange", "Blue", "Yellow"];

   function first(arr){
       return arr[0];
   }
    console.log(first(colors))


    function second(arr){
        return arr[1];
    }
    console.log(second(colors))


    function last(arr){
        return arr[arr.length - 1];
    }
    console.log(last(colors))

    const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// !! Write a function, logNums, that takes in an array and logs each number in the array !!

    function logNums(arr){
        myNumbers.forEach(function(arr){
            console.log(arr);
        })
    }
    logNums();

// !! Write a function, returnLongString, that takes in an array of strings and returns all strings concatenated together !!

    const arrStrings = [" California ", " Texas" , " New York ", " Utah ", " Arizona "];
    function longestString(arr){
        return arr.join("");
    }
    console.log(longestString(arrStrings));

// !! Write a function, returnArrSum, that takes in an array of values and returns the sum of all number elements !!

    function returnSum(arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i += 1) {
            sum += arr[i];
        }
        return sum;
    }


})();