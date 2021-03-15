var express = require('express');
var router = express.Router();
var db = require("../mydb");

function getTodoList(req,res,next){
        getWishSql = "SELECT id, todo, CASE WHEN performed = 'y' THEN 'checked' WHEN performed = 'n' THEN '' END AS performed FROM todos ORDER BY performed, created_at DESC"
        db.query( getWishSql, function( err, rows, fields) {
                if (rows.length !== 0 ){
                        if (err) throw err;
                        req.todos = rows;
			return next();

                }
		else{
			req.todos="";
			return next();
		}
        })
}

function renderStartPage(req, res) {
 	res.render('index', {title: 'Netz-Appen Startsida', todos: req.todos })
}

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', {title: 'Netz-Appen start!'});
});*/

router.get('/', getTodoList, renderStartPage);

module.exports = router;
