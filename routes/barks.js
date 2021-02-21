const express = require('express');
const router = express.Router();
const db = require('../mydb');

/* GET barks listing. */
router.get('/', function(req, res, next) {
  res.render('barks', {
    data: {},
    error: {}
  });
});

// Save a bark. fetch form-data and save to db-table.
router.post('/', (req, res, next) => {
  var SQL="INSERT INTO barks (barkee, bark_note, barked_at) VALUES (?, ?, now() )";
  var params = [ req.body.barkee, req.body.barkNote ];
  db.query(SQL, params, (err, data, fields) => {
    if (err) throw err;
    console.log('Bark ID: ' + data.insertId);
    res.send("Skällande har sparats!<br />Id: " + data.insertId + ".<br /><a href='/barks/list'>Visa alla</a>");
  });
	
});

// receive get for list barks. Fetch from db and show.
router.get('/list', function(req, res, next) {
  console.log('list requested');
  var sql='SELECT id, barkee, bark_note, barked_at FROM barks';
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('bark-list', {userData: data});
  });
});

module.exports = router;
