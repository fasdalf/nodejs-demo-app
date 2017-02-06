var tours = require(__dirname + '/../models/tours');

exports.list = function (req, res) {
    tours.find(function(err, tours) {
        var result = [];
        if (err) {
            res.status(404).send(err);
        } else {
            result = tours.map(function(tour){
                return {id: tour.id, name:tour.name}
            });
            res.json(result);
        }
    });
};
exports.item = function (req, res) {
    tours.findById(req.params.tourId, function(err, tour) {
        if (err) {
            res.status(404).send(err);
        } else {
            res.json(tour);
        }
    });
};