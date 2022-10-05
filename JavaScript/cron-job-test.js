// var cron = require('node-cron');
const date = require('dayjs');

const dateNow = date().format();

console.log(dateNow);

// cron.schedule('* * * * *', () => {
//   console.log('Running a task every minute. Time =', dateNow );
// });


