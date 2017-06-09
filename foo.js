const pool = require('./lib/db.js');

pool.query('SELECT $1::int AS number', ['2'], function(err, res) {
  if(err){
    return console.error('error running query', err);
  }

  console.log('number:', res.rows[0].number); 
});



