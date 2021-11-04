var express = require('express');
var db = require('../mydb')
var router = express.Router();


function markusCV(req, res) {
	res.render('markus-cv', {title: 'Markus Netz - CV'})
}

function ulrikaCV(req, res) {
	res.render('ulrika-cv', {title: 'Ulrika Netz - CV'})
}

router.get('/markus', markusCV);
router.get('/ulrika', ulrikaCV);

module.exports = router;
