(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {};

        person.firstName = "Jona"
        person.lastName = "Gonzalez"
    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function () {
        return `Hello from ${this.firstName} ${this.lastName}!`;
    }

    console.log(person.sayHello())

    person.middleName = "Andrew";
    console.log(person);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper){
        let isDiscount = "Wait! You get " + (shopper.amount * .12).toLocaleString('en-US', {style:'currency', currency: 'USD'}) + " off for spending more than $200 today at H.E.B.!";
        let withDiscount = "You're final bill is " + Number(shopper.amount - (shopper.amount * .12)).toLocaleString('en-US', {style:'currency', currency: 'USD'});
            console.log(`\n${shopper.name}`);
            console.log(`Your bill is ${(shopper.amount).toLocaleString('en-US', {style:'currency', currency: 'USD'})}`);
        if (shopper.amount > 200){
            console.log(isDiscount);
            console.log(withDiscount);
        }
    });

    console.log(`\n`)

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: "The Salmon of Doubt", authorFirstName: "Douglas", authorLastName: "Adams"},
        {title: "The Teachings of Don Juan: A Yaqui Way of Knowledge", authorFirstName: "Carlos", authorLastName: "Castaneda"},
        {title: "The Kindness of Strangers: Penniless Across America", authorFirstName: "Mike", authorLastName: "McIntyre"},
        {title: "The Art of War", authorFirstName: "Sun", authorLastName: "Tzu"},
        {title: "How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease", authorFirstName: "Dr. Michael ", authorLastName: "Greger, M.D."}
    ]

    console.log(books[1].title);
    console.log(books[1].authorFirstName);
    console.log(books[1].authorLastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (let i = 0; i < books.length; i += 1) {
        let author = books[i].authorFirstName + " " + books[i].authorLastName;
        console.log("Book # " + (i+1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + author);
    }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */




})();