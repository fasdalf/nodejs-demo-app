var express = require('express')
    , ejsLocals = require('ejs-locals')
    , app = express()
    , pages = require(__dirname + '/controllers/pages')
    , api = require(__dirname + '/controllers/api');


// configuration settings
app.engine('ejs', ejsLocals);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// set view locals
app.use(function (req, res, next) {
    app.locals.route = req.url;
    next()
});
// mount routes
app.get('/', function (req, res) { res.redirect('home') });
app.get('/home', pages.home);
app.get('/about', pages.about);
app.get('/html-list', pages.htmlList);
app.get('/html-item/:tourId', pages.htmlItem);
app.use('/api', pages.api);
app.get('/api/list', api.list);
app.get('/api/item/:tourId', api.item);

module.exports = app;