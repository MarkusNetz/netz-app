var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// Prepare response output.
	response = {
		"title": "Familjen Netz fordonssida.",
		"bil6": {
			"färg": "Vit",
	        	"modell": "Astra K - Sports Tourer",
		        "märke": "Opel",
		        "modellÅr": "2016",
		        "regnummer": "YDS164",
		        "tillverkad": "2016",
		        "växellåda": {
		            "typ": "Manuell",
		            "växlar": 6
	        	},
		        "köptes": "2020-01-23"
		},
    		"bil5": {
			"färg": "Röd",
	        	"modell": "Astra K - Sports Tourer",
		        "märke": "Opel",
		        "köptes": "2019-08-06",
		        "såldes": "2020-01-23",
		        "modellÅr": "2016",
		        "regnummer": "NYR810",
		        "tillverkad": "2016",
		        "växellåda": {
		            "typ": "Manuell",
		            "växlar": 6
		        }
		},
		"bil4": {
                        "färg": "Blågrön",
                        "modell": "V50",
                        "märke": "Volvo",
                        "köptes": "2016-08-29",
                        "såldes": "2019-08-06",
                        "modellÅr": "2009",
                        "regnummer": "JZK141",
                        "tillverkad": "2009",
                        "växellåda": {
                            "typ": "Manuell",
                            "växlar": 5
                        }
                },
		"bil3": {
                        "färg": "Grå",
                        "modell": "Aygo",
                        "märke": "Toyota",
                        "köptes": "2015-xx-xx",
                        "såldes": "2016-xx-xx",
                        "modellÅr": "",
                        "regnummer": "",
                        "tillverkad": "2009",
                        "växellåda": {
                            "typ": "Manuell",
                            "växlar": 5
                        }
                },
		"bil2": {
                        "färg": "Grå",
                        "modell": "Astra",
                        "märke": "Opel",
                        "köptes": "2013-08-26",
                        "såldes": "2016-08-30",
                        "modellÅr": "2013",
                        "regnummer": "XDX534",
                        "tillverkad": "2013",
                        "växellåda": {
                            "typ": "Manuell",
                            "växlar": 6
                        }
                },
		"bil1": {
                        "färg": "Vit",
                        "modell": "Corsa",
                        "märke": "Opel",
                        "köptes": "2012-07-08",
			"hämtad": "2012-10-04",
                        "såldes": "2019-08-06",
                        "modellÅr": "2012",
                        "regnummer": "MWK593",
                        "tillverkad": "2012",
                        "växellåda": {
                            "typ": "Manuell",
                            "växlar": 5
                        }
                },
		"examensBil": {
        		"title": "Ulrikas krav på ny bil.",
			"önskelista": {
				"dragkrok": "Ja",
				"drivmedel": "Bensin",
				"växellåda": "Automat"
			}
		}
	}

	// Send output
	res.set('Content-Type', 'application/json'); 
	res.json(response);
});

module.exports = router;
