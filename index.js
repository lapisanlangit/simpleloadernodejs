var cron = require('node-cron');
var job1 = require('./jobs/job1');
var job2 = require('./jobs/job2');

// setiap 1 detik
cron.schedule('*/1 * * * * *', () => {
    job1.hitungGaji()
});

//setiap 5 detik
cron.schedule('*/5 * * * * *', () => {
    job2.cetakGaji()
});

