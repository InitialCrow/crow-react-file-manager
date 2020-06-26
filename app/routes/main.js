var express = require('express');
var router = express.Router();

var routes = [
	'/',
]

router.get(routes, (req, res) => {
    res.render("index.ejs",{env:process.env.TYPE})
})

module.exports = router

