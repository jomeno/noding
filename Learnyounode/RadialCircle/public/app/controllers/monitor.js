app.controller("Monitor", function ($scope, $http) {

    var models = {
        readings: {
            raw: [],
            temperature: 0,
            dewPoint: 0,
            noiseLevel: 0
        }
    }

    // get readings from server

    var poller = function () {
        console.log('http call started');
        $http.get('/public/api').then(function (response) {
            var data = response.data.split('\t')[0].split(' ');
            console.log(data)
            models.readings.raw = data;
            models.readings.temperature = parseFloat(data[7]);
            models.readings.dewPoint = parseFloat(data[8]);
            models.readings.noiseLevel = parseFloat(data[5]);
        });
    }

    var intervalId = setInterval(poller, 3000);


    angular.extend($scope, {
        readings: models.readings
    })
})