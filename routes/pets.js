const express = require('express');
const router = express.Router();
const db = require('../mydb');


/* GET barks listing. */
router.get('/', function(req, res, next) {

	sql = "select fullname, case when sex = 'f' THEN 'hona' WHEN sex = 'm' THEN 'hane' end as sex, date_birth from family where family_type_id = (select id from family_types where type = 'pets') and date_death >= '9999-12-31' ";
	db.query(sql, function(err, data, fields) {
		if (err) throw err;
		res.render('pets', {petData: data})
	})
});


/* GET barks listing. */
router.get('/bark', function(req, res, next) {
  res.render('bark', {
    data: {},
    error: {}
  });
});

// Save a bark. fetch form-data and save to db-table.
router.post('/bark', (req, res, next) => {
  var SQL="INSERT INTO barks (barkee, bark_note, barked_at) VALUES (?, ?, now() )";
  var params = [ req.body.barkee, req.body.barkNote ];
  db.query(SQL, params, (err, data, fields) => {
    if (err) throw err;
    console.log('Bark ID: ' + data.insertId);
    res.send("Skällande har sparats!<br />Id: " + data.insertId + ".<br /><a href='/pets/bark-list'>Visa alla</a>");
  });
	
});

// receive get for list barks. Fetch from db and show.
router.get('/bark-list', function(req, res, next) {
  console.log('list requested');
  var sql='SELECT id, barkee, bark_note, barked_at FROM barks';
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('bark-list', {userData: data});
  });
});

module.exports = router;
