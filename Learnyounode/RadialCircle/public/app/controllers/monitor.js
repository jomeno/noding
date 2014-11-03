app.controller("Monitor", function ($scope, $http) {
    
    var models = {
        readings : ['just test']
    }

    // get readings from server

    $http.get('/public/api').then(function (response) {
        console.log('http call started')
        models.readings[0] = response.data;
    });


    angular.extend($scope, {
        readings : models.readings
    })
})