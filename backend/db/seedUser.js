const {user, users} = require('./dummyUsers');
const User = require('../models/user');



/**
 * Generating random skills for dummy users
 * @param randomRange
 * @returns {Array}
 */
exports.mockSkills = (randomRange) => {
    const languages = ['HTML', 'CSS', 'Javascript', 'Java', 'Python', 'Ruby'];
    const skillCategory = ['Library', 'Framework', 'Language'];
    let skillsArr = [];
    let arrayLength = Math.floor(Math.random() * randomRange);
    for (let i=0; i < arrayLength; i++) {
        let skills = {
            skillName: languages[Math.floor(Math.random() * languages.length)],
            category: skillCategory[Math.floor(Math.random() * skillCategory.length)],
            active: Boolean(Math.floor(Math.random() * 2))
        };
        skillsArr.push(skills);
    }
    return skillsArr;
};


/**
 * Generate an amount of users
 * @type {function(*, *=)}
 */

const generateUsers = ((numberOfUsers, singleUser = false) => {
    let userArr = [];
    if (singleUser) {
        return userArr.push(user);
    } else {
        for (let i = 1; i < numberOfUsers; i++) {
            userArr.push(users());
        }
        return userArr;
    }
});


/**
 * Counting and Writing Users
 * Don't write no more than 8 users
 */
let countAndCreateUser = () => {
    User
        .count()
        .then( (count) => {
            console.log(`There are ${count} users in our Database`);
            if (count < 5){
                console.log('Writing dummy data to the db');
                return User
                    .create(generateUsers(5))
            }
        })
        .catch(err => console.log(err));
};

module.exports = countAndCreateUser;