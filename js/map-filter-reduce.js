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

const userLang = users.filter((user) => user.languages.length >= 3);
console.log(userLang)

// 3.

const emails = users.map((user) => user.email)
console.log(emails)

// 4.
const userExperience = users.reduce((total, user ) => total + user.yearsOfExperience,0);
console.log(userExperience)
console.log(userExperience/users.length)

// 5.
const userEmails = users.map((user) => user.email);
console.log(userEmails)
const longestEmail = userEmails.reduce((longestEmail, userEmail) => userEmail.length > longestEmail.length ? userEmail : longestEmail, " ");
console.log(longestEmail)

// 6.
const userNames = users.map((user) => `${user.name}`);
const userString = userNames.reduce((str, currentName) => {
    return (str + `${currentName}, `);
},'Your instructors are: ').slice(0, -2) + `.`
console.log(userString)

// BONUS
const getLanguages = users.reduce((acc, user) => {
    acc.push(user.languages)
    return acc
}, [])
console.log(getLanguages)
