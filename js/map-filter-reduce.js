// 1.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2.

let userLang = users.filter(function (user){
   return user.languages[2]
});
console.log(userLang)

// 3.

let emails = users.map(function (user){
    return user.email
});
console.log(emails)

// 4.
let userAge = users.reduce((total, experience ) => {
   return  total + experience.yearsOfExperience
}, 0);
console.log(userAge)

// 5.
let userEmails = users.map((user) => user.email);
console.log(userEmails)
let longestEmail = userEmails.reduce((accumulator, email) => email.length > accumulator.length ? email : accumulator, " ");
console.log(longestEmail)

// 6.
let userNames = users.map((user) => `${user.name}`);
let userString = userNames.reduce((str, currentName) => {
    return (str + `${currentName}, `);
},'Your instructors are: ');
let instructorString = userString.slice(0, -2) + `.`
console.log(instructorString)

// BONUS
let getLanguages = users.reduce((arr, lang) => {
    arr.push(lang.languages)
    return arr
}, [])
console.log(getLanguages)
