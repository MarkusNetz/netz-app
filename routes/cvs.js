var express = require('express');
var db = require('../mydb')
var router = express.Router();


function renderCvsPage(req, res) {
	res.render('markus-cv', {title: 'Markus Netz - CV'})
}

router.get('/', renderCvsPage);

module.exports = router;
