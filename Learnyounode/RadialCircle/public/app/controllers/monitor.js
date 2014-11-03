app.controller("Monitor", function ($scope, $http) {
    
    var models = {
        readings : ['just test']
    }

    // get readings from server

    var poller = function () {
        console.log('http call started');
        $http.get('/public/api').then(function (response) {
            models.readings[0] = response.data;
        });
    }

    var intervalId = setInterval(poller, 3000);


    angular.extend($scope, {
        readings : models.readings
    })
})