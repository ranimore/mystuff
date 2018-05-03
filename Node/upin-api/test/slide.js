var chai = require("chai");
var chaiHttp = require("chai-http");

process.env['NODE_ENV'] = 'test';

var server = require("../index.js");
var should = chai.should();
var request = require("request");
var db = require('../config/sequelize.js');

chai.use(chaiHttp);

describe("slide", function(){
  before(function(done){

  });
  this.timeout(25000);
  it("should return all slides", function(done){
    chai.request(server)
    .get("/slide")
    .end(function(err, res){
      res.should.have.status(200);
      console.log(res.body);
      done();
    });
  });
});
