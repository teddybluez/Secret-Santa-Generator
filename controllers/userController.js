var express = require("express");

var router = express.Router();

var user = require("../models/user.js");

router.get("/", function(req, res){
	user.all(function(data){
		var hbsObject = {
			users: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.get("/home", function(req, res){
	user.all(function(data){
		var hbsObject = {
			users: data
		};
		console.log(hbsObject);
		res.render("home", hbsObject);
	});
});

router.get("/home/:group", function(req, res){
	user.all(function(data){
		var hbsObject = {
			users: data
		};
		console.log(hbsObject);
		res.render("group", hbsObject);
	});
});

module.exports = router;