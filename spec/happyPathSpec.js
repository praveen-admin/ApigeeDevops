/**
 * Created by praveen on 14/12/2016.
 */

var request = require('request');
var base_url="http://localhost:9001/";
var statCode;
var json;

var options = {
    url: base_url,
    qs:{},
    method:'GET',
    headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache'
    }
};

describe("To validate API",function () {
   it("it should 200 OK http status code",function (done) {
       console.log(options);
       request.get(options,function (error,response,body) {
           console.log(body);
           //console.log(json.status);
           statCode=response.statusCode;
           expect(statCode).toBe(200);
           done();
       });
   });
});


//"test": "./node_modules/.bin/jasmine --forceexit"