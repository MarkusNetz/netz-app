var express = require('express');
var db = require('../mydb')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// Prepare response output.
	res.set('Content-Type', 'text/html'); 
	wishCar = {
		"examensBil": {
        		"title": "Ulrikas krav på ny bil.",
			"önskelista": {
				"dragkrok": "Ja",
				"drivmedel": "Bensin",
				"växellåda": "Automat"
			}
		}
	}
	sql = "select v.reg_no,vma.make,vmo.model, v.color, v.date_purchased,if(date_sold = '9999-12-31', '', date_sold) date_sold from vehicles v INNER JOIN vehicle_models vmo ON vmo.id = v.vehicle_model_id INNER JOIN vehicle_makes vma ON vmo.vehicle_make_id = vma.id"
	db.query(sql, function (err, data, fields){
		if (err) throw err;
 		//res.send(JSON.stringify(data, null, 4))
 		res.render('vehicles', { vehicleData: data })
	})

})

module.exports = router;
