/**
 * Created by praveen on 14/12/2016.
 */

var request = require('request');
var url="http://localhost:9001/";
var statusCode;
describe("To validate API",function () {
   it("it should 200 OK http status code",function (done) {
       request(url,function (err,response,body) {
           statusCode=response.statusCode;
           expect(statusCode).toBe(200);
           done();
       });
      
   }) ;
});