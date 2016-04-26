var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app');

var should = chai.should();

chai.use(chaiHttp);

describe('API routes', function() {

  describe('Get all categories', function() {

      it('should get all Meetup Categories', function(done) {
          chai.request(server)
          .get('/categories')
          .end(function(err, res) {
              // Check response type
              res.type.should.equal('application/json');
              
              // Check status code and status message
              res.status.should.equal(200);
              res.body.status.should.equal('success');
              
              // Check data type and length
              res.body.data.should.be.a('array');
              res.body.data.length.should.equal(33);
              
              // Check data property names
              res.body.data[0].should.have.property('name');
              res.body.data[0].should.have.property('sort_name');
              res.body.data[0].should.have.property('id');
              res.body.data[0].should.have.property('shortname');
              
              // Check data property values
              res.body.data[0].name.should.equal('Arts & Culture');
              res.body.data[0].sort_name.should.equal('Arts & Culture');
              res.body.data[0].id.should.equal(1);
              res.body.data[0].shortname.should.equal('Arts');               
              
              done();
          
          });
      
      });

  });


  describe('Get groups for a category', function() {

      it('should get a list of Meetup groups for a category', function(done) {
          chai.request(server)
          .get('/categories/2/groups')
          .end(function(err, res) {
              // Check response type
              res.type.should.equal('application/json');
              
              // Check status code and status message
              res.status.should.equal(200);
              res.body.status.should.equal('success');
              
              // Check data type and length
              res.body.data.should.be.a('array');
              res.body.data.length.should.equal(20);
              
              // Check data property names
              res.body.data[0].should.have.property('id');
              res.body.data[0].should.have.property('name');
              res.body.data[0].should.have.property('urlname');
              res.body.data[0].should.have.property('city');
              res.body.data[0].should.have.property('state');
                            
              // Check data property values
              // The Meetup API geolocates your API request. This test will fail if the IP is not in Denver, CO
              res.body.data[0].id.should.equal(1189940);
              res.body.data[0].name.should.equal('Denver Founders');
              res.body.data[0].urlname.should.equal('Denver-Founders-Network');
              res.body.data[0].city.should.equal('Denver');
              res.body.data[0].state.should.equal('CO');            
              
              done();
          
          });
      
      });

  });
  
  
  describe('Get meetups for a group', function() {

      it('should get a list of meetups for a given group', function(done) {
          chai.request(server)
          .get('/groups/womenwhostartupcolorado')
          .end(function(err, res) {
              // Check response type
              res.type.should.equal('application/json');
              
              // Check status code and status message
              res.status.should.equal(200);
              res.body.status.should.equal('success');
              
              // Check data type              
              res.body.data.should.be.a('array');
              
              // Check data property names
              res.body.data[0].should.have.property('id');
              res.body.data[0].should.have.property('name');
              res.body.data[0].should.have.property('yes_rsvp_count');
              res.body.data[0].should.have.property('group');
              res.body.data[0].group.should.have.property('name');
                            
              // Check data property values
              // The Meetup API geolocates your API request. This test will fail if the IP is not in Denver, CO
              // This test will also fail as the date changes
              res.body.data[0].id.should.equal('qlmkplyvgbjc');
              res.body.data[0].name.should.equal('Basecamp Boulder, Women Who Startup Monthly Event');
              res.body.data[0].group.name.should.equal('Women Who Startup');
              
              done();
          
          });
      
      });

  });
  
  
  describe('Get rsvps for a meetup', function() {

      it('should get a list of rsvps for a given meetup', function(done) {
          chai.request(server)
          .get('/groups/womenwhostartupcolorado/events/qlmkplyvgbjc')
          .end(function(err, res) {
              // Check response type
              res.type.should.equal('application/json');
              
              // Check status code and status message
              res.status.should.equal(200);
              res.body.status.should.equal('success');
              
              // Check data type              
              res.body.data.should.be.a('array');
              
              // Check data property names
              res.body.data[0].should.have.property('name');
              res.body.data[0].should.have.property('photo');
                            
              // Check data property values
              // This test could fail as the RSVPs change
              res.body.data[0].name.should.equal('Aiko C.');
              res.body.data[0].id.should.equal(14176278);
              
              done();
          
          });
      
      });

  });



});
