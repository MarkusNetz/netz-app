var express = require('express');
var db = require('../mydb')
var router = express.Router();


function getVehicles(req,res,next) {
	getVehiclesSql = "SELECT v.reg_no,vma.make,vmo.model, v.color, v.date_purchased, if(date_sold = '9999-12-31', '', date_sold) date_sold from vehicles v INNER JOIN vehicle_models vmo ON vmo.id = v.vehicle_model_id INNER JOIN vehicle_makes vma ON vmo.vehicle_make_id = vma.id"
	db.query(getVehiclesSql, function( err, rows, fields) {
		if( rows.length !== 0 ){
			if (err) throw err;
			req.vehicles = rows;
			return next();
		}

		res.render('vehicles');
	})
}

function renderVehiclesListPage(req, res) {
	res.render('vehicle-list', {title: 'Netz-Appen - Fordonslista', vehicles: req.vehicles })
}

/* GET vehicles listing page. */
router.get('/list', getVehicles, renderVehiclesListPage);


function getWishList(req,res,next){
	getWishSql = "SELECT list FROM wishlist"
	db.query( getWishSql, function( err, rows, fields) {
		if (rows.length !== 0 ){
			if (err) throw err;
			req.wishes = rows;
			return next();
		}
	})
	/*wishCar = {
		"examensBil": {
        		"title": "Ulrikas krav på ny bil.",
			"önskelista": {
				"dragkrok": "Ja",
				"drivmedel": "Bensin",
				"växellåda": "Automat"
			}
		}
	}
	req.wishes = wishCar
	next();*/
}

function renderVehiclesPage(req, res) {
	res.render('vehicles', {title: 'Netz-Appen - Fordon', wishlistCar: JSON.stringify(req.wishes) })
}

router.get('/', getWishList, renderVehiclesPage);

module.exports = router;
