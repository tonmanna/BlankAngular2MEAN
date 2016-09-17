var request   = require("request");
var expect    = require("chai").expect;

const base_url = "http://localhost:3000";
const test_url = base_url + "/";
describe("GET / index ", function() {
    it("return content 200", function(done) {
        request(test_url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
