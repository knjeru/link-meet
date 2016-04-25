var express = require('express');
var router = express.Router();
var http = require('http');
var rp = require('request-promise');

var apiKey = '475233687d4252104a1a4ff3ae2965';


// get all categories
router.get('/categories', function(req, res, next) {

	rp('https://api.meetup.com/2/categories?key=' + apiKey + '&sign=true&photo-host=public&page=40')
		.then(function(data){
			var parseData = JSON.parse(data);
			res.send(parseData.results);
		})
		.catch(function(error){
			return error
		})

});

// get all groups in a specific category (by category's id)
router.get('/categories/:id/groups', function(req, res, next) {

	var id = req.params.id;

	rp('https://api.meetup.com/find/groups?key=' + apiKey + '&sign=true&photo-host=public&category=' + id + '&page=20')
		.then(function(data){
			var parseData = JSON.parse(data);
			res.send(parseData);
		})
		.catch(function(error){
			return error
		})

});

// get all events for a specific group
router.get('/groups/:name', function(req, res, next) {

	var name = req.params.name;

	rp('https://api.meetup.com/' + name + '/events?key=' + apiKey + '&sign=true&photo-host=public&page=20')
		.then(function(data){
			var parseData = JSON.parse(data);
			res.send(parseData);
		})
		.catch(function(error){
			return error
		})

});

// get RSVP's for an event  
router.get('/groups/:name/events/:event_id', function(req, res, next) {

	var name = req.params.name;
	var event = req.params.event_id;

	rp('https://api.meetup.com/' + name + '/events/' + event + '/rsvps?' + apiKey + '&sign=true&photo-host=public')
		.then(function(data){
			var parseData = JSON.parse(data);
			res.send(parseData);
		})
		.catch(function(error){
			return error
		})

});


module.exports = router;


