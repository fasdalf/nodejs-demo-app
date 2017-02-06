var request = require('supertest')
    , app = require(__dirname + '/../../app');

describe('API', function () {

    describe('GET /api/list', function () {
        it('should return status code 200', function (done) {
            request(app)
                .get('/api/list')
                .expect(200, done);
        });

        it('should contain text "name": "Second tour"', function (done) {
            request(app)
                .get('/api/list')
                .expect(/"name":"Second tour"/, done);
        })
    });

    describe('GET /api/items/2', function () {
        it('should return status code 200', function (done) {
            request(app)
                .get('/api/item/2')
                .expect(200, done);
        });

        it('should contain text "name": "Second tour"', function (done) {
            request(app)
                .get('/api/item/2')
                .expect(/"name":"Second tour"/, done);
        })
    })

});