// fake tours model for dimbogachev@gmail.com
var toursData = [
    {id:1, name:'First tour', from: 'Anapa', to: 'Peterburg', price: 100500}
    , {id:2, name:'Second tour', from: 'Anapa', to: 'Sochi', price: 499.99}
    , {id:5, name:'From sea to sea', from: 'Kaliningrad', to: 'Vladivostok', price: 200500}
    , {id:4, name:'Warm sun', from: 'Peterburg', to: 'Anapa', price: 500}
    , {id:3, name:'Back to past', from: 'Sochi', to: 'Anapa', price: 300}
    ]
    , errorRate = 0.0001;
exports.find = function (callback) {
    if (Math.random() < errorRate) {
        // fake errors
        callback('Fake error', null)
    } else {
        callback(null, toursData)
    }
};

exports.findById = function (id, callback) {
    var result = null
        ,i = 0;
    if (Math.random() < errorRate) {
        // fake errors
        callback('Fake error', null);
    } else {
        do {
            if (toursData[i].id === parseInt(id)) {
                result = toursData[i];
            }
        } while (!result && ++i < toursData.length);
        if (result) {
            callback(null, result);
        } else {
            callback('Not found', null);
        }
    }
};

