const express = require('express');
const router = express.Router();
const db = require('../persistence');


/* GET barks listing. */
router.get('/', function(req, res, next) {

	sql = "select name, case when sex = 'f' THEN 'hona' WHEN sex = 'm' THEN 'hane' end as sex, date_birth, pet_img from pets where date_death = '9999-12-31' ";
	db.query(sql, function(err, data) {
		if (err) throw err;
		res.render('pets', {title: 'Netz-appen - Djursidan', petData: data})
	})
});


/* GET barks listing. */
router.get('/bark', function(req, res, next) {
  res.render('bark', { title: 'Netz-appen - Skällning',
    data: {},
    error: {}
  });
});


function saveBark(req, res, next){
	console.log("Starting to save bark.")

	saveBarkSql="INSERT INTO barks (barkee, bark_note, barked_at) VALUES (?, ?, now() )"
	params = [ req.body.barkee , req.body.barkNote ]

	db.query(saveBarkSql, params, function(err, rows, fields){
		if (err) throw err; req.mydberr=err;
		console.log("Saved bark.")
		return next();
	})
}

function renderBarkSaved(req, res){
	console.log('Start at render bark-list.')
    	res.render('bark', {title: 'Netz-Appen - Skällning' });
}

// Save a bark. fetch form-data and save to db-table.
router.post('/bark', saveBark, renderBarkSaved);

// receive get for list barks. Fetch from db and show.
router.get('/bark-list', function(req, res, next) {
	if (req.query.action == "delete"){
		if (req.query.type == "bark" ){
			if (req.query.barkId){
				var delSql="DELETE FROM barks WHERE id = ?";
				db.query(delSql, req.query.barkId, function(err, data){
					if (err) throw err
					console.log('Skällning raderad.');
				});
			}
		}
	}
	
  console.log('list requested');
  var sql='SELECT id, barkee, bark_note, barked_at FROM barks';
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('bark-list', {title: 'Netz-Appen - Skällistan', userData: data});
  });
});

module.exports = router;
