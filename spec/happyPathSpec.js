/**
 * Created by praveen on 14/12/2016.
 */

var request = require('request');
var base_url="https://dev.mobile-api.woolworths.com.au/wow/v1/addresses?postcode=2000";
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
           statCode=response.statusCode;
           expect(statCode).toBe(200);
           done();
       });
   });
});

