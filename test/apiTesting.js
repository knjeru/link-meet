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

});
