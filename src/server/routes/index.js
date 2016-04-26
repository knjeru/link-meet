var express = require('express');
var router = express.Router();
var http = require('http');
var rp = require('request-promise');

var apiKey = '475233687d4252104a1a4ff3ae2965';
var meetupApi = 'https://api.meetup.com';

// Get Meetup categories
router.get('/categories', function(req, res, next) {

  // Query the Meetup API to return all available categories
	rp(meetupApi + '/2/categories?key=' + apiKey + '&sign=true&photo-host=public&page=40')
  
  // Return the results and a success message
  .then(function(data){ res.status(200).json({ status: 'success',
                                               data: data })
  })
		
  .catch(function(error){ return error })

});

// Get groups with a specific category ID. There are currently 34 categories
router.get('/categories/:id/groups', function(req, res, next) {

  // Query the Meetup API to return the first 20 groups for a given category
	rp(meetupApi +'/find/groups?key=' + apiKey + '&sign=true&photo-host=public&category=' + req.params.id + '&page=20')
	
	.then(function(data){ res.status(200).json({ status: 'success',
                                               data: data })
  })
	
	.catch(function(error){ return error })

});

// Get events for a specific group. The group name is the `urlname` of the group
router.get('/groups/:name', function(req, res, next) {

  // Query the Meetup API to return the first 20 events for a given group name
	rp(meetupApi + '/' + req.params.name + '/events?key=' + apiKey + '&sign=true&photo-host=public&page=20')
	
	.then(function(data){ res.status(200).json({ status: 'success',
                                               data: data })
  })
  	
	.catch(function(error) { return error });

});

// Get RSVP's for a given eventID  
router.get('/groups/:name/events/:event_id', function(req, res, next) {

  // Query the Meetup API to return the RSVPs
	rp('https://api.meetup.com/' + req.params.name + '/events/' + req.params.event_id + '/rsvps?' + apiKey + '&sign=true&photo-host=public')
	
	.then(function(data){ res.status(200).json({ status: 'success',
                                               data: data })
  })
	
	.catch(function(error) { return error })

});


module.exports = router;


