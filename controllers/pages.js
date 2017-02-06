var tours = require(__dirname + '/../models/tours');

exports.home = function (req, res) {
    res.render('pages/home', {
        title: 'Home page'
        , message: 'This is the "home" action of "pages" controller'
    })
};

exports.about = function (req, res) {
    res.render('pages/about', {
        title: 'About page'
        , message: 'This is the "About" action of "pages" controller'
    })
};

exports.api = function (req, res) {
    res.render('pages/api', {
        title: 'Api test page'
        , message: 'Loading. Please wait... Is JS enabled?'
    })
};

// TODO: throw 5xx for "fake error" and 404 for "not found"

exports.htmlList = function (req, res) {
    tours.find(function(err, tours) {
        if (err) {
            res.status(404).render('pages/error', {
                title: 'Error! Sorry.'
                , message: err
            })
        } else {
            res.render('pages/htmlList', {
                title: 'All tours page'
                , tours: tours
            })
        }

    });
};

exports.htmlItem = function (req, res) {
    tours.findById(req.params.tourId, function(err, tour) {
        if (err) {
            res.status(404).render('pages/error', {
                title: 'Error! Sorry.'
                , message: err
            })
        } else {
            res.render('pages/htmlItem', {
                title: tour.name + ' tour\'s page'
                , tour: tour
            })
        }

    });
};

