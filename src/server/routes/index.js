var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

var apiKey = '475233687d4252104a1a4ff3ae2965';


// get all categories
router.get('/categories', function(req, res, next) {

	request('https://api.meetup.com/2/categories?key=' + apiKey + '&sign=true&photo-host=public&page=40', function(error, response, body){
		if(!error && response.statusCode == 200){
			var parseData = JSON.parse(body);
			res.send(parseData.results);
		}
	})

});

// get all groups in a specific category (by category's id)
router.get('/categories/:id/groups', function(req, res, next) {

	var id = req.params.id;

	request('https://api.meetup.com/find/groups?key=' + apiKey + '&sign=true&photo-host=public&category=' + id + '&page=20', function(error, response, body){
		if(!error && response.statusCode == 200){
			var parseData = JSON.parse(body);
			res.send(parseData);
		}
	})

});

// get all events for a specific group
router.get('/groups/:name', function(req, res, next) {

	var name = req.params.name;

	request('https://api.meetup.com/' + name + '/events?key=' + apiKey + '&sign=true&photo-host=public&page=20', function(error, response, body){
		if(!error && response.statusCode == 200){
			var parseData = JSON.parse(body);
			res.send(parseData);
		}
	})

});

// get RSVP's for an event  
router.get('/groups/:name/events/:event_id', function(req, res, next) {

	var name = req.params.name;
	var event = req.params.event_id;

	request('https://api.meetup.com/' + name + '/events/' + event + '/rsvps?' + apiKey + '&sign=true&photo-host=public', function(error, response, body){
		if(!error && response.statusCode == 200){
			var parseData = JSON.parse(body);
			res.send(parseData);
		}
	})

});


module.exports = router;


