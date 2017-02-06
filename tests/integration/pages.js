var request = require('supertest')
    , app = require(__dirname + '/../../app');

describe('Pages', function () {

    describe('GET /', function () {
        it('should redirect to "home"', function (done) {
            request(app)
                .get('/')
                .expect('location', '/home')
                .expect(302, done);
        })
    });

    describe('GET /home', function () {
        it('should return status code 200', function (done) {
            request(app)
                .get('/home')
                .expect(200, done);
        });

        it('should contain text "Home page"', function (done) {
            request(app)
                .get('/home')
                .expect(/Home page/, done);
        })
    });

    describe('GET /about', function () {
        it('should return status code 200', function (done) {
            request(app)
                .get('/home')
                .expect(200, done);
        });

        it('should contain text "About page"', function (done) {
            request(app)
                .get('/about')
                .expect(/About page/, done);
        })
    });

    describe('GET /html-list', function () {
        it('should return status code 200', function (done) {
            request(app)
                .get('/html-list')
                .expect(200, done);
        });

        it('should contain text "All tours page"', function (done) {
            request(app)
                .get('/html-list')
                .expect(/All tours page/, done);
        });

        it('should contain text "From sea to sea"', function (done) {
            request(app)
                .get('/html-list')
                .expect(/From sea to sea/, done);
        });
    });

    describe('GET /html-item/1', function () {
        it('should return status code 200', function (done) {
            request(app)
                .get('/html-item/1')
                .expect(200, done);
        });

        it('should contain text "First tour tour\'s page"', function (done) {
            request(app)
                .get('/html-item/1')
                .expect(/First tour tour's page/, done);
        });
    });

    describe('GET /api', function () {
        it('should return status code 200', function (done) {
            request(app)
                .get('/api')
                .expect(200, done);
        });

        it('should contain text "Please wait"', function (done) {
            request(app)
                .get('/api')
                .expect(/Please wait/, done);
        })
    });

});