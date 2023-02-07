const _ = require('lodash');
const moment = require('moment');

const users = [
    { user: 'barney', color:'black' },
    { user: 'fred', color:'green' },
    { user: 'honey', color:'blue'},
    { user: 'annete', color:'yellow'},
    { user: 'zennya', color:'white' },
  ];

const iterate = (x) => {
    return x === 'barney'
}

  const mappingUser = _.map(users, 'user');
  const iteratingUsers = _.map(mappingUser, iterate)
  console.log("🚀 ~ file: quick-notes.js:10 ~ mappingUser", mappingUser)
  console.log("🚀 ~ file: quick-notes.js:10 ~ iteratingUsers", iteratingUsers)

const currentUsers = users.map( x => x.date ='2022-10-21T14:39:44.338Z');
console.log("🚀 ~ file: quick-notes.js:21 ~ users ==> ", users)

users[0].date = moment(String(users[0].date)).utc().format("YYYY-MM-DD HH:mm Z");
console.log("🚀 ~ file: quick-notes.js:21 ~ users ==> ", users)

const randomObject = {
  department: "Financeiro",
  id: '111030201-a5s4c81-b5c7d8'
};

const values = Object.values(randomObject);
const array = [...values];
console.log("🚀 ~ file: quick-notes.js:34 ~ array ==> ", array);
