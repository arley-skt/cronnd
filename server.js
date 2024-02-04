const app = require('./src/app.js');


const PORT = 3000;

app.listen(PORT, () => {
  console.log('servidor escutando!');
});
var cron = require('node-cron');

var task = cron.schedule('* * * * *', () =>  {
  console.log('stopped task');
}, {
  scheduled: false
});

task.start();

